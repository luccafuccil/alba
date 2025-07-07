export function limitWords(str, maxWords) {
  const words = str.trim().split(/\s+/);
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ");
  }
  return str;
}

export function limitCharacters(str, maxChars) {
  if (str.length > maxChars) {
    return str.slice(0, maxChars);
  }
  return str;
}
