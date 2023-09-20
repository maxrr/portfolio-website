import { default as loadProjects } from "$lib/server/loadProjects.js";
import type { Project } from "$lib/server/loadProjects.js";
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export async function load(): Promise<PageServerLoad> {
    try {
        let elem: Project[] = await loadProjects();
        // console.log(elem);
        return {
            projects: elem,
        };
    } catch (err) {
        console.error("Error when loading projects");
        console.error(err);
        throw error(500, "Error when loading projects"); ``
    }
};