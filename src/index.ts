import { Elysia } from "elysia"

const app = new Elysia(); 


app.post("/", () => {
  return "Posted"
})

app.get("/", async (_) => {
  return "hello"
})

app.listen(3000, (server) => { 
  console.log(`Running on port: ${server.port}`);  
})
