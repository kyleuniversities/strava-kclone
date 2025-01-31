export const capitalizeFirstLetter = (text: string) => {
  if (text.length === 0) {
    return "";
  }
  return text[0].toUpperCase() + text.substring(1);
};

export const joinSentenceCase = (words: string[]) => {
  return words
    .map((word: string) => capitalizeFirstLetter(word.toLowerCase()))
    .join(" ");
};

export const splitMacroCase = (text: string) => {
  return text.split(/[_]/);
};

export const toIndexText = (index: number) => {
  return `${index < 10 ? `0` : ""}${index}`;
};
