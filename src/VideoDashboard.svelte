<script>
export let videoId;
export let persons = [];

let currentPage = {};
const itemsPerPage = 5;

const getPaginatedSequences = (sequences, personId) => {
  const start = ((currentPage[personId] || 1) - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sequences.slice(start, end);
};

const totalPages = (sequences) => Math.ceil(sequences.length / itemsPerPage);

const nextPage = (personId) => {
  if ((currentPage[personId] || 1) < totalPages(persons.find(p => p.id === personId).sequences)) {
    currentPage[personId] = (currentPage[personId] || 1) + 1;
  }
};

const prevPage = (personId) => {
  if ((currentPage[personId] || 1) > 1) {
    currentPage[personId] = (currentPage[personId] || 1) - 1;
  }
};

const seekVideo = (start, end) => {

  const iframe = document.querySelector('iframe');

  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'seekTo', args: [start, true] }),
    '*'
  );

  // Autoplay the video after seeking
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func: 'playVideo' }),
    '*'
  );

  const duration = ((end-start)+3)*1000;

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
  <div class="video mb-4">
    <iframe
      width="960"
      height="480"
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
        {#each getPaginatedSequences(person.sequences, person.id) as sequence}
          <li class="mb-2">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              on:click={() => seekVideo(sequence.start, sequence.end)}
              >
              {sequence.label}
            </button>
          </li>
        {/each}
      </ul>

    </div>
  {/each}

  <div class="flex justify-center mt-4">
    <button
      class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 mr-2"
      on:click={() => prevPage(person.id)}
      disabled={(currentPage[person.id] || 1) === 1}
    >
      Previous
    </button>
    <button
      class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
      on:click={() => nextPage(person.id)}
      disabled={(currentPage[person.id] || 1) === totalPages(person.sequences)}
    >
      Next
    </button>
  </div>


</div>
