const wait = ms => new Promise(res => setTimeout(res, ms));

await wait(3000);
console.log("Top-level await works!");
