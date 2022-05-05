#!/usr/bin/env node
const chokidar = require("chokidar");
const fs = require("fs").promises;
const process = require("process");

const buildLinkmap = require("./linkmap.js");
const buildPlantUmlDiagrams = require("./plantuml.js");

const events = ["add", "change", "unlink", "ready"];
const tasks = [
	{ path: "../content/**/*.md", fn: linkmap, events: events },
	{ path: "../content/**/*.uml", fn: plantuml, events: events },
];

// Tasks

async function linkmap() {
	const content = await buildLinkmap("../content");
	await fs.mkdir("../data", { recursive: true });
	await fs.writeFile("../data/linkmap.toml", content);
	return 0;
}

async function plantuml() {
	let code = await buildPlantUmlDiagrams("../content");
	if (code != 0) {
		console.log("PlantUML exited with error code " + code);
	}
	return code;
}

// Runner Tasks

async function watch() {
	tasks.forEach((task) => {
		const watcher = chokidar.watch(task.path, { ignoreInitial: true });
		const watchFn = () => {
			console.log("Starting " + task.fn.name);
			console.time("Finished " + task.fn.name);
			task.fn();
			console.timeEnd("Finished " + task.fn.name);
		};
		task.events.forEach((event) => {
			watcher.on(event, watchFn);
		});
	});
}

async function build() {
	let exitcodes = await Promise.all(tasks.map((task) => task.fn()));
	let exitcode = exitcodes.reduce((a, b) => a + b, 0);
	if (exitcode != 0) {
		process.exit(1);
	}
}

const runnerTasks = { watch: watch, build: build };

process.argv.forEach((val, index) => {
	if (index >= 2) runnerTasks[val]();
});
