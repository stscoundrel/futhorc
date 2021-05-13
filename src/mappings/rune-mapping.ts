export const getRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set('ᚠ', 'f');
  runeMapping.set('ᚢ', 'u');
  runeMapping.set('ᚦ', 'þ');
  runeMapping.set('ᚩ', 'o');
  runeMapping.set('ᚱ', 'r');
  runeMapping.set('ᚳ', 'c');
  runeMapping.set('ᚷ', 'g');
  runeMapping.set('ᚹ', 'w');
  runeMapping.set('ᚻ', 'h');
  runeMapping.set('ᚾ', 'n');
  runeMapping.set('ᛁ', 'i');
  runeMapping.set('ᛡ', 'j');
  runeMapping.set('ᛄ', 'j');
  runeMapping.set('ᛇ', 'ï');
  runeMapping.set('ᛈ', 'p');
  runeMapping.set('ᛉ', 'x');
  runeMapping.set('ᛋ', 's');
  runeMapping.set('ᚴ', 's');
  runeMapping.set('ᛏ', 't');
  runeMapping.set('ᛒ', 'b');
  runeMapping.set('ᛖ', 'e');
  runeMapping.set('ᛗ', 'm');
  runeMapping.set('ᛚ', 'l');
  runeMapping.set('ᛝ', 'ŋ');
  runeMapping.set('ᛟ', 'œ');
  runeMapping.set('ᛞ', 'd');
  runeMapping.set('ᚪ', 'a');
  runeMapping.set('ᚫ', 'æ');
  runeMapping.set('ᚣ', 'y');
  runeMapping.set('ᛠ', 'ea');
  runeMapping.set(':', ' ');
  return runeMapping;
};

export default {
  getRuneMapping,
};
