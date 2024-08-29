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

I've made Discord Bots for utility across the years. One of them makes dad jokes, one of them checks whether a [source](https://en.wikipedia.org/wiki/Source_(game_engine)) server is running, and another was for user moderation.

I used [discord.js](https://discord.js.org/) to create all of these bots. The largest roadblock during these projects was web scraping as I had never had to even consider this before. This materialized when I realized I was being ratelimited when trying to scrape information from a website that tried to push users towards their paid API. I was cheap, and ended up having to only scrape every 30 minutes to an hour, which was good enough for the bot's purposes. This also encouraged me to cache data and was the first time I had done file I/O using Node.js.

The linked repository here points to the bot that makes dad jokes.
