/*
  Thanks: https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
*/
const fs = require('fs');
const path = require('path');

if (process.argv.length != 3) {
  console.error('Usage: node use_template.js <ServiceName>')
  process.exit(-1);
}

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      if (file.includes('SERVICENAMEHERE')) {
        fs.renameSync(`${dirPath}/${file}`, `${dirPath}/${file.replace('SERVICENAMEHERE', process.argv[2].toLowerCase())}`)
        file = file.replace('SERVICENAMEHERE', process.argv[2].toLowerCase());
      }
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

getAllFiles('.').forEach(file => {
  if (file.includes('SERVICENAMEHERE')) {
    console.log(`Renaming file ${file} -> ${file.replace('SERVICENAMEHERE', process.argv[2].toLowerCase())}`);
    fs.renameSync(file, file.replace('SERVICENAMEHERE', process.argv[2].toLowerCase()))
    file = file.replace('SERVICENAMEHERE', process.argv[2].toLowerCase());
  }
  const ogData = fs.readFileSync(file, 'utf8');
  let data = ogData;
  data = data.toString('utf8').replaceAll('SERVICENAMEHEREUPPERCASE', process.argv[2].toUpperCase());
  data = data.replaceAll('SERVICENAMEHERE', process.argv[2]);
  data = data.replaceAll('SERVICEIDHERE', process.argv[2].toLowerCase());

  if (data !== ogData) {
    console.log(`Replacing placeholders in ${file}`);
    fs.writeFileSync(file, data);
  }
});

// Script done, self destruct
fs.unlinkSync('./use_template.js');