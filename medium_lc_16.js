/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // Helps when we are shifting pointers to left or right
  nums.sort((a, b) => a - b);

  // No idea what the closest sum is going to be, but its gonna be under infinity
  var closestSum = Infinity;

  for (var i = 0; i < nums.length; i++) {
    // Two pointers for the rest of the list while keeping one pointer nums[i] as the common one
    var left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      var curSum = nums[i] + nums[left] + nums[right];

      if (curSum < target) {
        left++;
      } else if (curSum > target) {
        right--;
      } else {
        return curSum;
      }

      // We are comparing the distance from the curSum to target with distance from closestSum to target which can be achieved with Math.abs
      if (Math.abs(target - curSum) < Math.abs(target - closestSum)) {
        closestSum = curSum;
      }
    }
  }

  return closestSum;
};
