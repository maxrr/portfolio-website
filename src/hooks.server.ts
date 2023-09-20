import type { Handle } from "@sveltejs/kit";
import { readdirSync, promises, type PathLike, readFileSync } from "fs";
import { fileURLToPath } from "node:url";

const path: string = fileURLToPath(new URL('./lib/assets/', import.meta.url));
const files: string[] = readdirSync(path);

export const handle: Handle = async ({ event, resolve }) => {
    // we can pass `event` because we used the SvelteKit middleware
    // i++;
    // event.locals.numVisitor = i;
    // console.log(event.url.pathname);
    // if (event.url.pathname.startsWith('/img')) {
    //     const filename = `pub_${event.url.pathname.substring(5)}`;
    //     console.log(filename);

    //     if (files.includes(filename)) {
    //         return readFileSync(filename);
    //     }
    // }
    return await resolve(event);
};