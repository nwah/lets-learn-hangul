module.exports = [
  {
    level: 1,
    name: "Food",
    text: {
      intro: `
# Level One: Food
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
        name: "Kimchi",
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
        name: "Bibimbap",
        headword: "비빔밥",
        text: {
          intro: `
# Round&nbsp;Two: **Bibimbap**
          `,
          word: `
            Three syllables. Three blocks. Bi. Bim. Bap.
            ---
            Even though we write b-a-p in English, they're the same Hangul
            letter ㅂ
            ---
            Take a look at how the letters are arranged inside each block…
            ---
            The initial consonant is in top left corner…
            ---
            The tall skinny vowel is on the right…
            ---
            …and any final consonants are down at the bottom.
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
        name: "Bulgogi",
        headword: "불고기",
        text: {
          intro: `
# Round&nbsp;Three: **Bulgogi**
          `,
          word: `
            The keyword for this round is **bulgogi**.
            ---
            Check out how the **ㄱ** changes shape to fit with the other letters.
            ---
            **Bul** means "fire", and **gogi** means "meat"
            ---
            Put them together and you've got **bulgogi**: tasty
            Korean barbecue.
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
        name: "Mandu",
        headword: "만두",
        text: {
          intro: `
# Round&nbsp;Four: **Mandu**
          `,
          word: `
            **Mandu** is the Korean word for dumplings
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
    name: "World Tour",
    text: {
      intro: `
# World Tour
Welcome to Level 2. Let's go on a trip around the world.
      `
    },
    rounds: [
      {
        round: 1,
        name: "Busan",
        headword: "부산",
        text: {
          intro: `
# Round&nbsp;One: **Busan**
          `,
          word: `
            **Busan** is Korea’s second biggest city, located on the coast in the southeast
            ---
            Busan’s got beaches, mountains, temples, and a cool accent.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅅ"],
        words: ["산", "삼", "사", "살", "소", "술", "신", "신발"]
      },
      {
        round: 2,
        name: "Seoul",
        headword: "서울",
        text: {
          intro: `
# Round&nbsp;Two: **Seoul**
          `,
          word: `
            **Seoul** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅓ", "ㅇ"],
        words: ["거", "더", "이", "안", "추석", "독일", "일본"]
      },
      {
        round: 3,
        name: "Gangnam",
        headword: "강남",
        text: {
          intro: `
# Round&nbsp;Three: **Gangnam**
          `,
          word: `
            **Gangnam** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅇ"],
        words: ["사랑", "성공", "PC방", "고추장", "멍멍"]
      },
      {
        round: 4,
        name: "Korea",
        headword: "한국",
        text: {
          intro: `
# Round&nbsp;Four: **Korea**
          `,
          word: `
            Korea blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅎ"],
        words: ["후추", "한강", "호두", "한복"]
      },
      {
        round: 5,
        name: "Australia",
        headword: "호주",
        text: {
          intro: `
# Round&nbsp;Five: **Australia**
          `,
          word: `
            Australia blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅈ"],
        words: ["좀", "가자", "남자", "남자친구"]
      },
      {
        round: 6,
        name: "Brazil",
        headword: "브라질",
        text: {
          intro: `
# Round&nbsp;Six: **Brazil**
          `,
          word: `
            Brazil blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
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
        name: "Daebak!",
        headword: "대박",
        text: {
          intro: `
# Round&nbsp;One: **Daebak!**
          `,
          word: `
            **Daebak** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅐ"],
        words: ["새", "해", "런닝맨", "개"]
      },
      {
        round: 2,
        name: "Yes",
        headword: "네",
        text: {
          intro: `
# Round&nbsp;Two: **Yes**
          `,
          word: `
            **Yes** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅔ"],
        words: ["제발", "세기", "섹시"]
      },
      {
        round: 3,
        headword: "짱",
        text: {
          intro: `
# Round&nbsp;Three: **The Best!**
          `,
          word: `
            **Busan** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅉ", "ㅆ"],
        words: ["아싸", "쩔어", "짜", "씨름", "싸", "비싸", "쓰레기", "써"]
      },
      {
        round: 4,
        headword: "오빠",
        text: {
          intro: `
# Round&nbsp;Four: **Oppa**
          `,
          word: `
            **Oppa** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅃ", "ㄸ", "ㄲ"],
        words: ["떡볶이", "꺼져", "뽀로로", "뽀뽀", "띠", "따라", "떨리다", "까나리"]
      },
      {
        round: 5,
        name: "Hey!",
        headword: "야",
        text: {
          intro: `
# Round&nbsp;Five: **Hey!**
          `,
          word: `
            **Hey!** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅖ", "ㅑ"],
        words: ["예", "예문", "계속", "계란", "양복", "향수"]
      },
      {
        round: 6,
        name: "Hi!",
        headword: "안녕",
        text: {
          intro: `
# Round&nbsp;Six: **Hi**
          `,
          word: `
            **Hi** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅕ", "ㅒ"],
        words: ["얘기", "염소", "여자", "변기", "녀석", "여자친구", "걔"]
      },
      {
        round: 7,
        headword: "안녕하세요",
        text: {
          intro: `
# Round&nbsp;Seven: **Hello**
          `,
          word: `
            **Hello** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅛ", "ㅠ"],
        words: ["사랑해요", "유머", "두유", "요즘", "학교", "교복"]
      },
    ]
  },

  {
    level: 4,
    name: 'Go West!',
    rounds: [
      {
        round: 1,
        headword: "캐나다",
        text: {
          intro: `
# Round&nbsp;One: **Canada**
          `,
          word: `
            **Canada** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅋ"],
        words: ["멕시코", "홍콩", "카라", "코", "카메라", "크림"]
      },
      {
        round: 2,
        headword: "티비",
        text: {
          intro: `
# Round&nbsp;Two: **TV**
          `,
          word: `
            **TV** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅌ"],
        words: ["베트남", "이탈리아", "토요일", "투명", "놀이터"]
      },
      {
        round: 3,
        headword: "커피",
        text: {
          intro: `
# Round&nbsp;Three: **Coffee**
          `,
          word: `
            **Busan** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅍ"],
        words: ["실패", "스팸", "파", "파전", "포도", "피", "팔", "작품"]
      },
      {
        round: 4,
        headword: "와",
        text: {
          intro: `
# Round&nbsp;Four: **Wow**
          `,
          word: `
            **Wow** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅘ", "ㅙ"],
        words: ["왜", "와인", "과일", "황소", "내놔", "안돼", "꽤"]
      },
      {
        round: 5,
        headword: "뭐?",
        text: {
          intro: `
# Round&nbsp;Five: **What?**
          `,
          word: `
            **Busan** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅝ", "ㅞ"],
        words: ["웹툰", "고마워요", "원", "내버려둬", "웰빙", "웨딩드레스"]
      },
      {
        round: 6,
        headword: "위험",
        text: {
          intro: `
# Round&nbsp;Six: **Danger**
          `,
          word: `
            **Danger** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅟ", "ㅚ"],
        words: ["외국인", "가위 바위 보", "쥐", "귀", "왼손", "괴물", "데뷔", "회사"]
      },
      {
        round: 7,
        headword: "의사",
        text: {
          intro: `
# Round&nbsp;Seven: **Doctor**
          `,
          word: `
            **Doctor** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅢ"],
        words: ["의자", "의리", "희망"]
      },
    ]
  }
];