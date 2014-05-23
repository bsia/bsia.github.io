---
layout: post
title: "Some helpful gradle links"
description: ""
category:
tags: []
---
{% include JB/setup %}

The docs for changing the java project layout are [here](http://www.gradle.org/docs/current/userguide/java_plugin.html).

To specify an include pattern filter, this is how to do it:

{% highlight groovy %}
    sourceSets {
        main {
            java {
                srcDirs = [MY_OTHER_PROJECT + '/src']
                include('com/bsia/android/only/these/**/*')
            }
        }
    }
{% endhighlight %}

More info on the [PatternFilterable](http://www.gradle.org/docs/current/javadoc/org/gradle/api/tasks/util/PatternFilterable.html#include(groovy.lang.Closure))
and the [SourceDirectorySet](http://www.gradle.org/docs/current/javadoc/org/gradle/api/file/SourceDirectorySet.html) docs.

Just to be clear, in the above, java is a SourceDirectorySet object.


