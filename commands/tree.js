//tree file code
let fs = require("fs");
let path = require("path");

function tree(path) {
    console.log(`tree command executed with path "${path}"`);
    let currentPath = path;

    findContent(currentPath);
}

function findContent(currentPath) {

    let allContents = fs.readdirSync(currentPath);
    for (let i = 0; i < allContents.length; i++) {
        let p = path.join(currentPath, allContents[i]);
        if (fs.lstatSync(p).isFile()) {
            console.log("\t|---- " + allContents[i]);
        } else {
            console.log("|--------------- " + allContents[i] + " ---------------|");
            findContent(p)
        }
    }
}

module.exports = {
    tree: tree
}