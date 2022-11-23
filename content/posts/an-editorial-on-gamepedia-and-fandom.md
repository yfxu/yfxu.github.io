---
title: "An Editorial on Gamepedia and Fandom"
date: 2022-01-26
draft: false
location: "Vancouver, Canada"
---

[Gamepedia](https://en.wikipedia.org/wiki/Curse_LLC#Gamepedia) was a wiki hosting site well-known for hosting some of the most popular gaming-related wikis on the web. It was home to many official wikis of popular games like Minecraft and Terraria (and technically still is).

Here's why I liked it:

At its forefront, Gamepedia delivered lots of detailed information, and it prioritized doing that extremely well. It was a simple website I could visit to learn anything about the games I played. It didn't do anything crazy. No extra bullshit, just a plain wiki with a bit of custom CSS on top of a relatively faithful fork of the vanilla [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) engine.

And that's it. That's why Gamepedia was a good site. To be honest, I'm not entirely sure what the state of ads is on the internet. I've been using [uBlock Origin](https://ublockorigin.com/) for quite some time now, so I have no idea what Gamepedia would've looked like without an ad blocker. In any case, the website was perfect for me.

Despite how great their platform was, Gamepedia still had a very notable competitor: Wikia (now known as [Fandom](https://www.fandom.com/)). Wikia was quite the opposite of Gamepedia. As a company, they branded themselves adamantly as a community for all types of entertainment-enjoyers---anime fans, Marvel lore-ists, gamers, etc. Being a community, they had forums, articles, news posts, and of course, wikis. Browsing Wikia felt like surfing a Buzzfeed-esque carnival of features that unfortunately hampered the wiki experience for me too much. It was way too difficult to focus on the data and information that I was searching for. I came to figure out how to craft the [Night's Edge](https://terraria.fandom.com/wiki/Night%27s_Edge), not to learn about super cool 101 aw3s0me Harry P0tt3r facts I never knew about!

Anyway. Time passed on, and eventually on December 2018, Fandom acquired Gamepedia from Curse LLC. In their [original blog post](https://community.fandom.com/wiki/User_blog:Brandon_Rhea/Fandom_and_Curse_Media_are_joining_forces) announcing the acquisition, Fandom staff member Brandon Rhea wrote about the common missions and goals shared between Curse and Fandom. The post didn't feel very substantial, however. Their blog post was a very boilerplate "we want to enhance our products in order to support our users better" kind of wishy-washy announcement. No explicit plans were mentioned on how they planned to deliver on this front.

Of course, this seemed to be a very early announcement, which means that Fandom is at least doing a pretty good job of being punctual and transparent to their users.

Still, just as their post seemed to suggest, nothing really happened. To be honest, I didn't even realize Gamepedia had transferred ownership until Fandom made a rather big change to their website 1.5 years later.

## Unified Community Shitstorm

2020.

Because MediaWiki was strictly just a wiki engine, it could not yet support the functionality that Wikia desired in their complex multi-faceted product. Wikia needed forums, comments, videos, news posts, etc., which MediaWiki did not have (or at least not in the same way that Wikia envisioned). Their solution to their own unique needs was to develop those features themselves, gradually leading to an extreme deviation from the vanilla MediaWiki engine.

Furthermore, after they rebranded under their current Fandom name, their growth began accelerating with the acquisition of multiple different assets. Apparently they own [Strawpoll](https://www.strawpoll.me/) now???

In any case, Fandom's Wikia-era legacy codebase was a project that grew rapidly in order to meet the demands of their accelerating platform, but this came with the cost of a rushed design where new features collided ungracefully. While this was maintainable enough at the beginning, their code became tangled and difficult to upgrade over time. Because their fork deviated so much from vanilla MediaWiki, Fandom had troubles when it came to upgrading their base version of MediaWiki. Eventually, Fandom decided to address these struggles by rewriting the entire app, both front and backend---the full stack.[^1]

By starting from scratch, Fandom would be able to harness the newest features of MediaWiki, and they would also be able to plan out a better customized design that would scale more intelligently with their own needs. In the process, they could also find a way to unify some of their new acquisitions (_cough_ Gamepedia _cough_) into a more cohesive piece of software. The new architecture was called the "[Unified Community Platform](https://community.fandom.com/wiki/Help:Unified_Community_Platform)."

And so, they began rewriting their codebase from line zero, pulling Gamepedia deeper and deeper into the Fandom ecosystem. Line after line, Fandom injected a new life into its platform, marking the transition from its angsty-cool-teenager phase into its LinkedIn-hype-marketing-young-adult phase. Unfortunately, their grand blueprints for this change included no traces of the original MediaWiki experience that Gamepedia had so faithfully retained.

## Why the Upgrade Kinda Sucks

From a systems management point of view, UCP actually makes sense. They took a complex legacy system that was years outdated, and then rebuilt it with better practices for easier development and improved utility. The main issue I have with the new update is actually [FandomDesktop](https://community.fandom.com/wiki/Help:FandomDesktop), the new frontend skin bundled with it.

oh god [my eyes](https://f004.backblazeb2.com/file/files-yfxu/my-eyes.jpg).

![Screenshot of the official Terraria wiki as of 2022-01-19](https://f004.backblazeb2.com/file/files-yfxu/2022-01-19-terraria-wiki-screenshot.png)

Okay maybe that's a bit of an exaggeration, but there's quite a bit about their new design that I disagree with.

The most standout issue for me is that FandomDesktop makes site navigation extremely cluttered and non-obvious. MediaWiki places a search bar in the top right of every page, making the rest of the website easily accessible. On the Fandom website, I now have to click a relatively unnoticeable search icon on the top right, wait for it to bring up a search modal, and then click on the actual search bar to find what I'm looking for. With so much header real estate, why not just have a normal search bar? Not to mention, it's paired alongside a light-dark mode switch on the same hierarchical level, giving the impression that an extremely central functionality---searching---is as important as an appearance setting.

Another issue is the clash between Fandom's branding and the actual wiki content. The big noticeable yellow sidebar actually has nothing to do with the specific wiki being viewed, yet it receives so much importance by just being there with its loud design. I don't mean to say that loud design is inherently bad, but any design that detracts from a product's utility can probably be reconsidered. The buttons on the sidebar don't link to anywhere else within the wiki (except for the search icon which does the exact same modal thing as the top-right icon), so it's mostly just there for users to access the non-wiki parts of Fandom. While there's no actual public stats on who accesses their site, I'd gander that most of Fandom's traffic comes not from its registered community, but from gamers who need to check the official Minecraft wiki every two seconds. In other words, most people will never use the sidebar.

A subtler problem for me is that the sidebar causes the wiki to feel less authentic and trustworthy. If I'm learning about Terraria, I want to learn it from a community of users who are devoted and focused on Terraria. Even though the wiki itself hasn't fundamentally changed, it FEELS like I'm now reading a Buzzfeed article instead of an enthusiast-compiled encyclopedia.

Oh yeah, and now there's popup surveys too. ! :D !

## Why.

whyw hyw hy whywhywhy ywh

The nice silver lining with Fandom is that they're decently transparent about some of these changes. [This blog post](https://community.fandom.com/wiki/User_blog:MisterWoodhouse/Introducing_FandomDesktop,_the_new_look_and_feel_for_desktop_users) details the process they followed to transform old Wikia into what we have today.

What I think is commendable is that they actually conducted a decent amount of user research, gauging the opinions of wiki admins, wiki editors, and general users alike. And then, they also re-shared that information publicly. This shows that they're _probably_ not just making changes for the sake of keeping up with le'epic modern design trends, but that they're identifying actual problems then coming up with solutions for them.

So how'd it go wrong from here?

Well...it turns out they went through all the effort of collecting years of feedback and then literally did the opposite of what people wanted. Here's a quote from their post:

> **What the General Fanbase Says**
> ...
> They often only visit one wiki and/or type of content during each visit, so not every tool or page is relevant to their experience.

Cool! Thank you for the very large and noticeable yellow sidebar that is very relevant to my wiki-surfing experience Yay :D

> They like clean and consistent designs that are easy to navigate, and don’t like customizations that impact accessibility.

They deliver on consistency I guess. But it's still kinda hard to navigate when they haven't given me a normal search bar though ;'0

> They often don’t realize that individual wikis are all part of one platform. They arrive on the site from Google to find information, but don’t connect the brand.

This point is actually less of a specific design issue, but I don't think the that users actually wanted to connect the brand in the first place. What I suspect happened is that Fandom designed a survey with a question like "Do you connect gaming wikis to the Fandom brand?" and most people responded "No."

They also received feedback from wiki admins and editors, but I can't really comment on that as I don't personally have much experience maintaining a wiki myself.

There's one last point I want to address that encompasses more than just UI design:

> Wiki content can often be long and difficult to consume, especially when looking for an answer to a specific question.

To me, this is like saying that a library is too large and full of long chapter books. Wikis should be dense and substantial, otherwise, they wouldn't be as useful as they are today. That said, this is still an entirely valid concern because they're right---Fandom wikis aren't easy to read.

FandomDesktop's default CSS for new wikis applies a lot of margin and padding distance to individual lines, paragraphs, and sections. This generates a lot of inneffective whitespace that can sometimes force users to scroll a FUCK TON (both vertically and horizontally) before they can find whatever it is they're looking for.

It's a commonly documented concept that whitespace does not have to be wasted space. Instead, it's a tool that when used correctly can help to draw focus to different elements, creating emphasis. This is what helps to establish visual hierarchy.

However, for Wikis, I personally believe that the content itself shouldn't be emphasized. It's the headings and captions that should receive emphasis.

The value in having densely packed content on a screen is that headings and captions are spaced out much more reasonably. As Fandom's feedback implies, users are often searching for a very specific piece of information within a page. This means that people don't want to spend 99999 years scrolling the page looking for the right section. Just as you might search for the genre section => author's last name => book title at a book store, you might search for main heading => subsection => sub-sub-section on a wiki. Unfortunately, this ultimately relies on the wiki content writers actually dividing the content into effectively navigable sections.

# Conclusion

* Why did I write this
* You don't need to combine irrelevant products, especially when most people don't use them
* Try to consult your loyal users who don't actually partake in your community
* Hyperlinking 7 differnet Fandom links probably only supports them

[^1]: information sourced from the UCP (not United Conservative Party) [help page](https://community.fandom.com/wiki/Help:Unified_Community_Platform#Why_create_a_new_platform_and_why_move_existing_wikis_onto_it.3F)
