<script>
// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
import { onMount } from 'svelte';

export let videoId;
export let persons = [];
export let pauseVideoTime = 1;

let currentPage;
let isPlaying = false;

const togglePlayPause = () => {
  const iframe = document.querySelector('iframe');
  if (iframe && iframe.contentWindow) {
    if (isPlaying) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo' }),
        '*'
      );
      isPlaying = false;
    } else {
      const sequence = persons[0].sequences[currentPage - 1];
      if (sequence) {
        seekVideo(sequence.start, sequence.end);
      }
      isPlaying = true;
    }
  }
};

const initializePage = () => {
  currentPage = 1;
  if (persons.length > 0) {
    goToPage(1, persons[0].sequences);
  }
};

const seekVideo = (start, end) => {
  const iframe = document.querySelector('iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'seekTo', args: [start, true] }),
      '*'
    );
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo' }),
      '*'
    );
    pauseVideoTime = end;
    isPlaying = true;
  } else {
    console.log('Iframe not yet loaded');
  }
};

const goToPage = (page, sequences) => {
  currentPage = page;
  const sequence = sequences[page - 1];
  if (sequence) {
    // console.log(sequence)
    seekVideo(sequence.start, sequence.end);
  }
};

let stopPlayTimer;

let player;

$: if (!currentPage) {
  initializePage();
}

// This code loads the IFrame Player API code asynchronously.
onMount(() => {
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    initializePlayer();
  }

  window.onYouTubeIframeAPIReady = initializePlayer;
});

function initializePlayer() {
  if (player) {
    player.destroy();
  }
  player = new YT.Player("player", {
    "width": "100%",
    "videoId": videoId,
    "events": {
      "onReady": onPlayerReady,
      "onStateChange": onPlayerStateChange
    }
  });
}

// Update the video when videoId changes
$: if (player && videoId) {
  player.cueVideoById(videoId);
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
  let time, rate, remainingTime;
  clearTimeout(stopPlayTimer);
  if (event.data == YT.PlayerState.PLAYING) {
    time = player.getCurrentTime();
    // Add .4 of a second to the time in case it's close to the current time
    // (The API kept returning ~9.7 when hitting play after stopping at 10s)
    if (time + .4 < pauseVideoTime) {
      rate = player.getPlaybackRate();
      remainingTime = (pauseVideoTime - time) / rate;
      stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
    }
  }
}

function pauseVideo() {
  player.pauseVideo();
}

</script>

<div style="width: 100%; height: 100vh;">

  {#each persons as person}
    <div class="mb-4">
      <div class="flex justify-stretch items-center space-x-4 items-center">
        <!-- <img src={person.image} alt={person.name} style="height: 60px;" /> -->
        <button
          class="w-full px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700">
          <span style="color: black;">{person.name}</span>
        </button>

        <button
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"
          on:click={() => goToPage(Math.max(currentPage - 1, 1), person.sequences)}
          disabled={currentPage === 1}
          >
          <span style="color: yellow;">⬅️</span>
        </button>
        <select
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200"
          on:change={(event) => {
            const selectedPage = parseInt(event.target.value);
            goToPage(selectedPage, person.sequences);
          }}
          >
          {#each person.sequences as _, index}
            <option value={index + 1} selected={currentPage === (index + 1)}>
              Sequence {index + 1}
            </option>
          {/each}
        </select>
        <button
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"
          on:click={() => goToPage(Math.min(currentPage + 1, person.sequences.length), person.sequences)}
          disabled={currentPage === person.sequences.length}
          >
          <span style="color: yellow;">➡️</span>
        </button>
        <button
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"
          on:click={togglePlayPause}
        >
          <span style="color: yellow;">{isPlaying ? '⏸️' : '▶️'}</span>
        </button>
      </div>
    </div>
  {/each}

  <div class="video" style="width: 100%; height: 100%;">
    <div id="player" style="width: 100%; height: 100%;"></div>
  </div>

</div>

