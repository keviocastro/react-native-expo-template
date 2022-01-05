/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const tsc = stagedFilenames => {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  tsconfig.include = stagedFilenames;
  fs.writeFileSync('tsconfig.tmp.json', JSON.stringify(tsconfig));
  return 'tsc --project tsconfig.tmp.json';
};

module.exports = {
  '*.{ts,tsx}': ['eslint --cache --fix', tsc],
};
