/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  // [1, 2, 3, 4, 5, 6]
  // [2, 4, 6]
  // [4]

  var head = 1;
  var step = 1;
  var left = true;

  while (n > 1) {
    if (left || n % 2 === 1) {
      head += step;
    }

    step *= 2;
    n = Math.floor(n / 2);
    left = !left;
  }

  return head;
};
