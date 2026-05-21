// ============================================
// 英语小英雄 - 主应用逻辑
// Reading Explorer 3 闯关学习应用
// ============================================

class EnglishHeroApp {
    constructor() {
        this.data = COURSE_DATA;
        this.state = this.loadState();
        this.currentPage = this.state.currentPage || 'home';
        this.currentUnit = this.state.currentUnit || 0;
        this.currentWordIndex = 0;
        this.currentPattern = null;
        this.currentReading = null;
        this.gameState = {};
        this.audioContext = null;
        this.readingAnswers = [];
        this.readingTimer = null;
        this.speedTimer = null;
        this.mediaRecorder = null;
        this.recordedChunks = [];
        this.isRecording = false;
        
        this.init();
    }
    
    // 获取单元ID（将数字索引转换为单元ID格式）
    getUnitId(index) {
        const unitMap = {
            1: "1A", 2: "1B", 3: "2A", 4: "2B",
            5: "3A", 6: "3B", 7: "4A", 8: "4B",
            9: "5A", 10: "5B", 11: "6A", 12: "6B"
        };
        return unitMap[index] || "1A";
    }

    // 音效播放
    playSound(type) {
        try {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            const ctx = this.audioContext;
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            switch(type) {
                case 'correct':
                    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
                    oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.3);
                    break;
                case 'wrong':
                    oscillator.frequency.setValueAtTime(200, ctx.currentTime);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.4);
                    break;
                case 'click':
                    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
                    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.1);
                    break;
                case 'match':
                    oscillator.frequency.setValueAtTime(440, ctx.currentTime);
                    oscillator.frequency.setValueAtTime(554, ctx.currentTime + 0.1);
                    oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.2);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.4);
                    break;
                case 'complete':
                    oscillator.frequency.setValueAtTime(523, ctx.currentTime);
                    oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.15);
                    oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.3);
                    oscillator.frequency.setValueAtTime(1047, ctx.currentTime + 0.45);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.8);
                    break;
            }
        } catch (e) {
            // 音效播放失败不影响功能
        }
    }

    // ========== 录音功能 ==========
    startRecording() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert('您的浏览器不支持录音功能');
            return;
        }
        
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.recordedChunks = [];
                this.isRecording = true;
                
                this.mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        this.recordedChunks.push(event.data);
                    }
                };
                
                this.mediaRecorder.onstop = () => {
                    const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    this.showRecordingResult(url);
                    this.isRecording = false;
                    
                    // Stop all tracks
                    stream.getTracks().forEach(track => track.stop());
                };
                
                this.mediaRecorder.start();
                this.updateRecordingUI(true);
            })
            .catch(err => {
                console.error('录音错误:', err);
                alert('无法访问麦克风，请检查权限设置');
            });
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.updateRecordingUI(false);
        }
    }
    
    updateRecordingUI(recording) {
        const btn = document.getElementById('record-btn');
        const status = document.getElementById('record-status');
        if (btn) {
            if (recording) {
                btn.classList.add('recording');
                btn.textContent = '⏹️';
                btn.onclick = () => this.stopRecording();
            } else {
                btn.classList.remove('recording');
                btn.textContent = '🎙️';
                btn.onclick = () => this.startRecording();
            }
        }
        if (status) {
            status.textContent = recording ? '正在录音...点击停止' : '点击开始录音';
            status.style.color = recording ? '#f44336' : '#666';
        }
    }
    
    showRecordingResult(audioUrl) {
        const container = document.getElementById('recording-result');
        if (container) {
            container.innerHTML = `
                <p style="font-weight: 700; margin-bottom: 10px;">🎵 录音完成！</p>
                <audio controls src="${audioUrl}" style="width: 100%; margin-bottom: 10px;"></audio>
                <button class="btn-secondary" onclick="this.parentElement.innerHTML=''" style="font-size: 16px; padding: 10px 20px;">清除录音</button>
            `;
        }
    }

    // 初始化
    init() {
        this.checkDailyReset();
        this.renderHeader();
        this.setupEventListeners();
        
        // 根据保存的页面状态导航到正确页面
        if (this.currentPage && this.currentPage !== 'home') {
            this.navigate(this.currentPage);
        } else {
            this.renderHome();
        }
        
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
            dailyTasks: [],
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
            totalQuestions: 0,
            currentPage: 'home',
            currentUnit: 0
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
        
        // 如果dailyTasks为空，生成新的任务
        if (!this.state.dailyTasks || this.state.dailyTasks.length === 0) {
            this.state.dailyTasks = this.generateDailyTasks();
        }
        
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
        this.state.currentPage = page;
        this.state.currentUnit = this.currentUnit;
        this.saveState();
        
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
        this.playSound('complete');
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
        this.playSound('complete');
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
        
        // 更新下拉菜单选项
        this.updateUnitDropdown();
        
        this.renderFlashcard();
    }
    
    updateUnitDropdown() {
        const dropdown = document.getElementById('unit-select-dropdown');
        if (!dropdown) return;
        
        // 保存当前选择
        const currentValue = dropdown.value;
        
        // 重新生成选项
        let options = '<option value="">📍 选择单元跳转...</option>';
        this.data.vocabulary.forEach((unit, index) => {
            const isCurrent = index === this.currentUnit;
            options += `<option value="${index}" ${isCurrent ? 'selected' : ''}>${unit.unitName}${isCurrent ? ' (当前)' : ''}</option>`;
        });
        dropdown.innerHTML = options;
        
        // 恢复选择（如果不是空值）
        if (currentValue) {
            dropdown.value = currentValue;
        }
    }
    
    jumpToUnit(index) {
        if (index === '' || index === null || index === undefined) return;
        
        index = parseInt(index);
        if (isNaN(index) || index < 0 || index >= this.data.vocabulary.length) return;
        
        this.currentUnit = index;
        this.currentWordIndex = 0;
        
        // 隐藏游戏区域
        const wordGameArea = document.getElementById('word-game-area');
        if (wordGameArea) wordGameArea.style.display = 'none';
        
        this.renderWords();
        
        // 显示跳转成功提示
        const unit = this.data.vocabulary[index];
        const feedbackEl = document.getElementById('analysis-feedback');
        if (feedbackEl) {
            feedbackEl.innerHTML = `<div style="color: #4CAF50; font-weight: bold; padding: 10px; background: #E8F5E9; border-radius: 8px; margin-top: 10px; text-align: center;">
                ✅ 已跳转到 ${unit.unitName}
            </div>`;
            setTimeout(() => {
                feedbackEl.innerHTML = '';
            }, 2000);
        }
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
        this.playSound('correct');
        
        // 检查是否是最后一个单词
        if (this.currentWordIndex >= unit.words.length - 1) {
            this.showWordCompletionMessage();
        } else {
            // 翻转回正面再显示下一个
            document.getElementById('flashcard').classList.remove('flipped');
            setTimeout(() => {
                this.nextWord();
            }, 300);
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
        this.playSound('click');
        
        // 检查是否是最后一个单词
        if (this.currentWordIndex >= unit.words.length - 1) {
            this.showWordCompletionMessage();
        } else {
            // 翻转回正面再显示下一个
            document.getElementById('flashcard').classList.remove('flipped');
            setTimeout(() => {
                this.nextWord();
            }, 300);
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
        
        // 更新句型页面单元选择下拉菜单
        this.updateSentenceUnitDropdown();
        
        // 默认显示当前单元的句型
        const currentUnitId = this.currentUnit + 1;
        const unitPatterns = this.data.sentencePatterns.filter(p => p.unitId === currentUnitId);
        
        if (unitPatterns.length === 0) {
            list.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-secondary);">
                该单元暂无句型练习
            </div>`;
        } else {
            list.innerHTML = unitPatterns.map((pattern) => {
                const originalIndex = this.data.sentencePatterns.indexOf(pattern);
                return `
                    <div class="pattern-card" onclick="app.selectPattern(${originalIndex})">
                        <h4>${pattern.title}</h4>
                        <p>${pattern.description}</p>
                        <p style="font-size: 14px; color: var(--text-light); margin-top: 5px;">${pattern.unitName}</p>
                    </div>
                `;
            }).join('');
        }
    }
    
    updateSentenceUnitDropdown() {
        const dropdown = document.getElementById('sentence-unit-select');
        if (!dropdown) return;
        
        let options = '<option value="">📍 选择单元跳转...</option>';
        this.data.units.forEach((unit, index) => {
            options += `<option value="${index}">${unit.name}</option>`;
        });
        dropdown.innerHTML = options;
    }
    
    jumpToSentenceUnit(index) {
        if (index === '' || index === null || index === undefined) return;
        
        index = parseInt(index);
        if (isNaN(index) || index < 0 || index >= this.data.units.length) return;
        
        // 根据单元过滤句型
        const unitName = this.data.units[index].name;
        const unitId = index + 1;
        this.currentSentenceUnit = index;
        
        // 重新渲染句型列表，只显示当前单元的句型
        const list = document.getElementById('pattern-list');
        if (list) {
            const filteredPatterns = this.data.sentencePatterns.filter(p => p.unitId === unitId);
            
            if (filteredPatterns.length === 0) {
                list.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-secondary);">
                    该单元暂无句型练习
                </div>`;
            } else {
                list.innerHTML = filteredPatterns.map((pattern) => {
                    const originalIndex = this.data.sentencePatterns.indexOf(pattern);
                    return `
                        <div class="pattern-card" onclick="app.selectPattern(${originalIndex})">
                            <h4>${pattern.title}</h4>
                            <p>${pattern.description}</p>
                            <p style="font-size: 14px; color: var(--text-light); margin-top: 5px;">${pattern.unitName}</p>
                        </div>
                    `;
                }).join('');
            }
        }
        
        // 显示跳转提示
        const feedbackEl = document.getElementById('analysis-feedback');
        if (feedbackEl) {
            feedbackEl.innerHTML = `<div style="color: #4CAF50; font-weight: bold; padding: 10px; background: #E8F5E9; border-radius: 8px; margin-top: 10px; text-align: center;">
                ✅ 已切换到 ${unitName}
            </div>`;
            setTimeout(() => {
                feedbackEl.innerHTML = '';
            }, 2000);
        }
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
        
        // 创建句子显示，将可点击的部分高亮
        let sentenceHtml = question.sentence;
        
        // 为每个 part 创建可点击的标记
        question.parts.forEach((part, i) => {
            // 转义特殊字符，避免正则表达式错误
            const escapedText = part.text.replace(/[.*+?^${}()|[\]\\\\]/g, '\\\\$\u0026');
            const regex = new RegExp('(' + escapedText + ')', 'gi');
            sentenceHtml = sentenceHtml.replace(regex, `<span class="analysis-word" data-correct="${part.correct}" data-index="${i}" onclick="app.selectWordPart(this)">$1</span>`);
        });
        
        container.innerHTML = `<div style="line-height: 2; font-size: 18px;">${sentenceHtml}</div>`;
        
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
        const feedbackEl = document.getElementById('analysis-feedback');
        const selectedWord = this.selectedWord;
        
        // Store original text without any icons
        let originalText = selectedWord.dataset.word || selectedWord.textContent;
        originalText = originalText.replace(/[✅❌]\s*$/, '').trim();
        
        if (type === correct) {
            this.playSound('correct');
            selectedWord.classList.remove('selected', 'wrong');
            selectedWord.classList.add('correct');
            selectedWord.textContent = originalText + ' ✅';
            selectedWord.style.backgroundColor = '#E8F5E9';
            selectedWord.style.borderColor = '#4CAF50';
            this.addXP(10);
            this.updateTaskProgress('sentence');
            
            if (feedbackEl) {
                feedbackEl.innerHTML = '<div style="color: #4CAF50; font-weight: bold; padding: 15px; background: #E8F5E9; border-radius: 8px; margin-top: 10px; text-align: center; font-size: 20px;">✅ 回答正确！+10 XP</div>';
            }
        } else {
            this.playSound('wrong');
            selectedWord.classList.remove('selected', 'correct');
            selectedWord.classList.add('wrong');
            selectedWord.textContent = originalText + ' ❌';
            selectedWord.style.backgroundColor = '#FFEBEE';
            selectedWord.style.borderColor = '#f44336';
            
            if (feedbackEl) {
                feedbackEl.innerHTML = '<div style="color: #f44336; font-weight: bold; padding: 15px; background: #FFEBEE; border-radius: 8px; margin-top: 10px; text-align: center; font-size: 20px;">❌ 回答错误！正确答案是：' + correct + '</div>';
            }
            
            setTimeout(() => {
                if (selectedWord) {
                    selectedWord.classList.remove('wrong');
                    selectedWord.textContent = originalText;
                    selectedWord.style.backgroundColor = '';
                    selectedWord.style.borderColor = '';
                }
            }, 2000);
        }
        
        this.selectedWord = null;
    }

    // ========== 阅读理解 ==========
        // ========== 阅读理解 (新数据结构) ==========
    renderReading() {
        const levels = document.getElementById('reading-levels');
        const content = document.getElementById('reading-content');
        if (!levels) return;
        
        // 如果正在阅读文章，保持当前状态
        if (this.currentReading && content) {
            levels.style.display = 'none';
            content.style.display = 'block';
            return;
        }
        
        // 否则显示文章列表
        if (levels) levels.style.display = 'block';
        if (content) content.style.display = 'none';
        
        // 更新阅读页面单元选择下拉菜单 - 显示所有单元
        this.updateReadingUnitDropdown();
        
        // 显示所有单元的所有文章
        let html = '';
        this.data.readingPassages.units.forEach(unitData => {
            if (unitData.articles && unitData.articles.length > 0) {
                html += `<div style="margin: 15px 0 10px 0; padding: 10px; background: var(--primary-light); border-radius: 8px; font-weight: bold; color: var(--primary);">
                    ${unitData.name} - ${unitData.theme}
                </div>`;
                
                html += unitData.articles.map((article, index) => {
                    const completed = this.state.completedReadings.includes(article.id);
                    
                    return `
                        <div class="level-card ${completed ? 'completed' : ''}" onclick="(() => app.selectReading('${unitData.id}', ${index}))()">
                            <div class="level-number">${unitData.id}-${index + 1}</div>
                            <div class="level-info">
                                <h4>${article.title}</h4>
                                <p>${article.subtitle} · ${article.questions.length}题</p>
                            </div>
                            <div class="level-xp">+${100 + (index * 20)}XP</div>
                        </div>
                    `;
                }).join('');
            }
        });
        
        if (html === '') {
            html = `<div style="text-align: center; padding: 20px; color: var(--text-secondary);">
                暂无阅读文章
            </div>`;
        }
        
        levels.innerHTML = html;
        
        // 如果正在阅读文章，切换到阅读视图
        if (this.currentReading) {
            const content = document.getElementById('reading-content');
            if (levels) levels.style.display = 'none';
            if (content) content.style.display = 'block';
        }
    }
    
    selectReading = (unitId, articleIndex) => {
        const unitData = this.data.readingPassages.units.find(u => u.id === unitId);
        if (!unitData || !unitData.articles[articleIndex]) return;
        
        this.currentReading = unitData.articles[articleIndex];
        this.currentReadingUnit = unitId;
        this.currentQuestionIndex = 0;
        this.readingAnswers = [];
        this.readingStartTime = Date.now();
        this.renderReadingContent();
    }
    
    renderReadingContent = () => {
        const levels = document.getElementById('reading-levels');
        const content = document.getElementById('reading-content');
        
        if (!this.currentReading) return;
        
        // 隐藏文章列表，显示文章内容
        if (levels) levels.style.display = 'none';
        if (content) content.style.display = 'block';
        
        // 更新标题
        const title = document.getElementById('passage-title');
        if (title) {
            title.innerHTML = `${this.currentReading.title}<br><small style="color: var(--text-secondary);">${this.currentReading.subtitle}</small>`;
        }
        
        // 更新文章内容
        const text = document.getElementById('passage-text');
        if (text) {
            text.innerHTML = this.formatPassage(this.currentReading.content);
        }
        
        // 显示第一题
        this.renderReadingQuestion();
        
        // 添加返回按钮
        const backBtn = document.querySelector('#page-reading .page-header h2');
        if (backBtn) {
            backBtn.innerHTML = `<span onclick="app.backToReadingList()" style="cursor: pointer;">← 返回列表</span> 📖 ${this.currentReading.title}`;
        }
    }
    
    backToReadingList = () => {
        const levels = document.getElementById('reading-levels');
        const content = document.getElementById('reading-content');
        
        if (levels) levels.style.display = 'block';
        if (content) content.style.display = 'none';
        
        // 恢复标题
        const backBtn = document.querySelector('#page-reading .page-header h2');
        if (backBtn) {
            backBtn.innerHTML = '📖 阅读闯关';
        }
        
        this.currentReading = null;
        this.renderReading();
    }
    
    updateReadingUnitDropdown() {
        const dropdown = document.getElementById('reading-unit-select');
        if (!dropdown) return;
        
        // 下拉菜单显示所有单元
        dropdown.innerHTML = '<option value="">📍 选择单元跳转...</option>' + 
            this.data.readingPassages.units.map((unit, index) => {
                return `<option value="${index}">${unit.name} - ${unit.theme}</option>`;
            }).join('');
    }
    
    jumpToReadingUnit(index) {
        if (index === '' || index === null || index === undefined) return;
        
        const unitData = this.data.readingPassages.units[index];
        if (!unitData) return;
        
        // 滚动到对应单元
        const levels = document.getElementById('reading-levels');
        if (levels) {
            const unitHeaders = levels.querySelectorAll('div[style*="background: var(--primary-light)"]');
            if (unitHeaders[index]) {
                unitHeaders[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
    
    formatPassage(content) {
        return content.split('\n\n').map(para => `<p style="margin-bottom: 12px; line-height: 1.6;">${para}</p>`).join('');
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
        const correct = answerIndex === question.answer;
        
        this.readingAnswers.push({
            question: question.question,
            userAnswer: question.options[answerIndex],
            correctAnswer: question.options[question.answer],
            correct: correct,
            explanation: question.explanation
        });
        
        // 显示正确/错误
        const options = document.querySelectorAll('.question-option');
        options[answerIndex].classList.add(correct ? 'correct' : 'wrong');
        options[question.answer].classList.add('correct');
        
        this.state.totalQuestions++;
        if (correct) {
            this.playSound('correct');
            this.state.totalCorrect++;
        } else {
            this.playSound('wrong');
            // 添加到错题本
            this.state.mistakes.push({
                type: 'reading',
                question: question.question,
                userAnswer: question.options[answerIndex],
                correctAnswer: question.options[question.answer],
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
        let xpEarned = Math.round(100 * (accuracy / 100));
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
        
        this.playSound('complete');
        
        // 计算能力分析数据
        const readingScore = accuracy;
        const vocabScore = Math.min(100, this.state.totalWordsLearned * 5);
        const grammarScore = Math.min(100, this.state.completedPatterns.length * 10);
        const streakScore = Math.min(100, this.state.streak * 10);
        
        // 显示结果 + 能力分析
        const questionsContainer = document.getElementById('passage-questions');
        questionsContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 60px; margin-bottom: 16px;">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
                <div class="ability-result">
                    <h2>🎯 闯关完成！</h2>
                    <p style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
                        ${correctCount}/${totalQuestions} 正确 (${accuracy}%)
                    </p>
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">
                        获得 ${xpEarned} XP
                    </p>
                    
                    <h3 style="font-size: 22px; margin: 24px 0 16px;">📊 能力分析</h3>
                    <div class="ability-chart">
                        <div class="ability-item">
                            <div class="ability-name">📖 阅读理解</div>
                            <div class="ability-score">${readingScore}分</div>
                            <div class="ability-bar"><div class="ability-bar-fill" style="width: ${readingScore}%"></div></div>
                        </div>
                        <div class="ability-item">
                            <div class="ability-name">📝 词汇掌握</div>
                            <div class="ability-score">${vocabScore}分</div>
                            <div class="ability-bar"><div class="ability-bar-fill" style="width: ${vocabScore}%"></div></div>
                        </div>
                        <div class="ability-item">
                            <div class="ability-name">🔤 语法分析</div>
                            <div class="ability-score">${grammarScore}分</div>
                            <div class="ability-bar"><div class="ability-bar-fill" style="width: ${grammarScore}%"></div></div>
                        </div>
                        <div class="ability-item">
                            <div class="ability-name">🔥 学习连续</div>
                            <div class="ability-score">${streakScore}分</div>
                            <div class="ability-bar"><div class="ability-bar-fill" style="width: ${streakScore}%"></div></div>
                        </div>
                    </div>
                    
                    <p style="font-size: 18px; color: var(--text-secondary); margin: 16px 0;">
                        ${accuracy >= 80 ? '太棒了！你的阅读能力很强！' : accuracy >= 60 ? '不错！继续加油！' : '再接再厉，多练习会进步的！'}
                    </p>
                </div>
                
                <button class="btn-primary" onclick="app.navigate('reading')" style="margin-top: 20px;">继续闯关</button>
            </div>
        `;
    }

    // ========== 游戏中心 ==========
    renderGames() {
        document.getElementById('memory-best').textContent = this.state.gameScores.memory || '--';
        document.getElementById('spelling-best').textContent = this.state.gameScores.spelling || '--';
        document.getElementById('speed-best').textContent = this.state.gameScores.speed || '--';
    }

    // 在单词页面启动记忆游戏
    startMemoryGameInWordPage() {
        const wordGameArea = document.getElementById('word-game-area');
        if (!wordGameArea) return;
        
        wordGameArea.style.display = 'block';
        wordGameArea.scrollIntoView({ behavior: 'smooth' });
        
        // 选择当前单元的单词
        const unit = this.data.vocabulary[this.currentUnit];
        const selectedWords = unit.words.slice(0, 6);
        
        // 创建卡片对（单词-意思）
        let cards = [];
        selectedWords.forEach((word, i) => {
            cards.push({ id: i * 2, type: 'word', content: word.word, pair: i });
            cards.push({ id: i * 2 + 1, type: 'meaning', content: word.meaning, pair: i });
        });
        
        cards = this.shuffleArray(cards);
        
        this.gameState = {
            type: 'memory',
            cards: cards,
            selected: [],
            matched: [],
            moves: 0,
            startTime: Date.now()
        };
        
        this.renderMemoryGameInWordPage();
    }
    
    renderMemoryGameInWordPage() {
        const wordGameArea = document.getElementById('word-game-area');
        
        wordGameArea.innerHTML = `
            <div style="text-align: center; margin-bottom: 16px;">
                <div class="game-score">🧠 单词配对</div>
                <div>步数: <span id="memory-moves-word">0</span></div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">点击英文单词和对应的中文意思进行配对</div>
            </div>
            <div class="memory-grid" id="memory-grid-word"></div>
        `;
        
        const grid = document.getElementById('memory-grid-word');
        grid.innerHTML = this.gameState.cards.map((card, index) => {
            const isMatched = this.gameState.matched.includes(card.pair);
            const isSelected = this.gameState.selected.includes(index);
            
            return `
            <button class="memory-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" 
                    onclick="app.selectMemoryCardInWordPage(${index})"
                    ${isMatched ? 'disabled' : ''}>
                <span style="font-size: ${card.type === 'word' ? '16px' : '14px'}; font-weight: ${card.type === 'word' ? '700' : '600'};">${card.content}</span>
            </button>
        `}).join('');
    }
    
    selectMemoryCardInWordPage(index) {
        // 如果已经选了2个，或者点击已选中的，返回
        if (this.gameState.selected.length >= 2) return;
        if (this.gameState.selected.includes(index)) return;
        
        this.gameState.selected.push(index);
        this.renderMemoryGameInWordPage();
        
        if (this.gameState.selected.length === 2) {
            this.gameState.moves++;
            document.getElementById('memory-moves-word').textContent = this.gameState.moves;
            
            const card1 = this.gameState.cards[this.gameState.selected[0]];
            const card2 = this.gameState.cards[this.gameState.selected[1]];
            
            if (card1.pair === card2.pair) {
                // 配对成功
                this.gameState.matched.push(card1.pair);
                this.playSound('match');
                this.gameState.selected = [];
                this.renderMemoryGameInWordPage();
                
                // 检查是否全部配对
                if (this.gameState.matched.length === this.gameState.cards.length / 2) {
                    const time = Math.floor((Date.now() - this.gameState.startTime) / 1000);
                    const wordGameArea = document.getElementById('word-game-area');
                    wordGameArea.innerHTML += `
                        <div style="text-align: center; margin-top: 20px; padding: 20px; background: #E8F5E9; border-radius: 12px;">
                            <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
                            <h3>恭喜完成！</h3>
                            <p>用时: ${time}秒 | 步数: ${this.gameState.moves}</p>
                            <button class="btn-primary" onclick="app.startMemoryGameInWordPage()" style="margin-top: 10px;">再玩一次</button>
                            <button class="btn-secondary" onclick="document.getElementById('word-game-area').style.display='none'" style="margin-top: 10px; margin-left: 10px;">关闭</button>
                        </div>
                    `;
                    
                    // 更新最佳成绩
                    if (!this.state.gameScores.memory || this.gameState.moves < this.state.gameScores.memory) {
                        this.state.gameScores.memory = this.gameState.moves;
                        this.saveState();
                    }
                }
            } else {
                // 配对失败，1秒后重置
                setTimeout(() => {
                    this.gameState.selected = [];
                    this.renderMemoryGameInWordPage();
                }, 1000);
            }
        }
    }

    // 在单词页面启动拼写游戏
    startSpellingGameInWordPage() {
        const wordGameArea = document.getElementById('word-game-area');
        if (!wordGameArea) return;
        
        wordGameArea.style.display = 'block';
        wordGameArea.scrollIntoView({ behavior: 'smooth' });
        
        // 使用当前单元的单词
        const unit = this.data.vocabulary[this.currentUnit];
        const words = this.shuffleArray([...unit.words]).slice(0, 5);
        
        this.gameState = {
            type: 'spelling',
            words: words,
            currentIndex: 0,
            correct: 0,
            answers: []
        };
        
        this.renderSpellingGameInWordPage();
    }
    
    renderSpellingGameInWordPage() {
        const wordGameArea = document.getElementById('word-game-area');
        const current = this.gameState.words[this.gameState.currentIndex];
        
        wordGameArea.innerHTML = `
            <div style="text-align: center; margin-bottom: 16px;">
                <div class="game-score">✍️ 拼写挑战</div>
                <div>第 ${this.gameState.currentIndex + 1} / ${this.gameState.words.length} 题</div>
            </div>
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; margin-bottom: 10px;">${current.image}</div>
                <div style="font-size: 18px; color: var(--text-secondary); margin-bottom: 10px;">${current.meaning}</div>
                <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">音标: ${current.phonetic}</div>
                <input type="text" id="spelling-input-word" 
                       style="padding: 12px; font-size: 18px; border: 2px solid var(--primary); border-radius: 8px; text-align: center; width: 200px;"
                       placeholder="输入英文单词" autocomplete="off">
                <div style="margin-top: 16px;">
                    <button class="btn-primary" onclick="app.checkSpellingInWordPage()">提交</button>
                    <button class="btn-secondary" onclick="app.playWordSound()">🔊 听发音</button>
                </div>
                <div id="spelling-feedback-word" style="margin-top: 16px;"></div>
            </div>
        `;
        
        // 自动聚焦输入框
        setTimeout(() => {
            const input = document.getElementById('spelling-input-word');
            if (input) input.focus();
        }, 100);
    }
    
    checkSpellingInWordPage() {
        const input = document.getElementById('spelling-input-word');
        const feedback = document.getElementById('spelling-feedback-word');
        const current = this.gameState.words[this.gameState.currentIndex];
        const answer = input.value.trim().toLowerCase();
        
        if (!answer) {
            feedback.innerHTML = `<div style="color: #FF9800;">请输入单词</div>`;
            return;
        }
        
        const correct = answer === current.word.toLowerCase();
        this.gameState.answers.push({ word: current.word, correct });
        
        if (correct) {
            this.playSound('correct');
            this.gameState.correct++;
            feedback.innerHTML = `<div style="color: #4CAF50; font-weight: bold;">✅ 正确！</div>`;
        } else {
            this.playSound('wrong');
            feedback.innerHTML = `<div style="color: #f44336; font-weight: bold;">❌ 错误！正确答案是: ${current.word}</div>`;
        }
        
        // 2秒后下一题
        setTimeout(() => {
            this.gameState.currentIndex++;
            if (this.gameState.currentIndex < this.gameState.words.length) {
                this.renderSpellingGameInWordPage();
            } else {
                this.showSpellingResultInWordPage();
            }
        }, 2000);
    }
    
    showSpellingResultInWordPage() {
        const wordGameArea = document.getElementById('word-game-area');
        const accuracy = Math.round((this.gameState.correct / this.gameState.words.length) * 100);
        
        wordGameArea.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; margin-bottom: 10px;">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
                <h3>拼写挑战完成！</h3>
                <p>正确: ${this.gameState.correct} / ${this.gameState.words.length} (${accuracy}%)</p>
                <button class="btn-primary" onclick="app.startSpellingGameInWordPage()" style="margin-top: 10px;">再玩一次</button>
                <button class="btn-secondary" onclick="document.getElementById('word-game-area').style.display='none'" style="margin-top: 10px; margin-left: 10px;">关闭</button>
            </div>
        `;
        
        // 更新最佳成绩
        if (!this.state.gameScores.spelling || this.gameState.correct > this.state.gameScores.spelling) {
            this.state.gameScores.spelling = this.gameState.correct;
            this.saveState();
        }
    }

    // 记忆游戏 - 游戏中心版本
    startMemoryGame() {
        const gameArea = document.getElementById('game-area');
        if (!gameArea) return;
        
        // 选择8个单词
        const allWords = this.data.vocabulary.flatMap(u => u.words);
        const selectedWords = this.shuffleArray([...allWords]).slice(0, 8);
        
        // 创建卡片对（单词-意思）
        let cards = [];
        selectedWords.forEach((word, i) => {
            cards.push({ id: i * 2, type: 'word', content: word.word, pair: i });
            cards.push({ id: i * 2 + 1, type: 'meaning', content: word.meaning, pair: i });
        });
        
        cards = this.shuffleArray(cards);
        
        this.gameState = {
            type: 'memory',
            cards: cards,
            selected: [],
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
                <div class="game-score">🧠 单词配对</div>
                <div>步数: <span id="memory-moves">0</span></div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">点击英文单词和对应的中文意思进行配对</div>
            </div>
            <div class="memory-grid" id="memory-grid"></div>
        `;
        
        const grid = document.getElementById('memory-grid');
        grid.innerHTML = this.gameState.cards.map((card, index) => {
            const isMatched = this.gameState.matched.includes(card.pair);
            const isSelected = this.gameState.selected.includes(index);
            
            return `
            <button class="memory-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" 
                    onclick="app.selectMemoryCard(${index})"
                    ${isMatched ? 'disabled' : ''}>
                <span style="font-size: ${card.type === 'word' ? '16px' : '14px'}; font-weight: ${card.type === 'word' ? '700' : '600'};">${card.content}</span>
            </button>
        `}).join('');
    }

    selectMemoryCard(index) {
        // 如果已经选了2个，或者点击已选中的，返回
        if (this.gameState.selected.length >= 2) return;
        if (this.gameState.selected.includes(index)) return;
        
        this.gameState.selected.push(index);
        this.renderMemoryGame();
        
        if (this.gameState.selected.length === 2) {
            this.gameState.moves++;
            document.getElementById('memory-moves').textContent = this.gameState.moves;
            
            const card1 = this.gameState.cards[this.gameState.selected[0]];
            const card2 = this.gameState.cards[this.gameState.selected[1]];
            
            if (card1.pair === card2.pair) {
                // 匹配成功
                this.playSound('match');
                this.gameState.matched.push(card1.pair);
                this.gameState.selected = [];
                
                setTimeout(() => {
                    this.renderMemoryGame();
                    
                    // 检查是否全部匹配
                    if (this.gameState.matched.length === 8) {
                        this.playSound('complete');
                        this.endMemoryGame();
                    }
                }, 500);
            } else {
                // 匹配失败 - 显示错误动画后重置
                this.playSound('wrong');
                setTimeout(() => {
                    this.gameState.selected = [];
                    this.renderMemoryGame();
                }, 800);
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
        
        this.playSound('complete');
        
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
            this.playSound('correct');
            input.classList.add('correct');
            this.gameState.correct++;
            this.gameState.streak++;
            this.addXP(10);
            
            if (this.gameState.streak >= 5) {
                this.checkAchievement('spelling_bee');
            }
        } else {
            this.playSound('wrong');
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
        
        this.playSound('complete');
        
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
        if (!gameArea) return;
        
        const word = this.gameState.words[this.gameState.currentIndex];
        if (!word) {
            this.endSpeedGame();
            return;
        }
        
        // 生成选项（1个正确，3个错误）
        const options = [word.meaning];
        const otherWords = this.gameState.words.filter(w => w.word !== word.word);
        const wrongOptions = this.shuffleArray(otherWords).slice(0, 3).map(w => w.meaning);
        options.push(...wrongOptions);
        const shuffledOptions = this.shuffleArray(options);
        
        gameArea.innerHTML = `
            <div style="text-align: center;">
                <div class="game-timer" id="speed-timer">${this.gameState.timeLeft}</div>
                <div class="game-score" style="font-size: 32px; margin: 20px 0;">${word.word}</div>
                <div style="margin-bottom: 16px; color: var(--text-secondary);">选择正确的中文意思：</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 400px; margin: 0 auto;">
                    ${shuffledOptions.map(option => `
                        <button class="game-btn" onclick="app.answerSpeedGame(this.dataset.answer)" data-answer="${option.replace(/"/g, '&quot;')}" style="margin: 0; padding: 15px; font-size: 16px;">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div style="margin-top: 20px;">
                    <span>进度: ${this.gameState.currentIndex + 1} / ${this.gameState.words.length}</span>
                </div>
            </div>
        `;
    }

    answerSpeedGame(answer) {
        const word = this.gameState.words[this.gameState.currentIndex];
        
        if (answer === word.meaning) {
            this.playSound('correct');
            this.gameState.correct++;
            this.addXP(5);
        } else {
            this.playSound('wrong');
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
        
        this.playSound('complete');
        
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
