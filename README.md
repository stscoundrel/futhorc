# Futhorc

Transform latin letters to Futhorc runes & vice versa

Other runic alphabets:
[Younger Futhark](https://github.com/stscoundrel/younger-futhark)
[Elder Futhark](https://github.com/stscoundrel/futhorc)

### Install

`yarn add futhorc`

#### Usage

You can either transform runes to text, or text to runes.

Latin text to runes:

```javascript
import { lettersToRunes } from 'futhorc'

// From 8th century Franks Casket, in late West Saxon.
const result = lettersToRunes('fisc.flodu.ahofonferg | enberig |')

console.log(result) // ᚠᛁᛋᚳ.ᚠᛚᚩᛞᚢ.ᚪᚻᚩᚠᚩᚾᚠᛖᚱᚷ:|:ᛖᚾᛒᛖᚱᛁᚷ:|
```

Runes to latin text:

```javascript
import { runesToLetters } from 'futhorc'

const result = runesToLetters('ᚠᚢᚦᚩᚱᚳ')

console.log(result) // fuþorc
```

### About Futhorc

The Futhorc, also known as Anglo-Saxon runes, are runes used by the early Anglo-Saxons as an alphabet in their writing system. Based on Elder Futhark, they were in use from 5th through 11th centuries.