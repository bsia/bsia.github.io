---
layout: post
title: "Restoring Galaxy Nexus firmware to Stock Jellybean"
description: ""
category:
tags: []
---
{% include JB/setup %}

For some reason, it took me some time to find the right web page discussing how to restore a Galaxy Nexus firmware to stock Jellybean.
Actually, what I would like to do was to reflash a rooted Galaxy Nexus that has been flashed with an ICS rom.
Not sure if that was stock ICS rom or something else, but it was rooted.

Anyway, this [Android Police page](http://www.androidpolice.com/2013/07/26/how-to-flash-your-galaxy-nexus-takju-or-yakju-to-android-4-3-jwr66v-and-root-it-right-now/) was my entry point.
I just followed "Scenario 2".

That page goes on to reference his original source which is from xda forums: [\[HOW-TO\] How to flash a factory image / return to stock / unlock / root #](http://forum.xda-developers.com/showpost.php?p=34552123&postcount=1)

I used the [4.3 JB takju image from google](https://developers.google.com/android/nexus/images#takjujwr66y).
Takju refers to the specific Galaxy Nexus device type if you bought your phone from Google Play.


Note to self: 'adb reboot bootloader' is required before you can use fastboot on the device.


