---
banner_alt: Illustration of browsers
banner: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rZQFL_tmQ-fEuwVJS6zyiA.png
# title_prefix: Upgrade
title: From URLs to Pixels -- How Browsers bring the Internet to Life
description: How do browsers work behind the scenes? 🤔
date: '2021-12-03'
---

From URLs to Pixels — How Browsers bring the Internet to life
=============================================================

![Shantanu Wable](https://miro.medium.com/v2/resize:fill:88:88/1*YBx95i10FVzK0lJ_b8H1Fg.jpeg)

[Shantanu Wable](https://medium.com/@shxntanu?source=post_page-----aabf3aaf92f9--------------------------------)

Our browser is our internet access card; one that opens the doors for any website you ask for. Have you ever wondered how a web browser is able to display webpages from all over the internet with just a few clicks? It may seem like magic, but in reality, there is a complex system at work behind the scenes that allows us to access and view information on the web.

> **“In a short period of time, we’ve gone from being amazed by the ability to send an email to someone around the world, to a change in how we think about information.” ~ Mozilla**

The Basics
==========

History of web browsers
-----------------------

The history of web browsers dates back to the early 1990s when Tim Berners-Lee, the inventor of the World Wide Web, created the first web browser called **WorldWideWeb**. This was a simple browser-editor that allowed users to browse web pages and edit them.

The WorldWideWeb browser

In 1993, Marc Andreessen and Eric Bina developed **Mosaic**, the first graphical web browser that allowed users to view images and text together on the same page. This was a major breakthrough for the web and helped to popularize it among the general public.

Mosaic Browser

The success of Mosaic led to the development of other web browsers such as **Netscape Navigator**, **Internet Explorer**, and **Mozilla Firefox**. Today, there are several web browsers available for users to choose from, each with its own unique features and capabilities.

**Browsers on a high level**
----------------------------

Every browser has a few key features:

1.  **UI**: This includes the address bar, navigation, refresh & home buttons, menus, etc.
2.  **Rendering Engine**: It is a core software component of every browser. It is responsible for drawing text and images on the screen based on a structured document (**usually HTML**) along with specified style declarations (**CSS**).
3.  **Networking**: The browser retrieves URLs by using standard internet protocols like **HTTP** (Hypertext Transfer Protocol) or **FTP** (File Transfer Protocol)
4.  **Persistent Storage:** This is a persistence layer which is used to store data locally using various mechanisms like Cookies 🍪, IndexedDB, WebSQL, FileSystem, localStorage etc.

Rendering Engine — The Star of the Show
---------------------------------------

Ah, the rendering engine in a browser! It’s the unsung hero behind the scenes, turning lines of code into beautiful web pages. Picture a tiny wizard sitting inside your computer, armed with his trusty wand (or rather, a sophisticated algorithm) and casting spells to bring your favourite websites to life.

Different browsers use different rendering engines: Internet Explorer uses [**Trident**](https://en.wikipedia.org/wiki/Trident_(software)), Firefox uses [**Gecko**](https://en.wikipedia.org/wiki/Gecko_(software)), Safari uses [**WebKit**](https://webkit.org/), Chrome and Opera use [**Blink**](https://en.wikipedia.org/wiki/Blink_(browser_engine)).

What happens when you enter a URL?
==================================

The browser starts by **parsing the entered URL** to extract various components like the protocol (e.g., HTTP or HTTPS), domain name, path, and query parameters.It needs to resolve the domain name to an IP address using the Domain Name System (DNS). It sends a DNS request to a DNS server to obtain the IP address associated with the domain.

Now, using the resolved IP, it establishes a TCP connection **(Transmission Control Protocol)** with the server hosting the website. This ensures reliable communication between the browser and the server.

SYN (Synchronization) & ACK (Acknowledgement)

Once the connection is established, the browser sends an **HTTP request** to the server. The request contains information like the HTTP method (usually GET for fetching web pages), headers, and the path to the requested resource. The web server receives the HTTP request and processes it. It retrieves the requested document (HTML) from the storage or generates it dynamically using server side technologies like **PHP** or **Node.js**.

The web server constructs an HTTP response containing the requested resource. The response includes an **appropriate status code** (e.g., 200 for successful requests) and headers containing metadata about the response. The browser starts downloading the response content, which typically includes the _HTML markup_, _CSS stylesheets_, _JavaScript files_, _images_, and other resources referenced by the web page.

As the browser downloads the HTML content, the rendering engine interprets HTML markup and CSS styles to construct the **Document Object Model (DOM) or DOM Tree**, which represents the structure of the web page.

The browser also constructs another tree known as the **Render Tree.** It is a visual representation of the website which allows for painting of the elements in a correct order on the screen.

DOM Tree (left) and Render Tree (right)

After the render tree is constructed, it goes through a **Layout Proces**s in which elements are given sizes and exact coordinates of where they should appear on the screen.

The next stage is the **Painting Stage** in which the tree is traversed and elements are painted onto the screen. The engine always tries to display elements as soon as possible for a better user experience, rather than waiting for the parsing of the entire tree.

If the web page includes JavaScript code, the browser’s JavaScript engine executes it. JavaScript can interact with the DOM, modify the page content dynamically, handle user interactions, and make additional requests to fetch data from servers.

The Extras
==========

In addition to the core functionality of rendering web pages, modern browsers include various additional features and technologies to enhance the browsing experience.

WebGL
-----

WebGL

WebGL is a JavaScript API that enables high-performance 3D graphics within the browser. It allows developers to create interactive 3D visualizations, games, and immersive experiences using hardware-accelerated graphics capabilities.

**WebSockets**
--------------

WebSockets provide a bidirectional communication channel between the browser and a server. This enables real-time, low-latency data transfer, making it ideal for applications that require continuous data updates, such as chat applications, collaborative tools, or real-time dashboards.

WebRTC (Web Real-Time-Communication)
------------------------------------

Apps using WebRTC features

WebRTC is a set of APIs that enable real-time communication between browsers, including audio, video, and data streaming. It allows developers to build applications like video conferencing, file sharing, and live streaming directly within the browser without the need for plugins or external software.

In our daily lives, it’s all these abstractions that the browsers create that make internet browsing effortless and mindless. With the help of these developments, browsers have become strong platforms that improve everyday tasks and enable users to explore interesting material, work together without any problems, and access a variety of interactive online apps.

Thank you so much for reading! Please feel free to share your thoughts in the comments below.
