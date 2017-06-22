---
layout: post
title: "vsftpd server issue with Ubuntu 12.04"
description: ""
category: 
tags: []
---


I recently updated my Ubuntu box to Ubuntu 12.04 and I found out the ftp server is not working.
From my ftp client, I was getting this error:

    do_ypcall: clnt_call: RPC: Unable to send; errno = Network is unreachable

It turns out there is a [bug](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=616113) with vsftpd when running NIS.

The workaround is to simply add this to your /etc/vsftpd.conf file:

    isolate_network=NO

Fixed!

