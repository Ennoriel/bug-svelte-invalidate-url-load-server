<script lang="ts">
  import { invalidate } from "$app/navigation";

  export let data;
</script>

{JSON.stringify(data)}

<button
  on:click={() =>
    invalidate((url) => {
      console.log("/depends/load", url.href);
      return url.href === "load:depends-load";
    })}
>
  invalider
</button>
