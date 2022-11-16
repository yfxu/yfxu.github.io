---
title: "An Adventure in Building osulist"
date: 2021-01-24
tags: ["development"]
draft: false
location: "Calgary, Canada"
---

https://osulist.tk/

One of my favorite computer games is [osu!](https://osu.ppy.sh) (exclamation mark included) It's a free rhythm game where the player's goal is to click a bunch of circles that appear on the screen to the beat of a song. Songs are referred to as "beatmaps," or "maps" for short.

Over time, something I've noticed is that there isn't a really great way to share multiple beatmaps with your friends. Say you've found a few beatmaps that you really like, and you want your friend to try playing them. For every single beatmap you want to share, you'd have to send them one unique URL&mdash;an online link to that beatmap. 

In the past, I've sent at least 50 links at a time. While I do really love this game and enjoy sharing beatmaps that I enjoy, this repeated action does get kind of inefficient. It's also not the most elegant way to share songs since a URL doesn't convey a beatmap's title, artist name, BPM, etc.

So, I decided to do something even more inefficient: start working on a new side project.

## Cue osulist

osulist would be a CRUD application that at a minimum supports OAuth2 logins with a user's osu! account, creation of beatmap playlists, and the ability to edit, remove, and add individual beatmaps to those playlists. Because I'd developed a different web app with Flask at a previous co-op, I decided to continue with Flask for this new application. Playlists would be saved as JSON documents in a MongoDB Atlas. The website would be served on a cheap DigitalOcean Ubuntu droplet.

The first mistake I made was using MongoDB without thinking about it first. The reason I'd chosen to use it was because a friend of mine used it for a Discord bot he was developing. Maybe I'm just an excited monkey that sees cool things and instantly tries to touch it.

What ended up happening is that the database structure was ill-suited for keeping track of individual beatmap data, on top of associating each beatmap with its respective playlist. This resulted in a database that was more fragmented and hard to manage, and it might've also performed slower as a result. While it is possible to implement relational data in MongoDB, it would've made more sense to just use a traditional RDMS from the start. Oh well.

My second mistake was getting addicted. 

I spent multiple hours of my day developing the site, coding whenever I had the chance in-between online lectures, and also late into the night. I often started sleeping around 3 to 4AM. I truly did have a lot of fun developing osulist, though. Never having worked on a side project of this scale before, it was really cool to see my own idea finally taking shape after being built from nothing.

## Motivation

The main side-effect of sinking so much time into this side project, however, is that I've lost all my steam now. I was able to push out an MVP before 2021, but now there are ideas I have that will sit around for a while because I don't have any more motivation to implement them. There are a few bugs I've found, but I've relegated them to be bug-fix tasks for the future. Coding that much in such a short period of time takes a toll on the brain. It wasn't just coding, either. I had to read lots of documentation, learn new concepts, and spend time designing for aesthetics.

Overall, this was still a great experience, however. Working on osulist helped me learn about databases, setting up a VPS, and web security concepts, among other things. I hope that I'll find a drive to work on it again in the future as I do think osulist is a very useful web app, so of course I'd like to see it be a better piece of software.

Shoutouts to Mister [IOException](https://mzhang.io/) for helping me a lot along the way. I would've been super lost without your help xd