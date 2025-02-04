<script>
import videos from './data/games.json';

export let onSelectVideo;


function selectVideo(video) {
  onSelectVideo(video);
}
</script>


<h1 class="centered"><img src="./images/teams/as.png"/></h1>
<h1 class="centered">M13 AAA</h1>
<h2 class="centered">saison 2024-2025</h2>
<!-- <h2>games annotées</h2> -->
<div class="video-list centered">
  {#each videos as video}
    <div class="video-card" on:click={() => selectVideo(video)}>
      <h3>{video.title}</h3>
      <p>{video.date}</p>
      <p>{video.arena}</p>
    </div>
  {/each}
</div>

<style>
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: line;
  }
  .video-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
  }
  .video-card {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    /* flex: 1 1 calc(33.33% - 20px); */
    box-sizing: border-box;
  }
</style>
