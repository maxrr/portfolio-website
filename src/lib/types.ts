type Link = {
    site: string,
    url: string,
    text: string,
}

export type Project = {
    title: string,
    id: string,
    slug: string,
    tags: string[],
    featured: boolean,
    visible: boolean,
    img: {
        url: string,
        alt: string,
    },
    links: [Link],
    teaser: string,
    description: string, // FIXME: (temporary)
}