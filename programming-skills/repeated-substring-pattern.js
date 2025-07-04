const repeatedSubstringPattern = (s) => {
  const length = s.length;
  let motifPossible = Math.floor(s.length / 2);
  for (let i = 1; i <= motifPossible; i++) {
    motif = s.slice(0, i).repeat(length / i);
    if (motif === s) return true;
  }
  return false;
};
