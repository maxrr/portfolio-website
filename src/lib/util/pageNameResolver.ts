let givens: Record<string, string> = {};
// console.log(`Givens cleared`);

export function setPageName(url: string, name: string): boolean {
    // !! does a truthy/falsy conversion
    let was = !!givens[url];
    // console.log(`Setting givens[${url}] = '${name}'`)
    givens[url] = name;
    return was;
}

export function getPageName(url: string): string {
    let title;

    // If a page has already told us what its name should be, then just return it
    if (givens[url]) {
        // console.log(`Found givens[${url}] = '${givens[url]}'`);
        title = givens[url];
    }
    else {
        // Otherwise, just take our best guess
        let inferredTitle = url.slice(url.lastIndexOf('/') + 1).toLocaleLowerCase();
        title = inferredTitle.charAt(0).toLocaleUpperCase() + inferredTitle.slice(1);

        // console.log(url);

        // Cache it for future reference
        // console.log(`Setting givens[${url}] to inferred = '${title}'`);
        setPageName(url, title);
    }

    // return 'rountree.me • ' + title;
    return title;
}

export function getPageTitle(url: string): string {
    return getPageName(url) + ' • rountree.me';
}