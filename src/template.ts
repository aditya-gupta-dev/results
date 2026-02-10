import { readdir } from "fs/promises"; 
import { tryCatch } from "./utils";


export type HtmlTemplate = {
  name: string, 
  html: string 
} 

export async function loadTemplates(templateDir: string): Promise<Array<HtmlTemplate>> { 
    const { data, err } = await tryCatch(readdir(templateDir)); 
    if(err) {
        throw err; 
    }
    
    const templates: Array<HtmlTemplate> = []; 
    data.filter((d) => d.endsWith(".html")).forEach((filename) => {
        Bun.file(`${templateDir}/${filename}`).text().then((res) => { 
            templates.push({ 
                html: res, 
                name: filename.split(".")[0]
            })            
        })
    })    
    return templates; 
}