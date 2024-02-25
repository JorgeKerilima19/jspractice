/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

const test1 = [6, 2, 4, 8, 1];
const test2 = [7, 1, 5, 3, 6, 8];
const test3 = [9, 6, 4, 3, 1, 9];

const buySellStock = (array) => {
  let dayToBuy = 0;
  let dayToSell = dayToBuy;

  for (let i = 0; i < array.length; i++) {
    if (i + 1 === array.length) {
      return 0;
    }

    if (array[i] === 1) {
      dayToBuy = i;
      dayToSell = i + 1;
      break;
    }

    if (array[dayToBuy] > array[i]) {
      dayToBuy = i;
      dayToSell = i + 1;
    }
  }

  for (let j = dayToBuy; j < array.length; j++) {
    if (array[dayToSell] < array[j]) {
      dayToSell = j;
    }
  }

  return array[dayToSell] - array[dayToBuy];
};

console.log(buySellStock(test1));
console.log(buySellStock(test2));
console.log(buySellStock(test3));
