---
layout: post
title: "Mockito + Dexmaker + sharedUserId = fail"
description: ""
category:
tags: []
---
{% include JB/setup %}

Just found out another android limitation when using sharedUserIds.
Apparently, if you define sharedUserId in your AndroidManifest.xml,
Mockito somehow fails to initialize with the Dexmaker class loader and
instead uses CglibMockMaker which won''t work at all on Dalvik byte code.

The solution is to add this line just before you call mock():

    Thread.currentThread().setContextClassLoader(getClass().getClassLoader());

And the best place to put this, since you''d probably want it done for every test,
is in your setUp() method.

This was discussed in more detail in a [Google groups mokito thread](https://groups.google.com/forum/#!topic/mockito/Z2c71TqrdyA).



