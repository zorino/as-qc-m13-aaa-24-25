<script>
export let videoId;
export let persons = [];

const seekVideo = (time, duration) => {
  const iframe = document.querySelector('iframe');
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'seekTo', args: [time, true] }),
    '*'
  );

  // Autoplay the video after seeking
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'playVideo' }),
    '*'
  );

  // Stop the video after 60 seconds
  setTimeout(() => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'pauseVideo' }),
      '*'
    );
  }, duration);
};
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Video Dashboard</h1>
  <div class="mb-4">
    <a href="/hockey-games" class="text-blue-500 hover:underline">Go to Hockey Games</a>
  </div>
  <div class="video mb-4">
    <iframe
      width="50%"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
  {#each persons as person}
    <div class="mb-4">
      <h2 class="text-xl font-semibold">{person.name}</h2>
      <ul>
        {#each person.sequences as sequence}
          <li class="mb-2">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              on:click={() => seekVideo(sequence.start, 6000)}
              >
              {sequence.label}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
