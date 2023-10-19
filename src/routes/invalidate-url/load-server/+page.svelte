<script lang="ts">
  import { invalidate } from "$app/navigation";

  export let data;
</script>

{JSON.stringify(data)}

<button
  on:click={() =>
    invalidate((url) => {
      console.log("/invalidate-url/load-server", url.pathname + url.search);
      return url.pathname + url.search === "/api?q=invalidate-url-load-server";
    })}
>
  invalider
</button>
