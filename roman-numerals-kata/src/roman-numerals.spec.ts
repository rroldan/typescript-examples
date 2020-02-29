import { convert } from './roman-numerals';

describe('convert decimal number to roman number', () => {
  test('convert 1 to I', () => {
    expect(convert(1)).toMatch('I');
  });
  test('convert 2 to II', () => {
    expect(convert(2)).toMatch('II');
  });
  test('convert 3 to III', () => {
    expect(convert(3)).toMatch('III');
  })
  test('convert 5 to V', () => {
    expect(convert(5)).toMatch('V');
  })
});
