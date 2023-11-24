#!/usr/bin/env node
const fs = require("fs");
const yargs = require("yargs");

const argv = yargs.argv;

try {
  const folderPath = argv._[0] ?? "./";
  const files = fs.readdirSync(folderPath);
  console.log(files);
} catch (error) {
  console.error("Une erreur s'est produite lors de la lecture du dossier :", error);
}
