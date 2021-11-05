// IMPORT MODULES under test here:
import { add, sub, div, mult } from '../math-utils.js';

const test = QUnit.test;

test('add() should take in 1 and 1 and return 2', (expect) => {
    const expected = 2;
    const actual = add(1, 1);
    expect.equal(actual, expected);
});

test('sub() should take in 5 and 3 and return 2', (expect) => {
    const expected = 2;
    const actual = sub(5, 3);
    expect.equal(actual, expected);
});

test('div() should take in 8 and 2 and return 4', (expect) => {
    const expected = 4;
    const actual = div(8, 2);
    expect.equal(actual, expected);
});

test('mult() should take in 3 and 4 and return 12', (expect) => {
    const expected = 12;
    const actual = mult(3, 4);
    expect.equal(actual, expected);
});