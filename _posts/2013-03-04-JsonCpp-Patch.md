---
layout: post
title: "JsonCpp Static Instance Patch"
description: ""
category: 
tags: []
---


Encountered a bug with [json cpp](http://jsoncpp.sourceforge.net/).

Supposedly, you can''t instantiate a Json::Value object as a static.

The [stackoverflow question](http://stackoverflow.com/questions/7948821/pure-virtual-function-call-with-jsoncpp) provides some background info.

And this [patch from the official JsonCpp site](http://goo.gl/CBU1u) fixes the issue.


