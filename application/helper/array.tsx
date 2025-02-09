export const toIndexArray = (length: number) => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
};

export const splitArray = (array: any[], subArrayLength: number) => {
  const parts = [];
  let currentPart = [];
  for (let i = 0; i < array.length; i++) {
    if (currentPart.length === subArrayLength) {
      parts.push(currentPart);
      currentPart = [];
    }
    currentPart.push(array[i]);
  }
  parts.push(currentPart);
  return parts;
};
