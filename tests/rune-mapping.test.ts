import futhorc from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = futhorc.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Runes in map have matching letters', () => {
    const resultMap = futhorc.getRuneMapping();

    expect(resultMap.get('')).toBe('');
    expect(resultMap.get('')).toBe('');
    expect(resultMap.get('')).toBe('');
    expect(resultMap.get('')).toBe('');
    expect(resultMap.get(':')).toBe(' ');
  });
});
