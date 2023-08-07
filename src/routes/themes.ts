import { text } from "@sveltejs/kit";

interface Theme {
    name: string,
    colors: {
        text: string,
        subtext: string,
        background: string,
        link: string,
        linkVisited: string,
        linkHover: string,
        linkActive:string,
    },
}

interface ThemeHolder {
    [key: string]: Theme
}

export const themes: ThemeHolder = {
    'dark': {
        name: 'dark',
        colors: {
            text: '#abb3d6',
            subtext: '#8b90a9',
            background: '#222133',
            link: '#abb3d6',
            linkVisited: '#8088a9',
            linkHover: '#615eab',
            linkActive: '#b1b8d9',
        }
    },
    'light': {
        name: 'light',
        colors: {
            text: '#abb3d6',
            subtext: '#8b90a9',
            background: '#222133',
            link: '#abb3d6',
            linkVisited: '#8088a9',
            linkHover: '#615eab',
            linkActive: '#b1b8d9',
        }
    }
}