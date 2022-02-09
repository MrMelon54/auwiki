#!/usr/bin/env node
const chokidar = require("chokidar");
const fs = require("fs").promises;

const buildLinkmap = require("./linkmap.js");

const events = ["add", "change", "unlink", "ready"];
const tasks = [{ path: "../content/**/*.md", fn: linkmap, events: events }];

// Tasks

async function linkmap() {
	const content = await buildLinkmap("../content");
	await fs.mkdir("../data", { recursive: true });
	return fs.writeFile("../data/linkmap.toml", content);
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
	return await Promise.all(tasks.map((task) => task.fn()));
}

const runnerTasks = { watch: watch, build: build };

process.argv.forEach((val, index) => {
	if (index >= 2) runnerTasks[val]();
});
