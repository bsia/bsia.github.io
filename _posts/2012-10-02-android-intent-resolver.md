---
layout: post
title: "Android Intent Resolver"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Intents are resolved in [IntentResolver.queryIntent](http://omapzoom.org/?p=platform/frameworks/base.git;a=blob;f=services/java/com/android/server/IntentResolver.java;h=f7e841e6ad0cf2b9b2caaf48a240e6642d4d46f1;hb=fb34490f4dca7aac623fb9a80fe9a2371107a786#l221).  Resolution is attempted in several "cuts":


{% highlight java %}
public List<R> queryIntent(Intent intent, String resolvedType, boolean defaultOnly,
        int userId) {

    ...
    ArrayList<F> firstTypeCut = null;
    ArrayList<F> secondTypeCut = null;
    ArrayList<F> thirdTypeCut = null;
    ArrayList<F> schemeCut = null;
    ...
{% endhighlight %}



