import { Elysia } from "elysia"
import { staticPlugin } from "@elysiajs/static";
import { getAllowedAssetsEndpoints } from "./fs";

const allowedAssets = await getAllowedAssetsEndpoints("dist"); 

const app = new Elysia().use(
  staticPlugin({
    assets: "dist",
    prefix: "/"
  })
);

app.get("assets/:filename", async ({ set, params }) => {  
  if(!allowedAssets.get(params.filename)) { 
    set.status = 401; 
    // set.headers["cache-control"] = 
    return "Unauthorized"; 
  }

  return Bun.file(allowedAssets.get(params.filename)!); 
}); 

app.get("/", async (_) => {
  return Bun.file("./dist/index.html"); 
})

app.listen(3000, (server) => {
  console.log(`Running on port: ${server.port}`);
})
