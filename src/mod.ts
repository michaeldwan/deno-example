import { serve } from "https://deno.land/std@v0.3.2/http/server.ts";

const { PORT = "8080" } = Deno.env();

console.log("listening on", PORT);

(async () => {
  for await (const req of serve(`:${PORT}`)) {
    const body = new TextEncoder().encode(`Hello!\nThe current time is ${new Date()}`);
    req.respond({ body });
    console.log(`${req.method} ${req.url}`)
  }
})();
