import fs from 'fs';
import path from 'path';

function checkBraces(file) {
    const content = fs.readFileSync(file, 'utf8');
    let open = 0;
    let lines = content.split('\n');
    
    // Quick and dirty brace checker
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // naive count, ignoring comments and strings for now
        for (let char of line) {
            if (char === '{') open++;
            if (char === '}') open--;
        }
        if (open < 0) {
            console.log(`Too many closing braces in ${file} at line ${i+1}`);
            open = 0; // reset
        }
    }
    if (open > 0) {
        console.log(`Missing ${open} closing braces in ${file}`);
    } else if (open === 0) {
        console.log(`${file} brace count is balanced.`);
    }
}

function findCss(dir) {
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(findCss(file));
        } else if (file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const cssFiles = findCss('src');
cssFiles.forEach(f => checkBraces(f));
