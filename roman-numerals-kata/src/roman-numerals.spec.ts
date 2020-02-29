import { convert } from './roman-numerals';

test('convert 1', () => {
    expect(convert(1)).toMatch('I');
  });