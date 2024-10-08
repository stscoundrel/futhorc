# Futhorc

Transform latin letters to Futhorc runes & vice versa

### Deprecation notice:

_This library has been discontinued in favor of [Riimut](https://github.com/stscoundrel/riimut). It contains same functionality for all main runic dialects. This library will also remain available in NPM and should keep working just fine._

Other runic alphabets:
- [Elder Futhark](https://github.com/stscoundrel/elder-futhark)
- [Younger Futhark](https://github.com/stscoundrel/younger-futhark)
- [Futhork (Medieval runes)](https://github.com/stscoundrel/futhork)
- [Staveless Futhark](https://github.com/stscoundrel/staveless-futhark)

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
