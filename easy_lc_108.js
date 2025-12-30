/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  var recursive = function (left, right) {
    if (left > right) return null;
    var mid = left + Math.floor((right - left) / 2);

    var node = new TreeNode(nums[mid]);
    node.left = recursive(left, mid - 1);
    node.right = recursive(mid + 1, right);
    return node;
  };

  return recursive(0, nums.length - 1);
};
