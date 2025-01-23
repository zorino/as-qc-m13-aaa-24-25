<script>
  export let games = [];

  const goToDetails = (gameId) => {
    // Logic to navigate to the game details page
    window.location.href = `/game-details/${gameId}`;
  };
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Hockey Games</h1>
  <ul>
    {#each games as game}
      <li class="mb-4">
        <div class="flex justify-between items-center">
          <span class="text-lg">{game.team1} vs {game.team2}</span>
          <span class="text-lg font-semibold">{game.score1} - {game.score2}</span>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            on:click={() => goToDetails(game.id)}
          >
            View Details
          </button>
        </div>
      </li>
    {/each}
  </ul>
</div>
