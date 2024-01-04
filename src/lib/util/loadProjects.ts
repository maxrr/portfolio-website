import type { Project } from '$lib/types';

// let projects: Project[] = [];
// let projectsLastCache: number = 0;
// const cacheValidFor = 5 * 60; // 5 minutes

/**
 * Retrieves all projects from /src/projects, returns all project metadata in the form of an array of `Project` elements
 * @param onlyFeatured Only return projects that are marked 'featured'
 */
export async function getProjects(onlyFeatured: boolean = false, showHidden: boolean = false): Promise<Project[]> {
    // TODO: Uncomment caching lines if necessary - don't think it is right now
    // Return cached values if they're still valid
    // if (new Date().getTime() <= projectsLastCache + cacheValidFor)
    //     return projects;

    let projects: Project[] = [];
    const paths = import.meta.glob('/src/projects/*.md', { eager: true });

    // Find all files in /src/projects and return them if they're visible
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Project, 'slug'>;
            const project = { ...metadata, slug } satisfies Project;
            (showHidden || project.visible) && (!onlyFeatured || project.featured) && projects.push(project);
        }
    }

    // (perform sorting here if necessary)

    return projects
}

/**
 * Retrieves a specific project from /src/projects, returns an object with `content` and `metadata`
 * @param query the project's filename to look up (*should* be same as its `id`)
 */
export async function getProject(query: string): Promise<{ content: any, meta: Project } | null> {
    try {
        const project = await import(`../../projects/${query}.md`);

        console.log(project);
        
        return {
            content: project.default,
            meta: project.metadata,
        }
    } catch (err) {
        console.error(`Project with id ${query} not found`);
        console.error(err)
        return null;
    }
}