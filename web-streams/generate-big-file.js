import fs from 'fs'

const stream = fs.createWriteStream("big.txt");
for (let i = 0; i < 100000; i++) {
  stream.write("this is a line of text.\n");
}
stream.end(() => console.log("✅ big.txt generated."));