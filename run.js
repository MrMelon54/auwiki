#!/usr/bin/env node
// Bootstrap the JS environment for the wiki
// NOTE: do not use packages here that are not in the standard library
const { execSync } = require('child_process');
const fs = require("fs");
const process = require("process");


console.log("Starting AUWiki");

// Move to folder containing this file
process.chdir(__dirname);

// Install node modules if necessary
execSync("pnpm install", { stdio: 'inherit' });

// Run build in the script folder otherwise zola crashes
execSync("pnpm -C scripts run build", { stdio: 'inherit' });

// Run all the required processes with Node-Foreman
execSync("pnpm exec nf start", { stdio: 'inherit' });
