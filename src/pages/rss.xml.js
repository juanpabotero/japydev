import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const notes = await getCollection('notes');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: notes.map((note) => ({
			...note.data,
			link: `/notes/${note.slug}/`,
		})),
	});
}
