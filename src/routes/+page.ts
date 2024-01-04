import type { Project } from "$lib/types.js";
import { error } from "@sveltejs/kit";

// https://joyofcode.xyz/sveltekit-markdown-blog#posts-api-endpoint
export async function load({ fetch }) {
    try {
        const res = await fetch("/api/projects/featured");
        const projects: Project[] = await res.json();
        return {
            projects
        }
    } catch (err) {
        console.error("Error when loading project data");
        console.error(err);
        throw error(500, "Error while loading project data");
    }
}