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
- Highly recommended: A Procfile runner like [Overmind](https://github.com/DarthSim/overmind/) is highly recommended, especially if you're working on the templates. On Windows [node-foreman](https://github.com/strongloop/node-foreman) is a good alternative.

### First setup

CSS is handled using Tailwind, this needs to be compiled before you should compile the site, otherwise your copy of the site will not be styled and look pretty ugly.

To do this, open a shell in the tailwind folder, run `yarn`. Then run `yarn run build`.

### Simple setup for editing content

After you did the first time setup steps, you can run `zola serve` in a terminal and minimize it. You can open `localhost:1111` in your browser for a live preview, it will automatically refresh when you save a file.

### Complex setup for editing templates

Due to how [Tailwind's JIT mode](https://tailwindcss.com/docs/just-in-time-mode) works, you need to run the tailwind compilation process next to the zola process. The easiest way to do this is using the provided [Procfile](./Procfile) with any procfile runner like Overmind. If you're unable to install this, you can also run the commands in the procfile in different terminals.
