---
title: "Reviewing My First PC Build"
date: 2022-05-01
draft: false
Location: "Calgary, Canada"
---

A bit over two years ago, I built my first desktop PC. It was a dream I'd had since the elementary and middle school days of watching gaming YouTubers record high quality videos of AAA games at a billion frames per second with a gazillion subscribers and they're super cool and popular and and and and (I was really obsessed with gaming)

Anyways, the main goal with this build was to assemble a computer that would be easy to move around. University forces me to move somewhere new every 4 months, so having a reasonably light and portable computer would be quite nice for the mobility department.

Thus, I looked into small-form-factor PCs (SFFPC), and came up with the following [parts list](https://pcpartpicker.com/user/feiri/saved/#view=DQs6RB):

* CPU: AMD Ryzen 5 3600 3.6 GHz (w/ stock fan)
* Motherboard: Gigabyte B450 AORUS PRO WIFI Mini ITX
* RAM: G.Skill Ripjaws V Series 16 GB (2 x 8 GB) DDR4-3200 CL16
* HDD: Seagate BarraCuda 3 TB 3.5" 7200RPM
* SSD: Some 500 GB NVME M.2 SSD (I don't remember the brand and I haven't looked for the original packaging)
* GPU: Gigabyte GeForce RTX 2060 6 GB Mini ITX
* Case: Silverstone SG13 Mini ITX
* PSU: SeaSonic FOCUS Plus Platinum 550 W 80+ Platinum

After two years of use, I figured it'd be nice to do a short reflection on what went well and what didn't. This way, my future builds might turn out to be even better!

## What went well

### The PC is portable

Indeed, I was not let down by the promises of having a portable computer. The SG13 case fits pretty snugly into a carry-on suitcase with extra clothes-padding to protect the computer from harder impacts and vibrations en-route. Many people recommend separating the GPU and HDD during transport for worries of vibration-induced damage, but I've honestly never done this and my computer still works fine. There isn't much space in the case for things to wiggle anyway. Of course, this might still be reducing the lifetime of my build, but I honestly can't be bothered to buy extra static shields and transport the PC in separate components when I'm building for portability to begin with.

### There is no liquid

AIO coolers are a hassle to bring on planes, and sometimes present a hazard for safe transportation. Since I'm just using air-cooling for the CPU, I don't have to worry about any pipe mayhem.

## What didn't go well

### The airflow sucks

The SG13 case forces the PSU to be placed directly above the CPU slot on the motherboard. This means that when coupled with the stock Ryzen 3600 fan which blows air directly upward, all the hot air actually gets blocked by the PSU. Without underclocking the CPU, this causes idle temperatures to reach **90 °C** (which is kinda ????).

To *circumvent* this issue, I have to keep the PSU literally outside of the case, which feels quite sketchy if I'll be completely honest. Doing this increases the amount of surface area that might collect dust, and it also feels a bit dangerous with this entire brick of electricity exposed to a space where small/thin objects could just drop into the fans and murder everything.

This also means that there's an extra step to the packing/unpacking process, which kinda hurts the portability aspect of having an SFFPC.

As a disclaimer, there are [other solutions](https://www.reddit.com/r/sffpc/comments/8hqvs4/what_are_your_opinions_of_the_silverstone_sg13/) that improve thermals for the SG13, but they all seem a bit strugglesome.

### I probably messed up the thermal paste application

Even after taking the PSU outside the case, higher load applications caused CPU temperatures to reach the high 80s, even into the 90s, causing HWMonitor to display *red-coloured text*. If movies have taught me anything, that probably means something is not okay.

To resolve this issue, I've underclocked my CPU to 3.2 GHz. Now, the CPU maxes out at a high 70 °C during high load. Fortunately, I can't feel any performance losses in the transition from 3.6 GHz to 3.2 GHz. While it'd be nice to actually benchmark the 3.2 GHz configuration against the 3.6 GHz config, I don't want to put my CPU under the kind of stress that 3.6 GHz puts it under, so I'll just say that I'm happy and not do anything! :D

## Future plans

With or without reusing parts, I want to rebuild this concept but with a case like the Velka 5/7, where the PSU doesn't block the CPU fans. The Velka cases are also smaller in volume compared to the SG13 (4.9L/5.9L vs. 11.5L), which would be an even greater step in the portability direction.

I also didn't really put any thought into aesthetics because I didn't want to go through the hassle of finding suitable components that also looked good, nor the pain of setting up LEDs. This could be a fun challenge for future builds though.

---

### Update

Swapped some hardware to further cut down on size:
* SG13 case swapped for Velka 5
* SeaSonic PSU swapped for 7660B-VK
* 3TB HDD swapped for 2TB 2.5" SSD (can add more SSDs if needed)

I don't think I can get much smaller than this case without losing the GPU, so this is probably the end of the downsizing journey!
