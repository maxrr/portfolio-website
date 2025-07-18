import { GITHUB_API_TOKEN } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export async function load(): Promise<LayoutServerLoad> {
	// Find out the last time the repository for this project (maxrr/portfolio-website) was committed to
	let githubLastUpdated = fetch(
		'https://api.github.com/repos/maxrr/portfolio-website/commits/main',
		{
			headers: {
				Authorization: 'Bearer ' + GITHUB_API_TOKEN,
				Accept: 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28'
			},
			method: 'GET'
		}
	);

	return {
		// @ts-expect-error TODO: Resolve this
		streamed: {
			githubLastUpdated: new Promise(async (resolve, reject) => {
				let glu = await githubLastUpdated;
				try {
					resolve(glu.json());
				} catch (err) {
					console.error('Error loading GitHub commits');
					console.error(err);
					reject('Error loading GitHub commits');
				}
			})
		}
	};
}
