let helpObj = require("./commands/help.js");
let organizeObj = require("./commands/organize.js");
let treeObj = require("./commands/tree.js");
let fs = require("fs");
let path = require("path");

//main input

inputArr = process.argv.splice(2);
let command = inputArr[0];
let pa = inputArr[1];
if (fs.existsSync(pa)) {

    switch (command) {
        case "help": helpObj.help();
            break;
        case "tree": treeObj.tree(pa);
            break;
        case "organize": organizeObj.organize(pa);
            break;
        default: console.log("no commands found");
            helpObj.help();
            break;
    }
}