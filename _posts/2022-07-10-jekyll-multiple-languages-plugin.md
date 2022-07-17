---
layout: post
title:  "Jekyll multiple languages Plugin"
summary: "Learn how to add multi languages in jekyll sites"
author: mjxie
date: '2022-07-10 22:02:18 +0530'
category: jekyll
thumbnail: /assets/img/posts/jekyll_multiple_languages_plugin_logo.png
keywords: devlopr jekyll, how to use devlopr, devlopr, how to use devlopr-jekyll, devlopr-jekyll tutorial,best jekyll themes, mayrino mayjay zhaogemao
permalink: /blog/jekyll-multiple-launguages-plugin/
usemathjax: false
---

## Jekyll HTML5 网站生成器 多语言插件  

* * * *
![Jekyll 多语言组件](/assets/img/posts/jekyll_multiple_languages_plugin_logo.png)

Jekyll Multiple Languages 是 Jekyll 的一个国际化插件。它使用与 Rails 类似的方法将使用 Jekyll 开发的站点编译为一种或多种不同国家语言。不同语种站点将存储在与其包含的语言同名的子文件夹中。

该插件是在[Daresay开发的程序](https://daresay.co)

### Badges

[![Build Status](https://travis-ci.com/kurtsson/jekyll-multiple-languages-plugin.svg?branch=master)](https://travis-ci.com/kurtsson/jekyll-multiple-languages-plugin)
[![Gem Version](https://badge.fury.io/rb/jekyll-multiple-languages-plugin.png)](http://badge.fury.io/rb/jekyll-multiple-languages-plugin)

### !!我们正在寻找更多的维护者!!  

* * * *
你在用这个插件吗？即将加入的程序猿,你能帮忙测试和验证此插件吗？请为我们呐喊一个！

### 目录

* * * *

- [jekyll 多语言插件](#jekyll-html5-网站生成器-多语言插件)
  - [Badges](#badges)
  - [！！我们正在寻找更多的维护者！！](#我们正在寻找更多的维护者)
  - [目录](#目录)
  - [1. 当前版本注意事项](#1-当前版本注意事项)
  - [2. 功能](#2-功能)
  - [3. 安装](#3-安装)
    - [3.1. 使用Gem](#31-使用gem)
    - [3.2. 手动逐步](#32-手动逐步)
    - [3.3. 作为GIT子模块](#33-作为git子模块)
  - [4. 配置](#4-配置)
    - [4.1. _config.yml](#41-配置文件)
    - [4.2. 文件夹结构](#42-文件夹结构)
  - [5. 用法](#5-用法)
    - [5.1. 翻译字符串](#51-翻译字符串)
    - [5.2. 包括翻译文件](#52-包括翻译文件)
    - [5.3. Permalinks链接和翻译链接](#53-permalinks链接和翻译链接)
    - [5.4. 模板中的 i18n](#54-模板中的-i18n)
    - [5.5. 语言之间的切换](#55-语言之间的切换)
    - [5.6. 创建页面](#56-创建页面)
    - [5.7. 创建帖子](#57-创建帖子)
    - [5.8. 选择要翻译的页面](#58-选择要翻译的页面)
  - [6. 许可证](#6-许可证)
  - [7. 示例网站](#7-示例网站)

### 1. 当前版本注意事项

* * * *
1.6.0 是目前稳定版本

对Octopress的支持已被删除，但由于 Octopress 的核心是 Jekyll，因此该插件应该仍然可以使用它。Octopress 3 现在拥有自己的多语言插件:[https://github.com/octopress/multilingual](https://github.com/octopress/multilingual)

### 2. 功能

* * * *

- 支持具有相同代码的多种语言。
- 支持所有模板语言,只要支持`Liquid pipeline`的。
- 在HTML中使用[Liquid tags](https://github.com/Shopify/liquid)来包含已翻译的字符串。
- 将所有支持的语言的站点多次编译到单独的子文件夹中。
- 与 --watch 标志一起工作，将自动重建所有语言。
- 包含一个示例网站，感谢[@davrandom](https://github.com/davrandom/)
- 支持模板文件语言转换
- 支持YAML格式
- 支持超链接

### 3. 安装

* * * *

#### 3.1. 使用Gem

该插件可作为 Ruby gem 使用，[https://rubygems.org/gems/jekyll-multiple-languages-plugin](https://rubygems.org/gems/jekyll-multiple-languages-plugin)。
将此行添加到应用程序的 Gemfile： 中

``` bash
 gem 'jekyll-multiple-languages-plugin'
```

然后执行：

```bash
 gem install
```

或者自己手动安装:

```bash
 gem install jekyll-multiple-languages-plugin
```

要激活插件，请将其添加到 Jekyll_config.yml文件中，在以下plugins选项添加下：

``` ruby
plugins:
  - jekyll-multiple-languages-plugin   
```

有关详细信息，请参阅[jekyll配置文档](https://jekyllrb.com/docs/configuration)

#### 3.2. 手动逐步

1. 使用Git或你熟悉方法，从仓库(reposirory)下载此插件
2. 在你的jekyll项目的 `_plugins`文件夹中，建一个新文件夹 `jekyll-multiple-languages-plugin`
3. 链接或者复制目录`lib`(此插件目录结构中),到你jekyll项目`_plugins/jekyll-multiple-languages-plugin`文件夹中.

#### 3.3. 作为GIT子模块

如果你的jekyll项目使用GIT,你可以使用git submodules子模块轻松的管理插件
使用如下`bash`命令 安装插件作为GIT子模块(git submodule)

```bash
 git submodule add git://github.com/screeninteraction/jekyll-multiple-languages-plugin.git _plugins/multiple-languages    
 ````

更新子模块

```sh
cd _plugins/multiple-languages
git pull origin master
```

### 4. 配置

* * * *

#### 4.1. 配置文件

将您网站中可用的语言添加到您的 `_config.yml` 文件中(必须的)！

```yaml
languages:["en","zh","de","fr"]
```

数组中的第一种语言将是默认语言英语，简体中文，德语和法语将被添加到单独的子文件夹中。
为了避免冗余，可以将有些文件和文件夹在复制到本地化文件夹中时排除在外。  

```yaml
exclude_from_localizations: ["javascript", "images", "css"]
```

在代码中，这些特定的文件应该通过 `baseurl_root` . 例如

{% raw %}

```liquid
<link rel="stylesheet" href="{{ "/css/bootstrap.css" | prepend: site.baseurl_root }}"/>
```

{% endraw %}

如果您希望避免将 default_lang 内置到您网站的根目录中，请使用：

```yaml
default_locale_in_subfolder: true
```

#### 4.2. 文件夹结构

创建一个名为的`_i18n`文件夹，并为每种语言添加子文件夹，子文件夹名使用与`_config.yml`下`languages`项设置相同的名称，如下：

- /_i18n/en.yml
- /_i18n/sv.yml
- /_i18n/de.yml
- /_i18n/fr.yml
- /_i18n/sv/pagename/blockname.md
- /_i18n/fr/pagename/blockname.md
- /_i18n/en/pagename/blockname.md
- /_i18n/de/pagename/blockname.md

### 5. 用法

* * * *

#### 5.1. 翻译字符串

要将翻译后的字符串添加到您的网页中，请使用以下 `liquid tags` 标签之一：

{% raw %}

```liquid
{% t key %}
or
{% translate key %}
```

{% endraw %}

这将在编译期间从`language.yml`文件中选择正确相符的字符串。
`language.yml` 文件是用 `YAML` 语法编写的，它很适合简单的字符串分组。

```yaml
global:
  swedish: Svenska
  english: English
pages:
  home: Home
  work: Work
```

想要访问键值为`english`语言，请使用以下标签之一：
{% raw %}

```liquid
{% t global.english %}
or
{% translate global.english %}
```

{% endraw %}

您还可以通过访问`site.translations`哈希来访问已翻译的字符串，这允许您使用已翻译字符串的索引在 `Liquid` 中循环访问翻译：

{% raw %}

```liquid
{% for item in site.translations[site.lang].my_nested_yaml_collection %}
    <p>{{ item[0] }} -> {{ item[1] }}</p>
{% endfor %}
```

{% endraw %}

或翻译后的字符串的赋值：
{% raw %}

```yaml
my_nested_yaml_collection:
  -
    title: First
    message: Message
  -
    title: Second
    message: Message
```

```liquid
{% for item in site.translations[site.lang].my_nested_yaml_collection %}
   <li>
      <h2>{{ item["title"] }}</h2>
      <p>{{ item["message"] }}</p>
   </li>
{% endfor %}
```

{% endraw %}

#### 5.2. 包括翻译文件

该插件还支持使用`liquid tags` 为不同语言使用不同的`darkdown`文件：

{% raw %}

```liquid
{% tf pagename/blockname.md %}
or
{% translate_file pagename/blockname.md %}
```

{% endraw %}

这个插件与 Jekyll 的内置`liquid tags`具有完全相同的支持和语法：
{% raw %}

```liquid
{% include file %}
```

{% endraw %}

所以jekyll 其他插件功能的扩展，也因该适应于此插件。

#### 5.3. Permalinks链接和翻译链接

使用Permalinks去本地化页面，你必须提供一个默认`permalink`和指定语言的`permalinks`,举例：为法语设置`permalink_fr`.
去翻译链接，你同样必须添加一个 **unique namespace** 在`yaml front matter`中，联合`permalinks`
示列：

```yaml
---
layout:         default
namespace:     team
permalink:      /team/
permalink_fr:   /equipe/
---
```

然后你可以像这样使用翻译链接 `liquid tags`代码示列如下：

{% raw %}

```liquid
<a href="{% tl team %}"> <!--This link will return /team if we are in the English version of the website and /fr/equipe if it's the French version</a>-->
<a href="{% tl team fr %}"> <!--This link will always return /fr/equipe</a>-->
or the longer version:
<a href="{% translate_link team %}"> <!--This link will return /team if we are in the English version of the website and /fr/equipe if it's the french version</a>-->
<a href="{% translate_link team fr %}"> <!--This link will always return /fr/equipe</a>-->
```

{% endraw %}

#### 5.4. 模板中的 i18n

有时即使在模板文件中添加键也很方便。这与在普通文件中的工作方式完全相同，但是有时即使它们使用相同的模板，在不同的页面中包含不同的字符串也会很有用。

一个完美的例子是这样的：
{% raw %}

```html
<html>
  <head>
    <title>{% t page.title %}</title>
  </head>
</html>
```

{% endraw %}

那么如何为所有页面添加不同的翻译标题？别担心，这很容易。Multiple Languages 插件支持 Liquid 变量以及字符串，因此，在您的页面定义中定义一个页面变量

```yaml
---
layout: default
title: titles.home
---
```

{% raw %}
`<title>{% t page.title %}</title>`
{% endraw %}表示为将从`language.yml`中获取键为`titles.home`的值并显示

```yaml
titles:
  home: "Home"
```

#### 5.5. 语言之间的切换

此插件使用变量 如下：
{% raw %}

```liquid
{{ site.lang }}
and
{{ site.baseurl_root }}
```

{% endraw %}
在您的模板文件中使用。

这使您可以创建如下解决方案：

{% raw %}

```liquid
{% if site.lang == "zh" %}
  {% capture link1 %}{{ site.baseurl_root }}/en{{ page.url}}{% endcapture %}
  <a href="{{ link1 }}" >{% t global.english %}</a>
{% elsif site.lang == "en" %}
  {% capture link2 %}{{ site.baseurl_root }}{{ page.url  }}{% endcapture %}
  <a href="{{ link2 }}" >{% t global.chinese %}</a>
{% endif %}
```

{% endraw %}

以上代码段将创建一个在中文和英语之间切换的链接。使用的变量更详细描述如下表：

| 变量对象                | 值                                                            | 列子                       |
| :---------------------| :------------------------------------------------------------ | -------------------------: |
| site.lang             | 当前编译阶段使用的语言                                            | ``` en ```                 |
| site.baseurl          | 指向站点的根目录，包含当前语言                                     | ``` http://foo.bar/en ```  |
| site.baseurl_root     | 指向没有语言路经的页面根目录                                       | ``` http://foo.bar ```     |
| page.url              | 当前页面相对于 baseurl 的相对 URL 路经                            | ``` /a/sub/folder/page/ ```|

#### 5.6. 创建页面

根据你的网站主题或您的偏好，您需要在根文件夹或文件夹（例如`_pages`）中创建`template`页面。在每个页面内（在本例中为 `about.md`），您应该在`front matter`和`body'中至少包含以下内容：

{% raw %}

```ruby
---
layout: page
title: About
permalink: /about/
---


{% translate_file about/about.md %}

```

{% endraw %}

在每个语言文件夹中，您应该创建镜像页面以提供该语言的实际内容（例如`i18n/es/about/about.md`）。
确保从这些md文件中删除`headers`，否则您的网站无法运行。

#### 5.7. 创建帖子

语言本地化的这些帖子按语言代码（如en,zh等等）。您的所有POSTS将保存在_i18n/[lang]/_posts目录中。因此：例如，如果您的网站上有英语，您应该将您的帖子放在_i18n/en/_posts目录中。

#### 5.8. 选择要翻译的页面

有时您只想生成选定语言版本的页面，尤其是非默认语言的页面。您可以使用语言标签来做到这一点

Example:

```yaml
---
permalink:      /team/
permalink_zh:   /团队/

languages: ["zh"]
---
```

页面只生成中文版本

### 6. 许可证

[MIT License](/LICENSE)
* * * *

### 7. 示例网站

* * * *

在[jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)项目有一个示例网站，您可以在其中测试插件。下载项目后，进入`example`目录并运行：`bundle install`安装最新版本的 Jekyll（编辑 Gemfile 以安装另一个版本）和所有其他依赖项。

然后运行`bundle exec jekyll serve`启动 Jekyll 服务器。使用您的网络浏览器，访问该地址<http://localhost:4000>。

#### 7.1. 添加新语言

想象一下，您想在测试网站上添加德语页面。首先，在语言列表中添加一种新语言 `_config.yml`：

```ruby
languages: ["zh", "en", "es", "de"]
```

在`_i18n`文件夹下为该语言创建一个新文件夹，如命名为`de`，并添加一个包含翻译的`Markdown`文件，就像在其他语言文件夹中一样。

#### 7.2. 添加新页面

假设您想为示例网站创建一个`about`页面，您将创建`about.html`在网站的根目录（与`index.html`同的位置）下，其中：

{% raw %}

```ruby
---
layout: page
title: About
permalink: /about/
---

{% translate_file about/about.md %}
```

{% endraw %}

然后，建立命名为`about.md`的英文内容页面，在`_i18n/en`文件夹中，重复同样步驟为其他语言（如：`_i18n/es/about.md`等等）
运行网站，访问地址`http://localhost:4000/about`以查看英文版,`http://localhost:4000/es/about` 西班牙文版 等其它语言版本。

**感谢**
本译文来自
Thanks for  [Jekyll multiple languages plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)
All Contributors and Maintainer
