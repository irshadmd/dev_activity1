//help commands

function help() {
    console.log("list of all commands");
    console.log(`1. node main.js tree "path"`);
    console.log(`2. node main.js organize "path"`);
    console.log(`3. node main.js help "path"`);
}

module.exports = {
    help: help
}