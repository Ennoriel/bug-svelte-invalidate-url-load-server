export async function load({ depends, fetch }) {
  depends("load:depends-load");
  console.log("/depends/load");

  return {
    now: fetch("/api?q=depends-load").then((res) => res.json()),
  };
}
