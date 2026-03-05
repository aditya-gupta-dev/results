type Success<T> = { 
    data: T, 
    err: null 
};

type Failure<E> = { 
    data: null, 
    err: E
}; 

type Result<T, E = Error> = Success<T> | Failure<E>; 

export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> { 
    try {
        const res = await promise; 
        return { data: res, err: null }
    } catch(err) { 
        return { data: null, err: err as E }
    }
}

type DigestEncoding = "utf8" | "ucs2" | "utf16le" | "latin1" | "ascii" | "base64" | "base64url" | "hex";

type HashInto = { 
    format: string, 
    encoding: DigestEncoding 
}

export function hashInto(regid: string, pass: string) { 
    let defaultFormat: HashInto = { 
        format: `{}:{}`, 
        encoding: "hex"
    }; 

}