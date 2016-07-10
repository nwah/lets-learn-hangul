module.exports = [
  {
    level: 1,
    name: "Let’s eat!",
    text: {
      intro: `
# Level&nbsp;One: **Food**
Let’s start with the basics…
---
The Korean Language has its very own alphabet called Hangul.
---
Although it looks similar to Chinese and Japanese characters, Hangul is actually a simple alphabet.
---
There's only one major difference between Hangul and other alphabets like Latin (what you're reading now) or Cyrillic (Russian).
---
Instead of all the letters sitting side-by-side in a horizontal row, Hangul letters are stacked up
into blocks—one for each syllable.
---
Let's learn to read our first Korean word!
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
---
As you learn the Hangul letters, keep in mind that there isn’t an exact one-to-one correspondence with Latin letters.
---
We’ll be using the most common Latin spellings for Hangul letters to help you learn, but the important thing is to learn the actual Korean sounds that the Hangul letters represent.
---
On to the letters!
          `,
          word: `
Now let’s check out how these four
letters combine to spell **kimchi**.
---
**Kimchi** has 2 syllables (**kim** and **chi**), so there are two syllabic blocks.
---
Take a look at the arrangement of the letters within each block.
---
In **kim**, the ㄱ and ㅣ are stacked on top of the ㅁ, but in **chi** the ㅊ and ㅣ are sitting side-by-side.
---
Any time the the vowel is tall and skinny like **ㅣ** we arrange the letters like this.
          `,
          start: `
Alright, enough theory!

Let’s try some reading!
          `,
          outro: `
Woo! Four letters and four words down. Let’s keep going!
          `
        },
        jamo: ["ㅁ", "ㅊ", "ㄱ", "ㅣ"],
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
            Three syllables. Three blocks.
            Bi. Bim. Bap.
            ---
            Notice that even though we transcribe the last syllable as *b-a-p*,
            the *b* and *p* are both **ㅂ**.
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
            Check out how the **ㄱ** changes shape to fit better.
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
            **Mandu** are Korean dumplings.
            ---
            Be careful not to confuse **ㄴ** with **ㄱ**.
            --
            **ㄱ** looks like a **g**un, while **ㄴ** looks like the **N**ike swoosh.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㄴ", "ㄷ"],
        words: ["바나나", "친구", "돈", "나", "나가", "다"]
      }
    ]
  },

  {
    level: 2,
    name: "World Tour!",
    text: {
      intro: `
# Level&nbsp;Two: **World Tour**
Welcome to Level 2.
Let's go on a trip around the world!
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
            Busan is Korea’s 2nd biggest city.
            ---
            The second syllable, **산**, means *mountain* in Korean.
            ---
            **ㅅ** looks a bit like a mountain.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅅ"],
        words: ["산", "삼", "사람", "살", "소", "술", "신", "신발"]
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
            In Korean, **Seoul** is two syllables:
            **suh**-**ool**
            ---
            Since the second syllable starts with a vowel sound,
            we use the silent placeholder **ㅇ** where the consonant
            would normally go.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅓ", "-"],
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
            Here we see the other **ㅇ** used to represent the **ng**
            sound in the first syllable of *Gangnam*.
          `,
          start: `
            Let’s see what we can read with this new letter!
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
            **ㅎ** looks like **ㅇ** with a **h**at on.
            ---
            The prefix **한** means *Korean*, and suffix **국** means *country*.
            ---
            **한** is used as a prefix in many words for Korean things.
            ---
            And almost all country names end with **국** in Korean.
          `,
          start: `
            Let’s see what we can read with this new letter!
          `
        },
        jamo: ["ㅎ"],
        words: ["후추", "한강", "호두", "한복"] //, "한식"
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
            In addition to representing *j* sounds,
            **ㅈ** is the closest sound in Korean to **z** in English.
            ---
            Not only are most English words with **z** usually transcribed
            with **ㅈ**
            ---
            But Korean names with **ㅈ** are often stylized as **z**, like
            *Zico* and *Zion T*.
          `,
          start: `
            Let’s see what we can read with our new letter!
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
            Remember what I said last round about **ㅈ** and **z**?
            ---
            Here's a perfect example: *Brazil*.
          `,
          start: `
            Let’s see what we can read with our new letter!
          `
        },
        jamo: ["ㅡ"],
        words: ["한글", "글자", "참기름", "가슴", "흠"]
      }
    ]
  },

  {
    level: 3,
    name: 'Oh yeah!',
    text: {
      intro: `
# Level&nbsp;Three: **Oh&nbsp;yeah**!
Now we get to the fun words!
---
We’ll be learning a couple more vowels and the stressed consonants in this level.
---
These will let us read some of the most
fun words in Korean!
      `
    },
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
            **Daebak!** is an exclamation that’s a lot like 
            *awesome!* in American English.
            ---
            You can use this whenever you encounter something amazing.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅐ"],
        words: ["맥주", "노래", "개", "배", "런닝맨", "뱀"]
      },
      {
        round: 2,
        name: "Yes!",
        headword: "네",
        text: {
          intro: `
# Round&nbsp;Two: **Yes**
          `,
          word: `
            Don’t sweat it if you don’t hear much difference between **ㅔ** and **ㅐ**.
            ---
            Most Koreans nowadays pronounce these two letters the same, and often mix them up when spelling.
            ---
            One way to help remember them is to think of **ㅐ** as **ㅏ**+**ㅣ** and to think of **ㅔ** as **ㅓ**+**ㅣ**
            ---
            **ㅐ** (**ㅏ**+**ㅣ**) sounds *slightly* closer to the short **a** sound in *cat*, so try and
            remember that **ㅏ** corresponds to the short **a** sound.
            ---
            Koreans often use the **ㅏㅣ**/**ㅓㅣ** thing when asking people how to spell something
            (ex: *“Is that spelled ah-ee or uh-ee?”*)
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅔ"],
        words: ["이메일", "제발", "세기", "섹시"]
      },
      {
        round: 3,
        name: "The Best!",
        headword: "짱",
        text: {
          intro: `
# Round&nbsp;Three: **The Best!**
          `,
          word: `
            **짱** means *the best* or *awesome*, as in *you’re the best!*.
            ---
            There are stressed versions of most of the basic consonants.
            ---
            These stressed consonants often sound kind of cutesy to Koreans
            so you’ll come across them in lots of slang words and onomatopoeias.
            ---
            If you’re learning to speak Korean, be sure and spend a lot of time
            listening to them and practicing saying them aloud.
            ---
            They’re fun once you get the hang of them!
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅉ", "ㅆ"],
        words: ["아싸!", "쩔어!", "짜", "씨름", "싸", "비싸", "쓰레기", "써"]
      },
      {
        round: 4,
        name: "Oppa!",
        headword: "오빠",
        text: {
          intro: `
# Round&nbsp;Four: **Oppa**
          `,
          word: `
            **Oppa** is what girls call older guys.
            ---
            It literally means *older brother*, but is used by anyone regardless
            of whether they’re actually siblings.
            ---
            There are different words for each combination of gender and age.
            ---
            These family words are are a very big part of the Korean language,
            and reflect a lot about how close (or distant) the speaker is with
            the person they’re speaking to.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅃ", "ㄸ", "ㄲ"],
        words: ["떡볶이", "뽀로로", "뽀뽀", "띠", "따라", "떨리다"] //, "깍두기"
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
            All the vowels except **ㅡ** and **ㅣ** have **y** version,
            formed by doubling up the little notch.
            ---
            Sof if there's a notch, you can double it up to make a **y** sound.
          `,
          start: ``
        },
        jamo: ["ㅖ", "ㅑ"],
        words: ["예", "고양이", "예문", "계속", "계란", "양복", "향수"]
      },
      {
        round: 6,
        name: "Hi! ^^",
        headword: "안녕",
        text: {
          intro: `
# Round&nbsp;Six: **Hi! ^^**
          `,
          word: `
            **Hi** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅕ", "ㅒ"],
        words: ["영어", "얘기", "염소", "여자", "꺼져", "변기", "녀석", "여자친구", "걔"]
      },
      {
        round: 7,
        name: "Hello.",
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
    text: {
      intro: `
# Level&nbsp;Four: **Go west!**
Last set of letters.
      `
    },
    rounds: [
      {
        round: 1,
        name: 'Canada',
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
        name: 'TV',
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
        name: 'Coffee',
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
        words: ["쇼핑", "실패", "서핑", "파", "파전", "포도", "피", "팔", "작품"]
      },
      {
        round: 4,
        name: 'Wow',
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
        name: 'What?',
        headword: "뭐",
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
        name: 'Danger!',
        headword: "위험",
        text: {
          intro: `
# Round&nbsp;Six: **Danger!**
          `,
          word: `
            **Danger** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅟ", "ㅚ"],
        words: ["외국인", "가위바위보", "쥐", "귀", "왼손", "괴물", "데뷔", "회사"]
      },
      {
        round: 7,
        name: 'Doctor',
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
  },

  {
    level: 5,
    name: 'Say What!?',
    text: {
      intro: `
# Level&nbsp;Five: **Say What!?**
In this final level you'll learn a few pronunciation quirks.
---
In the 600 years since Hangul was invented, Korean pronunciation has changed
a little bit.
---
Just think how different American and British pronunciation is, and we've only
been separated for half that time!
---
This means there are a few situations where the actual pronunciation of a word
is a little different than the spelling might make you think.
---
The good news is that these rules are completely regular, so once you learn them
you'll be able to confidently and accurately read any Korean word.
      `
    },
    rounds: [
      {
        round: 1,
        name: 'Breathless',
        headword: "깃",
        text: {
          intro: `
# Round&nbsp;One: **Breathless**
          `,
          word: `
            **깃** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["맛", "옷", "낮잠", "맞다", "받침", "로봇", "꽃", "같다", "햇반", "이웃"]
      },
      {
        round: 2,
        name: 'Gas Leak',
        headword: "같이",
        text: {
          intro: `
# Round&nbsp;Two: **Gas Leak**
          `,
          word: `
            **같이** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["맛있어요", "맞아요", "꽃잎", "웃음", "로봇이 아니다"]
      },
      {
        round: 3,
        name: 'Ningname',
        headword: "닉네임",
        text: {
          intro: `
# Round&nbsp;Three: **Ningname**
          `,
          word: `
            **Nickname** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["막내", "박민우", "악마", "박물관", "빅맥", "적립", "생리", "속눈섭", "식량", "정리", "석류", "식물", "정력"]
      },
      {
        round: 4,
        name: 'Hambone',
        headword: "입맛",
        text: {
          intro: `
# Round&nbsp;Four: **Hambone**
          `,
          word: `
            **Appetite** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["업무", "입매", "앞니", "옆문", "맞나?", "얻는다", "놓는다", "붓는다", "윷놀이"]
      },
      {
        round: 5,
        name: 'Rolling',
        headword: "알람",
        text: {
          intro: `
# Round&nbsp;Five: **Rolling**
          `,
          word: `
            **Alarm** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["올리브", "원래", "빨리", "빨래", "온라인", "설날", "완료", "신랑"]
      },
      {
        round: 6,
        name: 'Talking',
        headword: "읽다",
        text: {
          intro: `
# Round&nbsp;Six: **Talking**
          `,
          word: `
            **to read** blah blah blah
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["읽은 책", "있다", "있어", "앉다", "없다", "없어요", "없는", "앉아!", "괜찮아요", "닭", "없다"]
      },
    ]
  }
];

/*

*/