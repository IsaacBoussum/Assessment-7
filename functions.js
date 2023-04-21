// This function has a runtime of O(n)
function checkForSumToZero(nums) {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
      
      if (visitedNums[-nums[i]]) {
        return true;
      }
      visitedNums[nums[i]] = true;
    }
    return false;
}

// This function has a runtime of O(n^2)
function checkForUniqueChars(word) {
    const visitedChars = {};
    for (let i = 0; i < word.length; i++) {
      
      if (visitedChars[word[i]]) {
        return false;
      }
      visitedChars[word[i]] = true;
    }
    return true;
}

// This function has a runtime of O(n)
function isPangram(sentence) {
    const visitedChars = {};
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
      if (char === ' ') {
        continue;
      }
      visitedChars[char] = true;
    }
    for (let letter = 'a'; letter <= 'z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
      if (!visitedChars[letter]) {
        return false;
      }
    }
    return true;
}

// This function has a runtime of O(n)
function findLongestWord(word) {
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord.length;
  }