---
title: "SHA-256"
date: 2025-03-05
draft: false
scripts: ["hash.js"]
stylesheets: ["hash"]
---

*The data visualizations in this post may be more legible on a light colour-scheme.*

I had this sudden idea to visualize each and every single bit of a SHA-256 hash in a heatmap-style visual, not really sure where the inspiration came from.

We generally know that SHA-256 is pretty secure (for now), but aside from just trusting that it works, I've never really stopped to understand nor proven to myself that it truly is secure.

Now I'm not really a mathematician, but I _do_ have some rapidly decaying leftover memories from [ECE 307 - Probability Theory and Statistics 2](https://ucalendar.uwaterloo.ca/2324/COURSE/course-ECE.html#ECE307), so let's run some un-scientific tests to see if we can find any predictable patterns in how SHA-256 hashes are computed.

One of the craziest things to me is that this algorithm is supposed to be able to generate two virtually indistinguishable hashes from two nearly-identical strings. You'd think that the difference between `0x61` ('a') and `0x63` ('c') is pretty minute right? Bit-wise, they differ by 1 bit-flip in the 2nd least significant bit.

```
'a' -> 0x61 -> 01100001
'c' -> 0x63 -> 01100011
```

Below, I've displayed two heatmaps for the SHA-256 hashes of both 'a' and 'c'. Each column of the heatmap corresponds to one byte of the 32 byte long hash, and each cell corresponds to one of the eight bits in that byte. The left-most column displays the most significant byte, and the top of each column represents the most significant bit. 

{{< hash id="hash-a" caption="SHA-256 hash of UTF-8 string 'a'" >}}
<br>
{{< hash id="hash-c" caption="SHA-256 hash of UTF-8 string 'c'" >}}

It's pretty hard to compare these two visualizations at a glance, so let's overlay them on top of each other.

{{< hash id="hash-a-c" caption="SHA-256 hashes of UTF-8 string 'a' & 'c' overlaid on top of each other" >}}

I don't know about you, but I don't really see any obvious patterns going on here. The 

# Playground

Before we begin, here's a little interactive sandbox to compute the SHA-256 hash of any text.

{{< hash id="table" >}}
<table id="hash" class="hash-grid">
    <tr><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>
</table>
<input type="text" oninput="update(this.value);" id="input" placeholder="type here" autocomplete="off">

Now that that's out of the way, let's begin with test #1.