<script>
import VideoDashboard from './VideoDashboard.svelte';
import VideoList from './VideoList.svelte';

let selectedVideo = null;
const players = ['01-goalie','02-lavallee','03-deraspe','04-beland','05-duchesne','06-gauthier','07-dion','08-drolet','10-parent','11-chaput','12-pelletier','13-trudelle','14-bergeron','15-rochette','16-dorval','17-gauthier']

import gameData from './data/game.json';

let shifts;
import(gameData.shifts).then(module => {
  shifts = module.default;
});

let selectedPlayer = null;
let isCollapsed = false;
let persons = [];

players.forEach((e, i) => {
  persons.push({
    name: shifts[i]['name'],
    sequences: shifts[i]['shifts'],
    image: `./images/players/${e}.webp`
  });
});

$: if (persons.length > 0 && !selectedPlayer) {
  selectedPlayer = persons[0];
}


</script>

{#if selectedVideo}
  <div style="display: flex; align-items: flex-start; width: 100%;">
    <button on:click={() => isCollapsed = !isCollapsed} style="margin-right: 10px;">
      ☰
    </button>
    <div style="width: 250px; overflow-y: auto; height: 100vh; border-right: 1px solid #ccc; display: {isCollapsed ? 'none' : 'block'};">
      <button on:click={() => selectedVideo = null} style="margin: 10px;">
        Back to Games
      </button>
      {#each persons as person}
        <button
          on:click={() => selectedPlayer = person}
          style="display: flex; align-items: center; padding: 10px; cursor: pointer; background-color: {selectedPlayer === person ? '#ffffe0' : 'transparent'}; width: 100%;"
          on:mousedown={() => event.currentTarget.style.backgroundColor = '#ffff00'}
          on:mouseup={() => event.currentTarget.style.backgroundColor = selectedPlayer === person ? '#ffffe0' : 'transparent'}
          on:mouseleave={() => event.currentTarget.style.backgroundColor = selectedPlayer === person ? '#ffffe0' : 'transparent'}
        >
          <img src={person.image} alt={person.name} width="auto" height="40" style="margin-right: 10px;" />
          <span>{person.name}</span>
        </button>
      {/each}
    </div>

    {#if selectedPlayer}
      <VideoDashboard videoId={selectedVideo.id} persons={[selectedPlayer]} />
    {/if}
  </div>
{:else}
  <VideoList onSelectVideo={(video) => selectedVideo = video} />
{/if}

<main style="margin-top: 20px;">
</main>
