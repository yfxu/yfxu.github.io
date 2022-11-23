---
title: "RESTful APIs for Programming Newbies"
date: 2021-10-29T01:40:11-06:00
draft: true
---

Jump to the actual explanation [here](#Explanation) if you don't care about the story.

## Story Time!

Just before I started university, I wanted to develop a simple web application that would plot [osu!](https://osu.ppy.sh) ranks versus the performance point (pp) values required to reach those ranks on a log scale. There wouldn't be any user-interaction at all on the site. I just wanted a plain old graph shown on a single web page.

But I had no idea how to do it.

Fortunately, there were already many others who had previously built various web apps for osu!, and so I thought I'd reach out to one of them asking for help. [Syrin](https://osu.ppy.sh/users/5701575), the developer of [osu!chan](https://osuchan.syrin.me/), was the first (and only) person I asked for help from. Fairly quickly after my initial message, he replied with some general advice about concepts I'd have to understand and tools I'd have to know how to use.

While I don't have the original chat logs anymore, I do remember him explicitly mentioning "RESTful APIs." I was fortunate enough to have at least heard the term before, but what was it exactly? And how was I actually supposed to make use of it? Reading the [Wikipedia page](https://en.wikipedia.org/wiki/Representational_state_transfer) barely helped me understand.

Three years later, I never began working on the project, but I did learn a bit more about REST(ful) APIs.

## Explanation



This will be a fairly surface-level explanation of what REST APIs are and how to use them. It probably won't land you a job, but it should help you put your first project together. I'll aim to use as little tech-jargon as possible, but I will include some code examples just because I think they're useful. This is what I would've told myself from the past when I first started:

> A REST API is a URL that you can access to view some information stored on a server.

There's some extra details that follow, but that's the jist of it. 

```python
import requests

url    = "http://www.mapquestapi.com/geocoding/v1/address"
result = requests.get()
```

## Final Words

I'll finish this off by saying that I am by no means a seasoned software developer. I've used RESTful APIs in the past to cobble up some programs that are at minimum functional, but I am nowhere near understanding the full extent of this concept as well as a professional web developer might.

Some people might call this an irresponsible approach to learning---where people only learn the surface level of something and then immediately try to turn it into something huge. And they have a point! Especially when writing software, this can lead to poor design patterns and other various malpractices that stem from an incomplete knowledge.

On the other hand, one of the best ways to truly appreciate the beauty of a sledgehammer is to smash a twig in half with it. A lot of the time, it doesn't *really* matter if your code is "good" or not. Sometimes, just being able to solve a problem at all is better than not solving it for the sake of efficiency and quality.
