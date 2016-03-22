module.exports = [
  {
    level: 1,
    name: "Level 1: Whet Your Appetite",
    text: {
      intro: `
# Whet Your **Appetite**
Let’s start with the basics…
---
Hangul is a simple alphabet in a complex, Chinese-character-like disguise.
---
The only big difference between Hangul and the other alphabets (like the one you're reading now)
is that instead of all the letters sitting side-by-side in a horizontal row, Hangul letters
are stacked up into blocks—one for each syllable.
---
It takes most people only about 20-40 minutes to learn Hangul. Let's get started!
      `
    },
    rounds: [
      {
        round: 1,
        name: "Round 1: Kimchi",
        headword: "김치",
        text: {
          intro: `
First things first: **kimchi**
---
**Kimchi** (pronounced “keem-chee” in Korean) contains 4 distinct sounds: ‘k’, ‘m’, ‘ch’, and ‘ee’.

That means we’ll need to learn 4 Hangul
letters to read it.
          `,
          word: `
‘Kimchi’ has 2 syllables—‘kim’ and ‘chi’—so it’s arranged into 2 blocks.
---
Notice how in the first syllable, the ㄱ and ㅣ are sitting on top of the ㅁ, but in the second
syllable the ㅊ and ㅣ are just sitting next to each other.
---
When a syllable ends in a consonant, that final consonant goes at the bottom of
the block. The starting consonant always goes in the top left of the block. And tall,
skinny vowels always sit to the right of the first consonant.
          `,
          start: `
That's enough with the theory. Let’s read some Hangul!
          `,
          outro: `
Woo! Four letters and four words down. Let’s keep going!
          `
        },
        jamo: ["ㄱ", "ㅣ", "ㅁ", "ㅊ"],
        words: ["침", "기", "김"]
      },
      {
        round: 2,
        name: "Round 2: Bibimbap",
        headword: "비빔밥",
        text: {
          intro: `
Time to move up to a full meal. Let's learn how to read “Bibimbap”.
          `,
          letters: `
Two new Hangul letters this round.ㅏ is a vowel that makes an "ahh" sound. And ㅂ
is a consonant that represents a "b" or "p" sound.
---
Korean doesn't distinguish between the "b" and "p" sounds (they're allophones), so
it only needs the one letter. It usually is pronounced more like an English "b", so
that's usually how ㅂ is written in English. But "p" is pretty common too, especially
when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English, both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right, final consonants below everything else.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅂ", "ㅏ"],
        words: ["박", "비", "밤", "가", "차", "감", "마"]
      },
      {
        round: 3,
        name: "Round 3: Bulgogi",
        headword: "불고기",
        text: {
          intro: `
            Did you know "bulgogi" is literally "fire-meat"? You will soon!
          `,
          letters: `
            Two new Hangul letters this round.ㅏ is a vowel that makes an "ahh" sound. And ㅂ
            is a consonant that represents a "b" or "p" sound.
            ---
            Korean doesn't distinguish between the "b" and "p" sounds (they're allophones), so
            it only needs the one letter. It usually is pronounced more like an English "b", so
            that's usually how ㅂ is written in English. But "p" is pretty common too, especially
            when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English, both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right, final consonants below everything else.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅜ", "ㄹ", "ㅗ"],
        words: ["불", "고기", "곰", "봄", "미국", "길", "발", "칠", "바람", "비바람"]
      },
      {
        round: 4,
        name: "Round 4: Mandu",
        headword: "만두",
        text: {
          intro: `
            Time to move up to a full meal. Let's learn how to read “Bibimbap”.
          `,
          letters: `
            Two new Hangul letters this round.ㅏ is a vowel that makes an "ahh" sound. And ㅂ
            is a consonant that represents a "b" or "p" sound.
            ---
            Korean doesn't distinguish between the "b" and "p" sounds (they're allophones), so
            it only needs the one letter. It usually is pronounced more like an English "b", so
            that's usually how ㅂ is written in English. But "p" is pretty common too, especially
            when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English, both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right, final consonants below everything else.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㄴ", "ㄷ"],
        words: ["친구", "돈", "나", "나가", "다"]
      }
    ]
  },

  {
    level: 2,
    name: "Level 2: World Tour",
    intro: "Here we go y'allllll",
    rounds: [
      {
        round: 1,
        name: "Round 1: Busan",
        headword: "부산",
        instructions: `
          Let's start with the basics. Your first Korean word: kimchi.
        `,
        jamo: ["ㅅ"],
        words: ["산", "삼", "사", "살", "소", "술", "신", "신발"]
      },
      {
        round: 2,
        name: "Round 2: Seoul",
        headword: "서울",
        instructions: `
          Let's start with the basics. Your first Korean word: kimchi.
        `,
        jamo: ["ㅓ", "ㅇ"],
        words: ["너", "거", "더", "알", "이", "안", "추석", "고추", "독일", "일본"]
      },
      {
        round: 3,
        name: "Round 3: Gangnam",
        headword: "강남",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㅇ"],
        words: ["곰", "봄", "미국", "길", "발", "칠", "바람", "비바람"]
      },
      {
        round: 4,
        name: "Round 4: Korea",
        headword: "한국",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㄴ", "ㄷ"],
        words: ["친구", "나", "나가", "다"]
      },
      {
        round: 5,
        name: "Round 5: Australia",
        headword: "호주",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㄴ", "ㄷ"],
        words: ["친구", "나", "나가", "다"]
      },
      {
        round: 6,
        name: "Round 6: England",
        headword: "영국",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㄴ", "ㄷ"],
        words: ["친구", "나", "나가", "다"]
      }
    ]
  }
];