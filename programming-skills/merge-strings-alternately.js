const mergeStringsAlternately = (word1, word2) => {
  let newWord = "";
  let minLength = Math.min(word1.length, word2.length);
  let remainingWord =
    word1.length > word2.length
      ? word1.slice(minLength)
      : word2.slice(minLength);

  for (let i = 0; i < minLength; i++) {
    newWord += word1[i] + word2[i];
  }

  return newWord + remainingWord;
};
