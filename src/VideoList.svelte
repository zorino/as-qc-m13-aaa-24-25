<script>
  const videos = [
    { id: 'Q_FNGS4liw0', title: 'Video 1', description: 'Description for Video 1' },
    { id: 'A_BCD3efgh1', title: 'Video 2', description: 'Description for Video 2' },
    // Add more videos as needed
  ];

  function selectVideo(video) {
    const event = new CustomEvent('select', { detail: video });
    dispatchEvent(event);
  }
</script>

<div class="video-list">
  {#each videos as video}
    <div class="video-card" on:click={() => selectVideo(video)}>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  {/each}
</div>

<style>
  .video-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .video-card {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    width: 200px;
  }
</style>
