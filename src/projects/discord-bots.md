---
title: Discord Bots
id: discord-bots
tags: [ Node.js ]
featured: false
visible: true
section: projects
img: {
    url: "/cd/discord_header.webp",
    alt: "Discord logo banner",
}
links: [
    {site: github, url: https://github.com/maxrr/dadbot, text: View on Github }
]
teaser: I wanted a quick way of checking who was connected to my game server, and a way to automate my dad jokes.
---

I've made a few Discord Bots for utility, and for fun. One of them makes dad jokes, one of them checks whether a source server is running, and another was for moderation.

I used the 'discord.js' package to interact with the Discord API, but ran into some roadblocks along the way. This project was my first experience being rate-limited: I was writing a bot that would get server statistics from an external website about its percentile ranking as compared to other servers. The site may have had a paid API, but I was cheap, and so to get around this I had to cache the data and make sure I waited a good amount of time before querying again.

What good is caching if there's no data to be had? I also had my first experience with web scraping while working on this project. In my implementation, I naively used the 'node-fetch' package and searched by element IDs. I knew even then that my scraping was very fragile wouldn't work if the site went through any major changes. Certainly room for improvement and many things I would change if I were to do this again.

At the moment, only the dad jokes bot one is public. I'll get around to making the other ones public too, I just need to make sure they don't have anything sensitive in them.
