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
  test('convert 11 to XI', () => {
    expect(convert(11)).toMatch('XI');
  })
  test('convert 19 to XIX', () => {
    expect(convert(19)).toMatch('XIX');
  })
  test('convert 40 to XL', () => {
    expect(convert(40)).toMatch('XL');
  })
  test('convert 41 to XLI', () => {
    expect(convert(41)).toMatch('XLI');
  })
  test('convert 50 to L', () => {
    expect(convert(50)).toMatch('L');
  })

});
