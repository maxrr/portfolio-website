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

I've made a few Discord Bots for utility, and for fun. One of them makes dad jokes, one of them checks whether a source server is running, and another was for user moderation.

I used [discord.js](https://discord.js.org/) as the base of all of my bots, but ran into some roadblocks along the way, namely that I would get ratelimited when trying to scrape information from a website (that only offered a paid API). I was cheap, and ended up having to only scrape every 30 minutes to an hour, which was good enough for me.

At the moment, only the dad jokes bot is public. I'll get around to marking the other repositories public too.
