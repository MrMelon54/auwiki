# Developing/Writing AUWiki

This document describes how to develop or write for the Among Us technical Wiki.

## Useful documentation

If you're writing documentation:

- [Zola](https://www.getzola.org/documentation) is our static site generator. This tool turns your article into an HTML page.
- If you're writing an article, use the [CommonMark](https://commonmark.org/) format. The title is placed in a frontmatter block, see another article for how it's done.

If you're working on the templates:

- [Zola's documentation](https://www.getzola.org/documentation) shows which fields are available for each page/section
- [Tailwind CSS](https://tailwindcss.com/docs) is used for CSS

## Setting up

You need to install the following software:

- [zola](https://www.getzola.org/documentation/getting-started/installation/)
- [node.js](https://nodejs.org/en/) 12.13 or higher
- [pnpm](https://pnpm.io/installation)
- Highly recommended: [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/) to efficiently contribute to the wiki

Once everything is installed, you can start `run.js` with node, which will setup node modules and start all processes using node-foreman.
You can then open `localhost:1111` in your browser for a live preview, it will automatically refresh when you save a file.

Alternatively, you can use the preview from the CI: if you create a pull request a preview copy of your site will automatically be built, which should take less than a minute. To see more details on this, go to [Buildboot](https://ci.duikbo.at/#/builders/2).
