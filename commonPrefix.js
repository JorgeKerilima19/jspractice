const test1 = ["flower", "flavor", "flow"];
const test2 = ["amatista", "amatin", "amatuta"];

const commonPrefix = (array) => {
  if (array.length <= 0) {
    return "Empthy array";
  }

  const firstWord = array[0];
  let prefix = "";

  for (let i = 0; i < firstWord.length; i++) {
    const currentChar = firstWord[i];
    for (let j = 1; j < array.length; j++) {
      if (i >= array[j].length || array[j][i] !== currentChar) {
        return prefix;
      }
    }
    prefix += currentChar;
  }
};

console.log(commonPrefix(test2));
