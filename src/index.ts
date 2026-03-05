import { Elysia, t } from "elysia"
import { staticPlugin } from "@elysiajs/static";
import { getAllowedAssetsEndpoints } from "./fs";
import { getResultTry } from "./result";
import { tryCatch } from "./utils";

const allowedAssets = await getAllowedAssetsEndpoints("dist");

const app = new Elysia().use(
  staticPlugin({
    assets: "dist",
    prefix: "/"
  })
);

app.onError(({ code, error, set }) => {
  console.log(error);
  if (code === 'VALIDATION') {
    set.status = 422;
    return {
      err: "invalid data recieved"
    }
  }
})

app.get("/get-results", async ({ set, headers }) => {
  const regid = headers['regid'];
  const pass = headers['pass'];

  if (!regid || !pass) {
    set.status = 422;
    return "Invalid request body";
  }

  const hash = Bun.MD5.hash(`${regid}:${pass}`, "hex");

  const { data, err } = await tryCatch(getResultTry(hash))
  
  if (err) { 
    set.status = 501; 
    return err.message
  }

  return data; 
})

app.get("assets/:filename", async ({ set, params }) => {
  if (!allowedAssets.get(params.filename)) {
    set.status = 401;
    return "Unauthorized";
  }
  set.headers["cache-control"] = "max-age=43200";
  set.headers["x-content-type-options"] = "script";

  return Bun.file(allowedAssets.get(params.filename)!);
});

app.get("/", async (_) => {
  return Bun.file("./dist/index.html");
});

app.listen(3000, (server) => {
  console.log(`Running on ${server.hostname}:${server.port}`);
})
