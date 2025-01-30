<script>
import { onMount } from 'svelte';

export let videoId = '';
export let persons = [];
export let pauseVideoTime = 1;

let currentPage;
let isPlaying = false;

const togglePlayPause = () => {
  const iframe = document.querySelector('iframe');
  if (iframe && iframe.contentWindow) {
    const sequence = persons[0].sequences[currentPage - 1];
    if (sequence) {
      if (isPlaying) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo' }),
          '*'
        );
      } else {
        seekVideo(sequence.start, sequence.end);
      }
      isPlaying = !isPlaying;
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
  } else {
    console.error('Iframe not loaded');
  }
};

const goToPage = (page, sequences) => {
  currentPage = page;
  const sequence = sequences[page - 1];
  if (sequence) {
    seekVideo(sequence.start, sequence.end);
  }
};

onMount(() => {
  initializePage();
  var stopPlayTimer;

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
    if (videoId) {
      player = new YT.Player("player", {
        // "height": "100%",
        "width": "100%",
        "videoId": videoId,
        "events": {
          "onReady": onPlayerReady,
          "onStateChange": onPlayerStateChange
        }
      });
    } else {
      console.error('Video ID is not defined');
    }
  }

  // The API will call this function when the video player is ready.
  // This automatically starts the video playback when the player is loaded.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  function onPlayerStateChange(event) {
    var time, rate, remainingTime;
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
});

</script>

<div style="width: 100%; height: 500px;">

  {#each persons as person}
    <div class="mb-4">
      <div class="flex justify-stretch items-center space-x-4 mt-4 items-center">
          <img src={person.image} alt={person.name}  style="height: 60px;" />
        <button
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"
          on:click={() => goToPage(Math.max(currentPage - 1, 1), person.sequences)}
          disabled={currentPage === 1}
          >
          Previous
        </button>
        <select
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200"
          on:change={(event) => goToPage(parseInt(event.target.value), person.sequences)}
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
          Next
        </button>
        <button
          class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"
          on:click={togglePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  {/each}

  <div class="video" style="width: 100%; height: 100%;">
    <div id="player" style="width: 100%; height: 100%;"/>
  </div>

</div>

