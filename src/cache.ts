
export class Cache<T> {
  private store: Map<string, T>;
  private static instance: Cache<any>; 

  static getCache<K>(): Cache<K> {
    if(!Cache.instance) { 
      Cache.instance = new Cache<K>();  
    } 
    return Cache.instance; 
  }

  constructor() {
    this.store = new Map<string, T>();
  }

  getValue(hash: string): T | undefined {
    const result = this.store.get(hash)
    if (result) {
      return result as T;
    }

    return undefined;
  }

  setValue(hash: string, value: T) { 
    this.store.set(hash, value); 
  } 
}
