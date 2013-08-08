---
layout: post
title: "C++: Accessing private class members"
description: ""
category:
tags: []
---
{% include JB/setup %}

I need some way to get at C++ private class members.
Although I have access to the original source code, I don''t have the liberty of
recompiling the dynamic library I need to link against.

The ["friend template" technique discussed in SO](http://stackoverflow.com/a/425489/390718) looks promising:

{% highlight cpp %}
    class Z
    {
        public:
            template<typename X>
                void backDoor(X const& p);
        private:
            int x;
            int y;
    };


    namespace
    {
         // Make this inside an anonymous namespace so
         // that it does not clash with any real types.
        class Y{};
    }

    // Now do a template specialization for the method.
    template<>
    void Z::backDoor<Y>(Y const& p)
    {
         // I now have access to the private members of Z
    }

    int main()
    {
            Z  z;   // Your object Z

            // Use the Y object to carry the payload into the method.
            z.backDoor(Y());
    }

{% endhighlight %}

