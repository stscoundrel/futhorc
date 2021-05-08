import futhorc from '../src';

describe('Letter mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = futhorc.getLetterMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Common letters have matching runes', () => {
    const resultMap = futhorc.getLetterMapping();

    expect(resultMap.get('a')).toBe('');
    expect(resultMap.get('á')).toBe('');
    expect(resultMap.get('b')).toBe('');
    expect(resultMap.get('c')).toBe('');
    expect(resultMap.get('d')).toBe('');
    expect(resultMap.get('ð')).toBe('');
    expect(resultMap.get('e')).toBe('');
    expect(resultMap.get('é')).toBe('');
    expect(resultMap.get('f')).toBe('');
    expect(resultMap.get('g')).toBe('');
    expect(resultMap.get('h')).toBe('');
    expect(resultMap.get('i')).toBe('');
    expect(resultMap.get('í')).toBe('');
    expect(resultMap.get('j')).toBe('');
    expect(resultMap.get('k')).toBe('');
    expect(resultMap.get('l')).toBe('');
    expect(resultMap.get('m')).toBe('');
    expect(resultMap.get('n')).toBe('');
    expect(resultMap.get('ŋ')).toBe('');
    expect(resultMap.get('o')).toBe('');
    expect(resultMap.get('ó')).toBe('');
    expect(resultMap.get('p')).toBe('');
    expect(resultMap.get('q')).toBe('');
    expect(resultMap.get('r')).toBe('');
    expect(resultMap.get('s')).toBe('');
    expect(resultMap.get('t')).toBe('');
    expect(resultMap.get('u')).toBe('');
    expect(resultMap.get('ú')).toBe('');
    expect(resultMap.get('v')).toBe('');
    expect(resultMap.get('w')).toBe('');
    expect(resultMap.get('x')).toBe('');
    expect(resultMap.get('y')).toBe('');
    expect(resultMap.get('ý')).toBe('');
    expect(resultMap.get('z')).toBe('');
    expect(resultMap.get('å')).toBe('');
    expect(resultMap.get('ä')).toBe('');
    expect(resultMap.get('æ')).toBe('');
    expect(resultMap.get('ö')).toBe('');
    expect(resultMap.get('ø')).toBe('');
    expect(resultMap.get('þ')).toBe('');
    expect(resultMap.get(' ')).toBe('');
  });
});
