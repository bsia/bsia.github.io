---
layout: post
title: Launching Apps from the Browser via Android Intent Uris
---

Android supports Urls that can launch an application from a web view.  These urls should be prefixed with the "intent:" scheme, for example:

        intent:#Intent;action=com.mydomain.action.LAUNCH;end

I couldn't find any documentation on what the format for this url is, but digging through the android source code,
I found the source code for 
[Intent.parseApi](http://omapzoom.org/?p=platform/frameworks/base.git;a=blob;f=core/java/android/content/Intent.java;h=3fdf451dcff68ed3c8b52ba5346798ea77a9e752;hb=refs/heads/jb-release#l3445).
For future reference, here is the format:

        intent URI = "intent:#Intent;" config_data  ";end"

        config_data = *( kv_pair / "SEL" )
        kv_pair = key "=" value

        key = action / category / type / launchFlags / package / component / scheme / sourceBounds
        
Some examples:

* `intent:#Intent;action=com.android.action.VIEW;package=com.myexample.testapp;end`
* `intent:#Intent;action=com.myexample.action.CUSTOM;category=com.myexample.category.LAUNCHABLE;end`

This provides a nice clean way of launching an app from the command line via adb shell:

        $ adb shell am start "intent:#Intent;com.myexample.action.CUSTOM_VIEW;end"

Even programmatically, this could be an alternative way of creating an intent:

        Intent intent = Intent.parseUri("intent:#Intent;com.myexample.action.CUSTOM_VIEW;end");
        startActivity(intent);

Unfortunately, I could never get it to work from the browser.
The same uri embedded in an html page results in a web page not found error:

        <a href="intent:#Intent;com.myexample.action.CUSTOM_VIEW;end">Launch the kraken!</a>

For now, I'm attributing this to either a bug or a security feature.
Looking at the adb log message, when clicking on the browser link, it does indicate that the intent was properly received by the framework.
In fact, the Uri itself is embedded as part of the Intent's data:

        I/ActivityManager(   61): Starting: Intent { act=android.intent.action.VIEW cat=[android.intent.category.BROWSABLE] dat=intent:#Intent;action=com.myexample.action.CUSTOM_VIEW;end (has extras) } from pid 384

Some other references regarding intent uris:

* [Google's recommendation to use intent uris instead of custom schemes](http://stackoverflow.com/a/3472228/390718)
* [Unanswered question on how to use Intent](http://stackoverflow.com/questions/3564393/launching-my-app-using-the-intent-uri)
* [Launching your Android app from the web](http://www.techrepublic.com/blog/app-builder/web-to-app-interoperability-launch-your-android-app-from-the-web/1011)






