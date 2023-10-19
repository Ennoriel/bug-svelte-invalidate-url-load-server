export async function load({ depends, fetch }) {
  console.log("/invalidate-all/load");

  return {
    now: fetch("/api?q=invalidate-all-load").then((res) => res.json()),
  };
}
