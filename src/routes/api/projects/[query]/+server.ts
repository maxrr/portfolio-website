import { error, json } from '@sveltejs/kit';
import { getProject, getProjects } from '$lib/util/loadProjects';

export async function GET({ params }) {
	// console.log(params.query);

    let errorCode = null;
	try {
		switch (params.query) {
			case 'featured':
				return json(await getProjects(true));
			case 'all':
				return json(await getProjects(false));
			default:
                const project = await getProject(params.query);
                // console.log(project);
                if (project == null)
                    error((errorCode = 404), `Project with id ${params.query} not found.`);
                return json(project);
    }   
	} catch (err) {
        if (errorCode)
            throw err;

        console.error(`Error occurred on projects load; query: \"${params.query}\"`);
        console.error(err)
        error(500, "Error on project load");
    }
}
