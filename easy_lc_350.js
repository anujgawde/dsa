/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var hashMap = {};
  var res = [];

  for (var i = 0; i < nums1.length; i++) {
    hashMap[nums1[i]] = (hashMap[nums1[i]] || 0) + 1;
  }

  for (var i = 0; i < nums2.length; i++) {
    if (hashMap[nums2[i]] && hashMap[nums2[i]] > 0) {
      hashMap[nums2[i]]--;
      res.push(nums2[i]);
    }
  }
  return res;
};
