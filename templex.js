const fs = require('fs');

class Temp {
    constructor(fp) {
        this.fp = fp;
        this.rawText = fs.readFileSync(`${fp}.tpx`, 'utf-8');
        this.compText = "";
    }

    compile(replacements) {
        var matches = this.rawText.match(/\[\w+\]/g);
        this.compText = this.rawText;

        // replace all matches
        for (var m=0; m!=matches.length; m++) {
            var key = matches[m].replace(/\[|\]/g, '');
            this.compText = this.compText.replace(matches[m], replacements[key]);
        }

        return this.compText;
    }
}

class Templex {
    static compile(fp, replacements=null) {
        var temp = new Temp(fp);
        return temp.compile(replacements || {});
    }
}

module.exports = Templex;