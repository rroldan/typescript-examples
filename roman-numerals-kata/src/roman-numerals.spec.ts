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
  test('convert 4 to IV', () => {
    expect(convert(4)).toMatch('IV');
  })
  test('convert 5 to V', () => {
    expect(convert(5)).toMatch('V');
  })
  test('convert 6 to VI', () => {
    expect(convert(6)).toMatch('VI');
  })
  test('convert 9 to IX', () => {
    expect(convert(9)).toMatch('IX');
  })
  test('convert 10 to X', () => {
    expect(convert(10)).toMatch('X');
  })
});
