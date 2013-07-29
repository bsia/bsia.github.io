---
layout: post
title: "Highlighting Trailing Whitespace in Vi"
description: ""
category:
tags: []
---
{% include JB/setup %}

Tired of seeing "Lines ending in space" in your checkstyle warnings?
Add this to your .vimrc:

    " Trailing whitespace highlight colors
    highlight TrailingWhitespace ctermbg=red guibg=red

    " Enable trailing whitespace highlight by default.
    match TrailingWhitespace /\s\+$/

If you want to be able to turn this on/off via shortcut keys, add the following:

    " Specify key binding to enable trailing whitespace check
    nnoremap <Leader>wn :match TrailingWhitespace /\s\+$/<CR>

    " Specify key binding to disable trailing whitespace check
    nnoremap <Leader>wf :match<CR>

Digested from [Highlight Unwanted Spaces](http://vim.wikia.com/wiki/Highlight_unwanted_spaces)

