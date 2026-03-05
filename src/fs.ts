import { StudentResult } from "./models";

export async function getAllowedAssetsEndpoints(serveDir: string, ignore?: string[]): Promise<Map<string, string>> {     
    const assets = new Map<string, string>(); 
    
    (await Array.fromAsync(new Bun.Glob(`${serveDir}/**`).scan()))
    .forEach((file) => {         
        const filename = file.slice(file.lastIndexOf('/') + 1); 
        if(ignore && ignore.includes(filename)) { 
            return; 
        }
        assets.set(filename, file);  
    })

    return assets; 
}

export async function readStudentResultTry(hash: string): Promise<StudentResult> {
  const file = Bun.file(`db/${hash}`);
  const exists = await file.exists();

  if (!exists) {
    throw new Error("no such result record"); 
  }

  const result = (await file.json()) as StudentResult;

  return result;
}
