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

{% highlight java %}
        Intent intent = Intent.parseUri("intent:#Intent;com.myexample.action.CUSTOM_VIEW;end");
        startActivity(intent);
{% endhighlight %}

Unfortunately, I could never get it to work from the browser.
The same uri embedded in an html page results in a web page not found error:

        <a href="intent:#Intent;com.myexample.action.CUSTOM_VIEW;end">Launch the kraken!</a>

For now, I'm attributing this to either a bug or a security feature.
Looking at the adb log message, when clicking on the browser link, it does indicate that the intent was properly received by the framework.
In fact, the Uri itself is embedded as part of the Intent's data:

        I/ActivityManager(   61): Starting: Intent { act=android.intent.action.VIEW cat=[android.intent.category.BROWSABLE] dat=intent:#Intent;action=com.myexample.action.CUSTOM_VIEW;end (has extras) } from pid 384
        
        
In any case, I did find a workaround (other than resorting to an http or a frowned-upon custom scheme).  If I add a specially crafted intent-filter, this seems to work:

	<intent-filter>
		<action name="android.intent.action.VIEW" />
		<category name="android.intent.category.BROWSABLE" />
		<data scheme="intent" />
	</intent-filter>
	
I know, it looks like a workaround.  And it probably is.  The reason this seems to be ok is because the full intent uri is added as the data part of the intent.  (I still can't figure out how the android browser parses the intent uris.)

The only problem with this approach is that you can only use ACTION_VIEW with it; you can't use a custom action.  However, since you can specify the package name in the uri anyway, maybe you don't need a specific action in the first place.  Another option is to use the uri data path as some kind of filter.  I haven't really tried this out but it may work…

Some other references regarding intent uris:

* [Google's recommendation to use intent uris instead of custom schemes](http://stackoverflow.com/a/3472228/390718)
* [Unanswered question on how to use Intent](http://stackoverflow.com/questions/3564393/launching-my-app-using-the-intent-uri)
* [Launching your Android app from the web](http://www.techrepublic.com/blog/app-builder/web-to-app-interoperability-launch-your-android-app-from-the-web/1011)






