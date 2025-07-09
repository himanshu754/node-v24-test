import test from 'node:test';
import assert from 'node:assert';

test('adds numbers correctly', () => {
  assert.strictEqual(2 + 2, 4);
});

test('array contains element', () => {
  assert.ok([1, 2, 3].includes(2));
});
