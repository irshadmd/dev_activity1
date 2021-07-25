//organize file code
let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organize(mainPath) {
    console.log(`organize command executed with path "${mainPath}"`);

    if (fs.existsSync(mainPath)) {
        let rootDirPath = path.join(mainPath, "organized_files");
        if (fs.existsSync(rootDirPath)) {
            console.log("Already organized");
        } else {
            fs.mkdirSync(rootDirPath);
            let mediaPath = path.join(rootDirPath, "media");
            let archivesPath = path.join(rootDirPath, "archives");
            let documentsPath = path.join(rootDirPath, "documents");
            let appPath = path.join(rootDirPath, "app");
            let othersPath = path.join(rootDirPath, "others");
            fs.mkdirSync(mediaPath);
            fs.mkdirSync(archivesPath);
            fs.mkdirSync(documentsPath);
            fs.mkdirSync(appPath);
            fs.mkdirSync(othersPath);

            let allContents = fs.readdirSync(mainPath);
            console.log(allContents);
            for (let i = 0; i < allContents.length; i++) {
                let filePath = path.join(mainPath, allContents[i]);
                if (fs.lstatSync(filePath).isFile()) {
                    console.log("true");
                    let fileExtn = allContents[i].split(".")[1];
                    console.log(fileExtn);
                    if (fileExtn == "mp4" || fileExtn == "mkv") {
                        //media
                        let destPath = path.join(mediaPath, allContents[i]);
                        fs.copyFileSync(filePath, destPath);
                    } else if (fileExtn == 'zip' || fileExtn == '7z' || fileExtn == 'rar' || fileExtn == 'tar' || fileExtn == 'gz' || fileExtn == 'ar' || fileExtn == 'iso' || fileExtn == "xz") {
                        //archives
                        let destPath = path.join(archivesPath, allContents[i]);
                        fs.copyFileSync(filePath, destPath);
                    }
                    else if (fileExtn == 'docx' || fileExtn == 'doc' || fileExtn == 'pdf' || fileExtn == 'xlsx' || fileExtn == 'xls' || fileExtn == 'odt' || fileExtn == 'ods' || fileExtn == 'odp' || fileExtn == 'odg' || fileExtn == 'odf' || fileExtn == 'txt' || fileExtn == 'ps' || fileExtn == 'tex') {
                        //documents
                        let destPath = path.join(documentsPath, allContents[i]);
                        fs.copyFileSync(filePath, destPath);
                    } else if (fileExtn == 'exe' || fileExtn == 'dmg' || fileExtn == 'pkg' || fileExtn == "deb") {
                        //app
                        let destPath = path.join(appPath, allContents[i]);
                        fs.copyFileSync(filePath, destPath);
                    } else {
                        //others
                        let destPath = path.join(othersPath, allContents[i]);
                        fs.copyFileSync(filePath, destPath);
                    }
                }
            }

            console.log("organized all files");

        }
    } else {
        console.log("invalid path");
    }

}

module.exports = {
    organize: organize
}