<script>
  import { page } from "$app/stores";
</script>

<a href="/depends/load"> depends /load - OK </a>
<a href="/depends/load-server"> depends /load-server - OK </a>
<a href="/invalidate-url/load"> invalidate-url /load - OK </a>
<a href="/invalidate-url/load-server" style:color="red">
  invalidate-url /load-server - KO
</a>
<a href="/invalidate-all/load"> invalidate-all /load - OK </a>
<a href="/invalidate-all/load-server"> invalidate-all /load-server - OK </a>

<br />

<h1>{$page.url.pathname}</h1>

<slot />

<style>
  a {
    display: block;
  }
</style>
