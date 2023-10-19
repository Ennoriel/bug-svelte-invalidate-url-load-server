import { json } from "@sveltejs/kit";

export function GET() {
  console.log("!!!GET");
  return json(Date.now());
}
