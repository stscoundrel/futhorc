import futhorc from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const content = 'ᚠᚢᚦᚩᚱᚳᚷᚹᚻᚾᛁᛡᛄᛇᛈᛉᛋᚴᛏᛒᛖᛗᛚᛝᛟᛞᚪᚫᚣᛠ:';
    const expected = 'fuþorcgwhnijjïpxsstbemlŋœdaæyea ';

    const result = futhorc.runesToLetters(content);

    expect(result).toBe(expected);
  });

  test('Transforms full rune sentence', () => {
    // From 8th century Franks Casket, in late West Saxon.
    const runes = 'ᚹᚪᚱᚦᚷᚪ:ᛋᚱᛁᚳᚷᚱᚩᚱᚾᚦᚫᚱᚻᛖᚩᚾᚷᚱᛖᚢᛏᚷᛁᛋᚹᚩᛗ:|:ᚻᚱᚩᚾᚫᛋᛒᚪᚾ';
    const expected = 'warþga sricgrornþærheongreutgiswom | hronæsban';

    const result = futhorc.runesToLetters(runes);

    expect(result).toBe(expected);
  });
});
