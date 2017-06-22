---
layout: post
title: "Filtering Intents In Your Manifest Based on File Extension"
description: ""
category:
tags: []
---


For the longest time, I couldn't get the AndroidManifest.xml intent filters to match only my app based on file extension
using the pathPattern attribute to specify the matching string.
Just to be clear, I've succeeded getting my app to show up when a certain file with an extension is opened by the user.
However, the filter seems to match every other app on the device too, and so the user ends up with a very messy Chooser
dialog screen.

Digging around, I eventually discover that apparently there maybe several reasons why this is not working:

* Android itself does not recognize file extensions alone as a filtering mechanism.  It only recognizes mimeTypes.
  * Confirmed by Hackborne [here](https://groups.google.com/forum/#!topic/android-developers/a7qsSl3vQq0).

* There is a bug in the pattern matching code used to parse the pathPattern.
  * One solution is to use a specially crafted pattern matching string as discussed [in this blog post](http://yhcting.tistory.com/m/post/316).  Also, see this [SO entry](http://stackoverflow.com/a/23301875/390718)

  * Another solution is to specify your own mimeType in addition to the file extension patternPattern as shown [here](http://richardleggett.co.uk/blog/2013/01/26/registering_for_file_types_in_android/).


Remains to be seen if any of these works in my case.


