<script>
  import videos from '../data/games.json';


  function selectVideo(video) {
    onSelectVideo(video);
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
