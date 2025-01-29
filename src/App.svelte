<script>
import { onMount } from 'svelte';
import VideoDashboard from './VideoDashboard.svelte';

const videoId = 'Q_FNGS4liw0';
const players = ['01-goalie','02-lavallee','03-deraspe','04-beland','05-duchesne','06-gauthier','07-dion','08-drolet','10-parent','11-chaput','12-pelletier','13-trudelle','14-bergeron','15-rochette','16-dorval','17-gauthier']

import shifts from './data/player_shifts';
// console.log(seq)

let selectedPlayer = null;
let persons = [];

players.forEach((e, i) => {
  persons.push({
    name: shifts[i]['name'],
    sequences: shifts[i]['shifts'],
    image: `/images/players/${e}.png`
  });
});

onMount(() => {
  if (persons.length > 0) {
    selectedPlayer = persons[0];
  }
});

console.log(persons)
// const persons = [
//   { name: '01-lavallee', sequences: seq },
//   { name: 'Person 2', sequences: [{ label: 'Opening', start: 60 }, { label: 'Interview', start: 120 }] },
// ];
//
</script>

<div style="display: flex; align-items: flex-start;">
  <select bind:value={selectedPlayer}>
    {#each persons as person}
      <option value={person}>
        <img src={person.image} alt={person.name} width="20" height="20" />
        {person.name}
      </option>
    {/each}
  </select>

  {#if selectedPlayer}
    <VideoDashboard {videoId} persons={[selectedPlayer]} />
  {/if}
</div>

<main style="margin-top: 20px;">
  {#if selectedPlayer}
    <VideoDashboard {videoId} persons={[selectedPlayer]} />
  {/if}
</main>
