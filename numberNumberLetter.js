const test1 = "24z6 1x23 y369 89a 900b";

const numberNumberLetter = (string) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const sortedArray = string.split(" ");
  const cleanArray = [];

  for (let j = 0; j < sortedArray.length; ++j) {
    for (let k = 0; k < sortedArray.length - j - 1; ++k) {
      let s = "";
      let f = "";
      for (let word = 0; word < sortedArray[k].length; word++) {
        if (!numbers.includes(sortedArray[k][word])) {
          s = sortedArray[k][word];
        }
      }
      for (
        let word = 0;
        sortedArray[k + 1] && word < sortedArray[k + 1].length;
        word++
      ) {
        if (!numbers.includes(sortedArray[k + 1][word])) {
          f = sortedArray[k + 1][word];
        }
      }
      if (s > f) {
        const actual = sortedArray[k];
        sortedArray[k] = sortedArray[k + 1];
        sortedArray[k + 1] = actual;
      }
    }
  }
  sortedArray.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (!numbers.includes(el[i])) {
        cleanArray.push(Number(el.replace(el[i], "")));
      }
    }
  });

  const operations = ["+", "-", "*", "/"];

  let count = 0;

  let result = cleanArray[0];
  let length = cleanArray.length;

  for (let i = 0; i < length; i++) {
    let operation = operations[count];
    let nextNumber = cleanArray[count + 1];

    switch (operation) {
      case "+":
        result = result + nextNumber;
        break;
      case "-":
        result = result - nextNumber;
        break;
      case "*":
        result = result * nextNumber;
        break;
      case "/":
        result = result / nextNumber;
        break;
    }
    if (count === operations.length) {
      count = 0;
    }

    count++;
  }

  return result;
};
numberNumberLetter(test1);
