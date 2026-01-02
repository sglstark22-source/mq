// Main JavaScript for MCQ Website

let currentSet = null;
let currentSetId = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval = null;
let timeRemaining = 3600; // 60 minutes in seconds
let isReviewMode = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
    initializeLoginHandlers();
    initializeHomeScreen();
    initializeAdminHandlers();
});

// Check if user is authenticated and route accordingly
function checkAuthentication() {
    if (!isAuthenticated()) {
        showLoginScreen();
    } else {
        const user = getCurrentUser();
        if (user.role === 'admin') {
            showAdminDashboard();
        } else {
            showHomeScreen();
        }
    }
}

// Show login screen
function showLoginScreen() {
    hideAllScreens();
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('user-info').style.display = 'none';
}

// Show home screen (student)
function showHomeScreen() {
    hideAllScreens();
    document.getElementById('home-screen').classList.add('active');
    updateUserInfo();
    renderHomeSets();
}

// Show admin dashboard
function showAdminDashboard() {
    hideAllScreens();
    document.getElementById('admin-dashboard').classList.add('active');
    updateUserInfo();
    loadAdminDashboard();
}

// Hide all screens
function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Show leaderboard screen
function showLeaderboard() {
    hideAllScreens();
    document.getElementById('leaderboard-screen').classList.add('active');
    loadLeaderboard();
}

// Update user info in header
function updateUserInfo() {
    const user = getCurrentUser();
    if (user) {
        document.getElementById('user-name').textContent = `Welcome, ${user.name} (${user.role})`;
        document.getElementById('user-info').style.display = 'flex';
    }
}

// Initialize login handlers
function initializeLoginHandlers() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const result = authenticateUser(username, password);
        
        if (result.success) {
            setCurrentUser(result.user);
            if (result.user.role === 'admin') {
                showAdminDashboard();
            } else {
                showHomeScreen();
            }
        } else {
            showError('login-error', result.message);
        }
    });

    // Register form
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;
        
        if (password !== confirmPassword) {
            showError('register-error', 'Passwords do not match');
            return;
        }
        
        const result = registerUser(username, password, name);
        
        if (result.success) {
            showSuccess('register-success', 'Registration successful! Please login.');
            setTimeout(() => {
                document.getElementById('show-login').click();
            }, 2000);
        } else {
            showError('register-error', result.message);
        }
    });

    // Toggle between login and register
    document.getElementById('show-register').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('login-form').parentElement.style.display = 'none';
        document.getElementById('register-container').style.display = 'block';
    });

    document.getElementById('show-login').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-form').parentElement.style.display = 'block';
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', function() {
        clearCurrentUser();
        showLoginScreen();
    });
}

// Show error message
function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    setTimeout(() => {
        errorEl.style.display = 'none';
    }, 5000);
}

// Show success message
function showSuccess(elementId, message) {
    const successEl = document.getElementById(elementId);
    successEl.textContent = message;
    successEl.style.display = 'block';
    setTimeout(() => {
        successEl.style.display = 'none';
    }, 5000);
}

// Initialize home screen with event listeners
function initializeHomeScreen() {
    renderHomeSets();

    // Leaderboard button
    const leaderboardBtn = document.getElementById('view-leaderboard-btn');
    if (leaderboardBtn) {
        leaderboardBtn.addEventListener('click', function() {
            showLeaderboard();
        });
    }

    // Back to home button from leaderboard
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            showHomeScreen();
        });
    }
}

function renderHomeSets() {
    const container = document.getElementById('question-sets');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(questionSets).forEach((setId, i) => {
        const set = questionSets[setId];
        const card = document.createElement('div');
        card.className = 'set-card appear';
        card.style.animationDelay = (i * 0.08) + 's';
        card.setAttribute('data-set', setId);
        card.innerHTML = `
            <h3>${set.name}</h3>
            <span class="question-count">${set.questions.length} Questions</span>
        `;
        container.appendChild(card);
    });
    container.querySelectorAll('.set-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-set'));
            startQuiz(id);
        });
    });
}
function hashString(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = ((h << 5) - h) + s.charCodeAt(i);
        h |= 0;
    }
    return h >>> 0;
}
function mulberry32(a) {
    return function() {
        a += 0x6D2B79F5;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
function seededShuffle(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
function getAssignedOrder(username, setId, baseSet) {
    const key = `assignedOrder:${username}:${setId}`;
    const saved = sessionStorage.getItem(key);
    const ids = baseSet.questions.map(q => q.id);
    if (saved) {
        try {
            const order = JSON.parse(saved);
            const valid = order.filter(id => ids.includes(id));
            if (valid.length === ids.length) return valid;
        } catch {}
    }
    const rng = mulberry32(hashString(`${username}|${setId}`));
    const order = ids.slice();
    seededShuffle(order, rng);
    sessionStorage.setItem(key, JSON.stringify(order));
    return order;
}

// Start quiz with selected question set
function startQuiz(setId) {
    const baseSet = questionSets[setId];
    const user = getCurrentUser();
    const username = user ? user.username : 'guest';
    const order = getAssignedOrder(username, setId, baseSet);
    const personalized = order.map(id => baseSet.questions.find(q => q.id === id)).filter(Boolean);
    currentSet = { name: baseSet.name, questions: personalized };
    currentSetId = setId;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = 3600; // Reset timer to 60 minutes
    isReviewMode = false;

    // Hide home screen and show quiz screen
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    document.getElementById('results-screen').classList.remove('active');

    // Update set name
    document.getElementById('current-set-name').textContent = currentSet.name;

    // Initialize question palette
    initializeQuestionPalette();

    // Load first question
    loadQuestion();

    // Start timer
    startTimer();

    // Update progress
    updateProgress();
}

// Initialize question palette
function initializeQuestionPalette() {
    const paletteGrid = document.getElementById('question-palette-grid');
    paletteGrid.innerHTML = '';

    currentSet.questions.forEach((question, index) => {
        const paletteItem = document.createElement('div');
        paletteItem.className = 'palette-item';
        paletteItem.textContent = index + 1;
        paletteItem.addEventListener('click', function() {
            if (!isReviewMode) {
                currentQuestionIndex = index;
                loadQuestion();
            }
        });
        paletteGrid.appendChild(paletteItem);
    });
}

// Load current question
function loadQuestion() {
    const qc = document.querySelector('.question-container');
    if (qc) {
        qc.classList.remove('swap-enter');
        void qc.offsetWidth;
        qc.classList.add('swap-enter');
    }
    const question = currentSet.questions[currentQuestionIndex];
    
    // Update question number and text
    document.getElementById('q-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentSet.questions.length;

    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        if (isReviewMode) {
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            }
            if (userAnswers[currentQuestionIndex] === index && index !== question.correct) {
                optionDiv.classList.add('wrong');
            }
        }

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;
        radio.id = `option-${index}`;
        radio.checked = userAnswers[currentQuestionIndex] === index;
        radio.disabled = isReviewMode;

        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);

        if (!isReviewMode) {
            optionDiv.addEventListener('click', function() {
                selectOption(index);
            });
        }

        optionsContainer.appendChild(optionDiv);
    });

    // Update navigation buttons
    updateNavigationButtons();

    // Update question palette
    updateQuestionPalette();

    // Add "Ask Doubt" button if in review mode
    if (isReviewMode) {
        addAskDoubtButton();
    }
}

function addAskDoubtButton() {
    const container = document.querySelector('.question-container');
    
    // Remove existing doubt button if any
    const existingBtn = document.getElementById('ask-doubt-btn');
    if (existingBtn) existingBtn.remove();

    const doubtBtn = document.createElement('button');
    doubtBtn.id = 'ask-doubt-btn';
    doubtBtn.className = 'btn btn-warning';
    doubtBtn.style.marginTop = '15px';
    doubtBtn.innerHTML = '❓ Ask Doubt';
    
    doubtBtn.addEventListener('click', function() {
        openAskDoubtModal();
    });

    // Insert after options container
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.parentNode.insertBefore(doubtBtn, optionsContainer.nextSibling);
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    loadQuestion(); // Reload to show selected state
    updateProgress();
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentSet.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Update question palette highlighting
function updateQuestionPalette() {
    const paletteItems = document.querySelectorAll('.palette-item');
    paletteItems.forEach((item, index) => {
        item.classList.remove('current', 'answered');
        
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
        
        if (userAnswers[index] !== undefined) {
            item.classList.add('answered');
        }
    });
}

// Previous question
document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Next question
document.getElementById('next-btn').addEventListener('click', function() {
    if (currentQuestionIndex < currentSet.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

// Submit exam
document.getElementById('submit-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to submit the exam? You cannot change answers after submission.')) {
        stopTimer();
        showResults();
    }
});

// Start timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            stopTimer();
            alert('Time is up! Submitting your exam.');
            showResults();
        }
    }, 1000);
}

// Stop timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerElement = document.getElementById('timer');
    
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Add warning classes
    timerElement.classList.remove('warning', 'danger');
    if (timeRemaining <= 300) { // 5 minutes
        timerElement.classList.add('danger');
    } else if (timeRemaining <= 900) { // 15 minutes
        timerElement.classList.add('warning');
    }
}

// Update progress bar
function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    const totalQuestions = currentSet.questions.length;
    const progress = (answeredCount / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Show results
function showResults() {
    // Hide quiz screen and show results screen
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    // Calculate results
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    currentSet.questions.forEach((question, index) => {
        if (userAnswers[index] === undefined) {
            unansweredCount++;
        } else if (userAnswers[index] === question.correct) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    const totalQuestions = currentSet.questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    // Update result display
    document.getElementById('score-percentage').textContent = scorePercentage + '%';
    document.getElementById('total-qs').textContent = totalQuestions;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('wrong-answers').textContent = wrongCount;
    document.getElementById('unanswered').textContent = unansweredCount;

    // Update score circle color based on performance
    const scoreCircle = document.querySelector('.score-circle');
    if (scorePercentage >= 80) {
        scoreCircle.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
    } else if (scorePercentage >= 60) {
        scoreCircle.style.background = 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
    } else {
        scoreCircle.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    }

    // Save result to localStorage for admin access
    saveStudentResult({
        studentUsername: getCurrentUser()?.username || 'guest',
        studentName: getCurrentUser()?.name || 'Guest',
        setId: currentSetId,
        setName: currentSet.name,
        score: scorePercentage,
        correctAnswers: correctCount,
        wrongAnswers: wrongCount,
        unanswered: unansweredCount,
        totalQuestions: totalQuestions,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString()
    });
}

// Save student result to localStorage
function saveStudentResult(result) {
    let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
    allResults.push(result);
    localStorage.setItem('studentResults', JSON.stringify(allResults));
}

// Get all student results
function getAllStudentResults() {
    return JSON.parse(localStorage.getItem('studentResults') || '[]');
}

function deleteStudentResultAtIndex(index) {
    const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
    if (index >= 0 && index < allResults.length) {
        allResults.splice(index, 1);
        localStorage.setItem('studentResults', JSON.stringify(allResults));
    }
}

// Load and display leaderboard
function loadLeaderboard() {
    const leaderboardContent = document.getElementById('leaderboard-content');
    const allResults = getAllStudentResults();
    
    if (allResults.length === 0) {
        leaderboardContent.innerHTML = '<p class="no-results">No results available yet. Be the first to take a quiz!</p>';
        return;
    }

    // Populate set filter dropdown
    const setFilter = document.getElementById('leaderboard-filter-set');
    const uniqueSets = [...new Set(allResults.map(r => r.setName))];
    setFilter.innerHTML = '<option value="">All Sets</option>' + 
        uniqueSets.map(setName => `<option value="${setName}">${setName}</option>`).join('');

    // Function to render leaderboard
    function renderLeaderboard() {
        const setFilterValue = document.getElementById('leaderboard-filter-set').value;
        const topN = parseInt(document.getElementById('leaderboard-top-n').value);
        
        // Filter results
        let filteredResults = allResults;
        if (setFilterValue) {
            filteredResults = filteredResults.filter(r => r.setName === setFilterValue);
        }

        if (filteredResults.length === 0) {
            leaderboardContent.innerHTML = '<p class="no-results">No results match the selected filters.</p>';
            return;
        }

        // Sort by score (descending), then by timestamp (newest first for same score)
        filteredResults.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // Get top N results
        const topResults = filteredResults.slice(0, topN);

        // Create leaderboard HTML
        let leaderboardHTML = '<div class="leaderboard-table-container">';
        leaderboardHTML += '<table class="leaderboard-table">';
        leaderboardHTML += '<thead><tr>';
        leaderboardHTML += '<th>Rank</th>';
        leaderboardHTML += '<th>Student Name</th>';
        leaderboardHTML += '<th>Question Set</th>';
        leaderboardHTML += '<th>Score</th>';
        leaderboardHTML += '<th>Correct</th>';
        leaderboardHTML += '<th>Date</th>';
        leaderboardHTML += '</tr></thead><tbody>';

        topResults.forEach((result, index) => {
            const rank = index + 1;
            const rankClass = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : '';
            const scoreClass = result.score >= 80 ? 'score-excellent' : 
                             result.score >= 60 ? 'score-good' : 'score-poor';
            
            let rankDisplay = rank;
            if (rank === 1) rankDisplay = '🥇';
            else if (rank === 2) rankDisplay = '🥈';
            else if (rank === 3) rankDisplay = '🥉';

            leaderboardHTML += `<tr class="${rankClass}">`;
            leaderboardHTML += `<td class="rank-cell"><span class="rank-badge ${rankClass}">${rankDisplay}</span></td>`;
            leaderboardHTML += `<td><strong>${result.studentName}</strong><br><small>@${result.studentUsername}</small></td>`;
            leaderboardHTML += `<td>${result.setName}</td>`;
            leaderboardHTML += `<td><span class="score-badge ${scoreClass}">${result.score}%</span></td>`;
            leaderboardHTML += `<td class="correct">${result.correctAnswers}/${result.totalQuestions}</td>`;
            leaderboardHTML += `<td><small>${result.date}</small></td>`;
            leaderboardHTML += '</tr>';
        });

        leaderboardHTML += '</tbody></table></div>';

        // Add summary stats
        const avgScore = Math.round(topResults.reduce((sum, r) => sum + r.score, 0) / topResults.length);
        const perfectScores = topResults.filter(r => r.score === 100).length;
        
        const summaryHTML = `
            <div class="leaderboard-summary">
                <div class="summary-item">
                    <span class="summary-label">Total Entries:</span>
                    <span class="summary-value">${topResults.length}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Average Score:</span>
                    <span class="summary-value">${avgScore}%</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Perfect Scores:</span>
                    <span class="summary-value">${perfectScores}</span>
                </div>
            </div>
        `;

        leaderboardContent.innerHTML = summaryHTML + leaderboardHTML;
    }

    // Initial render
    renderLeaderboard();

    // Filter event listeners
    document.getElementById('leaderboard-filter-set').addEventListener('change', renderLeaderboard);
    document.getElementById('leaderboard-top-n').addEventListener('change', renderLeaderboard);
    document.getElementById('clear-leaderboard-filters').addEventListener('click', function() {
        document.getElementById('leaderboard-filter-set').value = '';
        document.getElementById('leaderboard-top-n').value = '10';
        renderLeaderboard();
    });
}

// Review answers
document.getElementById('review-btn').addEventListener('click', function() {
    isReviewMode = true;
    currentQuestionIndex = 0;

    // Hide results screen and show quiz screen
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');

    // Show review section
    document.getElementById('review-section').style.display = 'block';

    // Load first question in review mode
    loadQuestion();

    // Disable timer
    stopTimer();
});

// Retake exam
document.getElementById('retake-btn').addEventListener('click', function() {
    // Hide results screen and show home screen
    document.getElementById('results-screen').classList.remove('active');
    showHomeScreen();
    document.getElementById('review-section').style.display = 'none';
    
    // Reset everything
    currentSet = null;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = 3600;
    isReviewMode = false;
    stopTimer();
});

// Admin Functions
function initializeAdminHandlers() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Set selector change
    const setSelector = document.getElementById('set-selector');
    if (setSelector) {
        Object.keys(questionSets).forEach(setId => {
            const option = document.createElement('option');
            option.value = setId;
            option.textContent = questionSets[setId].name;
            setSelector.appendChild(option);
        });

        setSelector.addEventListener('change', function() {
            if (this.value) {
                loadQuestionsForSet(parseInt(this.value));
            }
        });
    }

    // Add question button
    const addQuestionBtn = document.getElementById('add-question-btn');
    if (addQuestionBtn) {
        addQuestionBtn.addEventListener('click', function() {
            const setSelector = document.getElementById('set-selector');
            if (!setSelector.value) {
                alert('Please select a question set first');
                return;
            }
            openQuestionModal(null, parseInt(setSelector.value));
        });
    }

    const addSetBtn = document.getElementById('add-set-btn');
    if (addSetBtn) {
        addSetBtn.addEventListener('click', function() {
            openSetModal();
        });
    }
    const deleteSetBtn = document.getElementById('delete-set-btn');
    if (deleteSetBtn) {
        deleteSetBtn.addEventListener('click', function() {
            deleteSet();
        });
    }
    const promoteBtn = document.getElementById('promote-student-btn');
    if (promoteBtn) {
        promoteBtn.addEventListener('click', function() {
            openPromoteModal();
        });
    }

    // Question form submission
    const questionForm = document.getElementById('question-form');
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveQuestion();
        });
    }

    // Cancel question button
    const cancelBtn = document.getElementById('cancel-question-btn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeQuestionModal);
    }

    const setForm = document.getElementById('set-form');
    if (setForm) {
        setForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSet();
        });
    }

    const cancelSetBtn = document.getElementById('cancel-set-btn');
    if (cancelSetBtn) {
        cancelSetBtn.addEventListener('click', closeSetModal);
    }

    const promoteForm = document.getElementById('promote-form');
    if (promoteForm) {
        promoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            savePromotion();
        });
    }
    const cancelPromoteBtn = document.getElementById('cancel-promote-btn');
    if (cancelPromoteBtn) {
        cancelPromoteBtn.addEventListener('click', closePromoteModal);
    }

    // Close modal on X click
    const closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(btn => {
        btn.addEventListener('click', function() {
            closeQuestionModal();
            closeDoubtModal();
            closeReplyModal();
            closeSetModal();
            closePromoteModal();
        });
    });

    // Doubt form submission
    const doubtForm = document.getElementById('ask-doubt-form');
    if (doubtForm) {
        doubtForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitDoubt();
        });
    }

    // Reply form submission
    const replyForm = document.getElementById('reply-doubt-form');
    if (replyForm) {
        replyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitReply();
        });
    }

    // Cancel buttons for doubts
    const cancelDoubtBtn = document.getElementById('cancel-doubt-btn');
    if (cancelDoubtBtn) {
        cancelDoubtBtn.addEventListener('click', closeDoubtModal);
    }

    const cancelReplyBtn = document.getElementById('cancel-reply-btn');
    if (cancelReplyBtn) {
        cancelReplyBtn.addEventListener('click', closeReplyModal);
    }
}

function openSetModal() {
    const modal = document.getElementById('set-modal');
    const input = document.getElementById('set-name');
    if (input) input.value = '';
    if (modal) modal.style.display = 'block';
}

function closeSetModal() {
    const modal = document.getElementById('set-modal');
    if (modal) modal.style.display = 'none';
}

function refreshSetSelector() {
    const setSelector = document.getElementById('set-selector');
    if (!setSelector) return;
    setSelector.innerHTML = '<option value="">Select Question Set</option>';
    Object.keys(questionSets).forEach(setId => {
        const option = document.createElement('option');
        option.value = setId;
        option.textContent = questionSets[setId].name;
        setSelector.appendChild(option);
    });
}

function saveSet() {
    const input = document.getElementById('set-name');
    const name = input ? input.value.trim() : '';
    if (!name) {
        alert('Please enter a set name');
        return;
    }
    const ids = Object.keys(questionSets).map(id => parseInt(id));
    const newId = ids.length ? Math.max(...ids) + 1 : 1;
    questionSets[newId] = { name: name, questions: [] };
    try {
        localStorage.setItem('questionSets', JSON.stringify(questionSets));
    } catch (e) {
        alert('Error saving set. Please try again.');
        return;
    }
    closeSetModal();
    refreshSetSelector();
    const setSelector = document.getElementById('set-selector');
    if (setSelector) setSelector.value = String(newId);
    loadAdminDashboard();
    loadQuestionsForSet(newId);
    renderHomeSets();
}
function deleteSet() {
    const setSelector = document.getElementById('set-selector');
    if (!setSelector || !setSelector.value) {
        alert('Please select a question set first');
        return;
    }
    const setId = parseInt(setSelector.value);
    const setName = questionSets[setId] ? questionSets[setId].name : `Set ${setId}`;
    if (!confirm(`Delete "${setName}" and all its questions?`)) return;
    delete questionSets[setId];
    try {
        localStorage.setItem('questionSets', JSON.stringify(questionSets));
    } catch (e) {
        alert('Error deleting set. Please try again.');
        return;
    }
    refreshSetSelector();
    setSelector.value = '';
    const questionsList = document.getElementById('questions-list');
    if (questionsList) questionsList.innerHTML = '';
    loadAdminDashboard();
    renderHomeSets();
}
function openPromoteModal() {
    const modal = document.getElementById('promote-modal');
    const input = document.getElementById('promote-username');
    if (input) input.value = '';
    const list = document.getElementById('promote-student-list');
    const adminList = document.getElementById('promote-admin-list');
    if (list) {
        const users = getUsers();
        const students = Object.values(users).filter(u => u.role === 'student');
        if (students.length === 0) {
            list.innerHTML = '<p class="no-results">No students found.</p>';
        } else {
            list.innerHTML = `
                <div class="results-list">
                    ${students.map(u => `
                        <div class="result-row">
                            <span>${u.name} (@${u.username})</span>
                            <div style="display:flex; gap:8px;">
                                <button type="button" class="btn btn-small btn-primary" data-username="${u.username}">Select</button>
                                <button type="button" class="btn btn-small btn-danger" data-delete-username="${u.username}">Delete</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            list.querySelectorAll('button[data-username]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const uname = this.getAttribute('data-username');
                    const inputEl = document.getElementById('promote-username');
                    if (inputEl) inputEl.value = uname;
                });
            });
            list.querySelectorAll('button[data-delete-username]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const uname = this.getAttribute('data-delete-username');
                    deleteStudent(uname);
                });
            });
        }
    }
    if (adminList) {
        const users = getUsers();
        const admins = Object.values(users).filter(u => u.role === 'admin');
        if (admins.length === 0) {
            adminList.innerHTML = '<p class="no-results">No admins found.</p>';
        } else {
            adminList.innerHTML = `
                <div class="results-list">
                    ${admins.map(u => `
                        <div class="result-row">
                            <span>${u.name} (@${u.username})</span>
                            <div style="display:flex; gap:8px;">
                                <button type="button" class="btn btn-small btn-danger" data-delete-admin="${u.username}">Delete</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            adminList.querySelectorAll('button[data-delete-admin]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const uname = this.getAttribute('data-delete-admin');
                    deleteAdmin(uname);
                });
            });
        }
    }
    if (modal) modal.style.display = 'block';
}

function deleteStudent(username) {
    const users = getUsers();
    const user = users[username];
    if (!user || user.role !== 'student') {
        alert('Student not found');
        return;
    }
    if (!confirm(`Delete student "${user.name}" (@${username})?`)) return;
    delete users[username];
    saveUsers(users);
    openPromoteModal();
    alert('Student deleted');
}
function deleteAdmin(username) {
    const users = getUsers();
    const user = users[username];
    if (!user || user.role !== 'admin') {
        alert('Admin not found');
        return;
    }
    const current = getCurrentUser();
    const adminCount = Object.values(users).filter(u => u.role === 'admin').length;
    if (current && current.username === username) {
        alert('You cannot delete your own admin account');
        return;
    }
    if (adminCount <= 1) {
        alert('At least one admin must remain');
        return;
    }
    if (!confirm(`Delete admin "${user.name}" (@${username})?`)) return;
    delete users[username];
    saveUsers(users);
    openPromoteModal();
    alert('Admin deleted');
}
function closePromoteModal() {
    const modal = document.getElementById('promote-modal');
    if (modal) modal.style.display = 'none';
}
function savePromotion() {
    const input = document.getElementById('promote-username');
    const username = input ? input.value.trim() : '';
    if (!username) {
        alert('Please enter a username');
        return;
    }
    const users = getUsers();
    const user = users[username];
    if (!user) {
        alert('User not found');
        return;
    }
    if (user.role === 'admin') {
        alert('User is already an admin');
        return;
    }
    user.role = 'admin';
    saveUsers(users);
    closePromoteModal();
    alert('Student promoted to admin');
}
function loadAdminDashboard() {
    // Update stats
    document.getElementById('total-sets').textContent = Object.keys(questionSets).length;
    let totalQuestions = 0;
    Object.values(questionSets).forEach(set => {
        totalQuestions += set.questions.length;
    });
    document.getElementById('total-questions-admin').textContent = totalQuestions;
    refreshSetSelector();
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Load questions when manage questions tab is active
    if (tabName === 'questions') {
        refreshSetSelector();
        const setSelector = document.getElementById('set-selector');
        if (setSelector.value) {
            loadQuestionsForSet(parseInt(setSelector.value));
        }
    }
    
    // Load results when results tab is clicked
    if (tabName === 'results') {
        loadStudentResults();
    }

    // Load doubts when doubts tab is clicked
    if (tabName === 'doubts') {
        loadAdminDoubts();
    }
}

function loadQuestionsForSet(setId) {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    
    const set = questionSets[setId];
    set.questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = `
            <div class="question-card-header">
                <h4>Question ${index + 1}</h4>
                <div class="question-actions">
                    <button class="btn btn-small btn-primary edit-question" data-set="${setId}" data-index="${index}">Edit</button>
                    <button class="btn btn-small btn-danger delete-question" data-set="${setId}" data-index="${index}">Delete</button>
                </div>
            </div>
            <p class="question-text-admin">${question.question}</p>
            <div class="question-options-admin">
                ${question.options.map((opt, i) => `
                    <div class="option-admin ${i === question.correct ? 'correct-option' : ''}">
                        ${String.fromCharCode(65 + i)}. ${opt} ${i === question.correct ? '(Correct)' : ''}
                    </div>
                `).join('')}
            </div>
        `;
        questionsList.appendChild(questionCard);
    });

    // Add event listeners
    questionsList.querySelectorAll('.edit-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const setId = parseInt(this.getAttribute('data-set'));
            const index = parseInt(this.getAttribute('data-index'));
            openQuestionModal(index, setId);
        });
    });

    questionsList.querySelectorAll('.delete-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const setId = parseInt(this.getAttribute('data-set'));
            const index = parseInt(this.getAttribute('data-index'));
            if (confirm('Are you sure you want to delete this question?')) {
                deleteQuestion(setId, index);
            }
        });
    });
}

// Load and display all student results for admin
function loadStudentResults() {
    const resultsList = document.getElementById('results-list');
    const allResults = getAllStudentResults();
    
    if (allResults.length === 0) {
        resultsList.innerHTML = '<p class="no-results">No student results available yet.</p>';
        return;
    }
    
    // Sort results by date (newest first)
    allResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Group results by student
    const resultsByStudent = {};
    allResults.forEach(result => {
        if (!resultsByStudent[result.studentUsername]) {
            resultsByStudent[result.studentUsername] = [];
        }
        resultsByStudent[result.studentUsername].push(result);
    });
    
    resultsList.innerHTML = '';
    
    // Create filter controls
    const filterControls = document.createElement('div');
    filterControls.className = 'results-filter';
    filterControls.innerHTML = `
        <div class="filter-group">
            <label for="filter-student">Filter by Student:</label>
            <select id="filter-student">
                <option value="">All Students</option>
                ${Object.keys(resultsByStudent).map(username => 
                    `<option value="${username}">${resultsByStudent[username][0].studentName} (${username})</option>`
                ).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label for="filter-set">Filter by Set:</label>
            <select id="filter-set">
                <option value="">All Sets</option>
                ${[...new Set(allResults.map(r => r.setName))].map(setName => 
                    `<option value="${setName}">${setName}</option>`
                ).join('')}
            </select>
        </div>
        <button id="clear-filters" class="btn btn-secondary">Clear Filters</button>
    `;
    resultsList.appendChild(filterControls);
    
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    resultsContainer.className = 'results-container';
    resultsList.appendChild(resultsContainer);
    
    // Function to render results
    function renderResults(filteredResults) {
        resultsContainer.innerHTML = '';
        
        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No results match the selected filters.</p>';
            return;
        }
        
        // Create summary stats
        const totalAttempts = filteredResults.length;
        const avgScore = Math.round(filteredResults.reduce((sum, r) => sum + r.score, 0) / totalAttempts);
        const passedCount = filteredResults.filter(r => r.score >= 60).length;
        const failedCount = totalAttempts - passedCount;
        
        const summaryCard = document.createElement('div');
        summaryCard.className = 'results-summary';
        summaryCard.innerHTML = `
            <h3>Summary Statistics</h3>
            <div class="summary-stats">
                <div class="summary-stat">
                    <span class="stat-label">Total Attempts:</span>
                    <span class="stat-value">${totalAttempts}</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-label">Average Score:</span>
                    <span class="stat-value">${avgScore}%</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-label">Passed (≥60%):</span>
                    <span class="stat-value passed">${passedCount}</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-label">Failed (<60%):</span>
                    <span class="stat-value failed">${failedCount}</span>
                </div>
            </div>
        `;
        resultsContainer.appendChild(summaryCard);
        
        // Create results table
        const resultsTable = document.createElement('table');
        resultsTable.className = 'results-table';
        resultsTable.innerHTML = `
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Username</th>
                    <th>Question Set</th>
                    <th>Score</th>
                    <th>Correct</th>
                    <th>Wrong</th>
                    <th>Unanswered</th>
                    <th>Date & Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${filteredResults.map(result => {
                    const scoreClass = result.score >= 80 ? 'score-excellent' : 
                                     result.score >= 60 ? 'score-good' : 'score-poor';
                    return `
                        <tr>
                            <td>${result.studentName}</td>
                            <td>${result.studentUsername}</td>
                            <td>${result.setName}</td>
                            <td><span class="score-badge ${scoreClass}">${result.score}%</span></td>
                            <td class="correct">${result.correctAnswers}</td>
                            <td class="wrong">${result.wrongAnswers}</td>
                            <td>${result.unanswered}</td>
                            <td>${result.date}</td>
                            <td>
                                <button class="btn btn-small btn-danger delete-result" data-index="${allResults.indexOf(result)}">Delete</button>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        `;
        resultsContainer.appendChild(resultsTable);

        resultsTable.querySelectorAll('.delete-result').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-index'));
                if (confirm('Are you sure you want to delete this result?')) {
                    deleteStudentResultAtIndex(idx);
                    loadStudentResults();
                }
            });
        });
    }
    
    // Initial render
    renderResults(allResults);
    
    // Filter event listeners
    document.getElementById('filter-student').addEventListener('change', function() {
        applyFilters();
    });
    
    document.getElementById('filter-set').addEventListener('change', function() {
        applyFilters();
    });
    
    document.getElementById('clear-filters').addEventListener('click', function() {
        document.getElementById('filter-student').value = '';
        document.getElementById('filter-set').value = '';
        renderResults(allResults);
    });
    
    function applyFilters() {
        const studentFilter = document.getElementById('filter-student').value;
        const setFilter = document.getElementById('filter-set').value;
        
        let filtered = allResults;
        
        if (studentFilter) {
            filtered = filtered.filter(r => r.studentUsername === studentFilter);
        }
        
        if (setFilter) {
            filtered = filtered.filter(r => r.setName === setFilter);
        }
        
        renderResults(filtered);
    }
}

function openQuestionModal(questionIndex, setId) {
    const modal = document.getElementById('question-modal');
    const modalTitle = document.getElementById('modal-title');
    const form = document.getElementById('question-form');
    
    if (questionIndex === null) {
        // New question
        modalTitle.textContent = 'Add New Question';
        form.reset();
        document.getElementById('edit-question-id').value = '';
        document.getElementById('edit-question-set-id').value = setId;
    } else {
        // Edit question
        modalTitle.textContent = 'Edit Question';
        const question = questionSets[setId].questions[questionIndex];
        document.getElementById('modal-question-text').value = question.question;
        document.getElementById('option-0').value = question.options[0];
        document.getElementById('option-1').value = question.options[1];
        document.getElementById('option-2').value = question.options[2];
        document.getElementById('option-3').value = question.options[3];
        document.getElementById('correct-answer').value = question.correct;
        document.getElementById('edit-question-id').value = questionIndex;
        document.getElementById('edit-question-set-id').value = setId;
    }
    
    modal.style.display = 'block';
}

function closeQuestionModal() {
    document.getElementById('question-modal').style.display = 'none';
}

function saveQuestion() {
    const setId = parseInt(document.getElementById('edit-question-set-id').value);
    const questionIndex = document.getElementById('edit-question-id').value;
    const questionText = document.getElementById('modal-question-text').value.trim();
    const options = [
        document.getElementById('option-0').value.trim(),
        document.getElementById('option-1').value.trim(),
        document.getElementById('option-2').value.trim(),
        document.getElementById('option-3').value.trim()
    ];
    const correct = parseInt(document.getElementById('correct-answer').value);

    // Validate inputs
    if (!questionText || options.some(opt => !opt)) {
        alert('Please fill in all fields');
        return;
    }

    const newQuestion = {
        id: questionIndex === '' ? (questionSets[setId].questions.length + 1) : questionSets[setId].questions[parseInt(questionIndex)].id,
        question: questionText,
        options: options,
        correct: correct
    };

    if (questionIndex === '') {
        // Add new question
        questionSets[setId].questions.push(newQuestion);
    } else {
        // Update existing question
        questionSets[setId].questions[parseInt(questionIndex)] = newQuestion;
    }

    // Save to localStorage (since we're using localStorage for persistence)
    try {
        localStorage.setItem('questionSets', JSON.stringify(questionSets));
    } catch (e) {
        console.error('Error saving questions:', e);
        alert('Error saving question. Please try again.');
        return;
    }
    
    closeQuestionModal();
    loadQuestionsForSet(setId);
    loadAdminDashboard();
}

function deleteQuestion(setId, questionIndex) {
    questionSets[setId].questions.splice(questionIndex, 1);
    try {
        localStorage.setItem('questionSets', JSON.stringify(questionSets));
    } catch (e) {
        console.error('Error saving questions:', e);
        alert('Error deleting question. Please try again.');
        return;
    }
    loadQuestionsForSet(setId);
    loadAdminDashboard();
}

// --- Doubt Management System ---

// Open Ask Doubt Modal
function openAskDoubtModal() {
    const modal = document.getElementById('ask-doubt-modal');
    const question = currentSet.questions[currentQuestionIndex];
    
    document.getElementById('doubt-question-id').value = currentQuestionIndex; // Using index as ID for simplicity within set
    document.getElementById('doubt-set-id').value = currentSetId;
    document.getElementById('doubt-question-text').textContent = question.question;
    document.getElementById('doubt-question-text-hidden').value = question.question;
    document.getElementById('doubt-text').value = '';
    
    modal.style.display = 'block';
}

function closeDoubtModal() {
    document.getElementById('ask-doubt-modal').style.display = 'none';
}

function submitDoubt() {
    const doubtText = document.getElementById('doubt-text').value.trim();
    if (!doubtText) return;

    const doubt = {
        id: Date.now().toString(),
        studentUsername: getCurrentUser().username,
        studentName: getCurrentUser().name,
        setId: parseInt(document.getElementById('doubt-set-id').value),
        questionIndex: parseInt(document.getElementById('doubt-question-id').value),
        questionText: document.getElementById('doubt-question-text-hidden').value,
        doubtText: doubtText,
        reply: null,
        status: 'pending',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString()
    };

    saveDoubt(doubt);
    closeDoubtModal();
    alert('Doubt submitted successfully!');
}

function saveDoubt(doubt) {
    let doubts = JSON.parse(localStorage.getItem('doubts') || '[]');
    doubts.push(doubt);
    localStorage.setItem('doubts', JSON.stringify(doubts));
}

function getDoubts() {
    return JSON.parse(localStorage.getItem('doubts') || '[]');
}

function showStudentDoubts() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('student-doubts-screen').classList.add('active');

    const list = document.getElementById('student-doubts-list');
    const doubts = getDoubts().filter(d => d.studentUsername === getCurrentUser().username);
    
    // Sort by newest first
    doubts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (doubts.length === 0) {
        list.innerHTML = '<p class="no-results">You haven\'t asked any doubts yet.</p>';
        return;
    }

    list.innerHTML = doubts.map(d => `
        <div class="doubt-card ${d.status}">
            <div class="doubt-header">
                <span class="doubt-status ${d.status}">${d.status === 'pending' ? 'Pending' : 'Replied'}</span>
                <span class="doubt-date">${d.date}</span>
            </div>
            <div class="doubt-question">
                <strong>Q:</strong> ${d.questionText}
            </div>
            <div class="doubt-text">
                <strong>Your Doubt:</strong> ${d.doubtText}
            </div>
            ${d.reply ? `
                <div class="doubt-reply">
                    <strong>Admin Reply:</strong>
                    <p>${d.reply}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Admin Doubt Management
function loadAdminDoubts() {
    const list = document.getElementById('admin-doubts-list');
    const doubts = getDoubts();
    
    // Sort: Pending first, then by date
    doubts.sort((a, b) => {
        if (a.status === b.status) {
            return new Date(b.timestamp) - new Date(a.timestamp);
        }
        return a.status === 'pending' ? -1 : 1;
    });

    if (doubts.length === 0) {
        list.innerHTML = '<p class="no-results">No doubts found.</p>';
        return;
    }

    list.innerHTML = doubts.map(d => `
        <div class="doubt-card ${d.status}">
            <div class="doubt-header">
                <span class="doubt-status ${d.status}">${d.status === 'pending' ? 'Pending' : 'Replied'}</span>
                <span class="doubt-user">Student: ${d.studentName} (@${d.studentUsername})</span>
                <span class="doubt-date">${d.date}</span>
            </div>
            <div class="doubt-question">
                <strong>Q:</strong> ${d.questionText}
            </div>
            <div class="doubt-text">
                <strong>Doubt:</strong> ${d.doubtText}
            </div>
            ${d.reply ? `
                <div class="doubt-reply">
                    <strong>Reply:</strong> ${d.reply}
                </div>
            ` : `
                <div class="doubt-actions">
                    <button class="btn btn-primary btn-small" onclick="openReplyModal('${d.id}')">Reply</button>
                </div>
            `}
        </div>
    `).join('');
}

// Need to attach openReplyModal to window scope because it's called from HTML string
window.openReplyModal = function(doubtId) {
    const doubt = getDoubts().find(d => d.id === doubtId);
    if (!doubt) return;

    const modal = document.getElementById('reply-doubt-modal');
    document.getElementById('reply-doubt-id').value = doubt.id;
    document.getElementById('reply-student-name').textContent = doubt.studentName;
    document.getElementById('reply-question-text').textContent = doubt.questionText;
    document.getElementById('reply-doubt-text').textContent = doubt.doubtText;
    document.getElementById('reply-text').value = '';
    
    modal.style.display = 'block';
};

function closeReplyModal() {
    document.getElementById('reply-doubt-modal').style.display = 'none';
}

function submitReply() {
    const doubtId = document.getElementById('reply-doubt-id').value;
    const replyText = document.getElementById('reply-text').value.trim();
    
    if (!replyText) return;

    let doubts = getDoubts();
    const index = doubts.findIndex(d => d.id === doubtId);
    
    if (index !== -1) {
        doubts[index].reply = replyText;
        doubts[index].status = 'replied';
        localStorage.setItem('doubts', JSON.stringify(doubts));
        
        closeReplyModal();
        loadAdminDoubts();
        alert('Reply sent successfully!');
    }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('question-modal');
    if (event.target === modal) closeQuestionModal();
    
    const doubtModal = document.getElementById('ask-doubt-modal');
    if (event.target === doubtModal) closeDoubtModal();

    const replyModal = document.getElementById('reply-doubt-modal');
    if (event.target === replyModal) closeReplyModal();

    const setModal = document.getElementById('set-modal');
    if (event.target === setModal) closeSetModal();
    const promoteModal = document.getElementById('promote-modal');
    if (event.target === promoteModal) closePromoteModal();
});

// Load question sets from localStorage on page load if available
window.addEventListener('load', function() {
    const savedSets = localStorage.getItem('questionSets');
    try {
        if (savedSets) {
            const parsed = JSON.parse(savedSets);
            Object.keys(questionSets).forEach(key => delete questionSets[key]);
            Object.keys(parsed).forEach(key => {
                if (parsed[key] && parsed[key].questions) {
                    questionSets[key] = parsed[key];
                }
            });
        } else {
            localStorage.setItem('questionSets', JSON.stringify(questionSets));
        }
    } catch (e) {
        console.error('Error loading saved questions:', e);
    }
});


