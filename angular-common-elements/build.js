const execSync = require("child_process").execSync;
const path = require('path');

var SEPARATOR = process.platform === "win32" ? ";" : ":",
    env = Object.assign({}, process.env);

env.PATH = path.resolve("./node_modules/.bin") + SEPARATOR + env.PATH;

execute("rm -rf dist && npm run build:header && npm run build:footer && mkdir ./dist/es5 && mkdir ./dist/es2015");
execute("npm run pack:header && npm run pack:footer && npm run clean:header && npm run clean:footer");
execute("cp -f preview/index.html dist");

function execute(cmd) {
    var output = execSync(cmd, {
        cwd: process.cwd(),
        env: env,
        stdio: 'inherit'
    });
    console.log(output);
}
