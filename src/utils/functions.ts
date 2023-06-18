
export const splitStringIntoChunks = (str: string): string[] => {
  const regex = /(\s\d+\s)|(\s\d+$)|(^\d+\s)/g;
  const chunks = str.split(regex);
  return chunks.filter(Boolean);
};

