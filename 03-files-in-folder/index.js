const {readdir, stat} = require('fs/promises');
const path = require('path');
const SecretFolder = path.join(__dirname, 'secret-folder');

async function getCollection() {
  try {
    const collection = await readdir(SecretFolder, {
      encoding: "utf-8",
      withFileTypes: true
    });
    for (let part of collection) {
      if (part.isFile()) {
        const tpath = path.join(SecretFolder, part.name);
        const fullInfo = await stat(tpath);
        const fileName = `${part.name.split('.')[0]}`;
        const fileExt = `${path.extname(part.name).slice(1)}`;
        const fileSize = `${fullInfo.size} b`;

        console.log(`${fileName} - ${fileExt} - ${fileSize}`);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getCollection();