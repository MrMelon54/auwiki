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

- [Zola](https://www.getzola.org/documentation/getting-started/installation/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)
- [Node.js](https://nodejs.org/en/) 12.13 or higher
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- Highly recommended: A Procfile runner like [Overmind](https://github.com/DarthSim/overmind/) is highly recommended, especially if you're working on the templates. TODO find alternative that works on Windows
