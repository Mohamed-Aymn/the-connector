const readline = require('readline');
const { exec } = require('child_process');
const os = require('os');

// ===============================
// reusable functions
// ===============================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query) => new Promise(resolve => rl.question(query, resolve));

const configurationsList = () => {
  console.log("1. firebase persistence");
  console.log("2. firebase auth");
  console.log("3. localization");
  console.log("4. e2e test environment");
};

const breakLine = () => {
  console.log("\n");
};

const runCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`⚠️ stderr: ${stderr}`);
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
};

const deleteGitDirCmd = os.platform() === 'win32'
  ? 'rmdir /s /q .git'
  : 'rm -rf .git';

const deleteDirCmd = (dir) =>
  os.platform() === 'win32'
    ? `rmdir /s /q "${dir}"`
    : `rm -rf "${dir}"`
const deleteFileCmd = (file) =>
  os.platform() === 'win32'
    ? `del /f /q "${file}"`
    : `rm -f "${file}"`;

const actions = {
  1: async () => {
    const dirToDelete = './lib/firebase/db';
    console.log(`Deleting directory: ${dirToDelete} ...`);
    await runCommand(deleteDirCmd(dirToDelete));
    console.log("firebase db configuration and packages deleted successfully.");
  },
  2: async () => {
    const dirToDelete = './lib/firebase/auth';
    console.log(`Deleting directory: ${dirToDelete} ...`);
    await runCommand(deleteDirCmd(dirToDelete));
    console.log("firebase auth configuration and packages deleted successfully.");
  },
  3: async () => {
    const fileToDelete = './middleware.ts';
    const dirToDelete1 = './i18n';
    const dirToDelete2 = './app/[locale]';
    console.log(`Deleting file: ${fileToDelete}...`);
    await runCommand(deleteFileCmd(fileToDelete));
    console.log(`Deleting directory: ${dirToDelete1}...`);
    await runCommand(deleteDirCmd(dirToDelete1));
    console.log(`Deleting directory: ${dirToDelete2}...`);
    await runCommand(deleteDirCmd(dirToDelete2));
    await runCommand("npm remove next-intl");
    console.log("localization configuration and packages deleted successfully.");
  },
  4: async () => {
    const fileToDelete1 = './cypress.config.ts';
    const fileToDelete2 = './firebase.json';
    const dirToDelete = './cypress';
    console.log(`Deleting file: ${fileToDelete1}...`);
    await runCommand(deleteFileCmd(fileToDelete1));
    console.log(`Deleting file: ${fileToDelete2}...`);
    await runCommand(deleteFileCmd(fileToDelete2));
    console.log(`Deleting directory: ${dirToDelete}...`);
    await runCommand(deleteDirCmd(dirToDelete));
    await runCommand("npm remove cypress concurrently");
    console.log("localization configuration and packages deleted successfully.");
  }
};

// ===============================
// Script Start
// ===============================
(async () => {
  console.log("Welcome!");
  breakLine();
  console.log("These are the stuff that are already configured:");
  configurationsList();
  breakLine();

  // Deletion
  const answer = (await ask("Do you want to delete anything from this project? (yes/no): "))
    .trim().toLowerCase();

  if (answer === "yes" || answer === "y") {
    const numbers = await ask("Enter the numbers of the items you want to delete (separate by spaces): ");
    const selected = numbers
      .split(/\s+/)
      .map(n => parseInt(n))
      .filter(n => !isNaN(n) && actions[n]);

    breakLine();
    if (selected.length === 0) {
      console.log("No valid items selected.");
    } else {
      selected.forEach(num => actions[num]());
    }
  } else if (answer === "no" || answer === "n") {
    console.log("Got it, nothing will be deleted.");
  } else {
    console.log("Invalid input. Please answer yes or no.");
  }

  // GitHub
  breakLine();
  console.log("Deleting the current git directory...");
  await runCommand(deleteGitDirCmd);

  console.log("Creating a new git directory...");
  await runCommand("git init");

  breakLine()
  console.log("Have fun! feel free to delete this script file.");
  rl.close();
})();
