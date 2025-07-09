import fs from 'fs/promises';
import { TextEncoder, TextDecoder } from 'node:util';

import { Readable , Writable} from 'node:stream';

async function getReadableStreamFromFile(path) {
  const fileHandle = await fs.open(path, 'r');
  const fileStream = fileHandle.createReadStream();
  const webStream = Readable.toWeb(fileStream); 
  return webStream;
}


function createTransformStream() {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  return new TransformStream({
    transform(chunk, controller) {
      const text = decoder.decode(chunk);
      const upper = text.toUpperCase();
      controller.enqueue(encoder.encode(upper));
    }
  });
}

async function getWritableStreamToFile(path) {
  const fileHandle = await fs.open(path, 'w');
  const fileStream = fileHandle.createWriteStream();
  const webStream = Writable.toWeb(fileStream); // ✅ Convert Node stream to Web stream
  return webStream;
}

async function main() {
  const readable = await getReadableStreamFromFile('big.txt');
  const writable = await getWritableStreamToFile('big.UPPER.txt');
  const transform = createTransformStream();

  await readable
    .pipeThrough(transform)
    .pipeTo(writable);

  console.log('✅ Transformed file saved as big.UPPER.txt');
}

await main();