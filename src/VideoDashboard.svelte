<script>
export let videoId;
export let persons = [];
export let pauseVideoTime = 1;

let currentPage = 1;

const seekVideo = (start, end) => {
  const iframe = document.querySelector('iframe');
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'seekTo', args: [start, true] }),
    '*'
  );
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'playVideo' }),
    '*'
  );
  pauseVideoTime = end;

};

const goToPage = (page, sequences) => {
  currentPage = page;
  const sequence = sequences[page - 1];
  if (sequence) {
    seekVideo(sequence.start, sequence.end);
  }
};

(function() {

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
    player = new YT.Player("player", {
      "height": "100%",
      "width": "100%",
      "videoId": videoId,
      "events": {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    });
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
})();


</script>

<div class="container mx-auto p-0">
  <!-- <h1 class="text-2xl font-bold mb-4">Video Dashboard</h1> -->

  {#each persons as person}
    <div class="mb-4">
      <!-- <h2 class="text-xl font-semibold">{person.name}</h2> -->

      <!-- Display all sequences as pagination -->
      <div class="flex justify-center mt-4 flex-wrap">
        {#each person.sequences as _, index}
          <button
            class="px-4 py-2 m-1 bg-gray-300 rounded {currentPage === (index + 1) ? 'bg-blue-500 text-white' : 'hover:bg-gray-400 text-gray-700'}"
            on:click={() => goToPage(index + 1, person.sequences)}
            >
            {index + 1}
          </button>
        {/each}
      </div>
    </div>
  {/each}

  <div class="video mb-4" style="width: 100%; height: calc(100vh - 100px);">
    <div id="player"/>
  </div>

</div>
