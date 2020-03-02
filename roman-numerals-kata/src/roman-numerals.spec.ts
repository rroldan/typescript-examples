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
  test('convert 73 to LXXIII', () => {
    expect(convert(73)).toMatch('LXXIII');
  })
  test('convert 90 to XC', () => {
    expect(convert(90)).toMatch('XC');
  })
  test('convert 100 to C', () => {
    expect(convert(100)).toMatch('C');
  })
  test('convert 214 to CCXIV', () => {
    expect(convert(214)).toMatch('CCXIV');
  })
  test('convert 400 to CD', () => {
    expect(convert(400)).toMatch('CD');
  })
  test('convert 430 to CD', () => {
    expect(convert(430)).toMatch('CDXXX');
  })
  test('convert 500 to D', () => {
    expect(convert(500)).toMatch('D');
  })
  test('convert 523 to D', () => {
    expect(convert(523)).toMatch('DXXIII');
  })
  test('convert 900 to CM', () => {
    expect(convert(900)).toMatch('CM');
  })
  test('convert 925 to CM', () => {
    expect(convert(925)).toMatch('CMXXV');
  })
  test('convert 1000 to M', () => {
    expect(convert(1000)).toMatch('M');
  })
  test('convert 1001 to Error', () => {
    expect(convert(1001)).toMatch('error exceeded max number range');
  })
});
