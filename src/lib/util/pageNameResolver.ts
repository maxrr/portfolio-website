// Cache our values for quicker response
let givens: Record<string, string> = {};

/**
 * Sets a page name that cannot be reasonably inferred from the given URL
 * @param url The url to associate with the page `name`
 * @param name The page name to associate with `url`
 * @returns True if the `url` already had an association that was overriden, otherwise false
 */
export function setPageName(url: string, name: string): boolean {
    // !! does a truthy/falsy conversion (TIL)
    let was = !!givens[url];

    // Debug
    // console.log(`Setting givens[${url}] = '${name}'`)

    givens[url] = name;
    return was;
}

/**
 * Gets a page name, inferring from `url` if no value is given
 * @param url The url to fetch the name of
 * @returns The name (retrieved or inferred) associated with `url`
 */
export function getPageName(url: string): string {
    let title;

    // If a page has already told us what its name should be, then we don't need to do much of anything
    if (givens[url]) {
        title = givens[url];
    }
    else {
        // Otherwise, just take our best guess
        let inferredTitle = url.slice(url.lastIndexOf('/') + 1).toLocaleLowerCase();
        title = inferredTitle.charAt(0).toLocaleUpperCase() + inferredTitle.slice(1);

        // Cache it for future reference
        // console.log(`Setting givens[${url}] to inferred = '${title}'`);
        setPageName(url, title);
    }

    return title;
}

/**
 * Gets a page title (page name with fluff to make it look nicer)
 * @param url The page to calculate the title of
 * @returns The title of the page associated with `url`
 */
export function getPageTitle(url: string): string {
    return getPageName(url) + ' • rountree.me';
}