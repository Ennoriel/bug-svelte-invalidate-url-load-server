<script lang="ts">
  import { invalidateAll } from "$app/navigation";

  export let data;
</script>

{JSON.stringify(data)}

<button on:click={invalidateAll}> invalider </button>
