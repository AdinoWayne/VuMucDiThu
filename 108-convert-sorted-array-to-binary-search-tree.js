// 1 .Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

var TreeNode = function(val) {
   this.val = val;
   this.left = null;
   this.right = null
}

var sortedArrayToBST = function(nums) {
   return traverse(nums, 0, nums.length-1);
};

function traverse(nums, start, end) {
   if (start>end) {
      return null;
   }
   let mid = Math.floor((start+end)/2);
   let root = new TreeNode(nums[mid]);
   root.left = traverse(nums,start,mid-1);
   root.right = traverse(nums,mid+1,end);
   return root;
}
sortedArrayToBST([-6, -2, 0, 3, 6, 7, 10]);
