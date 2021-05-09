export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set('a', 'ᚪ');
  letterMapping.set('á', 'ᚪ');
  letterMapping.set('b', 'ᛒ');
  letterMapping.set('c', 'ᚳ');
  letterMapping.set('d', 'ᛞ');
  letterMapping.set('ð', 'ᛞ');
  letterMapping.set('e', 'ᛖ');
  letterMapping.set('é', 'ᛖ');
  letterMapping.set('f', 'ᚠ');
  letterMapping.set('g', 'ᚷ');
  letterMapping.set('h', 'ᚻ');
  letterMapping.set('i', 'ᛁ');
  letterMapping.set('í', 'ᛇ');
  letterMapping.set('ï', 'ᛇ');
  letterMapping.set('ʒ', 'ᛇ');
  letterMapping.set('j', 'ᛡ');
  letterMapping.set('k', 'ᚳ');
  letterMapping.set('l', 'ᛚ');
  letterMapping.set('m', 'ᛗ');
  letterMapping.set('n', 'ᚾ');
  letterMapping.set('ŋ', 'ᛝ');
  letterMapping.set('o', 'ᚩ');
  letterMapping.set('ó', 'ᚩ');
  letterMapping.set('p', 'ᛈ');
  letterMapping.set('q', 'ᚳ');
  letterMapping.set('r', 'ᚱ');
  letterMapping.set('s', 'ᛋ');
  letterMapping.set('t', 'ᛏ');
  letterMapping.set('u', 'ᚢ');
  letterMapping.set('ú', 'ᚢ');
  letterMapping.set('v', 'ᚹ');
  letterMapping.set('w', 'ᚹ');
  letterMapping.set('x', 'ᛉ');
  letterMapping.set('y', 'ᚣ');
  letterMapping.set('ý', 'ᚣ');
  letterMapping.set('z', 'ᛉ');
  letterMapping.set('å', 'ᚩ');
  letterMapping.set('ä', 'ᚫ');
  letterMapping.set('æ', 'ᚫ');
  letterMapping.set('œ', 'ᛟ');
  letterMapping.set('ö', 'ᛟ');
  letterMapping.set('ø', 'ᛟ');
  letterMapping.set('þ', 'ᚦ');
  letterMapping.set(' ', ':');

  return letterMapping;
};

export default {
  getLetterMapping,
};
