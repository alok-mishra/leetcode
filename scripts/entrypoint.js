const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

const files = fs.readdirSync(srcDir);

const tsFiles = files
    .filter((file) => file.endsWith('.ts'))
    .sort((a, b) => {
        const aStat = fs.statSync(path.resolve(srcDir, a));
        const bStat = fs.statSync(path.resolve(srcDir, b));
        return bStat.mtimeMs - aStat.mtimeMs;
    });

const tsFile = path.resolve(srcDir, tsFiles[0]);

// console.log(`${tsFile} is being used as the entrypoint.`);

const entrypointPath = path.resolve(__dirname, '../dist/.entrypoint');
fs.writeFileSync(entrypointPath, tsFile);
console.log(tsFile);
