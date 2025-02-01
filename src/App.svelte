<script>
import VideoDashboard from './VideoDashboard.svelte';
import VideoList from './VideoList.svelte';

let selectedVideo = null;
const players = ['01-goalie','02-lavallee','03-deraspe','04-beland','05-duchesne','06-gauthier','07-dion','08-drolet','10-parent','11-chaput','12-pelletier','13-trudelle','14-bergeron','15-rochette','16-dorval','17-gauthier']

import shifts from './data/player_shifts';
// console.log(seq)

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

console.log(persons)
// const persons = [
//   { name: '01-lavallee', sequences: seq },
//   { name: 'Person 2', sequences: [{ label: 'Opening', start: 60 }, { label: 'Interview', start: 120 }] },
// ];
//
</script>

{#if selectedVideo}
  <div style="display: flex; align-items: flex-start; width: 100%;">
    <button on:click={() => isCollapsed = !isCollapsed} style="margin-right: 10px;">
      ☰
    </button>
    <div style="width: 250px; overflow-y: auto; max-height: 600px; border-right: 1px solid #ccc; display: {isCollapsed ? 'none' : 'block'};">
      <button on:click={() => selectedVideo = null} style="margin: 10px;">
        Back to Video List
      </button>
      {#each persons as person}
        <button
          on:click={() => selectedPlayer = person}
          style="display: flex; align-items: center; padding: 10px; cursor: pointer; background-color: {selectedPlayer === person ? '#f0f0f0' : 'transparent'};"
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
  <VideoList on:select={(event) => selectedVideo = event.detail} />
{/if}

<main style="margin-top: 20px;">
</main>
