import { tryCatch } from "./utils";

const templateDir: string = "templates"; 

export async function getTemplate(name: string): Promise<string | null> { 
  const file = Bun.file(`${templateDir}/${name}.html`); 

  const { data, err } = await tryCatch(file.text()); 
  if (err) { 
    console.error("template error: ", err, "name: ", name);
    return null; 
  } 

  return data; 
}

