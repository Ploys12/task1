const Calculator = require('../src/calculator');
const assert = require('assert');

describe('Calculator Tests', () => {
  let calculator = new Calculator();

  it('should add two numbers', () => {
    assert.strictEqual(calculator.add(2, 3), 5);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(calculator.subtract(5, 3), 2);
  });

  it('should multiply two numbers', () => {
    assert.strictEqual(calculator.multiply(2, 3), 6);
  });

  it('should divide two numbers', () => {
    assert.strictEqual(calculator.divide(6, 3), 2);
  });

  it('should throw an error when dividing by zero', () => {
    assert.throws(() => calculator.divide(6, 0), Error);
  });
});
