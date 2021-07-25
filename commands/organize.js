//organize file code
let fs = require('fs');
let path = require('path');


function organize(mainPath) {
    console.log(`organize command executed with path "${mainPath}"`);
    let rootDirPath = path.join(mainPath, "organized");
    if (path.existsSync(rootDirPath)) {

    } else {
        fs.mkdirSync(rootDirPath)
    }
}

module.exports = {
    organize: organize
}