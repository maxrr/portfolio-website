let givens: Record<string, string> = {};

export function setPageName(url: string, name: string): boolean {
    // !! does a truthy/falsy conversion
    let was = !!givens[url];
    givens[url] = name;
    return was;
}

export function getPageName(url: string): string {
    let title;

    // If a page has already told us what its name should be, then just return it
    if (givens[url])
        title = givens[url];
    else {
        // Otherwise, just take our best guess
        let inferredTitle = url.slice(url.lastIndexOf('/') + 1).toLocaleLowerCase();
        title = inferredTitle.charAt(0).toLocaleUpperCase() + inferredTitle.slice(1);

        console.log(url);

        // Cache it for future reference
        givens[url] = title;
    }

    // return 'rountree.me • ' + title;
    return title + ' • rountree.me';
}