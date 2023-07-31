export interface Story {
  startDate: number;
  content: {
    en: string[];
    zh: string[];
  };
  title: { en: string; zh: string };
  media?: string[];
  emoji: string;
}

const stories: Story[] = [
  {
    startDate: 1635724800000,
    content: {
      en: [
        "Born in the autumn of 2021, NTUCourse Neo was created by three National Taiwan University students: @swh00tw, @jchiroto, and @wil0408.",
        "Although a significant part of our motivation for undertaking this project was to achieve a good score in our Web Programming class, we also genuinely wanted to create something that could truly help the daily lives of NTU students. After intense brainstorming sessions, we decided to tackle the terrible course scheduling experience that NTU students face every semester. And thus, the initial idea for Neo was born (in a bar 🤣).",
        "After more than a month of tireless efforts from the three of us, the first version of Neo was launched before the course selection period of the Spring semester in 2022. Upon completion, we shared our hard work in the NTU student Facebook community and received an enthusiastic response. Coincidentally, it was during the peak period of course selection, and within less than a month, our website accumulated over 2,000 users and more than 400 registered users. Ultimately, Neo also achieved the second-highest score among all the projects in our Web Programming class 🎉.",
      ],
      zh: [
        "2021 年秋天出生，NTUCourse Neo 是由三位台大學生 @swh00tw, @jchiroto, @wil0408 打造。",
        "雖然做這件事的理由很大部分是想在 Web Programming 課堂中拿到好分數，但我們也真的想留下點什麼可以真的幫助到台大學生日常生活的工具或服務。經過激烈的 brainstorm 後，我們決定來解決台大學生每學期都會遇到的糟糕的排課體驗，Neo 的最初想法就這麼誕生了（在酒吧誕生 🤣）。",
        "經過三人不眠不休一個多月的努力後，Neo 第一版在 2022 Spring 學期選課前登場。完工隨後我們在台大學生 Facebook 交流社群中分享我們的心血，得到熱烈迴響。剛好搭上學生選課的高峰期，不到一個月內我們網站累積了 2000 多名使用者和 400 多名註冊用戶，最終也在 Web Programming 課堂的所有專案中獲得第二高的分數 🎉。",
      ],
    },
    title: { en: "How Neo was born", zh: "Neo 誕生" },
    emoji: "👶",
  },
  {
    startDate: 1643673600000,
    content: {
      en: [
        "After the Web Programming course and semester came to an end, even though @wil0408 retired from the team after achieving success, it didn't halt the progress of the project, and we didn't stop maintaining it like most classroom projects. After the initial launch, we carefully considered everyone's feedback and decided to bring Neo back stronger with brand new features before the next course selection.",
        "The most significant change was the introduction of the initial version of the course information page, which integrated official information from the NTU Course website with student-referenced course evaluations and past exam resources from PTT, all within a single page. This elevated the experience of searching for courses to a whole new level, eliminating the need to open multiple tabs in a browser and painstakingly gather scattered information.",
        "In addition to developing new features, we also conducted extensive refactoring (aka clearing technical debt) and performance optimizations. For example, considering SEO, we upgraded the entire project from a simple Single Page App to using Next.js, enabling search engines to index the course information page. We also implemented smarter rendering strategies to significantly improve the website's performance and enhance the overall user experience 🆙.",
      ],
      zh: [
        "Web Programming 課程和學期結束後，雖然 @wil0408 功成身退離開團隊，但並沒有讓專案停止進步，我們也沒有像大部分的課堂專案一樣停止維護。在第一波推出後，我們認真參考大家的 feedback，決定讓 Neo 在下次選課前以更好的狀態並帶著全新的功能強勢回歸。",
        "其中最大的改變就是，我們推出了初版的課程資訊頁面，在一個頁面內整合了來自台大課程網的官方資訊，和學生常參考的 ptt 的課程評價和考古題資訊。讓查詢課程的體驗升級到另一個層次，終於不用在瀏覽器打開許多分頁，慢慢四處收集散落的資訊啦！",
        "除了開發新功能外，我們也進行大規模的 Refactor (aka 清理技術債) & 性能優化。例如，為了 SEO 考量，我們將整個專案由簡單的 Single Page App 升級，使用 Next.js 讓課程資訊頁面可以被搜尋引擎搜尋到，也使用更聰明的渲染策略讓網站的效能和整理使用者體驗大幅提升🆙。",
      ],
    },
    title: { en: "After the sweet victory", zh: "成功，然後呢" },
    emoji: "🚀",
  },
  {
    startDate: 1646092800000,
    content: {
      en: [
        "While we were diligently working on the second phase of development, Neo had an interesting development in March 2022. Through @jchiroto, we learned that the Deputy Director of the Office of Academic Affairs at NTU was interested in our project. So, we promptly arranged a discussion.",
        "The Deputy Director believed that NTU's course website had been subject to complaints for many years, and coincidentally, the student association was also demanding an improved user experience for NTU systems. It was the perfect time to renovate NTU's outdated systems, and our project happened to provide a very promising prototype for the new NTU system. Consequently, they expressed interest in collaborating with us to develop the new NTU course website.",
        "It was unexpected that our initially unofficial small tool would have the opportunity to become an official website. This was quite meaningful for us, so we decided to embark on the collaboration!",
      ],
      zh: [
        "正當我們努力進行第二階段的開發，Neo 在 2022 年三月有有趣的發展。透過 ＠jchiroto，我們得知當時教務處副教務處長對我們專案有興趣，於是我們隨即約了一次討論。",
        "副教務處長認為，台大的課程網已經被抱怨太多年，剛好學生會也在要求台大系統的使用者體驗，所以當時剛好是時候翻新台大老舊的舊系統們了，我們專案的出現剛好提供台大新系統一個非常好的雛形，於是想要與我們合作開發台大的新課程網。",
        "沒想到原本非官方的小工具會得到機會變成官方的網站，這對於我們實在蠻有意義的，於是就決定合作啦！",
      ],
    },
    title: { en: "NTU x Neo", zh: "臺大 x Neo" },
    emoji: "🤝",
  },
  {
    startDate: 1656633600000,
    content: {
      en: [
        "Due to unexpected developments, the 2022 Fall semester marked the final appearance of Neo as a student project.",
        "This time, we brought forth the results of a semester-long optimization to serve everyone. In addition to the new features and faster search speed mentioned earlier, we also introduced a favorite among developers: Dark Mode (after all, staring at a white screen for too long isn't very eye-friendly 😉).",
        "In the end, Neo accumulated over 5,000 user visits and had more than 1,500 registered users. After the second wave of success, it retired with honor. We thank all the users who have used our service and provided feedback, and we look forward to continuing to serve you in the future as an official website!",
      ],
      zh: [
        "因為意料之外的發展，2022 Fall 就是最後一學期 Neo 以學生專案的形式登場。",
        "這次我們帶來經過長達一學期優化的成果來服務大家，除了先前提到的新功能和更快的搜尋速度，我們還帶來 Developer 最愛的 Dark Mode（畢竟白色看太久確實對眼睛不太友善 😉）。",
        "Neo 最後累積超過 5000 次以上的使用者訪問和 1500 名以上的註冊用戶量，在第二波成功後光榮退休。感謝任何用過我們服務，給予任何意見的使用者們，期待在未來能以官方網站的形式繼續服務！",
      ],
    },
    title: { en: "The last dance", zh: "大家再見" },
    emoji: "💥",
  },
];

export default stories;
