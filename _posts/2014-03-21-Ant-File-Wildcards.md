---
layout: post
title: "Ant File Wildcards"
description: ""
category:
tags: []
---


I've always had trouble remembering the wildcard file matching rules of ant.  And so, here is the official word from
the [Apache Ant Directory-based Tasks documentation.](https://ant.apache.org/manual/dirtasks.html).

Basically `**/*.java` will match all java files recursively within the directory.
However, `*/*/*/*.java` will only match java files that are 3-levels deep.  For example, that pattern would match any of the following:

    path/to/something/file.java
    my/sample/dir/file.java

And, it will not match any of these:

    onelevel/something.java
    twolevel/onelevel/another.java




