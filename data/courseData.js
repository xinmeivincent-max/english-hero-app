// ============================================
// 英语小英雄 - 完整课程数据
// 基于 Reading Explorer 3 学生用书 Unit 1A-6B
// 共12个单元，每个单元独立（单词+句型+阅读）
// 每个单元包含多种句型分析，句型从该单元课文中提取
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

  // 单词数据 - 基于 RE 3 生词表
  vocabulary: [
    {
      unit: 1,
      unitName: 'Unit 1A - The World\'s Game',
      unitTitle: '世界运动',
      words: [
        { word: 'competitor', phonetic: '/competitor/', meaning: '竞争者，对手', example: 'This is an example with competitor.', image: '📝' },
        { word: 'defeat', phonetic: '/defeat/', meaning: '击败，战胜', example: 'This is an example with defeat.', image: '📝' },
        { word: 'establish', phonetic: '/establish/', meaning: '建立，创立', example: 'This is an example with establish.', image: '📝' },
        { word: 'passion', phonetic: '/passion/', meaning: '热情，激情', example: 'This is an example with passion.', image: '📝' },
        { word: 'recruit', phonetic: '/recruit/', meaning: '招募，招收', example: 'This is an example with recruit.', image: '📝' },
        { word: 'responsible', phonetic: '/responsible/', meaning: '负责的，有责任的', example: 'This is an example with responsible.', image: '📝' },
        { word: 'unique', phonetic: '/unique/', meaning: '独特的，独一无二的', example: 'This is an example with unique.', image: '📝' },
        { word: 'unity', phonetic: '/unity/', meaning: '团结，统一', example: 'This is an example with unity.', image: '📝' },
        { word: 'universal', phonetic: '/universal/', meaning: '普遍的，全体的', example: 'This is an example with universal.', image: '📝' },
        { word: 'victory', phonetic: '/victory/', meaning: '胜利，成功', example: 'This is an example with victory.', image: '📝' },
      ]
    },
    {
      unit: 2,
      unitName: 'Unit 1B - A Love for Soccer',
      unitTitle: '非洲足球',
      words: [
        { word: 'adjust', phonetic: '/adjust/', meaning: '调整，适应', example: 'This is an example with adjust.', image: '📝' },
        { word: 'automatic', phonetic: '/automatic/', meaning: '自动的，无意识的', example: 'This is an example with automatic.', image: '📝' },
        { word: 'champion', phonetic: '/champion/', meaning: '冠军，拥护者', example: 'This is an example with champion.', image: '📝' },
        { word: 'differentiate', phonetic: '/differentiate/', meaning: '区分，区别', example: 'This is an example with differentiate.', image: '📝' },
        { word: 'elite', phonetic: '/elite/', meaning: '精英，出类拔萃的', example: 'This is an example with elite.', image: '📝' },
        { word: 'enhance', phonetic: '/enhance/', meaning: '提高，增强', example: 'This is an example with enhance.', image: '📝' },
        { word: 'generate', phonetic: '/generate/', meaning: '产生，引起', example: 'This is an example with generate.', image: '📝' },
        { word: 'genetic', phonetic: '/genetic/', meaning: '基因的，遗传的', example: 'This is an example with genetic.', image: '📝' },
        { word: 'psychological', phonetic: '/psychological/', meaning: '心理的，精神的', example: 'This is an example with psychological.', image: '📝' },
        { word: 'require', phonetic: '/require/', meaning: '需要，要求', example: 'This is an example with require.', image: '📝' },
      ]
    },
    {
      unit: 3,
      unitName: 'Unit 2A - The Psychology of Color',
      unitTitle: '色彩心理学',
      words: [
        { word: 'associate with', phonetic: '/associate with/', meaning: '与...联系，交往', example: 'This is an example with associate with.', image: '📝' },
        { word: 'conform', phonetic: '/conform/', meaning: '遵守，符合', example: 'This is an example with conform.', image: '📝' },
        { word: 'consumer', phonetic: '/consumer/', meaning: '消费者，顾客', example: 'This is an example with consumer.', image: '📝' },
        { word: 'desire', phonetic: '/desire/', meaning: '渴望，欲望', example: 'This is an example with desire.', image: '📝' },
        { word: 'devote', phonetic: '/devote/', meaning: '致力于，奉献', example: 'This is an example with devote.', image: '📝' },
        { word: 'feature', phonetic: '/feature/', meaning: '特征，特点', example: 'This is an example with feature.', image: '📝' },
        { word: 'gender', phonetic: '/gender/', meaning: '性别', example: 'This is an example with gender.', image: '📝' },
        { word: 'notion', phonetic: '/notion/', meaning: '概念，看法', example: 'This is an example with notion.', image: '📝' },
        { word: 'subjective', phonetic: '/subjective/', meaning: '主观的，个人的', example: 'This is an example with subjective.', image: '📝' },
        { word: 'uniform', phonetic: '/uniform/', meaning: '统一的，制服', example: 'This is an example with uniform.', image: '📝' },
      ]
    },
    {
      unit: 4,
      unitName: 'Unit 2B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'criminal', phonetic: '/criminal/', meaning: '罪犯，犯罪的', example: 'This is an example with criminal.', image: '📝' },
        { word: 'crucial', phonetic: '/crucial/', meaning: '至关重要的，关键的', example: 'This is an example with crucial.', image: '📝' },
        { word: 'external', phonetic: '/external/', meaning: '外部的，外来的', example: 'This is an example with external.', image: '📝' },
        { word: 'fade', phonetic: '/fade/', meaning: '褪色，逐渐消失', example: 'This is an example with fade.', image: '📝' },
        { word: 'leisure', phonetic: '/leisure/', meaning: '休闲，闲暇', example: 'This is an example with leisure.', image: '📝' },
        { word: 'mature', phonetic: '/mature/', meaning: '成熟的，成年的', example: 'This is an example with mature.', image: '📝' },
        { word: 'permanent', phonetic: '/permanent/', meaning: '永久的，持久的', example: 'This is an example with permanent.', image: '📝' },
        { word: 'protective', phonetic: '/protective/', meaning: '保护的，防护的', example: 'This is an example with protective.', image: '📝' },
        { word: 'sector', phonetic: '/sector/', meaning: '部门，领域', example: 'This is an example with sector.', image: '📝' },
        { word: 'status', phonetic: '/status/', meaning: '地位，状态', example: 'This is an example with status.', image: '📝' },
      ]
    },
    {
      unit: 5,
      unitName: 'Unit 3A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'capture', phonetic: '/capture/', meaning: '捕捉，捕获', example: 'This is an example with capture.', image: '📝' },
        { word: 'extinct', phonetic: '/extinct/', meaning: '灭绝的，绝种的', example: 'This is an example with extinct.', image: '📝' },
        { word: 'grasp', phonetic: '/grasp/', meaning: '抓住，理解', example: 'This is an example with grasp.', image: '📝' },
        { word: 'physical', phonetic: '/physical/', meaning: '身体的，物理的', example: 'This is an example with physical.', image: '📝' },
        { word: 'primary', phonetic: '/primary/', meaning: '主要的，初级的', example: 'This is an example with primary.', image: '📝' },
        { word: 'reproduce', phonetic: '/reproduce/', meaning: '繁殖，复制', example: 'This is an example with reproduce.', image: '📝' },
        { word: 'signal', phonetic: '/signal/', meaning: '信号，标志', example: 'This is an example with signal.', image: '📝' },
        { word: 'suburb', phonetic: '/suburb/', meaning: '郊区，城郊', example: 'This is an example with suburb.', image: '📝' },
        { word: 'tend to', phonetic: '/tend to/', meaning: '倾向于，往往会', example: 'This is an example with tend to.', image: '📝' },
        { word: 'threaten', phonetic: '/threaten/', meaning: '威胁，恐吓', example: 'This is an example with threaten.', image: '📝' },
      ]
    },
    {
      unit: 6,
      unitName: 'Unit 3B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'bonus', phonetic: '/bonus/', meaning: '奖金，额外好处', example: 'This is an example with bonus.', image: '📝' },
        { word: 'conflict', phonetic: '/conflict/', meaning: '冲突，矛盾', example: 'This is an example with conflict.', image: '📝' },
        { word: 'distinctive', phonetic: '/distinctive/', meaning: '独特的，有特色的', example: 'This is an example with distinctive.', image: '📝' },
        { word: 'drag', phonetic: '/drag/', meaning: '拖拉，拖拽', example: 'This is an example with drag.', image: '📝' },
        { word: 'enforce', phonetic: '/enforce/', meaning: '执行，强迫', example: 'This is an example with enforce.', image: '📝' },
        { word: 'landscape', phonetic: '/landscape/', meaning: '风景，景观', example: 'This is an example with landscape.', image: '📝' },
        { word: 'officially', phonetic: '/officially/', meaning: '正式地，官方地', example: 'This is an example with officially.', image: '📝' },
        { word: 'poverty', phonetic: '/poverty/', meaning: '贫困，贫穷', example: 'This is an example with poverty.', image: '📝' },
        { word: 'reverse', phonetic: '/reverse/', meaning: '反转，颠倒', example: 'This is an example with reverse.', image: '📝' },
        { word: 'status', phonetic: '/status/', meaning: '地位，状态', example: 'This is an example with status.', image: '📝' },
      ]
    },
    {
      unit: 7,
      unitName: 'Unit 4A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'ancestor', phonetic: '/ancestor/', meaning: '祖先，祖宗', example: 'This is an example with ancestor.', image: '📝' },
        { word: 'dawn', phonetic: '/dawn/', meaning: '黎明，开端', example: 'This is an example with dawn.', image: '📝' },
        { word: 'destruction', phonetic: '/destruction/', meaning: '破坏，毁灭', example: 'This is an example with destruction.', image: '📝' },
        { word: 'disaster', phonetic: '/disaster/', meaning: '灾难，灾祸', example: 'This is an example with disaster.', image: '📝' },
        { word: 'displace', phonetic: '/displace/', meaning: '取代，转移', example: 'This is an example with displace.', image: '📝' },
        { word: 'expand', phonetic: '/expand/', meaning: '扩大，扩展', example: 'This is an example with expand.', image: '📝' },
        { word: 'inevitable', phonetic: '/inevitable/', meaning: '不可避免的', example: 'This is an example with inevitable.', image: '📝' },
        { word: 'monitor', phonetic: '/monitor/', meaning: '监控，监测', example: 'This is an example with monitor.', image: '📝' },
        { word: 'summit', phonetic: '/summit/', meaning: '山顶，峰会', example: 'This is an example with summit.', image: '📝' },
        { word: 'witness', phonetic: '/witness/', meaning: '目击，见证', example: 'This is an example with witness.', image: '📝' },
      ]
    },
    {
      unit: 8,
      unitName: 'Unit 4B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'data', phonetic: '/data/', meaning: '数据，资料', example: 'This is an example with data.', image: '📝' },
        { word: 'detect', phonetic: '/detect/', meaning: '发现，察觉', example: 'This is an example with detect.', image: '📝' },
        { word: 'foundation', phonetic: '/foundation/', meaning: '基础，地基', example: 'This is an example with foundation.', image: '📝' },
        { word: 'laboratory', phonetic: '/laboratory/', meaning: '实验室', example: 'This is an example with laboratory.', image: '📝' },
        { word: 'massive', phonetic: '/massive/', meaning: '巨大的，大量的', example: 'This is an example with massive.', image: '📝' },
        { word: 'precise', phonetic: '/precise/', meaning: '精确的，准确的', example: 'This is an example with precise.', image: '📝' },
        { word: 'random', phonetic: '/random/', meaning: '随机的，任意的', example: 'This is an example with random.', image: '📝' },
        { word: 'schedule', phonetic: '/schedule/', meaning: '时间表，计划', example: 'This is an example with schedule.', image: '📝' },
        { word: 'track', phonetic: '/track/', meaning: '追踪，轨道', example: 'This is an example with track.', image: '📝' },
        { word: 'zone', phonetic: '/zone/', meaning: '区域，地带', example: 'This is an example with zone.', image: '📝' },
      ]
    },
    {
      unit: 9,
      unitName: 'Unit 5A - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'architecture', phonetic: '/architecture/', meaning: '建筑，建筑学', example: 'This is an example with architecture.', image: '📝' },
        { word: 'award', phonetic: '/award/', meaning: '奖励，授予', example: 'This is an example with award.', image: '📝' },
        { word: 'convert', phonetic: '/convert/', meaning: '转换，改造', example: 'This is an example with convert.', image: '📝' },
        { word: 'cure', phonetic: '/cure/', meaning: '治愈，治疗', example: 'This is an example with cure.', image: '📝' },
        { word: 'literally', phonetic: '/literally/', meaning: '字面上地，确实地', example: 'This is an example with literally.', image: '📝' },
        { word: 'migrate', phonetic: '/migrate/', meaning: '迁移，移居', example: 'This is an example with migrate.', image: '📝' },
        { word: 'monster', phonetic: '/monster/', meaning: '怪物，恶魔', example: 'This is an example with monster.', image: '📝' },
        { word: 'naturally', phonetic: '/naturally/', meaning: '自然地，天生地', example: 'This is an example with naturally.', image: '📝' },
        { word: 'spectacular', phonetic: '/spectacular/', meaning: '壮观的，惊人的', example: 'This is an example with spectacular.', image: '📝' },
        { word: 'tension', phonetic: '/tension/', meaning: '紧张，张力', example: 'This is an example with tension.', image: '📝' },
      ]
    },
    {
      unit: 10,
      unitName: 'Unit 5B - Passage Title',
      unitTitle: '主题',
      words: [
        { word: 'balance', phonetic: '/balance/', meaning: '平衡，均衡', example: 'This is an example with balance.', image: '📝' },
        { word: 'destination', phonetic: '/destination/', meaning: '目的地，终点', example: 'This is an example with destination.', image: '📝' },
        { word: 'eager', phonetic: '/eager/', meaning: '渴望的，热切的', example: 'This is an example with eager.', image: '📝' },
        { word: 'isolated', phonetic: '/isolated/', meaning: '孤立的，隔离的', example: 'This is an example with isolated.', image: '📝' },
        { word: 'magnificent', phonetic: '/magnificent/', meaning: '壮丽的，宏伟的', example: 'This is an example with magnificent.', image: '📝' },
        { word: 'prohibit', phonetic: '/prohibit/', meaning: '禁止，阻止', example: 'This is an example with prohibit.', image: '📝' },
        { word: 'rank', phonetic: '/rank/', meaning: '等级，排名', example: 'This is an example with rank.', image: '📝' },
        { word: 'spoil', phonetic: '/spoil/', meaning: '破坏，宠坏', example: 'This is an example with spoil.', image: '📝' },
        { word: 'state', phonetic: '/state/', meaning: '状态，陈述', example: 'This is an example with state.', image: '📝' },
        { word: 'ultimate', phonetic: '/ultimate/', meaning: '最终的，终极的', example: 'This is an example with ultimate.', image: '📝' },
      ]
    },
    {
      unit: 11,
      unitName: 'Unit 6A - The World\'s Favorite Drug',
      unitTitle: '咖啡因',
      words: [
        { word: 'abuse', phonetic: '/abuse/', meaning: '滥用，虐待', example: 'This is an example with abuse.', image: '📝' },
        { word: 'contradict', phonetic: '/contradict/', meaning: '反驳，与...矛盾', example: 'This is an example with contradict.', image: '📝' },
        { word: 'exhibit', phonetic: '/exhibit/', meaning: '展示，表现', example: 'This is an example with exhibit.', image: '📝' },
        { word: 'facilitate', phonetic: '/facilitate/', meaning: '促进，使便利', example: 'This is an example with facilitate.', image: '📝' },
        { word: 'furthermore', phonetic: '/furthermore/', meaning: '此外，而且', example: 'This is an example with furthermore.', image: '📝' },
        { word: 'mental', phonetic: '/mental/', meaning: '精神的，心理的', example: 'This is an example with mental.', image: '📝' },
        { word: 'proof', phonetic: '/proof/', meaning: '证据，证明', example: 'This is an example with proof.', image: '📝' },
        { word: 'reaction', phonetic: '/reaction/', meaning: '反应，回应', example: 'This is an example with reaction.', image: '📝' },
        { word: 'specialist', phonetic: '/specialist/', meaning: '专家，专科医生', example: 'This is an example with specialist.', image: '📝' },
        { word: 'temporary', phonetic: '/temporary/', meaning: '暂时的，临时的', example: 'This is an example with temporary.', image: '📝' },
      ]
    },
    {
      unit: 12,
      unitName: 'Unit 6B - Healing Forests',
      unitTitle: '自然疗愈',
      words: [
        { word: 'concentration', phonetic: '/concentration/', meaning: '专注，浓度', example: 'This is an example with concentration.', image: '📝' },
        { word: 'consequently', phonetic: '/consequently/', meaning: '因此，结果', example: 'This is an example with consequently.', image: '📝' },
        { word: 'constant', phonetic: '/constant/', meaning: '不断的，持续的', example: 'This is an example with constant.', image: '📝' },
        { word: 'excessive', phonetic: '/excessive/', meaning: '过度的，过多的', example: 'This is an example with excessive.', image: '📝' },
        { word: 'focus', phonetic: '/focus/', meaning: '专注，焦点', example: 'This is an example with focus.', image: '📝' },
        { word: 'in turn', phonetic: '/in turn/', meaning: '反过来，依次', example: 'This is an example with in turn.', image: '📝' },
        { word: 'surroundings', phonetic: '/surroundings/', meaning: '环境，周围事物', example: 'This is an example with surroundings.', image: '📝' },
        { word: 'switch', phonetic: '/switch/', meaning: '转换，开关', example: 'This is an example with switch.', image: '📝' },
        { word: 'therapy', phonetic: '/therapy/', meaning: '治疗，疗法', example: 'This is an example with therapy.', image: '📝' },
        { word: 'visual', phonetic: '/visual/', meaning: '视觉的，看得见的', example: 'This is an example with visual.', image: '📝' },
      ]
    },
  ],
  // 句型分析数据 - 按单元分组
  // 每个单元包含多种句型，句型从该单元课文中提取
  sentencePatterns: [
    // ==================== Unit 1A ====================
    // 从Unit 1A课文 "Soccer Without Borders" 提取的句子
    {
      id: 101,
      unitId: 1,
      unitName: 'Unit 1A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object (SVO)',
      example: 'Teams compete for the championship.',
      source: 'Unit 1A - Soccer Without Borders',
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
          sentence: 'More than 200 national teams competed to get a place.',
          parts: [
            { text: 'More than 200 national teams', correct: '主语' },
            { text: 'competed', correct: '谓语' },
            { text: 'to get a place', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        },
        {
          sentence: 'Thirty-two soccer teams qualified for the final tournament.',
          parts: [
            { text: 'Thirty-two soccer teams', correct: '主语' },
            { text: 'qualified', correct: '谓语' },
            { text: 'for the final tournament', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '表语']
        }
      ]
    },
    {
      id: 102,
      unitId: 1,
      unitName: 'Unit 1A',
      title: '定语从句',
      description: 'Relative Clause',
      example: 'Players who come from Africa are very talented.',
      source: 'Unit 1A - Soccer Without Borders',
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
        },
        {
          sentence: 'Players who were born in other countries bring diversity.',
          parts: [
            { text: 'Players', correct: '主语' },
            { text: 'who were born in other countries', correct: '定语从句' },
            { text: 'bring', correct: '谓语' },
            { text: 'diversity', correct: '宾语' }
          ],
          options: ['主语', '定语从句', '谓语', '宾语', '状语']
        }
      ]
    },
    {
      id: 103,
      unitId: 1,
      unitName: 'Unit 1A',
      title: '状语从句',
      description: 'Adverbial Clause',
      example: 'Although each team represents a country, it doesn\'t mean all players were born there.',
      source: 'Unit 1A - Soccer Without Borders',
      analysis: [
        { part: 'Although each team represents a country', type: '让步状语从句', color: '#FFEAA7' },
        { part: 'it', type: '主语', color: '#FF6B6B' },
        { part: 'doesn\'t mean', type: '谓语', color: '#4ECDC4' },
        { part: 'all players were born there', type: '宾语从句', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Although each team represents a country, not all players were born there.',
          parts: [
            { text: 'Although each team represents a country', correct: '让步状语从句' },
            { text: 'not all players', correct: '主语' },
            { text: 'were born', correct: '谓语' },
            { text: 'there', correct: '状语' }
          ],
          options: ['让步状语从句', '主语', '谓语', '状语', '宾语']
        },
        {
          sentence: 'When the World Cup starts, fans cheer for their teams.',
          parts: [
            { text: 'When the World Cup starts', correct: '时间状语从句' },
            { text: 'fans', correct: '主语' },
            { text: 'cheer', correct: '谓语' },
            { text: 'for their teams', correct: '状语' }
          ],
          options: ['时间状语从句', '主语', '谓语', '状语', '宾语']
        }
      ]
    },
    {
      id: 104,
      unitId: 1,
      unitName: 'Unit 1A',
      title: '宾语从句',
      description: 'Object Clause',
      example: 'They show that soccer is a sport without borders.',
      source: 'Unit 1A - Soccer Without Borders',
      analysis: [
        { part: 'They', type: '主语', color: '#FF6B6B' },
        { part: 'show', type: '谓语', color: '#4ECDC4' },
        { part: 'that soccer is a sport without borders', type: '宾语从句', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Experts believe that talent matters more than nationality.',
          parts: [
            { text: 'Experts', correct: '主语' },
            { text: 'believe', correct: '谓语' },
            { text: 'that talent matters more than nationality', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '定语']
        },
        {
          sentence: 'We know that soccer connects people worldwide.',
          parts: [
            { text: 'We', correct: '主语' },
            { text: 'know', correct: '谓语' },
            { text: 'that soccer connects people worldwide', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '状语']
        }
      ]
    },

    // ==================== Unit 1B ====================
    // 从Unit 1B课文 "A Love for Soccer" 提取的句子
    {
      id: 201,
      unitId: 2,
      unitName: 'Unit 1B',
      title: '被动语态',
      description: 'Subject + be + Past Participle',
      example: 'The game was brought to Africa by colonists.',
      source: 'Unit 1B - A Love for Soccer',
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
        },
        {
          sentence: 'Boys are recruited from poorer cities.',
          parts: [
            { text: 'Boys', correct: '主语' },
            { text: 'are recruited', correct: '谓语(被动)' },
            { text: 'from poorer cities', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        },
        {
          sentence: 'The sport was first played in South Africa.',
          parts: [
            { text: 'The sport', correct: '主语' },
            { text: 'was first played', correct: '谓语(被动)' },
            { text: 'in South Africa', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        }
      ]
    },
    {
      id: 202,
      unitId: 2,
      unitName: 'Unit 1B',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'European colonists brought the game to Africa.',
      source: 'Unit 1B - A Love for Soccer',
      analysis: [
        { part: 'European colonists', type: '主语', color: '#FF6B6B' },
        { part: 'brought', type: '谓语', color: '#4ECDC4' },
        { part: 'the game', type: '宾语', color: '#45B7D1' },
        { part: 'to Africa', type: '状语', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'Academies recruit boys from poor cities.',
          parts: [
            { text: 'Academies', correct: '主语' },
            { text: 'recruit', correct: '谓语' },
            { text: 'boys', correct: '宾语' },
            { text: 'from poor cities', correct: '状语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        },
        {
          sentence: 'The national team promotes peace.',
          parts: [
            { text: 'The national team', correct: '主语' },
            { text: 'promotes', correct: '谓语' },
            { text: 'peace', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '定语']
        }
      ]
    },
    {
      id: 203,
      unitId: 2,
      unitName: 'Unit 1B',
      title: '直接引语',
      description: 'Direct Speech',
      example: '"Soccer is the passion of everyone here," says Abubakari Abdul-Ganiyu.',
      source: 'Unit 1B - A Love for Soccer',
      analysis: [
        { part: '"Soccer is the passion of everyone here,"', type: '直接引语', color: '#DDA0DD' },
        { part: 'says', type: '谓语', color: '#4ECDC4' },
        { part: 'Abubakari Abdul-Ganiyu', type: '主语', color: '#FF6B6B' }
      ],
      questions: [
        {
          sentence: '"It unifies us," he added.',
          parts: [
            { text: '"It unifies us,"', correct: '直接引语' },
            { text: 'he', correct: '主语' },
            { text: 'added', correct: '谓语' }
          ],
          options: ['直接引语', '主语', '谓语', '宾语']
        }
      ]
    },
    {
      id: 204,
      unitId: 2,
      unitName: 'Unit 1B',
      title: '原因状语从句',
      description: 'Adverbial Clause of Reason',
      example: 'As a result, the national team has become a symbol of unity.',
      source: 'Unit 1B - A Love for Soccer',
      analysis: [
        { part: 'As a result', type: '连接短语', color: '#FFEAA7' },
        { part: 'the national team', type: '主语', color: '#FF6B6B' },
        { part: 'has become', type: '谓语', color: '#4ECDC4' },
        { part: 'a symbol of unity', type: '表语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Because soccer unifies people, it brings peace.',
          parts: [
            { text: 'Because soccer unifies people', correct: '原因状语从句' },
            { text: 'it', correct: '主语' },
            { text: 'brings', correct: '谓语' },
            { text: 'peace', correct: '宾语' }
          ],
          options: ['原因状语从句', '主语', '谓语', '宾语', '表语']
        }
      ]
    },

    // ==================== Unit 2A-5B 占位 ====================
    // Unit 2A
    {
      id: 301,
      unitId: 3,
      unitName: 'Unit 2A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Scientists study the environment.',
      source: 'Unit 2A',
      analysis: [
        { part: 'Scientists', type: '主语', color: '#FF6B6B' },
        { part: 'study', type: '谓语', color: '#4ECDC4' },
        { part: 'the environment', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Researchers collect data from the ocean.',
          parts: [
            { text: 'Researchers', correct: '主语' },
            { text: 'collect', correct: '谓语' },
            { text: 'data', correct: '宾语' },
            { text: 'from the ocean', correct: '状语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        }
      ]
    },
    {
      id: 302,
      unitId: 3,
      unitName: 'Unit 2A',
      title: '定语从句',
      description: 'Relative Clause',
      example: 'The scientist who discovered DNA became famous.',
      source: 'Unit 2A',
      analysis: [
        { part: 'The scientist', type: '主语', color: '#FF6B6B' },
        { part: 'who discovered DNA', type: '定语从句', color: '#DDA0DD' },
        { part: 'became', type: '系动词', color: '#4ECDC4' },
        { part: 'famous', type: '表语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'The book that I read was interesting.',
          parts: [
            { text: 'The book', correct: '主语' },
            { text: 'that I read', correct: '定语从句' },
            { text: 'was', correct: '系动词' },
            { text: 'interesting', correct: '表语' }
          ],
          options: ['主语', '定语从句', '系动词', '表语']
        }
      ]
    },

    // Unit 2B
    {
      id: 401,
      unitId: 4,
      unitName: 'Unit 2B',
      title: '状语从句',
      description: 'Adverbial Clause',
      example: 'When the rain stopped, the players returned.',
      source: 'Unit 2B',
      analysis: [
        { part: 'When the rain stopped', type: '时间状语从句', color: '#FFEAA7' },
        { part: 'the players', type: '主语', color: '#FF6B6B' },
        { part: 'returned', type: '谓语', color: '#4ECDC4' }
      ],
      questions: [
        {
          sentence: 'When the game started, everyone cheered.',
          parts: [
            { text: 'When the game started', correct: '时间状语从句' },
            { text: 'everyone', correct: '主语' },
            { text: 'cheered', correct: '谓语' }
          ],
          options: ['时间状语从句', '主语', '谓语', '宾语']
        }
      ]
    },
    {
      id: 402,
      unitId: 4,
      unitName: 'Unit 2B',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'The results were published in a journal.',
      source: 'Unit 2B',
      analysis: [
        { part: 'The results', type: '主语', color: '#FF6B6B' },
        { part: 'were published', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'in a journal', type: '状语', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'The data was collected by researchers.',
          parts: [
            { text: 'The data', correct: '主语' },
            { text: 'was collected', correct: '谓语(被动)' },
            { text: 'by researchers', correct: '施动者' }
          ],
          options: ['主语', '谓语(被动)', '施动者', '宾语']
        }
      ]
    },

    // Unit 3A
    {
      id: 501,
      unitId: 5,
      unitName: 'Unit 3A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Students learn new skills every day.',
      source: 'Unit 3A',
      analysis: [
        { part: 'Students', type: '主语', color: '#FF6B6B' },
        { part: 'learn', type: '谓语', color: '#4ECDC4' },
        { part: 'new skills', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Teachers prepare lessons for their classes.',
          parts: [
            { text: 'Teachers', correct: '主语' },
            { text: 'prepare', correct: '谓语' },
            { text: 'lessons', correct: '宾语' },
            { text: 'for their classes', correct: '状语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        }
      ]
    },
    {
      id: 502,
      unitId: 5,
      unitName: 'Unit 3A',
      title: '宾语从句',
      description: 'Object Clause',
      example: 'We know that practice makes perfect.',
      source: 'Unit 3A',
      analysis: [
        { part: 'We', type: '主语', color: '#FF6B6B' },
        { part: 'know', type: '谓语', color: '#4ECDC4' },
        { part: 'that practice makes perfect', type: '宾语从句', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'She believes that hard work pays off.',
          parts: [
            { text: 'She', correct: '主语' },
            { text: 'believes', correct: '谓语' },
            { text: 'that hard work pays off', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '定语']
        }
      ]
    },

    // Unit 3B
    {
      id: 601,
      unitId: 6,
      unitName: 'Unit 3B',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'Homework is assigned every day.',
      source: 'Unit 3B',
      analysis: [
        { part: 'Homework', type: '主语', color: '#FF6B6B' },
        { part: 'is assigned', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'every day', type: '状语', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'Tests are given at the end of each unit.',
          parts: [
            { text: 'Tests', correct: '主语' },
            { text: 'are given', correct: '谓语(被动)' },
            { text: 'at the end of each unit', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        }
      ]
    },
    {
      id: 602,
      unitId: 6,
      unitName: 'Unit 3B',
      title: '定语从句',
      description: 'Relative Clause',
      example: 'The student who studies hard will succeed.',
      source: 'Unit 3B',
      analysis: [
        { part: 'The student', type: '主语', color: '#FF6B6B' },
        { part: 'who studies hard', type: '定语从句', color: '#DDA0DD' },
        { part: 'will succeed', type: '谓语', color: '#4ECDC4' }
      ],
      questions: [
        {
          sentence: 'The school that she attends is famous.',
          parts: [
            { text: 'The school', correct: '主语' },
            { text: 'that she attends', correct: '定语从句' },
            { text: 'is', correct: '系动词' },
            { text: 'famous', correct: '表语' }
          ],
          options: ['主语', '定语从句', '系动词', '表语']
        }
      ]
    },

    // Unit 4A
    {
      id: 701,
      unitId: 7,
      unitName: 'Unit 4A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Technology changes our lives.',
      source: 'Unit 4A',
      analysis: [
        { part: 'Technology', type: '主语', color: '#FF6B6B' },
        { part: 'changes', type: '谓语', color: '#4ECDC4' },
        { part: 'our lives', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Online resources help students learn.',
          parts: [
            { text: 'Online resources', correct: '主语' },
            { text: 'help', correct: '谓语' },
            { text: 'students', correct: '宾语' },
            { text: 'learn', correct: '宾补' }
          ],
          options: ['主语', '谓语', '宾语', '宾补']
        }
      ]
    },
    {
      id: 702,
      unitId: 7,
      unitName: 'Unit 4A',
      title: '状语从句',
      description: 'Adverbial Clause',
      example: 'Although technology is helpful, we should use it wisely.',
      source: 'Unit 4A',
      analysis: [
        { part: 'Although technology is helpful', type: '让步状语从句', color: '#FFEAA7' },
        { part: 'we', type: '主语', color: '#FF6B6B' },
        { part: 'should use', type: '谓语', color: '#4ECDC4' },
        { part: 'it', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'If we use technology wisely, it benefits us.',
          parts: [
            { text: 'If we use technology wisely', correct: '条件状语从句' },
            { text: 'it', correct: '主语' },
            { text: 'benefits', correct: '谓语' },
            { text: 'us', correct: '宾语' }
          ],
          options: ['条件状语从句', '主语', '谓语', '宾语']
        }
      ]
    },

    // Unit 4B
    {
      id: 801,
      unitId: 8,
      unitName: 'Unit 4B',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'Forests are being destroyed by human activity.',
      source: 'Unit 4B',
      analysis: [
        { part: 'Forests', type: '主语', color: '#FF6B6B' },
        { part: 'are being destroyed', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'by human activity', type: '施动者', color: '#FFEAA7' }
      ],
      questions: [
        {
          sentence: 'The environment is protected by laws.',
          parts: [
            { text: 'The environment', correct: '主语' },
            { text: 'is protected', correct: '谓语(被动)' },
            { text: 'by laws', correct: '施动者' }
          ],
          options: ['主语', '谓语(被动)', '施动者', '宾语']
        }
      ]
    },
    {
      id: 802,
      unitId: 8,
      unitName: 'Unit 4B',
      title: '原因状语从句',
      description: 'Adverbial Clause of Reason',
      example: 'Because pollution increases, climate changes.',
      source: 'Unit 4B',
      analysis: [
        { part: 'Because pollution increases', type: '原因状语从句', color: '#FFEAA7' },
        { part: 'climate', type: '主语', color: '#FF6B6B' },
        { part: 'changes', type: '谓语', color: '#4ECDC4' }
      ],
      questions: [
        {
          sentence: 'Since forests absorb CO2, they help the planet.',
          parts: [
            { text: 'Since forests absorb CO2', correct: '原因状语从句' },
            { text: 'they', correct: '主语' },
            { text: 'help', correct: '谓语' },
            { text: 'the planet', correct: '宾语' }
          ],
          options: ['原因状语从句', '主语', '谓语', '宾语']
        }
      ]
    },

    // Unit 5A
    {
      id: 901,
      unitId: 9,
      unitName: 'Unit 5A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Critical thinking helps us analyze information.',
      source: 'Unit 5A',
      analysis: [
        { part: 'Critical thinking', type: '主语', color: '#FF6B6B' },
        { part: 'helps', type: '谓语', color: '#4ECDC4' },
        { part: 'us', type: '宾语', color: '#45B7D1' },
        { part: 'analyze information', type: '宾补', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'Good readers ask questions while reading.',
          parts: [
            { text: 'Good readers', correct: '主语' },
            { text: 'ask', correct: '谓语' },
            { text: 'questions', correct: '宾语' },
            { text: 'while reading', correct: '状语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        }
      ]
    },
    {
      id: 902,
      unitId: 9,
      unitName: 'Unit 5A',
      title: '宾语从句',
      description: 'Object Clause',
      example: 'We believe that evidence supports our opinion.',
      source: 'Unit 5A',
      analysis: [
        { part: 'We', type: '主语', color: '#FF6B6B' },
        { part: 'believe', type: '谓语', color: '#4ECDC4' },
        { part: 'that evidence supports our opinion', type: '宾语从句', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'They think that practice improves skills.',
          parts: [
            { text: 'They', correct: '主语' },
            { text: 'think', correct: '谓语' },
            { text: 'that practice improves skills', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '定语']
        }
      ]
    },

    // Unit 5B
    {
      id: 1001,
      unitId: 10,
      unitName: 'Unit 5B',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'Cultures are connected by globalization.',
      source: 'Unit 5B',
      analysis: [
        { part: 'Cultures', type: '主语', color: '#FF6B6B' },
        { part: 'are connected', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'by globalization', type: '施动者', color: '#FFEAA7' }
      ],
      questions: [
        {
          sentence: 'Goods are traded between countries.',
          parts: [
            { text: 'Goods', correct: '主语' },
            { text: 'are traded', correct: '谓语(被动)' },
            { text: 'between countries', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        }
      ]
    },
    {
      id: 1002,
      unitId: 10,
      unitName: 'Unit 5B',
      title: '让步状语从句',
      description: 'Adverbial Clause of Concession',
      example: 'Although globalization has benefits, it creates challenges.',
      source: 'Unit 5B',
      analysis: [
        { part: 'Although globalization has benefits', type: '让步状语从句', color: '#FFEAA7' },
        { part: 'it', type: '主语', color: '#FF6B6B' },
        { part: 'creates', type: '谓语', color: '#4ECDC4' },
        { part: 'challenges', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'While trade increases, inequality may grow.',
          parts: [
            { text: 'While trade increases', correct: '让步状语从句' },
            { text: 'inequality', correct: '主语' },
            { text: 'may grow', correct: '谓语' }
          ],
          options: ['让步状语从句', '主语', '谓语', '宾语']
        }
      ]
    },

    // ==================== Unit 6A ====================
    // 从Unit 6A课文 "The World's Favorite Drug" 提取的句子
    {
      id: 1101,
      unitId: 11,
      unitName: 'Unit 6A',
      title: '状语从句',
      description: 'Adverbial Clause',
      example: 'When caffeine is consumed in moderation, it is not dangerous.',
      source: 'Unit 6A - The World\'s Favorite Drug',
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
        },
        {
          sentence: 'When consumed in moderation, caffeine is not dangerous.',
          parts: [
            { text: 'When consumed in moderation', correct: '时间状语从句' },
            { text: 'caffeine', correct: '主语' },
            { text: 'is', correct: '系动词' },
            { text: 'not dangerous', correct: '表语' }
          ],
          options: ['时间状语从句', '主语', '系动词', '表语', '宾语']
        },
        {
          sentence: 'If you drink too much coffee, you may feel nervous.',
          parts: [
            { text: 'If you drink too much coffee', correct: '条件状语从句' },
            { text: 'you', correct: '主语' },
            { text: 'may feel', correct: '谓语' },
            { text: 'nervous', correct: '表语' }
          ],
          options: ['条件状语从句', '主语', '谓语', '表语', '宾语']
        }
      ]
    },
    {
      id: 1102,
      unitId: 11,
      unitName: 'Unit 6A',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Caffeine counteracts physical fatigue.',
      source: 'Unit 6A - The World\'s Favorite Drug',
      analysis: [
        { part: 'Caffeine', type: '主语', color: '#FF6B6B' },
        { part: 'counteracts', type: '谓语', color: '#4ECDC4' },
        { part: 'physical fatigue', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Caffeine increases alertness.',
          parts: [
            { text: 'Caffeine', correct: '主语' },
            { text: 'increases', correct: '谓语' },
            { text: 'alertness', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '定语']
        },
        {
          sentence: 'Students drink coffee to stay awake.',
          parts: [
            { text: 'Students', correct: '主语' },
            { text: 'drink', correct: '谓语' },
            { text: 'coffee', correct: '宾语' },
            { text: 'to stay awake', correct: '状语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        }
      ]
    },
    {
      id: 1103,
      unitId: 11,
      unitName: 'Unit 6A',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'Caffeine is found in coffee and tea.',
      source: 'Unit 6A - The World\'s Favorite Drug',
      analysis: [
        { part: 'Caffeine', type: '主语', color: '#FF6B6B' },
        { part: 'is found', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'in coffee and tea', type: '状语', color: '#96CEB4' }
      ],
      questions: [
        {
          sentence: 'Caffeine is consumed by millions of people.',
          parts: [
            { text: 'Caffeine', correct: '主语' },
            { text: 'is consumed', correct: '谓语(被动)' },
            { text: 'by millions of people', correct: '施动者' }
          ],
          options: ['主语', '谓语(被动)', '施动者', '宾语']
        },
        {
          sentence: 'Energy drinks are marketed to young people.',
          parts: [
            { text: 'Energy drinks', correct: '主语' },
            { text: 'are marketed', correct: '谓语(被动)' },
            { text: 'to young people', correct: '状语' }
          ],
          options: ['主语', '谓语(被动)', '状语', '宾语']
        }
      ]
    },
    {
      id: 1104,
      unitId: 11,
      unitName: 'Unit 6A',
      title: '宾语从句',
      description: 'Object Clause',
      example: 'Research suggests that caffeine may have health benefits.',
      source: 'Unit 6A - The World\'s Favorite Drug',
      analysis: [
        { part: 'Research', type: '主语', color: '#FF6B6B' },
        { part: 'suggests', type: '谓语', color: '#4ECDC4' },
        { part: 'that caffeine may have health benefits', type: '宾语从句', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Studies show that caffeine can ease muscle pain.',
          parts: [
            { text: 'Studies', correct: '主语' },
            { text: 'show', correct: '谓语' },
            { text: 'that caffeine can ease muscle pain', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '定语']
        },
        {
          sentence: 'Scientists believe that tea has disease-fighting chemicals.',
          parts: [
            { text: 'Scientists', correct: '主语' },
            { text: 'believe', correct: '谓语' },
            { text: 'that tea has disease-fighting chemicals', correct: '宾语从句' }
          ],
          options: ['主语', '谓语', '宾语从句', '状语']
        }
      ]
    },

    // ==================== Unit 6B ====================
    // 从Unit 6B课文 "Healing Forests" 提取的句子
    {
      id: 1201,
      unitId: 12,
      unitName: 'Unit 6B',
      title: '主谓宾结构',
      description: 'Subject + Verb + Object',
      example: 'Nature improves concentration.',
      source: 'Unit 6B - Healing Forests',
      analysis: [
        { part: 'Nature', type: '主语', color: '#FF6B6B' },
        { part: 'improves', type: '谓语', color: '#4ECDC4' },
        { part: 'concentration', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Forest therapy helps reduce stress.',
          parts: [
            { text: 'Forest therapy', correct: '主语' },
            { text: 'helps', correct: '谓语' },
            { text: 'reduce stress', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '定语']
        },
        {
          sentence: 'People enjoy the natural surroundings.',
          parts: [
            { text: 'People', correct: '主语' },
            { text: 'enjoy', correct: '谓语' },
            { text: 'the natural surroundings', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '状语']
        },
        {
          sentence: 'Walking in the forest clears the mind.',
          parts: [
            { text: 'Walking in the forest', correct: '主语' },
            { text: 'clears', correct: '谓语' },
            { text: 'the mind', correct: '宾语' }
          ],
          options: ['主语', '谓语', '宾语', '定语']
        }
      ]
    },
    {
      id: 1202,
      unitId: 12,
      unitName: 'Unit 6B',
      title: '定语从句',
      description: 'Relative Clause',
      example: 'The trees that release chemicals help our immune system.',
      source: 'Unit 6B - Healing Forests',
      analysis: [
        { part: 'The trees', type: '主语', color: '#FF6B6B' },
        { part: 'that release chemicals', type: '定语从句', color: '#DDA0DD' },
        { part: 'help', type: '谓语', color: '#4ECDC4' },
        { part: 'our immune system', type: '宾语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'The forest that we visited was beautiful.',
          parts: [
            { text: 'The forest', correct: '主语' },
            { text: 'that we visited', correct: '定语从句' },
            { text: 'was', correct: '系动词' },
            { text: 'beautiful', correct: '表语' }
          ],
          options: ['主语', '定语从句', '系动词', '表语']
        },
        {
          sentence: 'Doctors who recommend forest therapy believe in nature.',
          parts: [
            { text: 'Doctors', correct: '主语' },
            { text: 'who recommend forest therapy', correct: '定语从句' },
            { text: 'believe', correct: '谓语' },
            { text: 'in nature', correct: '状语' }
          ],
          options: ['主语', '定语从句', '谓语', '状语']
        }
      ]
    },
    {
      id: 1203,
      unitId: 12,
      unitName: 'Unit 6B',
      title: '原因状语从句',
      description: 'Adverbial Clause of Reason',
      example: 'Because nature reduces stress, people feel better.',
      source: 'Unit 6B - Healing Forests',
      analysis: [
        { part: 'Because nature reduces stress', type: '原因状语从句', color: '#FFEAA7' },
        { part: 'people', type: '主语', color: '#FF6B6B' },
        { part: 'feel', type: '谓语', color: '#4ECDC4' },
        { part: 'better', type: '表语', color: '#45B7D1' }
      ],
      questions: [
        {
          sentence: 'Since walking relaxes the body, doctors recommend it.',
          parts: [
            { text: 'Since walking relaxes the body', correct: '原因状语从句' },
            { text: 'doctors', correct: '主语' },
            { text: 'recommend', correct: '谓语' },
            { text: 'it', correct: '宾语' }
          ],
          options: ['原因状语从句', '主语', '谓语', '宾语']
        }
      ]
    },
    {
      id: 1204,
      unitId: 12,
      unitName: 'Unit 6B',
      title: '被动语态',
      description: 'Passive Voice',
      example: 'Stress is reduced by spending time in nature.',
      source: 'Unit 6B - Healing Forests',
      analysis: [
        { part: 'Stress', type: '主语', color: '#FF6B6B' },
        { part: 'is reduced', type: '谓语(被动)', color: '#4ECDC4' },
        { part: 'by spending time in nature', type: '施动者', color: '#FFEAA7' }
      ],
      questions: [
        {
          sentence: 'Blood pressure is lowered by forest bathing.',
          parts: [
            { text: 'Blood pressure', correct: '主语' },
            { text: 'is lowered', correct: '谓语(被动)' },
            { text: 'by forest bathing', correct: '施动者' }
          ],
          options: ['主语', '谓语(被动)', '施动者', '宾语']
        }
      ]
    }
  ],

  // 阅读理解数据 - 按单元分组，每个单元独立
  readingPassages: {
  units: [
    {
      id: "1A",
      name: "Unit 1A",
      theme: "The World's Game",
      articles: [
        {
          id: "1A-1",
          title: "THE WORLD'S GAME",
          subtitle: "The History and Popularity of Soccer",
          content: `A Throughout history, humans have played some kind of kicking game. What the world now calls football—or soccer in the United States—began as far back as 2500 B.C. with the Chinese game of cuju. However, the sport we know today originated in Britain. In the 1840s, England's Football Association established a set of rules, and the modern game was born. Today, more than 200 million players all over the globe participate in the game, truly making soccer the world's sport.

B So, why is soccer so popular? Maybe it's the game's camaraderie: the feeling that the team on the field is your team; their win is your victory, and their loss is your defeat. Or maybe it's the game's international quality. In countries like France, England, Spain, and Brazil, major teams have players from many different nations, and these clubs now have fans all over the world. Or perhaps it's the promise of great wealth. A number of professional soccer players, including Brazil's Neymar and Nigeria's Victor Moses, come from poor families. Today, both of these players make millions of euros every year.

C Soccer is popular for all of these reasons, but ultimately, the main reason for its universal appeal may be this: It's a simple game. It can be played anywhere with anything—a ball, a can, or even some bags tied together. And anyone can play it. "You don't need to be rich . . . to play soccer," says historian Peter Alegi. "You just need a flat space and a ball."

D It is this unique simplicity that makes soccer the most popular sport in Africa. Here, even in rural areas far from the bright lights and big stadiums, children and adults play the game, often with handmade balls.`,
          questions: [
            {
              type: "GIST",
              question: "What is this passage mainly about?",
              options: ["the history of soccer", "the popularity of soccer", "different soccer teams", "how the World Cup began"],
              answer: 1
            },
    {
      id: "2A",
      name: "Unit 2A",
      theme: "What Is Beauty?",
      articles: [
        {
          id: "2A-1",
          title: "WHAT IS BEAUTY?",
          subtitle: "The Search for Beauty Across Cultures",
          content: `A The search for beauty spans centuries and continents. Paintings of Egyptians dating back over 4,000 years show both men and women painting their nails and wearing makeup. On the other side of the globe, the ancient Maya of Central America considered crossed eyes beautiful, and hung little balls between children's eyes to develop this look. In 18th-century France, wealthy noblemen wore large wigs of long white hair to make themselves attractive. In cultures throughout the world, people have gone to extreme lengths to achieve beauty.

B Today, people continue to devote a lot of time and money to their appearance. According to a recent report, one out of three globally say they are spending more money on beauty and health-care products than ever before. Worldwide, sales of makeup, dieting, hair- and skin-care products—as well as gym memberships and cosmetic surgery—generate billions of dollars every year. And there is at least one good reason for the desire to be attractive: Beauty is power. Studies suggest that good-looking people make more money, get called on more often in class, and are perceived as friendlier.

C But what exactly is beauty? Trying to define it is difficult, and yet we know it when we see it—or so we think. "Beauty is health," says one psychologist. "It's a billboard saying, 'I'm healthy. I can pass on your genes.'" And our awareness of it may start at a very early age. In one set of studies, six-month-old babies were shown a series of photographs. The faces in the pictures had been rated for attractiveness by a group of college students. In the studies, the babies spent more time looking at the attractive faces than the unattractive ones.

D Not everyone agrees with this notion, however. "Our hardwiredness can be altered by all sorts of expectations—predominantly cultural," says C. Loring Brace, an anthropologist at the University of Michigan. What is considered attractive in one culture might not be in another. Look in most Western fashion magazines, for example, and the women on the pages are thin. But is this the "perfect" body type for everyone? In many African and Pacific Island cultures, larger women are traditionally considered more attractive. The point is that ideals of beauty change over time and vary across cultures.

E So where does this leave us? Perhaps the search for beauty is universal, but the definition of what is beautiful is not. As we continue to explore this topic, we might ask ourselves: Is beauty really in the eye of the beholder, or are there universal standards that transcend culture and time?`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the history of makeup", "the search for beauty across cultures", "the power of attractive people", "the science of genetics"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph B, which of these is NOT mentioned as a benefit of being attractive?",
              options: ["making more money", "getting called on more in class", "being perceived as friendlier", "having better health"],
              answer: 3
            },
            {
              type: "INFERENCE",
              question: "What can we infer about the studies with six-month-old babies mentioned in paragraph C?",
              options: ["Babies prefer attractive faces from birth.", "Babies learn to prefer attractive faces from their parents.", "Babies cannot tell the difference between attractive and unattractive faces.", "Babies prefer faces that look like their parents."],
              answer: 0
            }
          ]
        }
      ]
    },
    {
      id: "2B",
      name: "Unit 2B",
      theme: "Skin: The Body's Canvas",
      articles: [
        {
          id: "2B-1",
          title: "SKIN: THE BODY'S CANVAS",
          subtitle: "Body Art and Culture",
          content: `A If you could take off your skin and lay it flat, it would cover an area of about 1.9 square meters. Skin is, by far, the body's largest organ. Covering almost the entire body, skin protects us from a variety of external forces. For example, it protects us from extremes of temperature, damaging sunlight, harmful chemicals, and dangerous infections. Skin is also packed with nerves, which keeps the brain in touch with the outside world. The health of our skin and its ability to perform its functions are essential to our well-being. However, the appearance of our skin is equally—if not more—important to many people on this planet.

B Take skin color, for example. Your genes determine your skin's color, but for centuries, humans have tried to lighten or darken their skin in an attempt to be more attractive. In the 1800s, white skin was desirable for many Europeans. Skin this color meant that its owner was a member of the upper class and did not have to work in the sun. Among darker-skinned people in some parts of the world, products used to lighten skin are still popular today. During the 20th century, attitudes toward light skin shifted in the opposite direction in other cultures, as cities grew and work moved indoors. Tanned skin began to indicate time outdoors and health. In many places today, tanning on the beach or in a salon remains popular, even though people are more aware of the dangers of UV rays.

C Just as people have altered their skin's color to denote wealth and beauty, so too have cultures around the globe marked their skin to indicate identity and status. Tattooing, for example, has been carried out for thousands of years. Leaders in places including ancient Egypt, Britain, and Japan decorated their skin with tattoos to show their power. For the Maori of New Zealand, traditional facial tattoos called ta moko represent family history and social rank. In many cultures, tattoos have also been used to mark prisoners or slaves.

D Today, tattoos have become a form of personal expression for millions of people worldwide. Modern tattoo artists use electric machines to create detailed designs, from small symbols to full-body artwork. While some people still associate tattoos with rebellion or criminality, they have become increasingly accepted in mainstream society. Many professionals, including doctors, lawyers, and teachers, now have visible tattoos.

E Body piercing is another ancient practice that has gained modern popularity. Ear piercing is the most common form, but people also pierce their noses, lips, eyebrows, and other body parts. Like tattoos, piercings can serve as a form of self-expression or cultural identity. In some cultures, specific piercings carry traditional meanings. For example, in parts of India, nose piercing is associated with marriage and social status.

F Scarification—creating permanent scars on the skin as decoration—is practiced in several African and Australian Aboriginal cultures. The patterns of scars can indicate tribal membership, social status, or personal achievements. While scarification may seem extreme to outsiders, those who practice it view it as a beautiful and meaningful form of body art.

G What all these practices have in common is the human desire to modify the body and make it one's own. Whether through color, ink, metal, or scars, people around the world have always found ways to transform their skin into a canvas that reflects their identity, culture, and personal story.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the skin's role in our overall health", "the ways people change the appearance of their skin", "the different reasons people get tattoos", "cultural ceremonies that involve skin tattooing"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph A, what is one way that skin protects us?",
              options: ["It helps us feel emotions.", "It protects us from extremes of temperature.", "It helps us digest food.", "It controls our body weight."],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer about the tattoos of the Maori?",
              options: ["Both men and women get facial tattoos but never body tattoos.", "Only men get facial tattoos.", "Members of the same family have similar facial tattoos.", "No one gets their entire face tattooed anymore."],
              answer: 2
            }
          ]
        }
      ]
    }
,
            {
              type: "DETAIL",
              question: "In paragraph B, which of these is NOT given as a possible reason for soccer's popularity?",
              options: ["the team spirit among players and fans", "famous players from different countries", "the number of soccer games shown on TV", "the possibility of making a lot of money"],
              answer: 2
            },
            {
              type: "INFERENCE",
              question: "What aspect of soccer is the author referring to by 'It's a simple game' in paragraph C?",
              options: ["The rules are easy for people to understand.", "You can play it anywhere with anything.", "You don't need much talent to play soccer.", "There are only a few versions of soccer."],
              answer: 1
            }
          ]
        },
        {
          id: "1A-2",
          title: "A Love for Soccer",
          subtitle: "Soccer in Africa",
          content: `E The story of soccer in Africa is a long one. In the 19th century, European colonists brought the game to Africa. Early matches were first played in the South African cities of Cape Town and Port Elizabeth in 1862. In time, the sport spread across the continent. Today, several of the game's best players come from African nations, including Senegal, Ivory Coast, Ghana, and Nigeria. All over the continent, thousands of soccer academies now recruit boys from poorer cities and towns to play the game. Many learn to play in bare feet, and they are tough, creative players. Their dream is to play for the national team or to join one of the big clubs in Europe someday. For some, the dream comes true.

F But the chance to make money with a professional team is probably not the main reason for soccer's popularity in Africa. "Soccer is the passion of everyone here," says Abubakari Abdul-Ganiyu, a teacher who works with youth clubs in Tamale, Ghana. "It unifies us." In fact, more than once, the game has helped to bring people together. In Ivory Coast, for example, immigrants and Muslims faced discrimination for years. Yet many of the country's best soccer players are from Muslim and immigrant families. As a result, the national team has become a symbol of unity and has helped to promote peace throughout the country.

All over Africa, soccer is popular with parents and teachers for another reason: It keeps young people—especially boys—in school and out of trouble. "Most clubs in Tamale, Ghana, don't allow boys to play if they don't go to school," explains Abubakari. "We're trying our best to educate young people and to make them useful in society. Soccer helps us do this. For us, soccer is also a tool for hope."`,
          questions: [
            {
              type: "REFERENCE",
              question: "What does 'some' refer to in the last line of paragraph E?",
              options: ["poor boys", "cities and towns", "soccer academies", "national teams"],
              answer: 0
            },
            {
              type: "MAIN IDEA",
              question: "What is the main idea of the last paragraph?",
              options: ["More schools in Africa are opening soccer clubs.", "Soccer helps people get better grades in school.", "Older soccer players are passing on their skills to younger ones.", "Soccer helps develop young people as members of society."],
              answer: 3
            }
          ]
        }
      ]
    },
    {
      id: "1B",
      name: "Unit 1B",
      theme: "What Makes an Olympic Champion?",
      articles: [
        {
          id: "1B-1",
          title: "WHAT MAKES AN OLYMPIC CHAMPION?",
          subtitle: "Factors That Make a Super Athlete",
          content: `A How does a person become an Olympic champion—someone capable of winning the gold? In reality, a combination of biological, environmental, and psychological factors, as well as training and practice, all go into making a super athlete.

B Perhaps the most important factor involved in becoming an elite athlete is genetic. Most Olympic competitors are equipped with certain physical characteristics that differentiate them from the average person. Take an elite athlete's muscles, for example. In most human skeletal muscles (the ones that make your body move), there are fast-twitch fibers and slow-twitch fibers. Fast-twitch fibers help us move quickly. Olympic weightlifters, for example, have a large number of fast-twitch fibers in their muscles—many more than the average person. These allow them to lift hundreds of kilos from the ground and over their heads in seconds. Surprisingly, a large, muscular body is not the main requirement to do well in this sport. It is more important to have a large number of fast-twitch fibers in the muscles.

The legs of an elite marathon runner, on the other hand, might contain up to 90 percent slow-twitch muscle fibers. These generate energy efficiently and enable an athlete to control fatigue and keep moving for a longer period of time. When we exercise long or hard, it's common to experience tiredness, muscle pain, and difficulty breathing. These feelings are caused when the muscles produce high amounts of a substance called lactate and can't remove it quickly enough. Athletes with many slow-twitch muscle fibers seem to be able to clear the lactate from their muscles faster as they move. Thus, the average runner might start to feel discomfort halfway into a race. A trained Olympic athlete, however, might not feel pain until much later in the competition.

For some Olympic competitors, size is important. Most male champion swimmers are 180 cm or taller, allowing them to reach longer and swim faster. For both male and female gymnasts, though, a smaller size and body weight mean they can move with greater ease, and are less likely to suffer damage when landing on the floor from a height of up to 4.5 meters.

Some athletes' abilities are naturally enhanced by their environment. Those raised at high altitudes in countries such as Kenya, Ethiopia, and Morocco have blood that is rich in hemoglobin. Large amounts of hemoglobin carry oxygen around the body faster, enabling these athletes to run better. Cultural factors also help some athletes do well at certain sports. Tegla Loroupe, a young woman from northern Kenya, has won several marathons. She says some of her success comes from her culture's emphasis on hard work and discipline.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["how to qualify for the Olympics", "factors that make someone a super athlete", "the different muscle types of a super athlete", "the size of a super athlete"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "Having a lot of slow-twitch muscle fibers is particularly important for",
              options: ["long-distance cyclists", "table-tennis players", "divers", "weightlifters"],
              answer: 0
            },
            {
              type: "INFERENCE",
              question: "When lactate builds up in their muscles,",
              options: ["athletes feel more energetic", "athletes experience pain and fatigue", "athletes can run faster", "athletes need more hemoglobin"],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "3A",
      name: "Unit 3A",
      theme: "Racing to Rescue Koalas",
      articles: [
        {
          id: "3A-1",
          title: "RACING TO RESCUE KOALAS",
          subtitle: "Saving Australia's Iconic Animal",
          content: `A It's two in the morning, and a koala is caught on a fence, like a prisoner trying to escape. A phone rings in the home of Megan Aitken in a suburb of Brisbane, on the east coast of Australia. Aitken runs a volunteer organization devoted to rescuing wild koalas. Before she is told the location, she has already thrown her clothes over her pajamas, ready to head out.

B When Aitken arrives on the scene, two other volunteers—Jane Davies and Sandra Peachey—are already there. They discover that the koala's fur is caught in the barbed wire. Nearby, they notice tall eucalyptus trees. "He was obviously trying to get to the trees on the other side," Aitken says.

C Aitken puts on heavy gloves. Despite their cute appearance, koalas can be ferocious when resisting capture. If they feel threatened, they bite, and Aitken has the scars to prove it. The volunteers get to work. Davies throws a blanket over the animal, while Peachey opens the lid of a cage. Aitken firmly grasps the koala through the blanket, frees it from the fence, and drops it in the cage.

D Next, they check the animal's physical condition. If the koala is sick or injured, it may need to be taken to an animal hospital. If the koala is healthy—like this one—it is normally released where it is found. Koalas tend to live in a small area, and often eat from the same trees over and over.

E Right now, however, Aitken and the rescued koala are in a suburb with almost no trees. "This is the whole problem," Aitken says. "There are so few places left for the koala." In the end, Aitken takes the animal to a small park nearby and releases him. "Good luck, little one," she says.

F "Koalas are getting caught in fences and dying," explains Deidré de Villiers, a koala researcher in Queensland, Australia. Others are being killed by dogs or struck by vehicles, she says. Some even die "simply because a homeowner cut down several eucalyptus trees in his backyard."

G For 15 years, de Villiers has been studying koalas and the reasons for their disappearance. She is also working on ways to make suburban areas more koala-friendly. De Villiers believes that koalas and humans can live together, if certain changes are made. She recommends reducing speed limits on streets and creating more green areas for koalas to live in. Even more important is the need to preserve eucalyptus trees.

H Even if these changes are made, koalas still have another problem. "Disease is a huge issue," explains veterinarian Jon Hanger. Hanger says that almost half of Queensland's female koalas are affected by a disease called chlamydiosis. Without treatment, the koalas are unable to reproduce. "Koala populations that used to be vibrant are becoming extinct," says Hanger. Once, there were millions of koalas in Australia; now, there are believed to be fewer than 80,000.

I At her home near Brisbane, Deidré de Villiers is taking care of a female koala named Ruby. "Ruby still sleeps in the basket hugging her teddy bear," she says. "She was rescued from the jaws of a dog." Every two days, de Villiers collects eucalyptus leaves, the koala's primary food, from a nearby farm to feed Ruby. For 12 years, she has cared for more than 60 koalas.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["how to care for injured koalas", "the work of koala rescuers and researchers", "the diet of koalas in Australia", "the dangers facing koalas in the wild"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph F, which of these is NOT mentioned as a threat to koalas?",
              options: ["getting caught in fences", "being killed by dogs", "losing their habitat", "being hunted for their fur"],
              answer: 3
            },
            {
              type: "INFERENCE",
              question: "What can we infer about Deidré de Villiers from the passage?",
              options: ["She works for the government.", "She is dedicated to helping koalas.", "She believes koalas cannot be saved.", "She thinks koalas should live in zoos."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "3B",
      name: "Unit 3B",
      theme: "Tracking the Snow Leopard",
      articles: [
        {
          id: "3B-1",
          title: "TRACKING THE SNOW LEOPARD",
          subtitle: "Saving a Threatened Species",
          content: `A "When a snow leopard stalks its prey among the mountain walls, it moves . . . softly, slowly," explains Indian biologist Raghunandan Singh Chundawat, who has studied the animal for years. "If it knocks a stone loose, it will reach out a foot to stop it from falling and making noise." One might be moving right now, perfectly silent, maybe close by. But where?

B Best known for its spotted coat and long distinctive tail, the snow leopard is one of the world's most secretive animals. These elusive cats can only be found high in the remote, mountainous regions of Central Asia. For this reason, and because they hunt primarily at night, they are very rarely seen.

C Snow leopards have been officially protected since 1975, but enforcing this law has proven difficult. Many continue to be killed for their fur and body parts, which are worth a fortune on the black market. In recent years, though, conflict with local herders has also led to a number of snow leopard deaths. This is because the big cats kill the herders' animals, and drag the bodies away high up in the mountains to eat.

D As a result of these pressures, the current snow leopard population is estimated at only 4,000 to 7,000, and some fear that the actual number may already have dropped below 3,500. The only way to reverse this trend and bring these cats back from their threatened status, say conservationists, is to make them more valuable alive than dead.

E In Mongolia, where herding is a way of life, snow leopards can destroy a family's entire livelihood in a single night. "If a snow leopard gets into a pen, it can kill 10 or 15 sheep or goats," explains Charu Mishra, a conservation biologist with the Snow Leopard Trust. "For a herder, that's a huge economic loss."

F To address this problem, Mishra and his team have developed an innovative solution. They provide herders with special insurance that pays them when snow leopards kill their animals. The herders pay premiums into a community fund, and when a leopard attacks, they receive compensation. This system has reduced the number of revenge killings significantly.

G In addition, the Snow Leopard Trust has helped herders develop alternative sources of income. Women in the community now make and sell handicrafts, such as felt rugs and wool products, through the Trust's online store. The income from these crafts helps offset losses from leopard attacks and reduces the economic pressure on herders.

H Education is another key component of the conservation effort. Local schoolchildren learn about snow leopards and their importance to the ecosystem. Some communities have even established eco-tourism programs, where visitors can pay to see snow leopards in their natural habitat. The income from tourism goes directly to the community, giving residents a financial incentive to protect the cats.

I These combined efforts are showing promising results. In some areas, the snow leopard population has stabilized or even increased slightly. "We're not just saving snow leopards," says Mishra. "We're helping communities thrive while preserving one of the world's most magnificent animals.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the hunting habits of snow leopards", "efforts to save snow leopards from extinction", "the life of herders in Mongolia", "the beauty of snow leopard fur"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph C, why are snow leopards killed?",
              options: ["They attack humans.", "Their fur and body parts are valuable.", "They destroy crops.", "They compete with other predators."],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer about the Snow Leopard Trust's insurance program?",
              options: ["It is funded by the government.", "It has helped reduce revenge killings.", "It only covers sheep, not goats.", "It is too expensive for most herders."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "4A",
      name: "Unit 4A",
      theme: "Sacred Summits",
      articles: [
        {
          id: "4A-1",
          title: "SACRED SUMMITS",
          subtitle: "Volcanoes: Creators and Destroyers",
          content: `A Volcanoes are creators and destroyers. They can shape lands and cultures, but can also cause great destruction and loss of life. Two of the best-known examples are found at opposite ends of the world, on the Pacific Ring of Fire.

B It's almost sunrise near the summit of Japan's Mount Fuji. Exhausted climbers, many of whom have hiked the 3,776 meters through the night to reach this point, stop to watch as the sun begins spreading its golden rays across the mountain. For the climbers, this is an important moment. They have reached the summit on Mount Fuji—the highest point in Japan.

C Mount Fuji is a sacred site. Japan's native religion, Shintoism, considers Fuji a holy place. Other people believe the mountain and its waters have the power to make a sick person well. For many, climbing Fuji is also a rite of passage. Some do it as part of a religious journey; for others, it is a test of strength. Whatever their reason, reaching the top in order to stand on Fuji's summit at sunrise is a must for many Japanese. Every July and August, hundreds of thousands attempt to do so.

D Fuji is more than a sacred site and tourist destination, however. It is also an active volcano around which four million people have settled, and it sits just 112 kilometers from the crowded streets of Tokyo. The last time Fuji erupted, in 1707, it sent out a cloud of ash that covered the capital city and darkened the skies for weeks.

E Today, new information has some volcanologists concerned that Fuji may soon erupt again. According to Motoo Ukawa and his associates at the National Research Institute for Earth Science and Disaster Prevention, there has been an increase in seismic activity under Fuji recently. This activity may be caused by low-frequency earthquakes. Understanding what causes these quakes may help scientists predict when Fuji will come back to life. In the meantime, locals living near Fuji hold special festivals each year to offer gifts to the goddess of the volcano—as they have for generations—so that she will not erupt and destroy the land and its people below.

F About 11,000 kilometers away from Mount Fuji, another volcano keeps watch over a major city. Popocatépetl, or "El Popo" as locals call it, rises 5,426 meters above sea level, making it the second-highest peak in Mexico. Its location, just 70 kilometers from Mexico City, puts over 20 million people at risk.

G El Popo has been active since 1994, regularly sending out smoke and ash. In 2000, the volcano showed signs of a possible major eruption, prompting the evacuation of thousands of people. Although the eruption never materialized, the event highlighted the danger that El Popo poses to the region.

H Scientists continue to monitor El Popo closely, using sensors to detect changes in temperature, gas emissions, and ground deformation. While they cannot predict exactly when the volcano will erupt, they hope that early warning systems will give residents enough time to evacuate.

I For now, the people of Mexico City live with the knowledge that their mountain neighbor could one day unleash its destructive power. Yet like the Japanese with Mount Fuji, many Mexicans view El Popo with a mixture of respect and reverence, recognizing that the same force that threatens their lives also created the fertile soil on which their civilization was built.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the history of Mount Fuji", "volcanoes that are sacred to local people", "how to predict volcanic eruptions", "the dangers of living near volcanoes"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph D, when did Mount Fuji last erupt?",
              options: ["1994", "1707", "2000", "1854"],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer about the people living near Mount Fuji?",
              options: ["They are not aware of the danger.", "They respect the volcano and hope it won't erupt.", "They want to move away from the volcano.", "They believe scientists can predict eruptions accurately."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "4B",
      name: "Unit 4B",
      theme: "Is Prediction Possible?",
      articles: [
        {
          id: "4B-1",
          title: "IS PREDICTION POSSIBLE?",
          subtitle: "The Science of Earthquake Prediction",
          content: `A Never before have so many people been packed into cities—places such as Los Angeles, Istanbul, Tokyo, and Lima—that are regularly affected by earthquakes. Located near the edge of Earth's huge, shifting plates, these cities face the risk of serious damage and economic disaster from large quakes—as well as the tsunamis, fires, and other kinds of destruction they often cause.

B We understand earthquakes better than we did a century ago. Scientists would like to be able to predict them, but is this possible? Today, some of the simplest questions about earthquakes are still difficult to answer: Why do they start? What makes them stop? Perhaps the most important question scientists need to answer is this: Are there clear patterns in earthquakes, or are they basically random and impossible to predict?

C In Japan, government scientists say they have an answer to the question. "We believe that earthquake prediction is possible," says Koshun Yamaoka, a scientist at the Earthquake Research Institute at the University of Tokyo. In fact, Japan has already predicted where its next great earthquake will be: the region of Tokai southwest of Tokyo. Here, two plate boundaries have generated huge earthquakes every 100 to 150 years, but there hasn't been a major quake here since 1854. The theory is that stress is building up in this zone, which could lead to a massive quake. Unfortunately, this is more a forecast than a prediction. It's one thing to say that an earthquake is likely to happen in a high-risk area. It's another to predict exactly where and when the quake will occur.

D The desire for a precise prediction of time and place has led to another theory: the idea of "preslip." Naoyuki Kato, a scientist at the Earthquake Research Institute, says his laboratory experiments show that before a fault in the Earth's crust finally breaks and causes an earthquake, it slips just a little. If we can detect these early slips taking place deep in the Earth's crust, we may be able to predict the next big quake.

E Scientists working in Parkfield, California, are also trying to see if predicting earthquakes is possible. They've chosen the town of Parkfield not only because the San Andreas Fault runs through it, but because it's known for having earthquakes quite regularly—approximately every 22 years. In the late 1980s, scientists in Parkfield decided to study the fault to see if there were any warning signs prior to a quake. To do this, they drilled deep into the fault and set up equipment to register activity. Then they waited for the quake.

F Year after year, nothing happened. When a quake did finally hit on September 28, 2004, it was years off schedule, but most disappointing was the lack of warning signs. Scientists reviewed the data but could find no evidence of anything unusual preceding the quake. It led many to believe that perhaps earthquakes really are random events. Instead of giving up, though, scientists in Parkfield dug deeper into the ground. By late summer 2005, they had reached the fault's final depth of three kilometers.

G The search for a reliable method of earthquake prediction continues. While some scientists remain optimistic, others have concluded that accurate prediction may never be possible. In the meantime, communities in earthquake-prone areas focus on preparedness: building stronger structures, developing early warning systems, and educating the public about what to do when the ground begins to shake.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the history of earthquakes in Japan", "whether earthquakes can be predicted", "how to prepare for earthquakes", "the science of plate tectonics"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph C, what is the difference between a forecast and a prediction?",
              options: ["A forecast tells when an earthquake will happen; a prediction tells where.", "A forecast says an earthquake is likely in a high-risk area; a prediction says exactly where and when.", "A forecast is made by computers; a prediction is made by scientists.", "A forecast is for volcanoes; a prediction is for earthquakes."],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer from the Parkfield experiment?",
              options: ["Earthquakes can be predicted accurately.", "Earthquakes may be random events.", "Scientists have given up on prediction.", "The San Andreas Fault is no longer active."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "5A",
      name: "Unit 5A",
      theme: "Land of Fire and Ice",
      articles: [
        {
          id: "5A-1",
          title: "LAND OF FIRE AND ICE",
          subtitle: "Exploring Iceland",
          content: `A Most of the inner part of Iceland is uninhabited and relatively inaccessible. Nevertheless, there is a range of outdoor activities to enjoy elsewhere in the country. This is particularly true along the coasts: "Iceland is an adventure," said Sol Squire, whose Icelandic company organizes adventure trips. "We have Europe's biggest glaciers, active volcanoes, cave explorations, and skiing."

B One of Iceland's most popular attractions is caving. Exploring Iceland's unusual lava caves, most of which formed more than 10,000 years ago, requires only basic caving knowledge and equipment. Ice caves are more challenging, however, and require special clothes and hiking tools. The best-known ice caves are in Vatnajökull—a layer of ice which, at 8,000 square kilometers, is Iceland's—and Europe's—largest glacier. It also happens to be situated just above an active volcano!

C If exploring caves and glaciers doesn't interest you, head south. Just outside the town of Vik, check out the huge rock formations that were once believed to be monsters turned into stone. These are a dramatic part of the scenery on one of Iceland's most magnificent black-sand beaches.

D And finally, no trip to Iceland would be complete without a visit to the Golden Circle, a pathway northeast of Reykjavik that connects Gullfoss (a huge "Golden Waterfall"), the hot springs region of Geysir, and Thingvellir National Park. The mid-Atlantic fault that runs through Iceland is literally pulling the island apart. Nowhere is this more evident than in the Thingvellir Valley, where the land is actually separating and the stony ground beneath your feet frequently shifts. Hold on while you hike!

E For those seeking relaxation after their adventures, the Blue Lagoon offers a unique experience. This geothermal spa, located in a lava field near Reykjavik, features milky blue water rich in minerals like silica and sulfur. The water stays at a comfortable 37-39 degrees Celsius year-round, making it the perfect place to soak sore muscles after a day of exploring.

F Visitors to the Blue Lagoon can also enjoy spa treatments using the lagoon's mineral-rich mud. Many people believe the water has healing properties, particularly for skin conditions like psoriasis. Whether or not the health claims are true, there's no denying the surreal beauty of floating in the milky blue water, surrounded by black lava rocks and steam rising into the cold Icelandic air.

G Iceland's unique combination of fire and ice, ancient and modern, danger and beauty, makes it one of the world's most fascinating destinations. From volcanic eruptions to glacial hikes, from black-sand beaches to geothermal spas, this small island nation offers experiences found nowhere else on Earth.`,
          questions: [
            {
              type: "GIST",
              question: "What is this passage mainly about?",
              options: ["the history of Iceland", "outdoor activities and attractions in Iceland", "the geology of Iceland", "the climate of Iceland"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph B, what is special about the ice caves in Vatnajökull?",
              options: ["They are the oldest caves in Europe.", "They are located above an active volcano.", "They are the easiest caves to explore.", "They are the smallest ice caves in Iceland."],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer about the Blue Lagoon?",
              options: ["It is a natural hot spring.", "It is popular with tourists after outdoor activities.", "It is located in the center of Reykjavik.", "It is only open in the summer."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "5B",
      name: "Unit 5B",
      theme: "The Perfect Beach",
      articles: [
        {
          id: "5B-1",
          title: "THE PERFECT BEACH",
          subtitle: "Exploring Brazil's Coastline",
          content: `A In pursuit of the perfect beach, travel writer Stanley Stewart heads to Brazil, where he discovers some of the world's most beautiful sandy escapes.

B I'm standing on Rio de Janeiro's Copacabana beach, one of Brazil's—and the world's—most famous stretches of sand. As I watch life go by here in all its varied forms, I've come to realize that any understanding of Brazil really begins on its beaches. In this vibrant, multicultural country, the beach is not just a place; it's a state of mind—a way of thinking and living.

C Rio alone, I'm told, has over 70 beaches, each with its own community: Some are for bodybuilders, others are for senior citizens, still others are popular with parents and children. But Rio's beaches are just the starting point for my exploration of Brazil's Atlantic coastline, which—at more than 8,000 kilometers, and with more than 2,000 beaches—is the longest in the world. Every Brazilian has his or her own ideas of the perfect beach and is eager to tell you where to find it. I'm happy to take people's advice, but my ultimate goal is to find my own dream beach.

D I head to a place said to have some of Brazil's best coastline: the state of Bahia in the northeast. Portuguese settlers established themselves at Bahia's present-day capital, Salvador da Bahia, in 1549. Over the centuries, people of many races have arrived and intermarried here, creating a distinctive cultural mix. This mix influences Bahia's language, religion, cuisine, music, and dance.

E I'd been told that one of Bahia's best beaches—Prainha—lies just south of Salvador, near the town of Itacaré. On arriving at Prainha's beach, I discover its golden sand lined by a row of perfect palm trees, moving softly in the ocean breeze. Under the moon, silver waves roll onto the sand. As I enter the water, I have the feeling of swimming through moonlight. Prainha's beauty is magnificent—its perfect curves and graceful lines are like something you might see in a postcard. But for me, it's a little too perfect. The beach I'm searching for needs to be a little wilder . . .

F I continue my search, heading north to one of Brazil's legendary beaches: Jericoacoara. Twenty years ago, only a handful of people were living in Jericoacoara, a tiny fishing village surrounded by sand dunes. Today, it's a popular destination for travelers seeking a more rustic beach experience. The journey to get there is an adventure in itself—visitors must travel by four-wheel-drive vehicles through shifting sand dunes.

G Jericoacoara doesn't disappoint. The beach is wild and beautiful, with red-rock cliffs rising from the sand and natural pools forming in the rocks at low tide. At sunset, everyone gathers on top of a large sand dune to watch the sun sink into the ocean. It's a magical moment, and I realize that I've found what I was looking for. The perfect beach isn't just about the sand and water—it's about the experience, the people, and the feeling of being somewhere truly special.

H As I leave Brazil, I understand why Brazilians are so passionate about their beaches. Each one is unique, each one tells a story, and each one offers a different way to experience this incredible country. From the bustling shores of Rio to the wild dunes of Jericoacoara, Brazil's beaches are as diverse and captivating as the people who love them.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the history of Brazil", "a travel writer's search for the perfect beach in Brazil", "the culture of Rio de Janeiro", "the geography of Brazil's coastline"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph C, how many beaches does Rio have?",
              options: ["exactly 70", "over 70", "less than 70", "exactly 2,000"],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "Why does the writer say Prainha is 'a little too perfect'?",
              options: ["It is too crowded with tourists.", "He prefers a wilder, more natural beach.", "The sand is not soft enough.", "The water is too cold."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "6A",
      name: "Unit 6A",
      theme: "The World's Favorite Drug",
      articles: [
        {
          id: "6A-1",
          title: "THE WORLD'S FAVORITE DRUG",
          subtitle: "Caffeine and Society",
          content: `A It's 1:45 a.m., and 21-year-old Thomas Murphy is burning the midnight oil, studying for an important engineering exam he has at 2:00 in the afternoon later today. To stay awake and alert, he's had two cups of coffee in the last three hours and is now downing a popular energy drink—one that has two to three times the amount of caffeine as a similar sized can of soda. Many students like Murphy, as well as marathon runners, airline pilots, and long-distance travelers, owe their energy to one of humankind's oldest stimulants: caffeine.

B The power to counter physical fatigue and increase alertness is part of the reason caffeine ranks as the world's most popular mood-altering drug. It is found not only in sodas, energy drinks, coffee, and tea, but in diet pills, pain relievers (like aspirin), and chocolate bars. Many societies around the world have also created entire rituals around the use of caffeine. For example, there's the café culture of France, the tea ceremony in Japan, and the morning cup of coffee or tea that marks the start of the day in many cultures.

C Caffeine is present in many of the foods and drinks we consume, but is it good for us? Charles Czeisler, a scientist and sleep expert at Harvard Medical School, believes that caffeine causes us to lose sleep, which he says is unhealthy. "Without adequate sleep—the typical eight hours—the human body will not function at its best, physically, mentally, or emotionally." Too often, Czeisler says, we consume caffeine to stay awake, which later makes it impossible for us to get the rest we need.

D Health risks have also been tied to caffeine consumption. Over the years, studies have attributed higher rates of certain types of cancer and bone disease to caffeine consumption. To date, however, there is no proof that caffeine actually causes these diseases.

E A number of scientists, including Roland Griffiths—a professor at the Johns Hopkins School of Medicine in the United States—believe that regular caffeine use causes physical dependence. Heavy caffeine users, Griffiths says, show similar behaviors to those of drug addicts. For example, their moods fluctuate from high to low, they get mild to severe headaches, or they feel tired or sad when they can't have a caffeinated drink. To minimize or stop these feelings, users must consume caffeine—a behavior Griffiths says is characteristic of drug addiction.

F Despite these concerns, caffeine remains an integral part of daily life for billions of people. For many, the benefits of increased alertness and productivity outweigh the potential risks. The key, experts say, is moderation. Understanding how caffeine affects your body and being mindful of your consumption can help you enjoy the benefits while minimizing the negative effects.`,
          questions: [
            {
              type: "GIST",
              question: "What is this reading mainly about?",
              options: ["the history of coffee", "the effects of caffeine on the human body", "why people drink energy drinks", "how to stay awake without caffeine"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph C, how many hours of sleep does the typical person need?",
              options: ["six hours", "eight hours", "ten hours", "four hours"],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer about Roland Griffiths's view on caffeine?",
              options: ["He believes caffeine is completely safe.", "He believes caffeine can cause physical dependence.", "He thinks caffeine is better than other drugs.", "He recommends drinking more caffeine."],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "6B",
      name: "Unit 6B",
      theme: "Addicted to Distraction",
      articles: [
        {
          id: "6B-1",
          title: "ADDICTED TO DISTRACTION",
          subtitle: "Nature Therapy and Healing",
          content: `A The average South Korean adult spends over seven hours a day on their smartphone. In the United States, people check their phones an average of 96 times a day—that's once every 10 minutes. Many of us are constantly connected to digital devices, from smartphones and tablets to computers and televisions. We use them for work, entertainment, and social interaction. But this constant connectivity comes at a cost.

B When we use digital technology, we often multitask—switching rapidly between different apps, websites, and activities. We might check email while watching a video, or scroll through social media while doing homework. This behavior has become so common that many people believe they are good at multitasking. However, research suggests otherwise.

C Scientists have found that multitasking actually reduces productivity and increases stress. When we switch between tasks, our brains need time to refocus. This switching cost accumulates throughout the day, leaving us mentally exhausted. Dr. David Strayer, a cognitive psychologist at the University of Utah, has studied this phenomenon extensively. His research shows that people who multitask frequently perform worse on tasks requiring concentration and memory.

D The mental fatigue caused by constant multitasking can lead to more serious problems. Studies have linked heavy technology use to anxiety, depression, and sleep disorders. The blue light emitted by screens can disrupt our natural sleep patterns, making it harder to fall asleep and reducing the quality of our rest. Poor sleep, in turn, affects our ability to concentrate and handle stress.

E Perhaps most concerning is the impact on our ability to focus deeply. When we become accustomed to constant stimulation from digital devices, our brains expect frequent rewards. This makes it difficult to engage with activities that require sustained attention, such as reading a book or having a face-to-face conversation. Some researchers have described this as a form of addiction to distraction.

F Strayer and other scientists are studying nature's effect on our brains and bodies. When we are in natural environments, the prefrontal cortex (the brain's control center) relaxes. Studies show that when people can see trees and grass, they are calmer and do better in school. Indeed, people even relax when they look at photos of nature. Consequently, they do better on different cognitive tasks.

G Other psychologists are also studying "nature therapy." In a study at Chiba University in Japan, 84 subjects went for a 15-minute walk in seven different forests. The same number of people walked around different city centers. Researchers then took blood from each person. The forest walkers had a 16 percent decrease in the stress hormone cortisol. In addition, they had a 2 percent drop in blood pressure and a 4 percent drop in heart rate. All did better than the city walkers.

H When we spend time in a peaceful, natural environment, we don't have to concentrate on anything specific. This mental break allows the brain to relax, improves short-term memory, and can increase creativity almost 50 percent.

I Lead researcher Yoshifumi Miyazaki has an explanation for these results. Our bodies relax in pleasant, natural surroundings, he says. Humans evolved in that environment, not in places with tall buildings and lots of traffic.

J Psychologist Stephen Kaplan and his colleagues have done similar research. In one study, people took a 50-minute walk in a public garden. In a test conducted afterwards, their short-term memory improved. When the same people walked on a city street, it did not. Kaplan says it is the details in nature—sunsets, streams, butterflies—that reduce stress and mental fatigue. We enjoy them without having to concentrate on them. This allows our brains to rest and recover from the stresses of modern life. "Imagine a therapy that was readily available, and could improve your cognitive functioning at zero cost," Kaplan says. "It exists: it's called 'interacting with nature.'"

K Perhaps no country has embraced the benefits of interacting with nature more than South Korea. As in many countries, some Koreans suffer from high levels of stress. This can lead to poor concentration, mental fatigue, and even depression. Consequently, many South Koreans take advantage of nearby "healing forests"—places where they can relax in natural surroundings.

L People can benefit from a number of anti-stress therapies including forest meditation for pregnant women and woodcrafts for cancer patients. The Korean Forest Service has designated over 30 healing forests across the country, where trained therapists guide visitors through activities designed to reduce stress and improve well-being.

M The concept of healing forests has spread to other countries as well. Japan has established "forest bathing" (shinrin-yoku) centers, where people can walk slowly through forests and absorb the natural atmosphere. Finland recommends spending at least five hours a month in nature for mental health. Even hospitals in some countries are adding gardens and green spaces to help patients recover faster.

N The evidence is clear: our brains need breaks from digital stimulation. While technology offers many benefits, we must balance it with time in nature. As our lives become increasingly digital, finding ways to disconnect and reconnect with the natural world may be essential for our mental health and cognitive function.`,
          questions: [
            {
              type: "GIST",
              question: "What is this passage mainly about?",
              options: ["the dangers of digital technology", "how spending time in nature can reduce stress", "the history of South Korea", "why people should stop using smartphones"],
              answer: 1
            },
            {
              type: "DETAIL",
              question: "According to paragraph G, what happened to the forest walkers in the Japanese study?",
              options: ["They had an increase in cortisol.", "They had a 16 percent decrease in cortisol.", "Their blood pressure increased.", "Their heart rate increased."],
              answer: 1
            },
            {
              type: "INFERENCE",
              question: "What can we infer from Stephen Kaplan's research?",
              options: ["Walking in cities improves memory.", "Nature helps reduce stress and mental fatigue.", "People should avoid public gardens.", "Short-term memory cannot be improved."],
              answer: 1
            }
          ]
        }
      ]
    }



  ]
}
};

// 导出数据（如果支持模块）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
