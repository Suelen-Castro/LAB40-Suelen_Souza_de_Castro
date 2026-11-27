const test = require('node:test');
const assert = require('node:assert/strict');
const feature = require('../src/features/feature06');

test('calcula média de três valores', () => {
  assert.equal(feature.execute({ valores: [7, 8, 9] }).media, 8);
});

test('aceita um elemento e valores decimais', () => {
  assert.equal(feature.execute({ valores: [10] }).media, 10);
  assert.equal(feature.execute({ valores: [1.5, 2.5] }).media, 2);
});

test('rejeita array vazio e elementos não numéricos', () => {
  for (const valores of [[], '7,8,9', [1, null], [1, '2'], [1, Infinity], [1, NaN]]) {
    assert.throws(() => feature.execute({ valores }), { name: 'Error' });
  }
});
