export async function load({ depends, fetch }) {
  depends("load:depends-load-server");
  console.log("/depends/load-server");

  return {
    now: fetch("/api?q=depends-load-server").then((res) => res.json()),
  };
}
