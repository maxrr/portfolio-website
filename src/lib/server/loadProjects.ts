import fs from 'node:fs/promises';
import { error } from '@sveltejs/kit';
import { fileURLToPath } from "node:url";

export type Project = {
    title: string,
    id: string,
    tags?: string[],
    featured: boolean,
    description: string,
    img?: {
        url: string,
        alt: string,
    },
    links?: [
        {
            site: string,
            url: string,
            text: string,
        }
    ]
}

export default async function load(): Promise<Project[]> {
    try {
        const path = fileURLToPath(new URL('../projects.json', import.meta.url));
        let fileContents = await fs.readFile(path, "utf-8");
        return Promise.resolve(JSON.parse(fileContents).projects);
    } catch (err) {
        console.error(err);
        return Promise.reject("Error while reading file");
    }
}