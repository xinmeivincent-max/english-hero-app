// ============================================
// 英语小英雄 - 完整课程数据
// 基于 Reading Explorer 3 学生用书 Unit 1A-6B
// 共12个单元，按页码顺序编排
// ============================================

const COURSE_DATA = {
  // 等级系统
  levels: [
    { name: '青铜学员', minXP: 0, color: '#CD7F32', icon: '🥉', bgColor: '#FFF3E0' },
    { name: '白银战士', minXP: 500, color: '#C0C0C0', icon: '🥈', bgColor: '#F5F5F5' },
    { name: '黄金骑士', minXP: 1500, color: '#FFD700', icon: '🥇', bgColor: '#FFFDE7' },
    { name: '钻石大师', minXP: 3000, color: '#00CED1', icon: '💎', bgColor: '#E0F7FA' },
    { name: '英语王者', minXP: 5000, color: '#FF6B6B', icon: '👑', bgColor: '#FFEBEE' }
  ],

  // 成就系统
  achievements: [
    { id: 'first_word', name: '单词初识', desc: '学习第一个单词', icon: '📖', xp: 10 },
    { id: 'word_10', name: '单词达人', desc: '累计学习10个单词', icon: '📚', xp: 50 },
    { id: 'word_30', name: '词汇大师', desc: '累计学习30个单词', icon: '🎓', xp: 100 },
    { id: 'word_50', name: '词汇王者', desc: '累计学习50个单词', icon: '🏆', xp: 200 },
    { id: 'word_100', name: '词汇传奇', desc: '累计学习100个单词', icon: '👑', xp: 500 },
    { id: 'streak_3', name: '三日连胜', desc: '连续打卡3天', icon: '🔥', xp: 30 },
    { id: 'streak_7', name: '一周坚持', desc: '连续打卡7天', icon: '🌟', xp: 100 },
    { id: 'streak_30', name: '月度冠军', desc: '连续打卡30天', icon: '🏆', xp: 300 },
    { id: 'perfect_quiz', name: '满分挑战', desc: '一次测验全对', icon: '💯', xp: 50 },
    { id: 'sentence_master', name: '句型高手', desc: '完成5个句型分析', icon: '🔍', xp: 80 },
    { id: 'reading_hero', name: '阅读英雄', desc: '完成3篇阅读理解', icon: '📰', xp: 100 },
    { id: 'memory_king', name: '记忆之王', desc: '记忆游戏通关', icon: '🧠', xp: 60 },
    { id: 'spelling_bee', name: '拼写冠军', desc: '拼写练习连续5题正确', icon: '✍️', xp: 50 },
    { id: 'level_up', name: '升级啦', desc: '提升一个等级', icon: '⬆️', xp: 20 },
    { id: 'first_unit', name: '首关突破', desc: '完成第一个单元', icon: '🎯', xp: 100 },
    { id: 'half_book', name: '半程冠军', desc: '完成6个单元', icon: '📚', xp: 300 },
    { id: 'full_book', name: '全书通关', desc: '完成12个单元', icon: '🏆', xp: 500 }
  ],

  // 每日任务模板
  dailyTasks: [
    { id: 'learn_words', name: '学习新单词', desc: '学习5个新单词', target: 5, type: 'word', xp: 30 },
    { id: 'review_words', name: '复习旧单词', desc: '复习10个已学单词', target: 10, type: 'review', xp: 20 },
    { id: 'sentence_practice', name: '句型练习', desc: '完成2个句型分析', target: 2, type: 'sentence', xp: 40 },
    { id: 'reading', name: '阅读闯关', desc: '完成1篇阅读理解', target: 1, type: 'reading', xp: 50 },
    { id: 'spelling', name: '拼写挑战', desc: '完成5道拼写题', target: 5, type: 'spelling', xp: 25 }
  ],

  // 单元列表（按页码顺序）
  units: [
    { id: 1, name: 'Unit 1A', title: 'The World\'s Game', page: 8, theme: 'Soccer' },
    { id: 2, name: 'Unit 1B', title: 'A Love for Soccer', page: 16, theme: 'Soccer in Africa' },
    { id: 3, name: 'Unit 2A', title: 'Passage Title', page: 24, theme: 'Theme' },
    { id: 4, name: 'Unit 2B', title: 'Passage Title', page: 32, theme: 'Theme' },
    { id: 5, name: 'Unit 3A', title: 'Passage Title', page: 44, theme: 'Theme' },
    { id: 6, name: 'Unit 3B', title: 'Passage Title', page: 48, theme: 'Theme' },
    { id: 7, name: 'Unit 4A', title: 'Passage Title', page: 58, theme: 'Theme' },
    { id: 8, name: 'Unit 4B', title: 'Passage Title', page: 66, theme: 'Theme' },
    { id: 9, name: 'Unit 5A', title: 'Passage Title', page: 74, theme: 'Theme' },
    { id: 10, name: 'Unit 5B', title: 'Passage Title', page: 80, theme: 'Theme' },
    { id: 11, name: 'Unit 6A', title: 'The World\'s Favorite Drug', page: 91, theme: 'Caffeine' },
    { id: 12, name: 'Unit 6B', title: 'Healing Forests', page: 98, theme: 'Nature' }
  ],

  // 单词数据 - 基于 RE 3 真实内容
  vocabulary: [
    {
      unit: 1,
      unitName: 'Unit 1A - The World\'s Game',
      unitTitle: '世界运动',
      words: [
        { word: 'global', phonetic: '/ˈɡloʊbl/', meaning: '全球的，全世界的', example: 'Soccer is a global sport played everywhere.', image: '🌍' },
        { word: 'athlete', phonetic: '/ˈæθliːt/', meaning: '运动员', example: 'The athlete trains hard every day.', image: '🏃' },
        { word: 'compete', phonetic: '/kəmˈpiːt/', meaning: '竞争，比赛', example: 'Teams compete for the championship.', image: '🏆' },
        { word: 'champion', phonetic: '/ˈtʃæmpiən/', meaning: '冠军', example: 'They became the world champions.', image: '🥇' },
        { word: 'tournament', phonetic: '/ˈtʊrnəmənt/', meaning: '锦标赛', example: 'The tournament has 32 teams.', image: '🏟️' },
        { word: 'qualify', phonetic: '/ˈkwɑːlɪfaɪ/', meaning: '获得资格', example: 'They qualified for the World Cup.', image: '✅' },
        { word: 'represent', phonetic: '/ˌreprɪˈzent/', meaning: '代表', example: 'Each team represents a country.', image: '🏳️' },
        { word: 'citizenship', phonetic: '/ˈsɪtɪzənʃɪp/', meaning: '公民身份', example: 'He has dual citizenship.', image: '📜' }
      ]
    },
    {
      unit: 2,
      unitName: 'Unit 1B - A Love for Soccer',
      unitTitle: '非洲足球',
      words: [
        { word: 'colonist', phonetic: '/ˈkɑːlənɪst/', meaning: '殖民者', example: 'European colonists brought soccer to Africa.', image: '⛵' },
        { word: 'immigrant', phonetic: '/ˈɪmɪɡrənt/', meaning: '移民', example: 'Many immigrants came to live here.', image: '🛬' },
        { word: 'discrimination', phonetic: '/dɪˌskrɪmɪˈneɪʃn/', meaning: '歧视', example: 'They faced discrimination for years.', image: '⚠️' },
        { word: 'unity', phonetic: '/ˈjuːnəti/', meaning: '团结，统一', example: 'The team became a symbol of unity.', image: '🤝' },
        { word: 'recruit', phonetic: '/rɪˈkruːt/', meaning: '招募', example: 'Academies recruit boys from poor cities.', image: '📢' },
        { word: 'bare', phonetic: '/ber/', meaning: '赤裸的', example: 'They play in bare feet.', image: '🦶' }
      ]
    },
    {
      unit: 3,
      unitName: 'Unit 2A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 4,
      unitName: 'Unit 2B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 5,
      unitName: 'Unit 3A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 6,
      unitName: 'Unit 3B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 7,
      unitName: 'Unit 4A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 8,
      unitName: 'Unit 4B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 9,
      unitName: 'Unit 5A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 10,
      unitName: 'Unit 5B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'example', phonetic: '/ɪɡˈzæmpl/', meaning: '例子', example: 'This is an example sentence.', image: '📝' }
      ]
    },
    {
      unit: 11,
      unitName: 'Unit 6A - The World\'s Favorite Drug',
      unitTitle: '咖啡因',
      words: [
        { word: 'caffeine', phonetic: '/kæˈfiːn/', meaning: '咖啡因', example: 'Coffee contains caffeine.', image: '☕' },
        { word: 'stimulant', phonetic: '/ˈstɪmjələnt/', meaning: '兴奋剂，刺激物', example: 'Caffeine is a stimulant.', image: '⚡' },
        { word: 'moderation', phonetic: '/ˌmɑːdəˈreɪʃn/', meaning: '适度', example: 'Drink coffee in moderation.', image: '⚖️' },
        { word: 'fatigue', phonetic: '/fəˈtiːɡ/', meaning: '疲劳', example: 'Caffeine fights fatigue.', image: '😴' },
        { word: 'alertness', phonetic: '/əˈlɜːrtnəs/', meaning: '警觉性', example: 'Caffeine increases alertness.', image: '👀' }
      ]
    },
    {
      unit: 12,
      unitName: 'Unit 6B - Healing Forests',
      unitTitle: '自然疗愈',
      words: [
        { word: 'concentration', phonetic: '/ˌkɑːnsnˈtreɪʃn/', meaning: '专注，集中', example: 'Nature improves concentration.', image: '🧘' },
        { word: 'surroundings', phonetic: '/səˈraʊndɪŋz/', meaning: '环境', example: 'Enjoy the natural surroundings.', image: '🌲' },
        { word: 'therapy', phonetic: '/ˈθerəpi/', meaning: '治疗', example: 'Forest therapy helps reduce stress.', image: '🌿' }
      ]
    }
  ],

  // 句型分析数据
  sentencePatterns: [
    {
      id: 1,
      title: '主谓宾结构',
      description: 'Subject + Verb + Object (SVO)',
      example: 'Teams compete for the championship.',
      analysis: [
        { part: 'Teams', type: '主语', color: '#FF6B6B' },
        { part: 'compete', type: '谓语', color: '#4ECDC4' },
        { part: 'for the championship', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Players represent their countries.',
          parts: [
            { text: 'Players', correct: '主语' },
            { text: 'represent', correct: '谓语' },
            { text: 'their countries', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '定语']
        },
        {
          sentence: 'The team won the championship.',
          parts: [
            { text: 'The team', correct: '主语' },
            { text: 'won', correct: '谓语' },
            { text: 'the championship', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        },
        {
          sentence: 'Caffeine improves alertness.',
          parts: [
            { text: 'Caffeine', correct: '主语' },
            { text: 'improves', correct: '谓语' },
            { text: 'alertness', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '表语']
        }
      ]
    },
    {
      id: 2,
      title: '被动语态',
      description: 'Subject + be + Past Participle',
      example: 'The game was brought to Africa by colonists.',
      analysis: [
        { part: 'The game', type: '主语', color: '#FF6B6B' },
        { part: 'was brought', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'to Africa', type: '状语', color: '#96CEB4' },
        { part: 'by colonists', type: '施动者', color: '#FFEAA7' }
      ],
      questions: [
        {
          sentence: 'Soccer is played all over the world.',
          parts: [
            { text: 'Soccer', correct: '主语' },
            { text: 'is played', correct: '谓语(被动)' },
            { text: 'all over the world', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        }
      ]
    },
    {
      id: 3,
      title: '定语从句',
      description: 'Relative Clause',
      example: 'Players who come from Africa are very talented.',
      analysis: [
        { part: 'Players', type: '主语', color: '#FF6B6B' },
        { part: 'who come from Africa', type: '定语从句', color: '#DDA0DD' },
        { part: 'are', type: '系动词', color: '#4ECDC4' },
        { part: 'very talented', type: '表语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Teams that win the tournament become famous.',
          parts: [
            { text: 'Teams', correct: '主语' },
            { text: 'that win the tournament', correct: '定语从句' },
            { text: 'become', correct: '系动词' },
            { text: 'famous', correct: '表语' }
          ],
          options: ['主语', '定语从句', '系动词', '表语', '宾语']
        }
      ]
    },
    {
      id: 4,
      title: '状语从句',
      description: 'Adverbial Clause',
      example: 'When caffeine is consumed in moderation, it is not dangerous.',
      analysis: [
        { part: 'When caffeine is consumed in moderation', type: '时间状语从句', color: '#FFEAA7' },
        { part: 'it', type: '主语', color: '#FF6B6B' },
        { part: 'is', type: '系动词', color: '#4ECDC4' },
        { part: 'not dangerous', type: '表语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Because it is a stimulant, caffeine can improve mood.',
          parts: [
            { text: 'Because it is a stimulant', correct: '原因状语从句' },
            { text: 'caffeine', correct: '主语' },
            { text: 'can improve', correct: '谓语' },
            { text: 'mood', correct: '宾语' }
          ],
          options: ['原因状语从句', '主语', '谓语', '宾语', '表语']
        }
      ]
    }
  ],

  // 阅读理解数据
  readingPassages: [
    {
      id: 1,
      title: 'Soccer Without Borders',
      subtitle: 'Unit 1A',
      difficulty: '初级',
      xp: 100,
      content: `More than 200 national teams from six regions competed to get a place in 2018 FIFA World Cup in Russia. Thirty-two soccer teams qualified for the final tournament. Although each team represents a country, it doesn't mean all its players were born there.

Family relations and dual citizenship (having two nationalities) explain why many players join teams outside their native countries. Of the 32 teams competing for the World Cup, 25 had at least one foreign-born player. In total, 97 foreign-born players competed in the 2018 World Cup.

Why do players choose to play for other countries? For some, it's a chance to play at the highest level of competition. Others may feel more connected to their parents' or grandparents' country. And some players simply want a new challenge or experience.

Whatever the reason, these players help make the World Cup a truly global event. They show that soccer is a sport without borders, where talent and passion matter more than nationality.`,
      questions: [
        {
          question: 'What is the main idea of this passage?',
          options: [
            'The World Cup is held every four years',
            'Many players compete for countries other than their birth country',
            'Soccer is the most popular sport in the world',
            'Russia hosted the 2018 World Cup'
          ],
          correct: 1,
          explanation: 'The passage discusses how many players represent countries other than where they were born.'
        },
        {
          question: 'How many teams in the 2018 World Cup had foreign-born players?',
          options: [
            '32',
            '25',
            '97',
            '200'
          ],
          correct: 1,
          explanation: 'The passage states that "25 had at least one foreign-born player."'
        },
        {
          question: 'Why do some players choose to play for other countries?',
          options: [
            'They are forced to leave their home country',
            'They want to play at the highest level of competition',
            'They don\'t like their home country',
            'They are paid more money'
          ],
          correct: 1,
          explanation: 'The passage mentions several reasons, including "a chance to play at the highest level of competition."'
        }
      ]
    },
    {
      id: 2,
      title: 'A Love for Soccer',
      subtitle: 'Unit 1B',
      difficulty: '初级',
      xp: 100,
      content: `The story of soccer in Africa is a long one. In the 19th century, European colonists brought the game to Africa. Early matches were first played in the South African cities of Cape Town and Port Elizabeth in 1862. In time, the sport spread across the continent.

Today, several of the game's best players come from African nations, including Senegal, Ivory Coast, Ghana, and Nigeria. All over the continent, thousands of soccer academies now recruit boys from poorer cities and towns to play the game. Many learn to play in bare feet, and they are tough, creative players.

But the chance to make money with a professional team is probably not the main reason for soccer's popularity in Africa. "Soccer is the passion of everyone here," says Abubakari Abdul-Ganiyu, a teacher who works with youth clubs in Tamale, Ghana. "It unifies us."

In fact, more than once, the game has helped to bring people together. In Ivory Coast, for example, immigrants and Muslims faced discrimination for years. Yet many of the country's best soccer players are from Muslim and immigrant families. As a result, the national team has become a symbol of unity and has helped to promote peace throughout the country.`,
      questions: [
        {
          question: 'When did soccer first come to Africa?',
          options: [
            'In 1862',
            'In the 19th century',
            'In the 20th century',
            'In 2018'
          ],
          correct: 1,
          explanation: 'The passage states that "In the 19th century, European colonists brought the game to Africa."'
        },
        {
          question: 'What does Abubakari Abdul-Ganiyu say about soccer in Ghana?',
          options: [
            'It helps boys make money',
            'It is the passion of everyone',
            'It is only for professional players',
            'It causes problems in society'
          ],
          correct: 1,
          explanation: 'He says, "Soccer is the passion of everyone here."'
        },
        {
          question: 'How has soccer helped Ivory Coast?',
          options: [
            'It has made the country rich',
            'It has helped promote peace',
            'It has stopped immigration',
            'It has created new laws'
          ],
          correct: 1,
          explanation: 'The passage states that the national team "has helped to promote peace throughout the country."'
        }
      ]
    },
    {
      id: 3,
      title: 'The World\'s Favorite Drug',
      subtitle: 'Unit 6A',
      difficulty: '中级',
      xp: 150,
      content: `It's 1:45 a.m., and 21-year-old Thomas Murphy is burning the midnight oil, studying for an important engineering exam he has at 2:00 in the afternoon later today. To stay awake and alert, he's had two cups of coffee in the last three hours and is now downing a popular energy drink—one that has two to three times the amount of caffeine as a similar sized can of soda.

Many students like Murphy, as well as marathon runners, airline pilots, and long-distance travelers, owe their energy to one of humankind's oldest stimulants: caffeine.

The power to counter physical fatigue and increase alertness is part of the reason caffeine ranks as the world's most popular mood-altering drug. It is found not only in sodas, energy drinks, coffee, and tea, but in diet pills, pain relievers (like aspirin), and chocolate bars.

Despite concerns about health risks, the general opinion in the scientific community is that caffeine is not dangerous when consumed in moderation. This means having one or two small cups of coffee (about 300 milligrams of caffeine) per day, for example. In fact, a lot of current research contradicts long-held negative beliefs about caffeine, and suggests that it may have health benefits.

For instance, studies have shown that caffeine can help ease muscle pain. Because it is a stimulant, caffeine can also help improve one's mood. Research has also shown that some caffeinated drinks—specifically certain teas—have disease-fighting chemicals that can help the body fight a number of illnesses, including certain types of cancer.`,
      questions: [
        {
          question: 'What is the main idea of this passage?',
          options: [
            'Caffeine is dangerous and should be avoided',
            'Caffeine is a popular stimulant that may have health benefits',
            'Students should not drink energy drinks',
            'Coffee is better than tea'
          ],
          correct: 1,
          explanation: 'The passage discusses caffeine as a popular stimulant and mentions research about its potential health benefits.'
        },
        {
          question: 'How much caffeine is considered moderate consumption?',
          options: [
            '100 milligrams per day',
            '300 milligrams per day',
            '500 milligrams per day',
            '1000 milligrams per day'
          ],
          correct: 1,
          explanation: 'The passage states that moderation means "one or two small cups of coffee (about 300 milligrams of caffeine) per day."'
        },
        {
          question: 'According to the passage, caffeine can help with all of the following EXCEPT:',
          options: [
            'Easing muscle pain',
            'Improving mood',
            'Fighting certain illnesses',
            'Curing cancer'
          ],
          correct: 3,
          explanation: 'The passage mentions easing muscle pain, improving mood, and fighting illnesses, but does not say caffeine cures cancer.'
        }
      ]
    }
  ]
};

// 导出数据（如果支持模块）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
