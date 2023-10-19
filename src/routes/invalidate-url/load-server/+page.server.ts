export async function load({ fetch }) {
  console.log("/invalidate-url/load-server");

  return {
    now: fetch("/api?q=invalidate-url-load-server").then((res) => res.json()),
  };
}
