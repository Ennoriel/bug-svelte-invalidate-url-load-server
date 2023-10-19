export async function load({ fetch }) {
  console.log("/invalidate-url/load");

  return {
    now: fetch("/api?q=invalidate-url-load").then((res) => res.json()),
  };
}
