import { default as loadProjects } from "$lib/server/loadProjects.js";
import type { Project } from "$lib/server/loadProjects.js";
import { error } from '@sveltejs/kit';
import { GITHUB_API_TOKEN } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

// export async function load(): Promise<{ projects: Project[], streamed: { githubLastUpdated: Promise<Response> } }> {
export async function load(): Promise<LayoutServerLoad> {
    let projects: Project[];

    try {
        projects = await loadProjects();
        // console.log(elem);
    } catch (err) {
        console.error("Error when loading project data");
        console.error(err);
        throw error(500, "Error when loading project data");
    }

    // let githubLastUpdated = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let githubLastUpdated = fetch("https://api.github.com/maxrr/hazard-addons", {
        headers: {
            "Authorization": "Bearer " + GITHUB_API_TOKEN,
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
        method: "GET",
    });

    return {
        // @ts-ignore
        // Again, typescript really hates me
        projects: projects,
        streamed: {
            githubLastUpdated: new Promise(async resolve => {
                let glu = await githubLastUpdated;
                resolve((glu).json())
            }),
        }
    };
};