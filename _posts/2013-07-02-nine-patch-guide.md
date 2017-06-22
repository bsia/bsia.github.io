---
layout: post
title: "Nine Patch Guide"
description: ""
category:
tags: []
---


9-patch image files are confusing.  [Heres an article that
clarifies what it is and how it works](http://radleymarx.com/blog/simple-guide-to-9-patch/)

One use of 9-patch files is for scaling buttons.  With a 9-patch file, you can specify
which parts of the button will be stretched (or squished).  With a non-9-patch
image file, you can only do uniform scaling and the button will look weird.  For example, for
a button that is stretched only length-wise, you don''t normally want to scale
the four rounded corners of a button.  This is because a uniform scaling will also
stretch those corners and it wont look right..

