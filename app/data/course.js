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
Any time the vowel is tall and skinny like **ㅣ** we arrange the letters like this.
          `,
          start: `
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
        words: ["김밥", "박", "비", "밤", "가", "차", "감", "마"] // 치마 가마
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
            ---
            **ㄱ** looks like a **g**un, while **ㄴ** looks more like the **N**ike swoosh.
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
        words: ["사랑", "성공", "PC방", "멍멍"]
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
        words: ["좀", "고추장", "가자", "남자", "남자친구"]
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
        words: ["한글", "글자", "참기름", "가슴"/*, "흠"*/]
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
            **짱** means *the best* or *awesome*, as in *you’re the best!*
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
            So if a vowel has a notch, you can double it up to create a **y** sound.
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
# Round&nbsp;Six: **Hi!&nbsp;^^**
          `,
          word: `
            **안녕** is an informal way to say *hi*.
            ---
            You can use this with close friends, or when talking to little kids.
            ---
            For everyone else, you should use the slightly more polite version that we’ll in the next round!
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
        name: "Hello",
        headword: "안녕하세요",
        text: {
          intro: `
# Round&nbsp;Seven: **Hello**
          `,
          word: `
            This is the normal, polite greeting that you can use in just about any social setting.
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
Last set of letters!
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
---
All of the consonants we've learned so far—except for **ㅊ**—have been *non*-aspirated consonants.
---
*Aspirated* means that a little puff of air that comes out when you say the consonant.

In English, pretty much every word that starts with a consontant starts with an aspirated consonant.
---
On the other hand, the majority of consonant sounds in Korean are unaspirated. No puffs of air.
---
You can easily experiment with aspiration yourself by holding a tissue (or your hand) right in front of your mouth, and saying *‘pat’*.

The tissue will probably move a little bit when you say the *p*, and maybe again with the *t* as well.
---
Now try and pronounce *‘pat’* without making the tissue move.
---
In this level we’ll learn the rest of the *aspirated* consonants in Hangul.

These will come in very handy for words borrowed from English and other European languages, as you’ll soon see.
          `,
          word: `
            In English, the word *Canada* starts a puff of air, so we need the aspirated consonant **ㅋ**.
            ---
            Otherwise it’d sound more like *ganada*.
            ---
            Also, notice that **ㅋ** looks just like **ㄱ** with an extra line.
            ---
            Koreans use a bunch of **ㅋ**’s online or when texting to represent a laugh sound.
            ---
            If you try and say ㅋㅋㅋ it sounds kind of like snickering. 
            ---
            Try searching Twitter for ㅋㅋㅋ to see what I mean. **ㅎㅎㅎ** is also pretty common.
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
            In English, a *t* at the start of a word is always aspirated.
            ---
            So any borrowed English *t*-words will be spelled with **ㅌ** in Hangul.
            ---
            As for the **ㅂ**, Korean doesn’t have a **v** sound. They usually just use **ㅂ** instead, as it sounds pretty similar.
            ---
            Also notice again how **ㅌ** looks just like **ㄷ** with an extra line.
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
            There’s no *f* sound in Korean either.
            ---
            The closest sound is **ㅍ**, so that’s what you’ll see in any borrowed words containing an *f* sound, like *coffee*.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅍ"],
        words: [/*"페이스북",*/ "쇼핑", "실패", "서핑", "파", "파전", "포도", "피", "팔", "작품"]
      },
      {
        round: 4,
        name: 'Wow',
        headword: "와!",
        text: {
          intro: `
# Round&nbsp;Four: **Wow**
          `,
          word: `
            All we've got left now are the **w** sounds.
            ---
            As you can see, to get a **w** sound, we just combine either **ㅜ** or **ㅗ** with a vertical vowel.
            ---
            The *w*-vowels wrap around the initial consontant, and any final consonants go at the very bottom like always.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        jamo: ["ㅘ", "ㅙ"],
        words: ["왜?", "와인", "과일", "황소", "내놔!", "안돼!", "꽤"]
      },
      {
        round: 5,
        name: 'What?',
        headword: "뭐?",
        text: {
          intro: `
# Round&nbsp;Five: **What?**
          `,
          word: `
            Notice that ㅞ and ㅝ are made using ㅜ instead if ㅗ.
            ---
            This is partly just for aesthetic reasons, so that the notches aren't
            bumping into each other.
            ---
            But it’s also related to ‘bright’ and ‘dark’ (yin and yang) vowels,
            which you can read about [on Wikipedia](https://en.wikipedia.org/wiki/Origin_of_hangul#Iconic_design_of_vowel_letters) if you’re interested.
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
            Although **ㅟ** is pronounced **wee** like you’d expect, be careful when reading **ㅚ**.
            ---
            In modern Korean **ㅚ** is always pronounced like **ㅞ**.
            ---
            Not sure why, but it is!
            ---
            Remember: ㅚ = ㅞ
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
            We’ve saved the weirdest for last.
            ---
            **의** is normally pronounced just like it looks, as ㅡ+ㅣ.
            ---
            But when combined with other consonants, it’s becomes just ㅣ.
            ---
            For example, 희 is very common in Korean girls’ names, and is pronounced **히**.
            ---
            Finally, the grammatical particle 의 is usually pronounced 에.
            ---
            But you probably don't need need to worry about that last one.
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
# Level&nbsp;Five: **Say&nbsp;What!?**
You’ve learned all the letters. Now in this final level we’ll learn a few quirks of Korean pronunciation.
---
It’s been 600 years since Hangul was invented, so pronunciation has changed a bit.
---
And there are some sound combinations that are hard to pronounce, so over time people have come to pronounce them a little differently than they’re spelled. 
---
The good news is that all of these rules are completely regular, so once you learn them
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
---
In this first round we’ll look at the most common of these quirk: unreleased stops.
          `,
          word: `
            Remember from the previous level how most Korean consonants are unaspirated?
            ---
            Well in Korean, if a syllable’s final consonant comes before another consonant or at the end a word it’s always *unreleased*.
            ---
            This means there’s no puff of air released at the end of the syllable.
            ---
            This is pretty straightforward with **ㅂ** and **ㄷ** and **ㄱ**.
            ---
            They’re just pronounced as **p**, **t**, and **k**, but without the puff of air.
            ---
            The stressed and the aspirated consonants are also unreleased at the end of a phrase or before another consonant.
            ---
            This means **ㅌ** and **ㄸ** are pronounced **ㄷ**, **ㅋ** and **ㄲ** are pronounced **ㄱ**, and **ㅍ** and **ㅃ** are pronounced **ㅂ**.
            ---
            Now for the *real* quirk...
            ---
            **ㅅ** is *also* pronounced like ㄷ when it’s at the end of a phrase or comes right before another consonant.
            ---
            That means **깃** is actually pronounced **긷**.
            ---
            Why?
            ---
            Try saying *‘hit’* and then *‘hiss’* and notice what your tongue does.
            ---
            Your tongue should be in pretty much the same position for **s** and **t**.
            ---
            Now say *‘hiss’* again, but this time don’t let any air escape at the end.
            ---
            If you stop the air flow right after **i** sound, the result should sound a lot like *‘hit’*.
            ---
            This is what’s going on in Korean. You don’t release the **ㅅ**, so it’s effectively a **ㄷ**.
            ---
            The same is also true for a bunch of the other consonants.
            ---
            **ㅅ**, **ㅆ**, **ㅈ**, **ㅉ**, and, **ㅊ** are all pronounced as **ㄷ** at the end of a phrase or before another consonant.
          `,
          start: `
            Let’s practice some of these new rules.
          `
        },
        words: ["맛", "옷", "낮잠", "맞다", "받침", "로봇", "꽃", "같다", "햇반", "이웃"] // 젓가락, 그릇
      },
      {
        round: 2,
        name: 'Gas Leak',
        headword: "같이",
        text: {
          intro: `
# Round&nbsp;Two: **Gas&nbsp;Leak**
---
Now we’ll look at when final consonants *are* released.
---
Whenever a syllable with a final consonant is immediately followed by a vowel sound,
that final consonant “moves” to the start of the next syllable.
---
So for example **길이** is pronounced like **기리**, and **높이** is pronounced like **노피**, etc.
          `,
          word: `
            But, there *is* one case where the sound changes a little bit.
            ---
            Final **ㅌ** followed by **이** is pronounced **치**, and final **ㄷ** followed by **이** is pronounced **지**.
            ---
            So **같이** is pronounced **가치**. *Not* **가티**.
            ---
            Seems kinda weird, but it’s not so different than *-tion* in English.
            ---
            We say pronounce *nation* as *nay-shun*, not *nat-ee-un*.
            ---
            Similar situation as **같이**.
            ---
            This one word is by far the most common instance of this sound change.
            ---
            Generally, just remember that the final consonant “moves” to a following syllable if it starts with a vowel.
          `,
          start: `
            Let’s try out these new rules.
          `
        },
        words: ["맛있어요", "맞아요", "웃음", "로봇이 아니다"]
      },
      {
        round: 3,
        name: 'Ningname',
        headword: "닉네임",
        text: {
          intro: `
# Round&nbsp;Three: **Ningname**
---
This round we’ll learn a very common Korean pronunciation phenomenon: nasalization.
---
Whenever a final **ㄱ** comes before an initial **ㄴ**, **ㅁ**, or **ㄹ**, the **ㄱ** is pronounced as **ng**.
---
“Big Mac” becomes “Bi*ng* Mac”.
---
This is very, very common. You’ll encounter this a lot, so let’s look at some samples.
          `,
          word: `
            I just mentioned *Big Mac*, but let’s look at word borrowed from English.
            ---
            The word English word *nickname* is pretty common, for example on online games or forums.
            ---
            But Koreans pronounce it *ningname*.
            ---
            This happens because you end the first syllable with your tongue in the ㄱ position.
            ---
            But because it’s unreleased, there’s no little puff of air.
            ---
            So when the next sound is a nasal consonant (**m** or **n**), the tongue hangs around for a bit…
            ---
            And when you go straight into pronouncing a nasal consonant, an **ng** sound comes out.
            ---
            You can try for yourself by putting your mouth in *k* position, and without moving your tongue or lips try to say *n*.
            ---
            An *ng* sound should come out.
            ---
            Another closely related phenomenon is that an initial ㄹ following a final ㅇ turns into ㄴ.
            ---
            So 생리 becomes 생니.
            ---
            Finally, these two rules kind of combine with ㄱ + ㄹ, which becomes ㅇ + ㄴ.
            ---
So ㄱ&nbsp;ㄴ&nbsp;=&nbsp;ㅇ&nbsp;ㄴ and
ㄱ&nbsp;ㅁ&nbsp;=&nbsp;ㅇ&nbsp;ㅁ and
ㅇ&nbsp;ㄹ&nbsp;=&nbsp;ㅇ&nbsp;ㄴ and
ㄱ&nbsp;ㄹ&nbsp;=&nbsp;ㅇ&nbsp;ㄹ
            ---
            The good news is most Koreans don’t even consciously register this sound change.
            ---
            So if you’re reading something out loud and forget the nasalization, they may not even notice!
          `,
          start: `
            Let’s see this phenomenon in action!
          `
        },
        words: ["막내", "적립", "생리", "악마", "박물관", "빅맥", "속눈섭", "식량", "정리", "석류", "식물", "정력"] /* 색맹 */
      },
      {
        round: 4,
        name: 'Hambone',
        headword: "입맛",
        text: {
          intro: `
# Round&nbsp;Four: **Hambone**
---
This round we’ll see two more pronunciation rules. Both of these are also the result of leaving your mouth the position at the end of one syllable when you start a the following syllable.
          `,
          word: `
            First, ㅂ/ㅍ become ㅁ before ㅁ/ㄴ/ㄹ.
            ---
            Second, ㅈ/ㅊ/ㅅ/ㅆ/ㄷ/ㅌ/ㅎ become ㄴ before ㅁ/ㄴ.
            ---
            Same phenomenon as last round.
            ---
            If your mouth is in unreleased ㅂ shape, then you go right into a nasal consonant, an **m** sound comes out.
            ---
            If your mouth is in unreleased ㅅ shape, then you go right into a nasal consonant, an **n** sound comes out.
          `,
          start: `
            Let’s see what we can read with our new letters!
          `
        },
        words: ["업무", "감사합니다", "반갑습니다", "입매", "앞니", "옆문", "맞나?", "얻는다", "놓는다", "붓는다", "윷놀이"]
      },
      {
        round: 5,
        name: 'Rolling',
        headword: "알람",
        text: {
          intro: `
# Round&nbsp;Five: **Rolling**
---
This round we’ll look at double ㄹ. When you have two ㄹ’s in a row, the result is pretty close to an English *L* sound.
---
In fact, almost all English words that contain an L get a doubled-up ㄹ when written in Hangul.
          `,
          word: `
            Let’s look at **알람** which is the English word *alarm*.
            ---
            It sounds like *all-lahm*. The *L* sound is very close to English.
            ---
            So anytime you see ㄹ+ㄹ, it’s a long *L* sound, like in *always*.
            ---
            Also, ㄴ+ㄹ is pronounced like ㄹ+ㄹ
            ---
            The ㄴ sound gets contaminated by the ㄹ and becomes an ㄹ too.
          `,
          start: `
            Let’s try those out!
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
---
In this final round we’ll look at something crazy: double final consonants!
---
So far in every word we’ve looked at, there’s always been an initial consontant (or ㅇ),
and an optional final consonant.
---
Well, sometimes there can be two consonants at the bottom, like in 닭.

There can still only ever be one initial consonant however.
---
The total number of words with double final consonants is fairly small, but some of the most
common words in Korean have double finals, so you’ll encounter it frequently.
          `,
          word: `
            When a double final is at the end of a statement or followed by a consonant, only one of the final consonants is actually pronounced.
            ---
            Usually you pronounce the first consonant in these cases.
            ---
            So 없 is pronounced 업, and 앉다 is pronounced 안다.
            ---
            However, in the case of ㄺ, the ㄱ wins. 닭 is pronounced like 닥.
            ---
            This is just like how most English speakers drop the L sound in “talk”.
            ---
            When a double final is followed by a vowel sound, the second consonant moves into the next syllable, just like we saw earlier.
            ---
            Example: 없어 is pronounced 업서
            ---
            All the other pronunciation rules still apply as well. For example 없는 is pronounced 엄는.
          `,
          start: `
            Let’s put our last rule into practice!
          `
        },
        words: ["읽은 책", "있다", "있어", "앉다", "없다", "없어요", "없는", "앉아!", "괜찮아요", "닭", "없다"]
      },
    ]
  }
];

/*

*/