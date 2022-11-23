---
title: "Decomplexifying the Internet"
date: 2021-02-08
draft: true
location: "Calgary, Canada"
---

_How to make the internet less fucky---and whether or not that's actually a good thing_

A habit I've gotten into recently is sending the original URLs of images instead of copy + pasting them to friends. The rationale behind this is to avoid unnecessary redundancy. For every image that gets copy + pasted onto some messaging platform, the user is effectively uploading a new file to the server (and probably for free). 

So how would this be potentially bad?

The simple answer is that it takes up space. Sure it's not my own space, but it feels weird occupying extra space for stuff like pictures that might be seen for a total of 10 seconds by others. 

Discord attachments live in https://cdn.discordapp.com/attachments/ forever (or at least for as long as Discord is alive). This means that the moment you send a file to someone on Discord, some amount of space on their servers will be permanently occupied. Imagine if all of your computer's storage became read-only memory the moment you wrote to it. Every document and video you download or create can never be deleted or modified again. 

Now of course, the engineers working at Discord probably (hopefully) know this already and have planned around the consequences of such a system, but why would I take up extra space when I could send someone the same file but without taking up that space. It's a lot more space-efficient to just send someone to a different server where the file already exists.

Ok but does this actually make a difference? 

To be honest, I'm not sure. As far as I'm aware, Discord doesn't publish stats about attachments on their servers, so I have no idea if the extra file redundancy is negligible or not. 

## Don't put all your eggs into one basket

Moreover, it's a bit irresponsible to rely on a single source to host data. When Azer Koçulu [removed left-pad from the npm package repository](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm), a rather large number of applications stopped working. Instead of having their own locally-saved code to perform simple tasks, those apps had layers of dependencies that eventually broke at some point, causing the whole thing to collapse.

Now ideally, you don't want this to happen. The way to avoid this is really just to add more sources. If everyone got their tap water from the same reservoir, one kid shitting in the pool would mess it up for everyone. Though, this is not to say that what Azer did was unethical.

That said, the files that are being sent on public messaging platforms really _shouldn't_ be the type of files that uploaders would be concerned about losing access to, but the philosophical topic of internet complexity can still be brought up here. 

In any case, I'll probably still just copy the image URLs depending on what mood I'm in for that day xd.