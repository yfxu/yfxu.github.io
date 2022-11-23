---
title: "osulist is Dead-ish"
date: 2022-11-22
draft: false
location: Tokyo, Japan
---

I've just destroyed the DigitalOcean droplet that served [osulist.com](https://osulist.com) for two years. It's not a particularly emotional event or anything, but actually making the decision to bring the site offline has given me the opportunity to reflect in ways I otherwise would not have.

In this post, I want to talk about why I decommissioned osulist, and what I learned throughout the app's lifetime--from inception until end.

## Why I shut it down

TL;DR:
* No one uses it
* I don't feel like maintaining it
* I don't want to pay for the server

![Network graph for MongoDB database](/imgs/mongodb-network.png)

The image above shows osulist's database network graph from Nov 2021 to Nov 2022. Non-flat sections of the graph represent traffic for almost any of the website's pages---this is because I haven't implemented any type of caching for fetched database results, so viewing any data at all would require a trip to the MongoDB server. And so, you can see that the site was really not getting used that much.

Unfortunately, non-existent traffic doesn't necessarily translate into non-existent server costs. I was paying on average $6 CAD per month to run the server on a single DigitalOcean droplet. While this is pretty much the cheapest VPS option available for most people, I'm still a student with a *student's paycheck* that's for the most part negative. Additionally, I'm trying to take back control of my subscription finances. Spotify, Amazon Prime, and another streaming service all stack up to nearly $20 CAD per month, which still isn't *particularly* expensive, but my student discount periods are about to run out, so I'd like to lighten the blow a little.

So why did the site not get used much in the first place? For one, I didn't actively try to market it. Besides an initial tweet I posted, most people probably had no idea osulist existed. The few people who did know likely also forgot about it over time because I never posted any announcements when updates were released.

For another, the site was a bit rudimentary and inefficient. Beatmaps had to be uploaded one at a time, and the UI wasn't particularly well-catered towards the average user. Because you had to manually copy and paste beatmap URLs, playlist creation was insanely inefficient. Only the most zealous of beatmap-sharers would ever bother with creating a substantial playlist. The most commonly-requested feature was osu! collection object sharing, which took a few months until [someone else actually implemented and merged](https://github.com/yfxu/osulist/pull/8) that feature.

* * *

Throughout osulist's lifetime, some really nice users actually submitted bug reports, and a friend of mine even found a XSS vulnerability![^1] While a good developer would promptly fix these, I actually found myself dreading having to address these problems. As it turns out, I don't like solving bugs in my free time...which is kind of a problem if I want to build cool things.

## Takeaways

I've learnt from this experience that part of building great software is not just initially writing flawless code (it's sorta impossible to anyway), but investing as much time and energy into **maintenance**. In the FOSS world, most people don't use code that isn't maintained, and for good reason: bugs and vulnerabilities will not get patched. This can be particularly dangerous if the software in question deals with sensitive data, which in osulist's case would be OAuth tokens! And even if the software doesn't deal with sensitive data, that doesn't protect users from XSS or similar attacks when any other type of user-input exists.

If you want people to continue interacting with your code, you need to maintain it: just as you would maintain a property that you rent out to tenants. Otherwise, it falls apart over time.

---

Overall, I feel relieved having shut down osulist. It was a nice project to put on my resume while internship hunting halfway through my degree, but the codebase was written quite haphazardly, and I cannot be particularly proud of its quality today.

I *am* proud that I made it, however. This was a first-time experience for me in being an open-source project maintainer, and I learned so much about databases, authentication schemes, cybersecurity in general, etc. I can certainly say that this experience has made me a better programmer.

Another nice outcome from decommissioning osulist is that I have less to think about. Although it sounds a little silly to say that a side project I barely maintained affected my mental state at all, randomly thinking about things like the unresolved bug reports or the six dollar monthly costs introduced many bits of "small negativity" into my daily life.

---

For anyone who still wants to share long "playlists" of beatmaps, I recommend using [osu!collector](https://osucollector.com/)!
This is an alternative collection-sharing app that was coincidentally developed---partially by one of my friends---around the same time that osulist was. It's actually very nice to use, and is certainly being maintained more than osulist was. (the existence of this site probably also contributed to osulist's lack of traffic)

That said, osulist is not *dead* dead. A year ago I began experimenting with an entire rewrite of osulist, opting for a traditional RDBMS like PostgreSQL over MongoDB, and just with generally cleaner code which would hopefully improve maintainability. I've also envisioned additional features such as being able to rate mappers or individual beatmaps on a 1-10 scale. The data can be easily aggregated into a view that would show an overall mapper ranking list, just like IMDB does for movies, or MAL does for anime titles. It hasn't quite taken off... yet.

[^1]: Thanks Zer0-G ;') https://github.com/yfxu/osulist/pull/9
