// app.js - Daily Theme Detective Game
const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const gameBoards = window.gameBoards;
    const selectedClues = ref([]);
    const selectedCluesRowIndices = ref([]);
    const gameState = ref("playing");
    const isProcessing = ref(false);
    const recentlyReturnedClues = ref([]);
    const currentBoard = ref(null);
    const dailyBoardId = ref(null);
    const nextResetTime = ref('');
    const streakData = ref({
      currentStreak: 0,
      maxStreak: 0,
      lastCompletedDate: null,
      completedDates: {}
    });
    
    // Get today's board based on the date
    function getDailyBoard() {
      // Check if we already have a saved board for today
      const savedBoardInfo = getSavedBoardInfo();
      
      if (savedBoardInfo && isStillToday(savedBoardInfo.timestamp)) {
        dailyBoardId.value = savedBoardInfo.boardId;
        const savedBoard = gameBoards.find(board => board.id === savedBoardInfo.boardId);
        
        if (savedBoard) {
          return savedBoard;
        }
      }
      
      // If we don't have a saved board or it's a new day, get a new one
      const today = new Date();
      
      // Use the date as a seed for pseudo-random selection
      // This ensures the same board is shown on the same date for all users
      const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const boardIndex = seed % gameBoards.length;
      
      // Save this board ID and timestamp
      dailyBoardId.value = gameBoards[boardIndex].id;
      saveBoardInfo(gameBoards[boardIndex].id);
      
      return gameBoards[boardIndex];
    }
    
    // Save board info to local storage
    function saveBoardInfo(boardId) {
      const info = {
        boardId: boardId,
        timestamp: new Date().getTime()
      };
      localStorage.setItem('dailyThemeBoard', JSON.stringify(info));
    }
    
    // Get saved board info from local storage
    function getSavedBoardInfo() {
      const saved = localStorage.getItem('dailyThemeBoard');
      return saved ? JSON.parse(saved) : null;
    }
    
    // Check if the saved timestamp is still from today
    function isStillToday(timestamp) {
      const savedDate = new Date(timestamp);
      const today = new Date();
      
      return savedDate.getDate() === today.getDate() &&
             savedDate.getMonth() === today.getMonth() &&
             savedDate.getFullYear() === today.getFullYear();
    }
    
    // Calculate time until next reset (12am EST)
    function updateNextResetTime() {
      const now = new Date();
      const est = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
      
      // Create tomorrow at 12am EST
      const tomorrow = new Date(est);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      // Convert back to local time
      const tomorrowLocal = new Date(tomorrow.toLocaleString("en-US"));
      const diff = tomorrowLocal - now;
      
      // Format as hours and minutes
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      nextResetTime.value = `${hours}h ${minutes}m`;
      
      // Update every minute
      setTimeout(updateNextResetTime, 60000);
    }
    
    // Load streak information from local storage
    function loadStreakInfo() {
      const streakData = localStorage.getItem('themeDetectiveStreak');
      if (streakData) {
        return JSON.parse(streakData);
      }
      return {
        currentStreak: 0,
        maxStreak: 0,
        lastCompletedDate: null,
        completedDates: {}
      };
    }
    
    // Save streak information to local storage
    function saveStreakInfo(streakData) {
      localStorage.setItem('themeDetectiveStreak', JSON.stringify(streakData));
    }
    
    // Get today's date as a string in format YYYY-MM-DD
    function getTodayDateString() {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }
    
    // Update the streak when puzzle is solved
    function updateStreak() {
      const streakData = loadStreakInfo();
      const todayString = getTodayDateString();
      
      // If already completed today, don't update
      if (streakData.completedDates[todayString]) {
        return streakData;
      }
      
      // Mark today as completed
      streakData.completedDates[todayString] = true;
      
      // Get yesterday's date string
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      
      // Check if yesterday was completed to maintain streak
      if (streakData.lastCompletedDate === yesterdayString || streakData.completedDates[yesterdayString]) {
        streakData.currentStreak += 1;
      } else {
        // Reset streak if there was a gap
        streakData.currentStreak = 1;
      }
      
      // Update max streak if needed
      if (streakData.currentStreak > streakData.maxStreak) {
        streakData.maxStreak = streakData.currentStreak;
      }
      
      // Update last completed date
      streakData.lastCompletedDate = todayString;
      
      // Save updated streak data
      saveStreakInfo(streakData);
      
      return streakData;
    }
    
    // Check if today's puzzle was already completed
    function isCompletedToday() {
      const streakData = loadStreakInfo();
      const todayString = getTodayDateString();
      return streakData.completedDates[todayString] === true;
    }
    
    // Initialize the game
    function initGame() {
      // Get today's board
      currentBoard.value = getDailyBoard();
      
      // Start the reset timer
      updateNextResetTime();
      
      // Randomize the order of clues in each row
      for (const row of currentBoard.value.rows) {
        shuffleArray(row.clues);
      }
      
      // Check if today's puzzle was already completed
      if (isCompletedToday()) {
        // If already completed, show success state
        selectedClues.value = currentBoard.value.rows.map(row => row.falseFriend);
        selectedCluesRowIndices.value = [0, 1, 2, 3];
        gameState.value = "success";
      } else {
        // Start fresh
        selectedClues.value = [];
        selectedCluesRowIndices.value = [];
        gameState.value = "playing";
      }
      
      // Load streak data
      streakData.value = loadStreakInfo();
    }
    
    const correctAnswers = computed(() => {
      if (!currentBoard.value) return [];
      return currentBoard.value.rows.map(row => row.falseFriend);
    });
    
    function isClueSelected(clue) {
      return selectedClues.value.includes(clue);
    }
    
    function selectClue(clue, rowIndex) {
      // Check if we already have a clue from this row
      const rowClues = selectedClues.value.filter((_, i) => 
        selectedCluesRowIndices.value[i] === rowIndex
      );
      
      if (rowClues.length === 0) {
        selectedClues.value.push(clue);
        selectedCluesRowIndices.value.push(rowIndex);
      } else {
        // Replace the existing clue from this row
        const existingClueIndex = selectedCluesRowIndices.value.findIndex(
          index => index === rowIndex
        );
        
        if (existingClueIndex !== -1) {
          selectedClues.value.splice(existingClueIndex, 1, clue);
        }
      }
    }
    
    function deselectClue(index) {
      selectedClues.value.splice(index, 1);
      selectedCluesRowIndices.value.splice(index, 1);
    }
    
    function checkAnswer() {
      if (isProcessing.value) return;
      
      // Check if all selected clues are the false friends
      const correctSelections = selectedClues.value.filter(
        clue => correctAnswers.value.includes(clue)
      );
      
      const allCorrect = correctSelections.length === 4 && selectedClues.value.length === 4;
      
      if (allCorrect) {
        gameState.value = "success";
        // Update streak data when puzzle is solved
        streakData.value = updateStreak();
      } else {
        // Handle incorrect answer
        isProcessing.value = true;
        gameState.value = "failure";
        
        // Get the incorrect selections
        const incorrectSelections = selectedClues.value.filter(
          clue => !correctAnswers.value.includes(clue)
        );
        
        // Mark items to be returned for animation
        recentlyReturnedClues.value = [...incorrectSelections];
        
        // Clear the incorrect selections after a short delay
        setTimeout(() => {
          // Remove only incorrect selections
          const newSelectedClues = [];
          const newSelectedCluesRowIndices = [];
          
          selectedClues.value.forEach((clue, index) => {
            if (correctAnswers.value.includes(clue)) {
              newSelectedClues.push(clue);
              newSelectedCluesRowIndices.push(selectedCluesRowIndices.value[index]);
            }
          });
          
          selectedClues.value = newSelectedClues;
          selectedCluesRowIndices.value = newSelectedCluesRowIndices;
          
          // No need to save game state
          
          // Reset game state after a delay
          setTimeout(() => {
            gameState.value = "playing";
            isProcessing.value = false;
            
            // Clear the recently returned clues after animation completes
            setTimeout(() => {
              recentlyReturnedClues.value = [];
            }, 500);
          }, 1500);
        }, 500);
      }
    }
    
    function resetGame() {
      // For a daily game, we don't want a new board
      // We just want to reset selections if the user wants to start over
      selectedClues.value = [];
      selectedCluesRowIndices.value = [];
      recentlyReturnedClues.value = [];
      gameState.value = "playing";
      isProcessing.value = false;
    }
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    
    function getRowThemeClues(rowIndex) {
      // Return all clues that are not the false friend
      return currentBoard.value.rows[rowIndex].clues
        .filter(clue => clue !== currentBoard.value.rows[rowIndex].falseFriend)
        .join(", ");
    }
    
    // Add the missing sharePuzzle function
    function sharePuzzle() {
      const today = new Date();
      const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      const text = `I solved today's False Friends puzzle (${dateString})! 🧩\nCurrent streak: ${streakData.value.currentStreak}\nPlay at: [your website URL]`;
      
      // Try to use the clipboard API if available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Result copied to clipboard!');
          })
          .catch(() => {
            // Fallback for clipboard failure
            alert('Share text: ' + text);
          });
      } else {
        // Fallback for browsers without clipboard support
        alert('Share text: ' + text);
      }
    }
    
    // Initialize the game when component mounts
    initGame();
    
    return {
      currentBoard,
      selectedClues,
      selectedCluesRowIndices,
      gameState,
      isProcessing,
      recentlyReturnedClues,
      nextResetTime,
      streakData,
      isClueSelected,
      selectClue,
      deselectClue,
      checkAnswer,
      resetGame,
      getRowThemeClues,
      sharePuzzle
    };
  }
}).mount('#app');
