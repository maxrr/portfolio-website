// TODO: Should optimize these into .webp or other more web-friendly format
import site_header from '$lib/assets/pub/site_header.png';
import discord_header from '$lib/assets/pub/discord_header.png';

// Associate certain URLs with stored images
// TODO: Transform this process into something procedural, where end user can request the file with just a path
const local_img_match: Record<string, string> = {
    '/site_header.png': site_header,
    '/discord_header.png': discord_header,
};
export { local_img_match };