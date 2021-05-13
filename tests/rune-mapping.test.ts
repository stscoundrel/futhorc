import futhorc from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = futhorc.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Runes in map have matching letters', () => {
    const resultMap = futhorc.getRuneMapping();

    expect(resultMap.get('ᚠ')).toBe('f');
    expect(resultMap.get('ᚢ')).toBe('u');
    expect(resultMap.get('ᚦ')).toBe('þ');
    expect(resultMap.get('ᚩ')).toBe('o');
    expect(resultMap.get('ᚱ')).toBe('r');
    expect(resultMap.get('ᚳ')).toBe('c');
    expect(resultMap.get('ᚷ')).toBe('g');
    expect(resultMap.get('ᚹ')).toBe('w');
    expect(resultMap.get('ᚻ')).toBe('h');
    expect(resultMap.get('ᚾ')).toBe('n');
    expect(resultMap.get('ᛁ')).toBe('i');
    expect(resultMap.get('ᛡ')).toBe('j');
    expect(resultMap.get('ᛄ')).toBe('j');
    expect(resultMap.get('ᛇ')).toBe('ï');
    expect(resultMap.get('ᛈ')).toBe('p');
    expect(resultMap.get('ᛉ')).toBe('x');
    expect(resultMap.get('ᛋ')).toBe('s');
    expect(resultMap.get('ᚴ')).toBe('s');
    expect(resultMap.get('ᛏ')).toBe('t');
    expect(resultMap.get('ᛒ')).toBe('b');
    expect(resultMap.get('ᛖ')).toBe('e');
    expect(resultMap.get('ᛗ')).toBe('m');
    expect(resultMap.get('ᛚ')).toBe('l');
    expect(resultMap.get('ᛝ')).toBe('ŋ');
    expect(resultMap.get('ᛟ')).toBe('œ');
    expect(resultMap.get('ᛞ')).toBe('d');
    expect(resultMap.get('ᚪ')).toBe('a');
    expect(resultMap.get('ᚫ')).toBe('æ');
    expect(resultMap.get('ᚣ')).toBe('y');
    expect(resultMap.get('ᛠ')).toBe('ea');
    expect(resultMap.get(':')).toBe(' ');
  });
});
