/// Find all platuml files (.uml) and generate a diagram for them
const { spawn } = require('child_process');
const path = require("path");

async function buildPlantUmlDiagrams(contentDir) {
  let rootDir = path.resolve(contentDir);
  let puml = spawn('plantuml', ['-i', contentDir + '/**/*.uml', '-tsvg']);
  await new Promise((resolve) => puml.on('close', resolve));
}

module.exports = buildPlantUmlDiagrams;
