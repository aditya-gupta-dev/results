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