export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set('a', '');
  letterMapping.set('á', '');
  letterMapping.set('b', '');
  letterMapping.set('c', '');
  letterMapping.set('d', '');
  letterMapping.set('ð', '');
  letterMapping.set('e', '');
  letterMapping.set('é', '');
  letterMapping.set('f', '');
  letterMapping.set('g', '');
  letterMapping.set('h', '');
  letterMapping.set('i', '');
  letterMapping.set('í', '');
  letterMapping.set('j', '');
  letterMapping.set('k', '');
  letterMapping.set('l', '');
  letterMapping.set('m', '');
  letterMapping.set('n', '');
  letterMapping.set('ŋ', '');
  letterMapping.set('o', '');
  letterMapping.set('ó', '');
  letterMapping.set('p', '');
  letterMapping.set('q', '');
  letterMapping.set('r', '');
  letterMapping.set('s', '');
  letterMapping.set('t', '');
  letterMapping.set('u', '');
  letterMapping.set('ú', '');
  letterMapping.set('v', '');
  letterMapping.set('w', '');
  letterMapping.set('x', '');
  letterMapping.set('y', '');
  letterMapping.set('ý', '');
  letterMapping.set('z', '');
  letterMapping.set('å', '');
  letterMapping.set('ä', '');
  letterMapping.set('æ', '');
  letterMapping.set('ö', '');
  letterMapping.set('ø', '');
  letterMapping.set('þ', '');
  letterMapping.set(' ', '');
  return letterMapping;
};

export default {
  getLetterMapping,
};
