import { Cache } from "./cache";
import { readStudentResultTry } from "./fs";
import { StudentResult } from "./models";
import { tryCatch } from "./utils";

export async function getResultTry(hash: string): Promise<StudentResult | null> {
  const value = Cache.getCache<StudentResult>().getValue(hash)
  if (value) {
    return value;
  }

  let { data, err } = await tryCatch(readStudentResultTry(hash))
  if (err) { 
    throw err; 
  }

  return data; 
}