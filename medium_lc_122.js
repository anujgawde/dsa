/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var left = 0,
    right = 1;
  var profit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      profit += prices[right] - prices[left];
    }
    left = right;

    right++;
  }

  return profit;
};
