/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // This gives us the remainder, which is how many steps we ACTUALLY need to shift.
  // Consider k = nums.length, remainder is 0, meaning we dont have to shift any place
  // Eg. nums.length = 4, and k = 4, we move each element 4 places, so it brings each element back to its original place
  k = k % nums.length;

  // Reverse method:
  var reverse = function (left, right) {
    while (left < right) {
      var temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left++;
      right--;
    }
  };

  // Reverse entire array:
  reverse(0, nums.length - 1);

  // Reverse the first half till kth element;
  reverse(0, k - 1);

  // Reverse second half from k to last element;
  reverse(k, nums.length - 1);
};
