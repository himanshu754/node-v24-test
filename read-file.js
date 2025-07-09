import fs from 'fs';

try {
  const data = fs.readFileSync('sample.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('File access denied:', err.message);
}