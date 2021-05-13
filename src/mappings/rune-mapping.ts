export const getRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set('', '');
  runeMapping.set('', '');
  runeMapping.set('', '');
  runeMapping.set('', '');
  runeMapping.set(':', ' ');
  return runeMapping;
};

export default {
  getRuneMapping,
};
