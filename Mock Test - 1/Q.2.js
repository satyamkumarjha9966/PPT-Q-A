// First Unique Character in a String

const s = "mocktest1";

function firstUniqChar(s) {
    const charFreq = {};

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFreq[char] = (charFreq[char] || 0) + 1;
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charFreq[char] === 1) {
        return i;
      }
    }
    
    return -1;
  }
  
  console.log(firstUniqChar(s));