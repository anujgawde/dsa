/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var set = new Set(nums1);
  var hashMap = {};
  var res = [];

  for (var i = 0; i < nums2.length; i++) {
    // check if current element is in set, if it is, check if its in hashmap if not add to res

    if (set.has(nums2[i])) {
      if (!hashMap[nums2[i]]) {
        res.push(nums2[i]);
        hashMap[nums2[i]] = true;
      }
    }
  }

  return res;
};
