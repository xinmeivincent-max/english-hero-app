// ============================================
// 英语小英雄 - 主应用逻辑
// Reading Explorer 3 闯关学习应用
// ============================================

class EnglishHeroApp {
    constructor() {
        this.data = COURSE_DATA;
        this.state = this.loadState();
        this.currentPage = 'home';
        this.currentUnit = 0;
        this.currentWordIndex = 0;
        this.currentPattern = null;
        this.currentReading = null;
        this.gameState = {};
        
        this.init();
    }

    // 初始化
    init() {
        this.checkDailyReset();
        this.renderHeader();
        this.renderHome();
        this.setupEventListeners();
        
        // 模拟加载
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
        }, 2000);
    }

    // 加载保存的状态
    loadState() {
        const defaultState = {
            xp: 0,
            level: 0,
            streak: 0,
            lastStudyDate: null,
            learnedWords: [],
            knownWords: [],
            unknownWords: [],
            completedReadings: [],
            completedPatterns: [],
            achievements: [],
            dailyTasks: this.generateDailyTasks(),
            dailyProgress: {},
            mistakes: [],
            gameScores: {
                memory: 0,
                spelling: 0,
                speed: 0
            },
            totalWords: 0,
            totalReadings: 0,
            totalCorrect: 0,
            totalQuestions: 0
        };
        
        try {
            const saved = localStorage.getItem('englishHeroState');
            if (saved) {
                const parsed = JSON.parse(saved);
                // 合并默认状态，确保新字段存在
                return { ...defaultState, ...parsed };
            }
        } catch (e) {
            console.error('加载状态失败:', e);
        }
        
        return defaultState;
    }

    // 保存状态
    saveState() {
        try {
            localStorage.setItem('englishHeroState', JSON.stringify(this.state));
        } catch (e) {
            console.error('保存状态失败:', e);
        }
    }

    // 检查每日重置
    checkDailyReset() {
        const today = new Date().toDateString();
        const lastDate = this.state.lastStudyDate;
        
        if (lastDate) {
            const last = new Date(lastDate);
            const now = new Date();
            const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
            
            if (diffDays >= 1) {
                // 新的一天
                if (diffDays === 1) {
                    // 连续打卡
                    this.state.streak++;
                    this.checkAchievement('streak_3');
                    this.checkAchievement('streak_7');
                    this.checkAchievement('streak_30');
                } else {
                    // 断签
                    this.state.streak = 0;
                }
                
                // 重置每日任务
                this.state.dailyTasks = this.generateDailyTasks();
                this.state.dailyProgress = {};
            }
        }
        
        this.state.lastStudyDate = today;
        this.saveState();
    }

    // 生成每日任务
    generateDailyTasks() {
        return this.data.dailyTasks.map(task => ({
            ...task,
            completed: false,
            progress: 0
        }));
    }

    // 导航
    navigate(page) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        
        // 显示目标页面
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // 更新导航
        const navItems = document.querySelectorAll('.nav-item');
        const pageMap = { home: 0, words: 1, reading: 2, games: 3, profile: 4 };
        if (navItems[pageMap[page]]) {
            navItems[pageMap[page]].classList.add('active');
        }
        
        this.currentPage = page;
        
        // 渲染页面内容
        switch(page) {
            case 'home':
                this.renderHome();
                break;
            case 'words':
                this.renderWords();
                break;
            case 'sentences':
                this.renderSentences();
                break;
            case 'reading':
                this.renderReading();
                break;
            case 'games':
                this.renderGames();
                break;
            case 'achievements':
                this.renderAchievements();
                break;
            case 'mistakes':
                this.renderMistakes();
                break;
            case 'profile':
                this.renderProfile();
                break;
        }
    }

    // 渲染头部
    renderHeader() {
        const level = this.data.levels[this.state.level];
        document.getElementById('level-badge').innerHTML = `
            <span class="level-icon">${level.icon}</span>
            <span class="level-name">${level.name}</span>
        `;
        document.getElementById('xp-value').textContent = this.state.xp;
        document.getElementById('streak-value').textContent = this.state.streak;
    }

    // 渲染首页
    renderHome() {
        this.renderDailyTasks();
        this.renderStats();
    }

    // 渲染每日任务
    renderDailyTasks() {
        const taskList = document.getElementById('task-list');
        if (!taskList) return;
        
        taskList.innerHTML = this.state.dailyTasks.map((task, index) => {
            const progress = this.state.dailyProgress[task.id] || 0;
            const completed = progress >= task.target;
            
            return `
                <div class="task-item ${completed ? 'completed' : ''}">
                    <div class="task-checkbox">${completed ? '✓' : ''}</div>
                    <div class="task-info">
                        <div class="task-name">${task.name}</div>
                        <div class="task-desc">${task.desc} (${progress}/${task.target})</div>
                    </div>
                    <div class="task-xp">+${task.xp}XP</div>
                </div>
            `;
        }).join('');
    }

    // 渲染统计
    renderStats() {
        const accuracy = this.state.totalQuestions > 0 
            ? Math.round((this.state.totalCorrect / this.state.totalQuestions) * 100) 
            : 0;
        
        const statWords = document.getElementById('stat-words');
        const statReading = document.getElementById('stat-reading');
        const statAccuracy = document.getElementById('stat-accuracy');
        const statAchievements = document.getElementById('stat-achievements');
        
        if (statWords) statWords.textContent = this.state.learnedWords.length;
        if (statReading) statReading.textContent = this.state.completedReadings.length;
        if (statAccuracy) statAccuracy.textContent = accuracy + '%';
        if (statAchievements) statAchievements.textContent = this.state.achievements.length;
    }

    // 更新任务进度
    updateTaskProgress(taskType, amount = 1) {
        const task = this.state.dailyTasks.find(t => t.type === taskType);
        if (task && !task.completed) {
            const currentProgress = this.state.dailyProgress[task.id] || 0;
            const newProgress = Math.min(currentProgress + amount, task.target);
            this.state.dailyProgress[task.id] = newProgress;
            
            if (newProgress >= task.target && !task.completed) {
                task.completed = true;
                this.addXP(task.xp);
            }
            
            this.saveState();
            this.renderDailyTasks();
        }
    }

    // 添加经验值
    addXP(amount) {
        const oldLevel = this.state.level;
        this.state.xp += amount;
        
        // 检查升级
        for (let i = this.data.levels.length - 1; i >= 0; i--) {
            if (this.state.xp >= this.data.levels[i].minXP) {
                this.state.level = i;
                break;
            }
        }
        
        if (this.state.level > oldLevel) {
            this.showLevelUp(this.data.levels[this.state.level]);
            this.checkAchievement('level_up');
        }
        
        this.saveState();
        this.renderHeader();
    }

    // 检查成就
    checkAchievement(achievementId) {
        if (this.state.achievements.includes(achievementId)) return;
        
        const achievement = this.data.achievements.find(a => a.id === achievementId);
        if (!achievement) return;
        
        let unlocked = false;
        
        switch(achievementId) {
            case 'first_word':
                unlocked = this.state.learnedWords.length >= 1;
                break;
            case 'word_10':
                unlocked = this.state.learnedWords.length >= 10;
                break;
            case 'word_30':
                unlocked = this.state.learnedWords.length >= 30;
                break;
            case 'word_50':
                unlocked = this.state.learnedWords.length >= 50;
                break;
            case 'streak_3':
                unlocked = this.state.streak >= 3;
                break;
            case 'streak_7':
                unlocked = this.state.streak >= 7;
                break;
            case 'streak_30':
                unlocked = this.state.streak >= 30;
                break;
            case 'perfect_quiz':
                // 在阅读理解中检查
                break;
            case 'sentence_master':
                unlocked = this.state.completedPatterns.length >= 5;
                break;
            case 'reading_hero':
                unlocked = this.state.completedReadings.length >= 3;
                break;
            case 'memory_king':
                unlocked = this.state.gameScores.memory >= 100;
                break;
            case 'spelling_bee':
                unlocked = this.state.gameScores.spelling >= 50;
                break;
            case 'level_up':
                unlocked = this.state.level >= 1;
                break;
            case 'first_unit':
                unlocked = this.state.completedReadings.length >= 1;
                break;
        }
        
        if (unlocked) {
            this.state.achievements.push(achievementId);
            this.addXP(achievement.xp);
            this.showAchievement(achievement);
            this.saveState();
        }
    }

    // 显示成就弹窗
    showAchievement(achievement) {
        const popup = document.getElementById('achievement-popup');
        document.getElementById('achievement-name').textContent = achievement.name;
        document.getElementById('achievement-desc').textContent = achievement.desc;
        popup.querySelector('.achievement-icon').textContent = achievement.icon;
        popup.classList.remove('hidden');
    }

    // 关闭成就弹窗
    closeAchievement() {
        document.getElementById('achievement-popup').classList.add('hidden');
    }

    // 显示升级弹窗
    showLevelUp(level) {
        const popup = document.getElementById('levelup-popup');
        document.getElementById('levelup-text').textContent = 
            `你升级到了 ${level.icon} ${level.name}！`;
        popup.classList.remove('hidden');
    }

    // 关闭升级弹窗
    closeLevelUp() {
        document.getElementById('levelup-popup').classList.add('hidden');
    }

    // ========== 单词学习 ==========
    renderWords() {
        const selector = document.getElementById('unit-selector');
        if (!selector) return;
        
        selector.innerHTML = this.data.vocabulary.map((unit, index) => `
            <button class="unit-tab ${index === this.currentUnit ? 'active' : ''}" 
                    onclick="app.selectUnit(${index})">
                ${unit.unitName}
            </button>
        `).join('');
        
        this.renderFlashcard();
    }

    selectUnit(index) {
        this.currentUnit = index;
        this.currentWordIndex = 0;
        this.renderWords();
    }

    renderFlashcard() {
        const unit = this.data.vocabulary[this.currentUnit];
        if (!unit || !unit.words[this.currentWordIndex]) return;
        
        const word = unit.words[this.currentWordIndex];
        
        document.getElementById('word-image').textContent = word.image;
        document.getElementById('word-text').textContent = word.word;
        document.getElementById('word-phonetic').textContent = word.phonetic;
        document.getElementById('word-meaning').textContent = word.meaning;
        document.getElementById('word-example').textContent = word.example;
        document.getElementById('word-progress-text').textContent = 
            `${this.currentWordIndex + 1} / ${unit.words.length}`;
        
        // 重置翻转状态
        document.getElementById('flashcard').classList.remove('flipped');
    }

    flipCard() {
        document.getElementById('flashcard').classList.toggle('flipped');
    }

    nextWord() {
        const unit = this.data.vocabulary[this.currentUnit];
        if (this.currentWordIndex < unit.words.length - 1) {
            this.currentWordIndex++;
            this.renderFlashcard();
        }
    }

    prevWord() {
        if (this.currentWordIndex > 0) {
            this.currentWordIndex--;
            this.renderFlashcard();
        }
    }

    markKnown() {
        const unit = this.data.vocabulary[this.currentUnit];
        const word = unit.words[this.currentWordIndex];
        
        if (!this.state.knownWords.includes(word.word)) {
            this.state.knownWords.push(word.word);
        }
        if (!this.state.learnedWords.includes(word.word)) {
            this.state.learnedWords.push(word.word);
            this.state.totalWords++;
            this.addXP(5);
            this.updateTaskProgress('word');
        }
        
        this.checkAchievement('first_word');
        this.checkAchievement('word_10');
        this.checkAchievement('word_30');
        this.checkAchievement('word_50');
        
        this.saveState();
        
        // 检查是否是最后一个单词
        if (this.currentWordIndex >= unit.words.length - 1) {
            this.showWordCompletionMessage();
        } else {
            this.nextWord();
        }
    }

    markUnknown() {
        const unit = this.data.vocabulary[this.currentUnit];
        const word = unit.words[this.currentWordIndex];
        
        if (!this.state.unknownWords.includes(word.word)) {
            this.state.unknownWords.push(word.word);
        }
        if (!this.state.learnedWords.includes(word.word)) {
            this.state.learnedWords.push(word.word);
            this.state.totalWords++;
        }
        
        this.saveState();
        
        // 检查是否是最后一个单词
        if (this.currentWordIndex >= unit.words.length - 1) {
            this.showWordCompletionMessage();
        } else {
            this.nextWord();
        }
    }

    showWordCompletionMessage() {
        const unit = this.data.vocabulary[this.currentUnit];
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 60px; margin-bottom: 16px;">🎉</div>
                    <h3>单元完成！</h3>
                    <p>已完成 ${unit.unitName} 的所有单词</p>
                    <button class="btn-primary" onclick="app.navigate('words')" style="margin-top: 16px;">返回单词列表</button>
                </div>
            `;
        }
    }

    playWordSound() {
        const unit = this.data.vocabulary[this.currentUnit];
        const word = unit.words[this.currentWordIndex];
        
        // 使用 Web Speech API
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    // ========== 句型分析 ==========
    renderSentences() {
        const list = document.getElementById('pattern-list');
        if (!list) return;
        
        list.innerHTML = this.data.sentencePatterns.map((pattern, index) => `
            <div class="pattern-card" onclick="app.selectPattern(${index})">
                <h4>${pattern.title}</h4>
                <p>${pattern.description}</p>
            </div>
        `).join('');
    }

    selectPattern(index) {
        this.currentPattern = this.data.sentencePatterns[index];
        this.renderPatternPractice();
    }

    renderPatternPractice() {
        const practiceArea = document.getElementById('practice-area');
        if (!practiceArea || !this.currentPattern) return;
        
        document.getElementById('practice-title').textContent = this.currentPattern.title;
        
        const sentenceDisplay = document.getElementById('sentence-display');
        sentenceDisplay.innerHTML = `
            <div style="margin-bottom: 10px; font-size: 14px; color: var(--text-secondary);">
                ${this.currentPattern.description}
            </div>
            <div style="font-weight: 700;">${this.currentPattern.example}</div>
        `;
        
        // 显示分析示例
        const analysisArea = document.getElementById('analysis-area');
        analysisArea.innerHTML = `
            <h4 style="margin-bottom: 10px;">示例分析：</h4>
            ${this.currentPattern.analysis.map(item => `
                <span class="analysis-word" style="border-color: ${item.color}; background: ${item.color}20;">
                    ${item.part} <small style="color: ${item.color};">(${item.type})</small>
                </span>
            `).join('')}
        `;
        
        // 显示练习题
        if (this.currentPattern.questions && this.currentPattern.questions.length > 0) {
            const question = this.currentPattern.questions[0];
            analysisArea.innerHTML += `
                <div style="margin-top: 20px;">
                    <h4 style="margin-bottom: 10px;">练习：</h4>
                    <div class="sentence-display">${question.sentence}</div>
                    <div style="margin-bottom: 10px; font-weight: 700;">点击单词选择其成分：</div>
                    <div id="sentence-words"></div>
                    <div id="analysis-options" style="margin-top: 10px;"></div>
                </div>
            `;
            
            this.renderSentenceWords(question);
        }
    }

    renderSentenceWords(question) {
        const container = document.getElementById('sentence-words');
        if (!container) return;
        
        // 将句子拆分成单词
        const words = question.sentence.split(/\s+/);
        
        container.innerHTML = words.map((word, i) => {
            const cleanWord = word.replace(/[.,!?;:]$/, '');
            
            // 检查这个单词是否是题目中定义的部件之一
            const part = question.parts.find(p => {
                // 检查单词是否匹配部件文本（去除标点）
                return p.text.toLowerCase() === cleanWord.toLowerCase() ||
                       word.toLowerCase().includes(p.text.toLowerCase());
            });
            
            if (part) {
                return `<span class="analysis-word" data-correct="${part.correct}" onclick="app.selectWordPart(this)">${word}</span>`;
            }
            
            return `<span style="padding: 4px; display: inline-block;">${word}</span>`;
        }).join(' ');
        
        // 渲染选项
        const optionsContainer = document.getElementById('analysis-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = `
                <div style="margin-top: 10px; font-weight: 700;">选择成分类型：</div>
                <div class="analysis-options">
                    ${question.options.map(option => `
                        <button class="analysis-option" onclick="app.selectPartType('${option}')">${option}</button>
                    `).join('')}
                </div>
            `;
        }
    }

    selectWordPart(element) {
        // 移除其他选中状态
        document.querySelectorAll('.analysis-word').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedWord = element;
    }

    selectPartType(type) {
        if (!this.selectedWord) {
            alert('请先选择一个单词或短语！');
            return;
        }
        
        const correct = this.selectedWord.dataset.correct;
        
        if (type === correct) {
            this.selectedWord.classList.add('correct');
            this.selectedWord.classList.remove('selected');
            this.addXP(10);
            this.updateTaskProgress('sentence');
        } else {
            this.selectedWord.classList.add('wrong');
            setTimeout(() => {
                this.selectedWord.classList.remove('wrong');
            }, 1000);
        }
        
        this.selectedWord = null;
    }

    // ========== 阅读理解 ==========
    renderReading() {
        const levels = document.getElementById('reading-levels');
        if (!levels) return;
        
        levels.innerHTML = this.data.readingPassages.map((passage, index) => {
            const completed = this.state.completedReadings.includes(passage.id);
            
            return `
                <div class="level-card ${completed ? 'completed' : ''}" onclick="app.selectReading(${index})">
                    <div class="level-number">${index + 1}</div>
                    <div class="level-info">
                        <h4>${passage.title}</h4>
                        <p>${passage.subtitle} · ${passage.difficulty} · ${passage.questions.length}题</p>
                    </div>
                    <div class="level-xp">+${passage.xp}XP</div>
                </div>
            `;
        }).join('');
    }

    selectReading(index) {
        this.currentReading = this.data.readingPassages[index];
        this.currentQuestionIndex = 0;
        this.readingAnswers = [];
        this.readingStartTime = Date.now();
        this.renderReadingContent();
    }

    renderReadingContent() {
        const passageArea = document.getElementById('passage-area');
        if (!passageArea || !this.currentReading) return;
        
        document.getElementById('passage-title').textContent = this.currentReading.title;
        document.getElementById('passage-text').innerHTML = this.formatPassage(this.currentReading.content);
        
        this.renderReadingQuestion();
        this.startReadingTimer();
    }

    formatPassage(content) {
        return content.split('\n\n').map(para => `<p style="margin-bottom: 12px;">${para}</p>`).join('');
    }

    renderReadingQuestion() {
        const questionsContainer = document.getElementById('passage-questions');
        if (!questionsContainer) return;
        
        const question = this.currentReading.questions[this.currentQuestionIndex];
        
        questionsContainer.innerHTML = `
            <div class="question-card">
                <div class="question-text">
                    ${this.currentQuestionIndex + 1}. ${question.question}
                </div>
                <div class="question-options">
                    ${question.options.map((option, i) => `
                        <button class="question-option" onclick="app.answerReadingQuestion(${i})">
                            ${String.fromCharCode(97 + i)}. ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    answerReadingQuestion(answerIndex) {
        const question = this.currentReading.questions[this.currentQuestionIndex];
        const correct = answerIndex === question.correct;
        
        this.readingAnswers.push({
            question: question.question,
            userAnswer: question.options[answerIndex],
            correctAnswer: question.options[question.correct],
            correct: correct,
            explanation: question.explanation
        });
        
        // 显示正确/错误
        const options = document.querySelectorAll('.question-option');
        options[answerIndex].classList.add(correct ? 'correct' : 'wrong');
        options[question.correct].classList.add('correct');
        
        this.state.totalQuestions++;
        if (correct) {
            this.state.totalCorrect++;
        } else {
            // 添加到错题本
            this.state.mistakes.push({
                type: 'reading',
                question: question.question,
                userAnswer: question.options[answerIndex],
                correctAnswer: question.options[question.correct],
                explanation: question.explanation,
                date: new Date().toISOString()
            });
        }
        
        this.saveState();
        
        // 延迟后显示下一题或结果
        setTimeout(() => {
            this.currentQuestionIndex++;
            
            if (this.currentQuestionIndex < this.currentReading.questions.length) {
                this.renderReadingQuestion();
            } else {
                this.showReadingResult();
            }
        }, 1500);
    }

    showReadingResult() {
        const correctCount = this.readingAnswers.filter(a => a.correct).length;
        const totalQuestions = this.currentReading.questions.length;
        const accuracy = Math.round((correctCount / totalQuestions) * 100);
        
        // 计算XP
        let xpEarned = Math.round(this.currentReading.xp * (accuracy / 100));
        if (accuracy === 100) {
            xpEarned += 20; // 满分奖励
            this.checkAchievement('perfect_quiz');
        }
        
        this.addXP(xpEarned);
        this.updateTaskProgress('reading');
        
        // 标记完成
        if (!this.state.completedReadings.includes(this.currentReading.id)) {
            this.state.completedReadings.push(this.currentReading.id);
            this.state.totalReadings++;
        }
        
        this.checkAchievement('first_unit');
        this.checkAchievement('reading_hero');
        this.saveState();
        
        // 显示结果
        const questionsContainer = document.getElementById('passage-questions');
        questionsContainer.innerHTML = `
            <div class="question-card" style="text-align: center;">
                <div style="font-size: 60px; margin-bottom: 16px;">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
                <h3 style="margin-bottom: 10px;">闯关完成！</h3>
                <p style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">
                    ${correctCount}/${totalQuestions} 正确 (${accuracy}%)
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">
                    获得 ${xpEarned} XP
                </p>
                <button class="btn-primary" onclick="app.navigate('reading')">继续闯关</button>
            </div>
        `;
    }

    startReadingTimer() {
        const timerElement = document.getElementById('reading-timer');
        if (!timerElement) return;
        
        const updateTimer = () => {
            if (!this.currentReading || this.currentQuestionIndex >= this.currentReading.questions.length) {
                clearInterval(this.readingTimer);
                return;
            }
            
            const elapsed = Math.floor((Date.now() - this.readingStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerElement.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
        };
        
        this.readingTimer = setInterval(updateTimer, 1000);
        updateTimer();
    }

    // ========== 游戏中心 ==========
    renderGames() {
        document.getElementById('memory-best').textContent = this.state.gameScores.memory || '--';
        document.getElementById('spelling-best').textContent = this.state.gameScores.spelling || '--';
        document.getElementById('speed-best').textContent = this.state.gameScores.speed || '--';
    }

    // 记忆游戏
    startMemoryGame() {
        const gameArea = document.getElementById('game-area');
        if (!gameArea) return;
        
        // 选择8个单词
        const allWords = this.data.vocabulary.flatMap(u => u.words);
        const selectedWords = this.shuffleArray([...allWords]).slice(0, 8);
        
        // 创建卡片对（单词-意思）
        let cards = [];
        selectedWords.forEach((word, i) => {
            cards.push({ id: i, type: 'word', content: word.word, pair: i });
            cards.push({ id: i + 8, type: 'meaning', content: word.meaning, pair: i });
        });
        
        cards = this.shuffleArray(cards);
        
        this.gameState = {
            type: 'memory',
            cards: cards,
            flipped: [],
            matched: [],
            moves: 0,
            startTime: Date.now()
        };
        
        this.renderMemoryGame();
    }

    renderMemoryGame() {
        const gameArea = document.getElementById('game-area');
        
        gameArea.innerHTML = `
            <div style="text-align: center; margin-bottom: 16px;">
                <div class="game-score">记忆翻牌</div>
                <div>步数: <span id="memory-moves">0</span></div>
            </div>
            <div class="memory-grid" id="memory-grid"></div>
        `;
        
        const grid = document.getElementById('memory-grid');
        grid.innerHTML = this.gameState.cards.map((card, index) => `
            <button class="memory-card ${this.gameState.matched.includes(card.pair) ? 'matched' : ''} ${this.gameState.flipped.includes(index) ? 'flipped' : ''}" 
                    onclick="app.flipMemoryCard(${index})"
                    ${this.gameState.matched.includes(card.pair) ? 'disabled' : ''}>
                ${this.gameState.flipped.includes(index) || this.gameState.matched.includes(card.pair) ? 
                    `<span style="font-size: 14px;">${card.content}</span>` : '❓'}
            </button>
        `).join('');
    }

    flipMemoryCard(index) {
        if (this.gameState.flipped.length >= 2) return;
        if (this.gameState.flipped.includes(index)) return;
        
        this.gameState.flipped.push(index);
        this.renderMemoryGame();
        
        if (this.gameState.flipped.length === 2) {
            this.gameState.moves++;
            document.getElementById('memory-moves').textContent = this.gameState.moves;
            
            const card1 = this.gameState.cards[this.gameState.flipped[0]];
            const card2 = this.gameState.cards[this.gameState.flipped[1]];
            
            if (card1.pair === card2.pair) {
                // 匹配成功
                this.gameState.matched.push(card1.pair);
                this.gameState.flipped = [];
                
                setTimeout(() => {
                    this.renderMemoryGame();
                    
                    // 检查是否全部匹配
                    if (this.gameState.matched.length === 8) {
                        this.endMemoryGame();
                    }
                }, 500);
            } else {
                // 匹配失败
                setTimeout(() => {
                    this.gameState.flipped = [];
                    this.renderMemoryGame();
                }, 1000);
            }
        }
    }

    endMemoryGame() {
        const time = Math.floor((Date.now() - this.gameState.startTime) / 1000);
        const score = Math.max(100 - this.gameState.moves * 2 - time, 10);
        
        if (score > this.state.gameScores.memory) {
            this.state.gameScores.memory = score;
        }
        
        this.addXP(Math.floor(score / 2));
        this.updateTaskProgress('word');
        this.checkAchievement('memory_king');
        this.saveState();
        
        const gameArea = document.getElementById('game-area');
        gameArea.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 60px; margin-bottom: 16px;">🎉</div>
                <h3>恭喜通关！</h3>
                <p>用时: ${time}秒 | 步数: ${this.gameState.moves}</p>
                <p style="font-size: 24px; font-weight: 900; color: var(--primary);">得分: ${score}</p>
                <button class="btn-primary" onclick="app.startMemoryGame()" style="margin-top: 16px;">再玩一次</button>
            </div>
        `;
    }

    // 拼写游戏
    startSpellingGame() {
        const gameArea = document.getElementById('game-area');
        
        const allWords = this.data.vocabulary.flatMap(u => u.words);
        const selectedWords = this.shuffleArray([...allWords]).slice(0, 10);
        
        this.gameState = {
            type: 'spelling',
            words: selectedWords,
            currentIndex: 0,
            correct: 0,
            streak: 0
        };
        
        this.renderSpellingGame();
    }

    renderSpellingGame() {
        const gameArea = document.getElementById('game-area');
        const word = this.gameState.words[this.gameState.currentIndex];
        
        gameArea.innerHTML = `
            <div style="text-align: center;">
                <div class="game-score">拼写挑战</div>
                <div style="margin-bottom: 8px;">第 ${this.gameState.currentIndex + 1}/10 题</div>
                <div class="spelling-word">${word.meaning}</div>
                <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;">${word.phonetic}</div>
                <button class="play-sound-btn" onclick="app.playSpellingSound()" style="margin-bottom: 16px;">🔊 听发音</button>
                <br>
                <input type="text" 
                       class="spelling-input" 
                       id="spelling-input" 
                       placeholder="输入英文单词"
                       autocomplete="off"
                       onkeypress="if(event.key==='Enter') app.checkSpelling()">
                <br>
                <button class="btn-primary" onclick="app.checkSpelling()" style="margin-top: 16px;">提交</button>
            </div>
        `;
        
        setTimeout(() => {
            const input = document.getElementById('spelling-input');
            if (input) input.focus();
        }, 100);
    }

    playSpellingSound() {
        const word = this.gameState.words[this.gameState.currentIndex];
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.7;
            speechSynthesis.speak(utterance);
        }
    }

    checkSpelling() {
        const input = document.getElementById('spelling-input');
        if (!input) return;
        
        const userAnswer = input.value.trim().toLowerCase();
        const correctWord = this.gameState.words[this.gameState.currentIndex].word.toLowerCase();
        
        if (userAnswer === correctWord) {
            input.classList.add('correct');
            this.gameState.correct++;
            this.gameState.streak++;
            this.addXP(10);
            
            if (this.gameState.streak >= 5) {
                this.checkAchievement('spelling_bee');
            }
        } else {
            input.classList.add('wrong');
            this.gameState.streak = 0;
            
            // 添加到错题本
            this.state.mistakes.push({
                type: 'spelling',
                word: this.gameState.words[this.gameState.currentIndex].word,
                userAnswer: userAnswer,
                date: new Date().toISOString()
            });
        }
        
        this.saveState();
        
        setTimeout(() => {
            this.gameState.currentIndex++;
            
            if (this.gameState.currentIndex < this.gameState.words.length) {
                this.renderSpellingGame();
            } else {
                this.endSpellingGame();
            }
        }, 1500);
    }

    endSpellingGame() {
        const score = this.gameState.correct * 10;
        
        if (score > this.state.gameScores.spelling) {
            this.state.gameScores.spelling = score;
        }
        
        this.addXP(score);
        this.updateTaskProgress('spelling');
        this.saveState();
        
        const gameArea = document.getElementById('game-area');
        gameArea.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 60px; margin-bottom: 16px;">${this.gameState.correct >= 8 ? '🎉' : '👍'}</div>
                <h3>拼写挑战完成！</h3>
                <p>正确: ${this.gameState.correct}/10</p>
                <p style="font-size: 24px; font-weight: 900; color: var(--primary);">得分: ${score}</p>
                <button class="btn-primary" onclick="app.startSpellingGame()" style="margin-top: 16px;">再玩一次</button>
            </div>
        `;
    }

    // 极速单词游戏
    startSpeedGame() {
        const gameArea = document.getElementById('game-area');
        
        const allWords = this.data.vocabulary.flatMap(u => u.words);
        
        this.gameState = {
            type: 'speed',
            words: this.shuffleArray([...allWords]),
            currentIndex: 0,
            correct: 0,
            timeLeft: 60
        };
        
        this.renderSpeedGame();
        
        this.speedTimer = setInterval(() => {
            this.gameState.timeLeft--;
            const timerEl = document.getElementById('speed-timer');
            if (timerEl) timerEl.textContent = this.gameState.timeLeft;
            
            if (this.gameState.timeLeft <= 0) {
                this.endSpeedGame();
            }
        }, 1000);
    }

    renderSpeedGame() {
        const gameArea = document.getElementById('game-area');
        const word = this.gameState.words[this.gameState.currentIndex];
        
        // 生成选项（1个正确，3个错误）
        const options = [word.meaning];
        const otherWords = this.gameState.words.filter(w => w.word !== word.word);
        const wrongOptions = this.shuffleArray(otherWords).slice(0, 3).map(w => w.meaning);
        options.push(...wrongOptions);
        const shuffledOptions = this.shuffleArray(options);
        
        gameArea.innerHTML = `
            <div style="text-align: center;">
                <div class="game-timer" id="speed-timer">${this.gameState.timeLeft}</div>
                <div class="game-score">${word.word}</div>
                <div style="margin-bottom: 16px;">选择正确的中文意思：</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    ${shuffledOptions.map(option => `
                        <button class="game-btn" onclick="app.answerSpeedGame('${option.replace(/'/g, "\\'")}')" style="margin: 0;">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    answerSpeedGame(answer) {
        const word = this.gameState.words[this.gameState.currentIndex];
        
        if (answer === word.meaning) {
            this.gameState.correct++;
            this.addXP(5);
        }
        
        this.gameState.currentIndex++;
        
        if (this.gameState.currentIndex < this.gameState.words.length && this.gameState.timeLeft > 0) {
            this.renderSpeedGame();
        } else {
            this.endSpeedGame();
        }
    }

    endSpeedGame() {
        clearInterval(this.speedTimer);
        
        const score = this.gameState.correct * 10;
        if (score > this.state.gameScores.speed) {
            this.state.gameScores.speed = score;
        }
        
        this.addXP(score);
        this.saveState();
        
        const gameArea = document.getElementById('game-area');
        gameArea.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 60px; margin-bottom: 16px;">⚡</div>
                <h3>时间到！</h3>
                <p>正确: ${this.gameState.correct}</p>
                <p style="font-size: 24px; font-weight: 900; color: var(--primary);">得分: ${score}</p>
                <button class="btn-primary" onclick="app.startSpeedGame()" style="margin-top: 16px;">再玩一次</button>
            </div>
        `;
    }

    // ========== 成就 ==========
    renderAchievements() {
        const grid = document.getElementById('achievements-grid');
        if (!grid) return;
        
        grid.innerHTML = this.data.achievements.map(achievement => {
            const unlocked = this.state.achievements.includes(achievement.id);
            
            return `
                <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
                    <div class="achievement-icon-large">${achievement.icon}</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.desc}</div>
                    <div class="achievement-xp">+${achievement.xp} XP</div>
                </div>
            `;
        }).join('');
    }

    // ========== 错题本 ==========
    renderMistakes() {
        const list = document.getElementById('mistakes-list');
        if (!list) return;
        
        if (this.state.mistakes.length === 0) {
            list.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-secondary);">🎉 还没有错题，继续保持！</div>';
            return;
        }
        
        // 显示最近10个错题
        const recentMistakes = this.state.mistakes.slice(-10).reverse();
        
        list.innerHTML = recentMistakes.map((mistake, index) => {
            if (mistake.type === 'reading') {
                return `
                    <div class="mistake-item">
                        <div class="mistake-question">${mistake.question}</div>
                        <div class="mistake-answer">
                            你的答案: <span class="wrong">${mistake.userAnswer}</span><br>
                            正确答案: <span class="correct">${mistake.correctAnswer}</span><br>
                            <small style="color: var(--text-secondary);">${mistake.explanation}</small>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="mistake-item">
                        <div class="mistake-question">单词: ${mistake.word}</div>
                        <div class="mistake-answer">
                            你的答案: <span class="wrong">${mistake.userAnswer || '(未填写)'}</span>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }

    reviewMistakes() {
        if (this.state.mistakes.length === 0) {
            alert('还没有错题哦！');
            return;
        }
        
        // 从错题中创建拼写练习
        const mistakeWords = this.state.mistakes
            .filter(m => m.type === 'spelling')
            .map(m => m.word);
        
        if (mistakeWords.length === 0) {
            alert('暂无单词拼写错题！');
            return;
        }
        
        // 找到对应的单词数据
        const allWords = this.data.vocabulary.flatMap(u => u.words);
        const reviewWords = mistakeWords.map(word => 
            allWords.find(w => w.word === word)
        ).filter(Boolean);
        
        if (reviewWords.length === 0) {
            alert('暂无单词拼写错题！');
            return;
        }
        
        this.gameState = {
            type: 'spelling',
            words: reviewWords.slice(0, 10),
            currentIndex: 0,
            correct: 0,
            streak: 0
        };
        
        this.navigate('games');
        this.renderSpellingGame();
    }

    // ========== 个人中心 ==========
    renderProfile() {
        const level = this.data.levels[this.state.level];
        const nextLevel = this.data.levels[this.state.level + 1];
        
        document.getElementById('profile-avatar').textContent = level.icon;
        document.getElementById('profile-name').textContent = '英语小英雄';
        document.getElementById('profile-level').innerHTML = `
            <span class="level-badge-large">${level.icon} ${level.name}</span>
        `;
        
        const xpProgress = nextLevel 
            ? ((this.state.xp - level.minXP) / (nextLevel.minXP - level.minXP)) * 100
            : 100;
        
        document.getElementById('xp-progress').style.width = `${Math.min(xpProgress, 100)}%`;
        document.getElementById('xp-text').textContent = nextLevel 
            ? `${this.state.xp} / ${nextLevel.minXP} XP`
            : `${this.state.xp} XP (已满级)`;
        
        // 详细统计
        const accuracy = this.state.totalQuestions > 0 
            ? Math.round((this.state.totalCorrect / this.state.totalQuestions) * 100) 
            : 0;
        
        const detailStats = document.getElementById('detail-stats');
        if (detailStats) {
            detailStats.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-icon">📚</span>
                        <span class="stat-value">${this.state.learnedWords.length}</span>
                        <span class="stat-label">已学单词</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">📖</span>
                        <span class="stat-value">${this.state.completedReadings.length}</span>
                        <span class="stat-label">完成阅读</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">🎯</span>
                        <span class="stat-value">${accuracy}%</span>
                        <span class="stat-label">正确率</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">🏆</span>
                        <span class="stat-value">${this.state.achievements.length}</span>
                        <span class="stat-label">成就数</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">🔥</span>
                        <span class="stat-value">${this.state.streak}</span>
                        <span class="stat-label">连续天数</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">⭐</span>
                        <span class="stat-value">${this.state.xp}</span>
                        <span class="stat-label">总经验</span>
                    </div>
                </div>
            `;
        }
    }

    // ========== 工具函数 ==========
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    resetProgress() {
        if (confirm('确定要重置所有进度吗？此操作不可恢复！')) {
            localStorage.removeItem('englishHeroState');
            location.reload();
        }
    }

    setupEventListeners() {
        // 防止双击缩放
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
}

// 启动应用
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new EnglishHeroApp();
});
