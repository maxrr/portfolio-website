import { HttpError_1, error, json } from '@sveltejs/kit';
import { getProject, getProjects } from '$lib/util/loadProjects';
import type { RequestEvent, RouteParams } from './$types';

export async function GET({ params }) {
	console.log(params.query);

    let errorCode = null;
	try {
		switch (params.query) {
			case 'featured':
				return json(await getProjects(true));
			case 'all':
				return json(await getProjects(false));
			default:
                const project = await getProject(params.query);
                if (project == null)
                    throw error((errorCode = 404), `Project with id ${params.query} not found.`);
                return json(project);
    }   
	} catch (err) {
        if (errorCode)
            throw err;

        console.error(`Error occurred on projects load; query: \"${params.query}\"`);
        console.error(err)
        throw error(500, "Error on project load");
    }
}
