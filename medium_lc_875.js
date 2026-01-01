/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  var left = 1,
    right = Math.max(...piles);

  // At the start, we will consider the highest amount of bananas to be the min speed;
  var minSpeed = right;

  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);

    var curSpeedTime = 0;
    for (var i = 0; i < piles.length; i++) {
      var curPileTimeConsumed = Math.ceil(piles[i] / mid);
      curSpeedTime += curPileTimeConsumed;
    }
    if (curSpeedTime > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
      minSpeed = mid;
    }
  }

  return minSpeed;
};
