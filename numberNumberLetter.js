const test1 = "24z6 1x23 y369 89a 900b";

const test2 = "10a 90x 14b 78u 45a 7b 34y";

const test3 = "24z6 1z23 y369 89z 900b";

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

  for (let i = 0; i < cleanArray.length - 1; i++) {
    let operation = operations[count];
    let nextNumber = cleanArray[i + 1];

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
    result = Math.ceil(result);
    count++;

    if (!operations[count]) {
      count = 0;
    }
  }

  return result;
};

console.log(numberNumberLetter(test3));
