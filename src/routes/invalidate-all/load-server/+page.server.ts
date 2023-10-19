export async function load({ depends, fetch }) {
  console.log("/invalidate-all/load-server");

  return {
    now: fetch("/api?q=depends-load-server").then((res) => res.json()),
  };
}
