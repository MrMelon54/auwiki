/// Create a file that maps all titles to the path of their markdown file
/// This is used by the link shortcode which makes internal links easier to type.

const fs = require("fs").promises;
const path = require("path");

const title_regex = new RegExp('title\\s*=\\s*"([^":]+)');

/// Run a function for each file in a directory and its subdirectories and return an array with all results.
async function mapFiles(dir, mapfn, rootDir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const results = await Promise.all(
		entries.map((entr) => {
			const absPath = path.resolve(dir, entr.name);
			return entr.isDirectory()
				? mapFiles(absPath, mapfn, rootDir)
				: mapfn(absPath, rootDir);
		})
	);
	return Array.prototype.concat(...results);
}

/// Parse the title from a file and return an array containing the title and the filename relative to the root directory.
async function parseTitle(filename, rootdir) {
	if (!filename.endsWith(".md")) {
		return [];
	}
	const contents = (await fs.readFile(filename)).toString();
	const match = contents.match(title_regex);
	if (match == null) {
		console.log("Could not find title in " + filename);
	}
	const relativeFilename = filename.slice(rootdir.length).replace(/\\/g, "/");
	return `"${mapTitle(match[1], relativeFilename)}" = "${relativeFilename}"`;
}

function mapTitle(title, filename) {
	return title.replace(/\./g, "--");
}

async function buildLinkmap(contentDir) {
	let rootDir = path.resolve(contentDir);
	let result = await mapFiles(rootDir, parseTitle, rootDir);
	return result.join("\n");
}

module.exports = buildLinkmap;
