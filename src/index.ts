import { Elysia } from "elysia"
import { loadTemplates } from "./template";
import { tryCatch } from "./utils";

const app = new Elysia(); 

app.get("/", async () => {
  // bug fix: the templates get load later in the callback...
  const { data, err } = await tryCatch(loadTemplates("templates/")); 
  if(err) { 
    return "failed "+err; 
  } else { 
    return data; 
  }
})

app.listen(3000, (server) => { 
  console.log(`Running on port: ${server.port}`);  
})
