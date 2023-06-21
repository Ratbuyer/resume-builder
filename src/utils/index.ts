
export const splitStringIntoChunks = (str: string): string[] => {
  const regex = /(\s\d+\s)|(\s\d+$)|(^\d+\s)/g;
  const chunks = str.split(regex);
  return chunks.filter(Boolean);
};

export const clearLocalStorage = () => {
  localStorage.clear();
}

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
}



