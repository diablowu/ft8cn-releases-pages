const ejs = require('ejs');
const fs = require('fs');














function makeRelease(apkFile, version, date){
    const apk = fs.readFileSync(apkFile);
    const apkBase64 = new Buffer(apk).toString('base64');
    const template = fs.readFileSync('./template.ejs', 'utf8');
    const html = ejs.render(template, {
        apk: apkBase64,
        version: version,
        date: date
    });
    fs.writeFileSync('./release.html', html);
}



