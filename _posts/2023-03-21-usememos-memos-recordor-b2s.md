---
layout: post
title:  "A lightweight, self-hosted memo hub. Open Source and Free forever"
summary: "An open-source, self-hosted memo hub with knowledge management and social networking."
author: mjxie
date: '2023-03-21 00:16:18 +1130'
category: apps
thumbnail: /assets/img/posts/memos/mayrino-memos-profile.png
keywords: react go docker, markdown memo sqlite ,self-hosted free note-talking github, mayrino mayjay zhaogemao
permalink: /blog/usememos-memos-recordor-b2s/
usemathjax: true
---

##  memos provides the privacy security and reliability that innovators need in their moments of inspiration. 



## [Features](#features)

* * * *

- **Privacy First** keep your own data by yourself.All data generated at runtime is saved in the SQLite database file.
- **Plain Text With Markdown** All content will be save as plain text, not HTML.and lots of useful markdown syntax supported.
- **Lightweight But Powerful** Using Go + React.js + SQLite architecture,the overall package is very lightweight.
- **Customizable** You can customize the server name,icon,description,custom system style and execution script, etc.
- **Open Source Completely** Memos believes that open source is the future,and all code is already open source in GitHub.
- **Free Forever** All features are free forever and will never be charged in any form or content.



## [Key Points](#key-points)

* * * *
- **Open Source and Free**
- **Self-hosted with Docker in Seconds**
- **Markdown Supported**
- **Customizable and Sharable**
- **RESTful API for self-service**

## [Quick Start](#quick-start) 
### [Depoly with Docker in seconds](#depoly-with-docker-in-seconds)

* * * * 
{% raw %}
``` docker
 docker run -d  --name memos -p 5230:5230 -v ~/.memos/:/var/opt/memos meomemo/memos: latest
```
{% endraw %}

> **The  ``` ~/.memos/directory``` will be used as the data directory on your local machine, while ``` /var/opt/memos``` is the directory of the volume in Docker and should not be modified.**


### [Othors Installation methods](#othors-installation-methods)
* * * *
[See More Other Installation](https://usememos.com/docs/install)

* * * * 
[Memos Source Code on Github](https://github.com/usememos/memos)

* * * * 
### [Acknowledgements](#acknowledgements)

Thanks for Memos Contributors and Community
