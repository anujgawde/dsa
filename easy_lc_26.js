// Brute Force:
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

// Two Pointer:

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var left = 1;

  for (var right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};
