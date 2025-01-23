<script>
  import HockeyGames from './HockeyGames.svelte';

  // Example data for hockey games
  let games = [
    { id: 1, team1: 'Team A', team2: 'Team B', score1: 3, score2: 2 },
    { id: 2, team1: 'Team C', team2: 'Team D', score1: 1, score2: 4 },
    // Add more games as needed
  ];
</script>

<div class="container mx-auto p-4">
  <HockeyGames {games} />
</div>
