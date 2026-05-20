// ============================================
// 英语小英雄 - 课程数据
// 基于 Reading Explorer 3 学生用书 Unit 1A 真实内容
// 主题: The World's Game (世界运动——足球)
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
    { id: 'infographic_pro', name: '图表专家', desc: '完成信息图分析', icon: '📊', xp: 80 }
  ],

  // 每日任务模板
  dailyTasks: [
    { id: 'learn_words', name: '学习新单词', desc: '学习5个新单词', target: 5, type: 'word', xp: 30 },
    { id: 'review_words', name: '复习旧单词', desc: '复习10个已学单词', target: 10, type: 'review', xp: 20 },
    { id: 'sentence_practice', name: '句型练习', desc: '完成2个句型分析', target: 2, type: 'sentence', xp: 40 },
    { id: 'reading', name: '阅读闯关', desc: '完成1篇阅读理解', target: 1, type: 'reading', xp: 50 },
    { id: 'spelling', name: '拼写挑战', desc: '完成5道拼写题', target: 5, type: 'spelling', xp: 25 }
  ],

  // 单词数据 - 基于 RE 3 Unit 1A 真实内容
  vocabulary: [
    {
      unit: 1,
      unitName: 'Unit 1A - The World\'s Game',
      unitTitle: '世界运动',
      theme: 'Soccer / Football',
      words: [
        { word: 'camaraderie', meaning: '同志情谊， camaraderie', phonetic: '/ˌkæməˈrɑːdəri/', example: 'The camaraderie among teammates is special.', image: '🤝', difficulty: 'hard' },
        { word: 'origin', meaning: '起源，来源', phonetic: '/ˈɒrɪdʒɪn/', example: 'The sport originated in Britain.', image: '🌱', difficulty: 'medium' },
        { word: 'establish', meaning: '建立，设立', phonetic: '/ɪˈstæblɪʃ/', example: 'The Football Association established rules.', image: '📋', difficulty: 'medium' },
        { word: 'participate', meaning: '参加，参与', phonetic: '/pɑːˈtɪsɪpeɪt/', example: 'More than 200 million players participate.', image: '🙋', difficulty: 'medium' },
        { word: 'universal', meaning: '普遍的，全体的', phonetic: '/ˌjuːnɪˈvɜːsl/', example: 'Soccer has universal appeal.', image: '🌍', difficulty: 'medium' },
        { word: 'recruit', meaning: '招募，招聘', phonetic: '/rɪˈkruːt/', example: 'FIFA recruited teams for the World Cup.', image: '📢', difficulty: 'medium' },
        { word: 'victory', meaning: '胜利', phonetic: '/ˈvɪktəri/', example: 'The team celebrated their victory.', image: '🏆', difficulty: 'easy' },
        { word: 'defeat', meaning: '击败；失败', phonetic: '/dɪˈfiːt/', example: 'Their defeat was disappointing.', image: '😔', difficulty: 'medium' },
        { word: 'unique', meaning: '独特的，唯一的', phonetic: '/juˈniːk/', example: 'It has a unique simplicity.', image: '💎', difficulty: 'medium' },
        { word: 'simplicity', meaning: '简单，简朴', phonetic: '/sɪmˈplɪsəti/', example: 'The simplicity makes it popular.', image: '✨', difficulty: 'hard' },
        { word: 'rural', meaning: '乡村的，农村的', phonetic: '/ˈrʊərəl/', example: 'Even in rural areas, people play.', image: '🌾', difficulty: 'hard' },
        { word: 'continent', meaning: '大陆，洲', phonetic: '/ˈkɒntɪnənt/', example: 'The sport spread across the continent.', image: '🗺️', difficulty: 'medium' },
        { word: 'professional', meaning: '职业的，专业的', phonetic: '/prəˈfeʃənl/', example: 'He is a professional player.', image: '⚽', difficulty: 'medium' },
        { word: 'academy', meaning: '学院，研究院', phonetic: '/əˈkædəmi/', example: 'Soccer academies train young players.', image: '🎓', difficulty: 'hard' },
        { word: 'immigrant', meaning: '移民', phonetic: '/ˈɪmɪɡrənt/', example: 'Immigrants faced discrimination.', image: '✈️', difficulty: 'hard' },
        { word: 'discrimination', meaning: '歧视', phonetic: '/dɪˌskrɪmɪˈneɪʃn/', example: 'They faced discrimination.', image: '⚠️', difficulty: 'hard' }
      ]
    },
    {
      unit: 2,
      unitName: 'Unit 1B - A Love for Soccer',
      unitTitle: '对足球的热爱',
      theme: 'Soccer in Africa',
      words: [
        { word: 'colonist', meaning: '殖民者', phonetic: '/ˈkɒlənɪst/', example: 'European colonists brought the game.', image: '⛵', difficulty: 'hard' },
        { word: 'spread', meaning: '传播，蔓延', phonetic: '/spred/', example: 'The sport spread across Africa.', image: '🌊', difficulty: 'easy' },
        { word: 'creative', meaning: '有创造力的', phonetic: '/kriˈeɪtɪv/', example: 'They are tough and creative.', image: '🎨', difficulty: 'easy' },
        { word: 'unify', meaning: '统一，团结', phonetic: '/ˈjuːnɪfaɪ/', example: 'Soccer unifies us.', image: '🤝', difficulty: 'medium' },
        { word: 'opportunity', meaning: '机会', phonetic: '/ˌɒpəˈtjuːnəti/', example: 'It gives boys opportunities.', image: '🚪', difficulty: 'medium' },
        { word: 'tournament', meaning: '锦标赛，比赛', phonetic: '/ˈtʊənəmənt/', example: 'The World Cup tournament.', image: '🏅', difficulty: 'medium' },
        { word: 'qualify', meaning: '取得资格', phonetic: '/ˈkwɒlɪfaɪ/', example: 'Teams qualified for the finals.', image: '✅', difficulty: 'medium' },
        { word: 'citizenship', meaning: '公民身份', phonetic: '/ˈsɪtɪzənʃɪp/', example: 'Dual citizenship influences players.', image: '📄', difficulty: 'hard' }
      ]
    }
  ],

  // 句型分析数据 - 基于 RE 3 内容设计
  sentencePatterns: [
    {
      id: 1,
      title: '定语从句 (Relative Clauses)',
      description: '用来修饰名词的从句，常用 who, which, that 引导',
      structure: '先行词 + 关系词(who/which/that) + 从句',
      example: 'A number of professional soccer players, including Brazil\'s Neymar and Nigeria\'s Victor Moses, come from poor families.',
      analysis: [
        { part: 'A number of professional soccer players', type: '主语(S)', color: '#FF6B6B' },
        { part: 'including Brazil\'s Neymar and Nigeria\'s Victor Moses', type: '插入语/举例', color: '#FFD93D' },
        { part: 'come from', type: '谓语(V)', color: '#45B7D1' },
        { part: 'poor families', type: '宾语(O)', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'The sport we know today originated in Britain.',
          parts: [
            { text: 'The sport', correct: '主语(S)' },
            { text: 'we know today', correct: '定语从句' },
            { text: 'originated', correct: '谓语(V)' },
            { text: 'in Britain', correct: '地点状语' }
          ],
          options: ['主语(S)', '谓语(V)', '定语从句', '地点状语', '时间状语']
        },
        {
          sentence: 'The boy who is wearing a red hat is my friend.',
          parts: [
            { text: 'The boy', correct: '主语(S)' },
            { text: 'who is wearing a red hat', correct: '定语从句' },
            { text: 'is', correct: '系动词' },
            { text: 'my friend', correct: '表语' }
          ],
          options: ['主语(S)', '系动词', '表语', '定语从句', '宾语(O)']
        }
      ]
    },
    {
      id: 2,
      title: '宾语从句 (Object Clauses)',
      description: '在句子中充当宾语的从句',
      structure: '主句 + that/if/whether/疑问词 + 从句',
      example: '"You don\'t need to be rich to play soccer," says historian Peter Alegi.',
      analysis: [
        { part: 'You', type: '主语(S)', color: '#FF6B6B' },
        { part: 'don\'t need', type: '谓语(V)', color: '#45B7D1' },
        { part: 'to be rich to play soccer', type: '不定式短语(宾语)', color: '#96CEB4' },
        { part: 'says historian Peter Alegi', type: '主句+说话人', color: '#FFD93D' }
      ],
      questions: [
        {
          sentence: 'I think that soccer is the most popular sport.',
          parts: [
            { text: 'I', correct: '主语(S)' },
            { text: 'think', correct: '谓语(V)' },
            { text: 'that soccer is the most popular sport', correct: '宾语从句' }
          ],
          options: ['主语(S)', '谓语(V)', '宾语从句', '定语从句', '状语从句']
        }
      ]
    },
    {
      id: 3,
      title: '被动语态 (Passive Voice)',
      description: '强调动作的承受者',
      structure: '主语 + be + 过去分词 + (by + 动作执行者)',
      example: 'The game was brought to Africa by European colonists.',
      analysis: [
        { part: 'The game', type: '主语(S)', color: '#FF6B6B' },
        { part: 'was brought', type: '被动谓语', color: '#45B7D1' },
        { part: 'to Africa', type: '地点状语', color: '#96CEB4' },
        { part: 'by European colonists', type: '动作执行者', color: '#FFD93D' }
      ],
      questions: [
        {
          sentence: 'The rules were established by the Football Association.',
          parts: [
            { text: 'The rules', correct: '主语(S)' },
            { text: 'were established', correct: '被动谓语' },
            { text: 'by the Football Association', correct: '动作执行者' }
          ],
          options: ['主语(S)', '被动谓语', '动作执行者', '时间状语', '地点状语']
        }
      ]
    },
    {
      id: 4,
      title: '原因状语从句 (Reason Clauses)',
      description: '用 because, since, as 引导，说明原因',
      structure: '主句 + because/since/as + 从句',
      example: 'Soccer is popular because it\'s a simple game.',
      analysis: [
        { part: 'Soccer', type: '主语(S)', color: '#FF6B6B' },
        { part: 'is', type: '系动词', color: '#DDA0DD' },
        { part: 'popular', type: '表语', color: '#96CEB4' },
        { part: 'because it\'s a simple game', type: '原因状语从句', color: '#FFD93D' }
      ],
      questions: [
        {
          sentence: 'They love soccer because it unifies them.',
          parts: [
            { text: 'They', correct: '主语(S)' },
            { text: 'love', correct: '谓语(V)' },
            { text: 'soccer', correct: '宾语(O)' },
            { text: 'because it unifies them', correct: '原因状语从句' }
          ],
          options: ['主语(S)', '谓语(V)', '宾语(O)', '原因状语从句', '时间状语从句']
        }
      ]
    }
  ],

  // 阅读理解数据 - 基于 RE 3 Unit 1A 真实内容
  readingPassages: [
    {
      id: 1,
      title: 'The World\'s Game',
      subtitle: '世界运动',
      unit: 1,
      unitName: 'Unit 1A',
      difficulty: '中等',
      xp: 100,
      timeLimit: 600,
      content: `Throughout history, humans have played some kind of kicking game. What the world now calls football—or soccer in the United States—began as far back as 2500 B.C.E. with the Chinese game of cuju. However, the sport we know today originated in Britain. In the 1840s, England's Football Association established a set of rules, and the modern game was born. Today, more than 200 million players all over the globe participate in the game, truly making soccer the world's sport.

So, why is soccer so popular? Maybe it's the game's camaraderie: the feeling that the team on the field is your team; their win is your victory, and their loss is your defeat. Or maybe it's the game's international quality. In countries like France, England, Spain, and Brazil, major teams have players from many different nations, and these clubs now have fans all over the world. Or perhaps it's the promise of great wealth. A number of professional soccer players, including Brazil's Neymar and Nigeria's Victor Moses, come from poor families. Today, both of these players make millions of euros every year.

Soccer is popular for all of these reasons, but ultimately, the main reason for its universal appeal may be this: It's a simple game. It can be played anywhere with anything—a ball, a can, or even some bags tied together. And anyone can play it. "You don't need to be rich to play soccer," says historian Peter Alegi. "You just need a flat space and a ball."

It is this unique simplicity that makes soccer the most popular sport in Africa. Here, even in rural areas far from the bright lights and big stadiums, children and adults play the game, often with a ball made of string and tape.`,
      questions: [
        {
          question: 'Where did the modern game of soccer originate?',
          options: ['China', 'Brazil', 'Britain', 'Nigeria'],
          correct: 2,
          explanation: '文中提到 "the sport we know today originated in Britain"'
        },
        {
          question: 'When did England\'s Football Association establish the rules?',
          options: ['In the 1740s', 'In the 1840s', 'In the 1940s', 'In 1862'],
          correct: 1,
          explanation: '文中提到 "In the 1840s, England\'s Football Association established a set of rules"'
        },
        {
          question: 'How many players participate in soccer today?',
          options: ['More than 20 million', 'More than 200 million', 'More than 2 billion', 'About 200 thousand'],
          correct: 1,
          explanation: '文中提到 "more than 200 million players all over the globe participate in the game"'
        },
        {
          question: 'What does "camaraderie" mean in paragraph B?',
          options: ['The feeling of team spirit', 'The promise of wealth', 'International quality', 'Simple rules'],
          correct: 0,
          explanation: '文中解释 camaraderie 是 "the feeling that the team on the field is your team"'
        },
        {
          question: 'According to Peter Alegi, what do you need to play soccer?',
          options: ['A lot of money', 'A flat space and a ball', 'Professional training', 'Big stadiums'],
          correct: 1,
          explanation: '文中引用 Peter Alegi 的话: "You just need a flat space and a ball."'
        },
        {
          question: 'What is the MAIN reason for soccer\'s universal appeal?',
          options: ['Great wealth', 'International quality', 'It\'s a simple game', 'Famous players'],
          correct: 2,
          explanation: '文中提到 "the main reason for its universal appeal may be this: It\'s a simple game"'
        }
      ]
    },
    {
      id: 2,
      title: 'A Love for Soccer',
      subtitle: '对足球的热爱',
      unit: 1,
      unitName: 'Unit 1B',
      difficulty: '中等',
      xp: 100,
      timeLimit: 600,
      content: `The story of soccer in Africa is a long one. In the 19th century, European colonists brought the game to Africa. Early matches were first played in the South African cities of Cape Town and Port Elizabeth in 1862. In time, the sport spread across the continent. Today, several of the game's best players come from African nations, including Senegal, Ivory Coast, Ghana, and Nigeria. All over the continent, thousands of soccer academies now give boys from poorer cities and towns the opportunity to play the game. Many learn to play in their bare feet, and they are tough, creative players.

Their dream is to play for the national team or to join one of the big clubs in Europe someday. For some, the dream comes true.

But the chance to make money with a professional team is probably not the main reason for soccer's popularity in Africa. "Soccer is the passion of everyone here," says Abubakari Abdul-Ganiyu, a teacher who works with youth clubs in Tamale, Ghana. "It unifies us." In fact, more than once, the game has helped to bring people together. In Ivory Coast, for example, immigrants and Muslims faced discrimination. But when the national team—made up of players from different backgrounds—won the African Cup of Nations, the whole country celebrated together.`,
      questions: [
        {
          question: 'When were early soccer matches first played in South Africa?',
          options: ['In 1762', 'In 1862', 'In 1962', 'In 2000'],
          correct: 1,
          explanation: '文中提到 "Early matches were first played... in 1862"'
        },
        {
          question: 'Which of the following is NOT mentioned as an African nation with great players?',
          options: ['Senegal', 'Ghana', 'Kenya', 'Nigeria'],
          correct: 2,
          explanation: '文中提到 Senegal, Ivory Coast, Ghana, and Nigeria，没有提到 Kenya'
        },
        {
          question: 'What does Abubakari Abdul-Ganiyu say about soccer?',
          options: ['It makes people rich', 'It unifies people', 'It is difficult to learn', 'It is only for professionals'],
          correct: 1,
          explanation: '文中引用他的话: "Soccer is the passion of everyone here... It unifies us."'
        },
        {
          question: 'What happened when Ivory Coast won the African Cup of Nations?',
          options: ['Players became rich', 'The whole country celebrated together', 'Many immigrants left', 'The team disbanded'],
          correct: 1,
          explanation: '文中提到 "the whole country celebrated together"'
        },
        {
          question: 'What is the main idea of this passage?',
          options: ['How to play soccer', 'The history and importance of soccer in Africa', 'Famous African soccer players', 'European colonists in Africa'],
          correct: 1,
          explanation: '文章主要讲述足球在非洲的历史和重要意义'
        }
      ]
    },
    {
      id: 3,
      title: 'Soccer Without Borders',
      subtitle: '无国界的足球',
      unit: 1,
      unitName: 'Unit 1C - Infographic',
      difficulty: '较难',
      xp: 120,
      timeLimit: 480,
      content: `Of the 32 teams competing for the World Cup, 25 had at least one foreign-born player. In total, 97 foreign-born players competed in the 2018 World Cup.

More than 200 national teams from six regions competed to get a place in the 2018 FIFA World Cup in Russia. Thirty-two soccer teams qualified for the final tournament. Although each team represents a country, it doesn't mean all its players were born there. Family relations and dual citizenship (having two nationalities) influence which country a player plays for.

The infographic shows foreign-born players' connections from birthplace to World Cup team. The width of arrows shows the number of foreign-born players. The direction of arrows shows from one country to another. The size of country names shows World Cup appearances. The color shows regional confederation. The stars above country names show World Cup wins.`,
      questions: [
        {
          question: 'How many teams had at least one foreign-born player in 2018?',
          options: ['32', '25', '97', '200'],
          correct: 1,
          explanation: '文中提到 "25 had at least one foreign-born player"'
        },
        {
          question: 'How many foreign-born players competed in total?',
          options: ['25', '32', '97', '200'],
          correct: 2,
          explanation: '文中提到 "97 foreign-born players competed"'
        },
        {
          question: 'What influences which country a player plays for?',
          options: ['Only birthplace', 'Family relations and dual citizenship', 'Team colors', 'Player\'s height'],
          correct: 1,
          explanation: '文中提到 "Family relations and dual citizenship influence which country a player plays for"'
        },
        {
          question: 'What does the width of arrows in the infographic show?',
          options: ['World Cup wins', 'Number of foreign-born players', 'Regional confederation', 'World Cup appearances'],
          correct: 1,
          explanation: '文中提到 "The width of arrows shows the number of foreign-born players"'
        }
      ]
    }
  ],

  // 信息图分析练习
  infographicExercises: [
    {
      id: 1,
      title: 'Analyzing Infographics',
      description: '信息图是一种视觉化的信息呈现方式。它把大量信息浓缩成图像、文字和数字的组合。',
      questions: [
        {
          question: 'What information can you get from the "Soccer Without Borders" infographic? (Check all that are true)',
          options: [
            'How many teams with foreign-born players took part in the 2018 World Cup',
            'The number of foreign-born players in each team',
            'How far foreign-born players traveled to get to the World Cup'
          ],
          correct: [0, 1],
          explanation: '信息图显示了有外国出生球员的队伍数量，以及每个队伍的外国出生球员数量。'
        },
        {
          question: 'Match: What does the width of arrows show?',
          options: ['World Cup wins', 'World Cup appearances', 'Number of foreign-born players', 'Regional confederation', 'Player\'s country of birth'],
          correct: 2,
          explanation: '箭头宽度表示外国出生球员的数量。'
        }
      ]
    }
  ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
