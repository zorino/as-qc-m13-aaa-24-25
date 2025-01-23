<script>
  import VideoDashboard from '../VideoDashboard.svelte';

  const videoId = 'rmEFIatl2Hw';
  const persons = [
    { name: 'Person 1', sequences: [{ label: 'Scene 1', start: 10 }, { label: 'Scene 2', start: 30 }] },
    { name: 'Person 2', sequences: [{ label: 'Opening', start: 60 }, { label: 'Interview', start: 120 }] },
  ];
</script>

<VideoDashboard {videoId} {persons} />
