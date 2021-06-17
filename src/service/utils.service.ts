export const getRandom = <T>(haystack: T[]): T => {
  return haystack[generateRandomInteger(0, haystack.length - 1)];
};

export const generateRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const generateRandomInteger = (
  min: number,
  max: number,
  step: number = 1
) => {
  return Math.round(generateRandomFloat(min / step, max / step)) * step;
};

export const generateRandomString = () => {
  return btoa(generateRandomFloat(0, 99) + "");
};
