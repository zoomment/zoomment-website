---
title: 'Step-by-Step Guide to Integrating a Comments Section in Your Jekyll Blog'
excerpt: 'Incorporating a comment widget like Zoomment into your Jekyll website can significantly enhance user engagement by allowing visitors to leave comments on your posts. This guide will walk you through the steps to insert the provided Zoomment widget code into a Jekyll template, enabling a comments section on your site.'
coverImage: ''
date: '2024-03-11T18:00:00.322Z'
ogImage:
  url: ''
---

Incorporating a comment widget like Zoomment into your Jekyll website can significantly enhance user engagement by allowing visitors to leave comments on your posts. This guide will walk you through the steps to insert the provided Zoomment widget code into a Jekyll template, enabling a comments section on your site.

#### Step 1: Choose the Right Place in Your Template

First, you need to decide where you want the comments section to appear on your Jekyll site. Common places include at the bottom of a blog post or a dedicated comments section on a page. For this guide, we'll assume you want to add it to the bottom of each blog post.

#### Step 2: Edit Your Post Layout Template

Jekyll uses layouts to define the structure of different types of pages on your site. To add the comments section to all blog posts, you'll need to edit the layout file used by your posts, typically found in `_layouts/post.html`.

#### Step 3: Insert the Zoomment Widget Code

Open `_layouts/post.html` in your text editor and scroll to the location where you want the comments section to appear. Paste the provided Zoomment widget code snippet at that location.

```html
<div
  id="zoomment"
  data-theme="light"
  data-language="en"
  data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
></div>
<script src="https://cdn.zoomment.com/zoomment.min.js"></script>
```

#### Step 4: Customize the Widget (Optional)

You may customize the widget's appearance and functionality by modifying the `data-` attributes within the div tag. For instance, you can change the `data-theme` attribute to "dark" for a dark mode theme or modify the `data-language` attribute as needed for your audience.

#### Step 5: Test the Widget

After saving your changes, it's important to test the widget to ensure it's working correctly. Build your Jekyll site locally using the command `bundle exec jekyll` serve and navigate to one of your posts to see the comments section in action.

#### Conclusion

Adding a comments section to your Jekyll site using the Zoomment widget can greatly increase engagement and provide valuable feedback from your audience. By following the steps outlined in this guide, you can easily integrate Zoomment into your site, enhancing your visitors' experience. Remember to customize the widget according to your site's theme and audience preferences for the best results.
