---
title: "Guide on Documenting using Docusaurus"
authors: utsavdotdev
date: "2024-11-04"
tags: [opensource]
---

Docusaurus makes it super simple to create a site that combines both project documentation and a blog, perfect for open-source projects or any organized knowledge base.

<!-- truncate -->

### Setting Up Blogs on Docusaurus

1. **Create a Blog Post**: Go to the `blog/` folder in your Docusaurus project. Create a new `.md` or `.mdx` file for each post—let’s say `new-features.md`.

2. **Add Frontmatter**: At the top of the file, add some metadata to structure your post:

   ```markdown
   ---
   title: "New Features in Our Project"
   author: "Utsav Bhattarai"
   date: "2024-11-04"
   tags: ["release", "features"]
   ---
   ```

---

### Structuring Project Docs

1. **Add Documentation Files**: Head to the `docs/` folder and create new `.md` or `.mdx` files like `getting-started.md` or `features.md`.

2. **Customize the Sidebar**: Organize your docs by editing `sidebars.js` to structure the sidebar as needed:

   ```javascript
   module.exports = {
     mySidebar: [
       "getting-started",
       {
         type: "category",
         label: "Guides",
         items: ["setup-guide", "features"],
       },
     ],
   };
   ```

### Previewing Your Docs

Add your content on the respective file then to preview your changes, start the site locally with yarn run dev. This command will launch both the main site and the docs section in parallel. Then, visit http://localhost:3000/docs/blog to see docs site in the browser.

### Wrapping Up

With Docusaurus, adding a blog and project documentation is easy and gives you a cohesive, professional site to showcase both!

If you get stuck or want to explore more, check out the [official Docusaurus docs](https://docusaurus.io/docs). It has everything you need to set up and customize with ease.

Happy documenting!
