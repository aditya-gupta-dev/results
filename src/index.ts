import { Elysia } from "elysia"
import { getTemplate } from "./template";
import { tryCatch } from "./utils";

const app = new Elysia(); 

const indexTemplate = getTemplate("index"); 

app.post("/", () => {
  return "Posted"
})

app.get("/", async (_) => {
  return "hello"
})

app.listen(3000, (server) => { 
  console.log(`Running on port: ${server.port}`);  
})
