import futhorc from '../src';

describe('Letter mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = futhorc.getLetterMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Common letters have matching runes', () => {
    const resultMap = futhorc.getLetterMapping();

    expect(resultMap.get('a')).toBe('ᚪ');
    expect(resultMap.get('á')).toBe('ᚪ');
    expect(resultMap.get('b')).toBe('ᛒ');
    expect(resultMap.get('c')).toBe('ᚳ');
    expect(resultMap.get('d')).toBe('ᛞ');
    expect(resultMap.get('ð')).toBe('ᛞ');
    expect(resultMap.get('e')).toBe('ᛖ');
    expect(resultMap.get('é')).toBe('ᛖ');
    expect(resultMap.get('f')).toBe('ᚠ');
    expect(resultMap.get('g')).toBe('ᚷ');
    expect(resultMap.get('h')).toBe('ᚻ');
    expect(resultMap.get('i')).toBe('ᛁ');
    expect(resultMap.get('í')).toBe('ᛇ');
    expect(resultMap.get('ï')).toBe('ᛇ');
    expect(resultMap.get('ʒ')).toBe('ᛇ');
    expect(resultMap.get('j')).toBe('ᛡ');
    expect(resultMap.get('k')).toBe('ᚳ');
    expect(resultMap.get('l')).toBe('ᛚ');
    expect(resultMap.get('m')).toBe('ᛗ');
    expect(resultMap.get('n')).toBe('ᚾ');
    expect(resultMap.get('ŋ')).toBe('ᛝ');
    expect(resultMap.get('o')).toBe('ᚩ');
    expect(resultMap.get('ó')).toBe('ᚩ');
    expect(resultMap.get('p')).toBe('ᛈ');
    expect(resultMap.get('q')).toBe('ᚳ');
    expect(resultMap.get('r')).toBe('ᚱ');
    expect(resultMap.get('s')).toBe('ᛋ');
    expect(resultMap.get('t')).toBe('ᛏ');
    expect(resultMap.get('u')).toBe('ᚢ');
    expect(resultMap.get('ú')).toBe('ᚢ');
    expect(resultMap.get('v')).toBe('ᚹ');
    expect(resultMap.get('w')).toBe('ᚹ');
    expect(resultMap.get('x')).toBe('ᛉ');
    expect(resultMap.get('y')).toBe('ᚣ');
    expect(resultMap.get('ý')).toBe('ᚣ');
    expect(resultMap.get('z')).toBe('ᛉ');
    expect(resultMap.get('å')).toBe('ᚩ');
    expect(resultMap.get('ä')).toBe('ᚫ');
    expect(resultMap.get('æ')).toBe('ᚫ');
    expect(resultMap.get('œ')).toBe('ᛟ');
    expect(resultMap.get('ö')).toBe('ᛟ');
    expect(resultMap.get('ø')).toBe('ᛟ');
    expect(resultMap.get('þ')).toBe('ᚦ');
    expect(resultMap.get(' ')).toBe(':');
  });
});
