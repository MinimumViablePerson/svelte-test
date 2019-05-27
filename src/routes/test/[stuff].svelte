<script context="module">
  export async function preload ({ params, query }) {
    const stuff = params.stuff
    return { stuff }
  }
</script>

<script>
  export let stuff
</script>

<p>Hey there, {stuff}!</p>
