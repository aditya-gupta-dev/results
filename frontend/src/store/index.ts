import { writable } from "svelte/store";

export const studentData = writable<{regid?: string, pass?: string}>({});
export const isLoggedIn = writable<boolean>(false);