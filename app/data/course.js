module.exports = [
  {
    level: 1,
    name: "Level 1: Whet Your Appetite",
    text: {
      intro: `
# Whet Your **Appetite**
Let’s start with the basics…
---
Hangul is a simple alphabet in a complex", "Chinese-character-like disguise.
---
The only big difference between Hangul and other alphabets (like the one you're reading now)
is that instead of all the letters sitting side-by-side in a horizontal row", "Hangul letters
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
# Round&nbsp;One: **Kimchi**
---
**Kimchi** (pronounced “keem-chee” in Korean) contains 4 distinct sounds: **‘k’**, **‘m’**, **‘ch’**, and **‘ee’**.

That means we’ll need to learn 4 Hangul
letters to read it.
          `,
          word: `
Now let’s check out how these four
letters combine to spell **kimchi**
---
**Kimchi** has 2 syllables—**kim** and **chi**—so it has two syllabic blocks.
---
Take a look at the arrangement of the letters within the block.
---
In **kim**, the ㄱ and ㅣ are stacked on top of the ㅁ, but in **chi** the ㅊ and ㅣ are sitting side-by-side.
---
Whenever the vowel is tall and skinny like this, we arrange the block like the ones in **kimchi**.
          `,
          start: `
Alright, enough theory!

Let’s try some reading!
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
# Round&nbsp;Two: **Bibimbap**
          `,
          letters: `
Two new Hangul letters this round.ㅏ is a vowel that makes an "ahh" sound. And ㅂ
is a consonant that represents a "b" or "p" sound.
---
Korean doesn't distinguish between the "b" and "p" sounds (they're allophones)", "so
it only needs the one letter. It usually is pronounced more like an English "b", so
that's usually how ㅂ is written in English. But "p" is pretty common too", "especially
when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English", "both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right", "final consonants below everything else.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅂ", "ㅏ"],
        words: ["김밥", "박", "비", "밤", "가", "차", "감", "마"]
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
            Korean doesn't distinguish between the "b" and "p" sounds (they're allophones)", "so
            it only needs the one letter. It usually is pronounced more like an English "b", so
            that's usually how ㅂ is written in English. But "p" is pretty common too", "especially
            when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English", "both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right", "final consonants below everything else.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅜ", "ㄹ", "ㅗ"],
        words: ["불", "고기", "고추", "곰", "봄", "미국", "길", "발", "칠", "바람"]
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
            Korean doesn't distinguish between the "b" and "p" sounds (they're allophones)", "so
            it only needs the one letter. It usually is pronounced more like an English "b", so
            that's usually how ㅂ is written in English. But "p" is pretty common too", "especially
            when it comes at the end of a word…like "bibimbap".
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Notice how even though we write "bap" in English", "both consonants are the same Hangul
            letter: ㅂ.
            ---
            And notice again how the letters are arranged within the blocks. First consonant top left,
            tall skinny vowel to the right", "final consonants below everything else.
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
    text: {
      intro: `
# World Tour
Welcome to Level 2. Let's go on a trip around the world.
      `
    },
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
        words: ["거", "더", "이", "안", "추석", "독일", "일본"]
      },
      {
        round: 3,
        name: "Round 3: Gangnam",
        headword: "강남",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㅇ"],
        words: ["사랑", "성공", "PC방", "한강", "고추장", "멍멍"]
      },
      {
        round: 4,
        name: "Round 4: Korea",
        headword: "한국",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㅎ"],
        words: ["후추", "호두", "한복"]
      },
      {
        round: 5,
        name: "Round 5: Australia",
        headword: "호주",
        instructions: "Let's start with the basics. Your first Korean word: kimchi.",
        jamo: ["ㅈ"],
        words: ["좀", "가자", "남자", "남자친구"]
      },
      {
        round: 6,
        name: "Round 6: Brazil",
        headword: "브라질",
        jamo: ["ㅡ"],
        words: ["한글", "글자", "참기름", "가슴", "흠"]
      }
    ]
  },

  {
    level: 3,
    name: 'Yes!',
    rounds: [
      {
        round: 1,
        headword: "대박",
        jamo: ["ㅐ"],
        words: ["실패", "새", "해", "런닝맨"]
      },
      {
        round: 2,
        headword: "네",
        jamo: ["ㅔ"],
        words: ["제발", "데뷔", "세기", "섹시"]
      },
      {
        round: 3,
        headword: "야",
        jamo: ["ㅖ", "ㅑ"],
        words: ["예", "예문", "계속", "계란", "양복", "향수"]
      },
      {
        round: 4,
        headword: "안녕",
        jamo: ["ㅕ", "ㅒ"],
        words: ["얘기", "염소", "여자", "변기", "녀석", "여자친구", "걔"]
      },
      {
        round: 5,
        headword: "안녕하세요",
        jamo: ["ㅛ", "ㅠ"],
        words: ["사랑해요", "유머", "두유", "요즘", "학교", "교복"]
      },
      {
        round: 6,
        headword: "짱",
        jamo: ["ㅉ", "ㅆ"],
        words: ["아싸", "쩔어", "짜", "씨름", "싸", "비싸", "쓰레기", "써"]
      },
      {
        round: 7,
        headword: "오빠",
        jamo: ["ㅃ", "ㄸ", "ㄲ"],
        words: ["떡볶이", "꺼져", "뽀로로", "뽀뽀", "띠", "따라", "떨려", "까나리"]
      }
    ]
  },

  {
    level: 4,
    name: 'Westernized.',
    rounds: [
      {
        round: 1,
        headword: "캐나다",
        jamo: ["ㅋ"],
        words: ["멕시코", "홍콩", "카라", "코", "카메라", "크림"]
      },
      {
        round: 2,
        headword: "커피",
        jamo: ["ㅍ"],
        words: ["스팸", "파", "파전", "포도", "피", "팔", "작품"]
      },
      {
        round: 3,
        headword: "티비",
        jamo: ["ㅌ"],
        words: ["베트남", "이탈리아", "토요일", "투명", "놀이터"]
      },
      {
        round: 4,
        headword: "와",
        jamo: ["ㅘ", "ㅙ"],
        words: ["왜", "와인", "과일", "황소", "내놔", "안돼", "꽤"]
      },
      {
        round: 6,
        headword: "뭐?",
        jamo: ["ㅝ", "ㅞ"],
        words: ["웹툰", "고마워요", "원", "내버려둬", "웰빙", "웨딩드레스"]
      },
      {
        round: 7,
        headword: "위험",
        jamo: ["ㅟ", "ㅚ"],
        words: ["외국인", "가위 바위 보", "쥐", "귀", "왼손", "괴물", "회사"]
      },
      {
        round: 8,
        headword: "의사",
        jamo: ["ㅢ"],
        words: ["의자", "의리", "희망"]
      },
    ]
  }
];