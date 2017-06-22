---
layout: post
title: "Dumping Predefined C/C++ Compiler Macros"
description: ""
category: 
tags: []
---


Once again, [stackoverflow](http://stackoverflow.com/questions/2658461/what-predefined-macro-can-i-use-to-detect-clang) proves useful to find those one-liners.

In this case, I needed to detect if my code was being compiled by the clang compiler.  This is how to dump the list of pre-defined macros from the command-line:

    $ clang -dM -E -x c /dev/null

Specifically, I was looking for `__clang__`.

Btw, it also works for gcc.
