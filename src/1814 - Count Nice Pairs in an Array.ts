/*
1814. Count Nice Pairs in an Array
https://leetcode.com/problems/count-nice-pairs-in-an-array/
Medium

You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

    0 <= i < j < nums.length
    nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])

Return the number of nice pairs of indices. Since that number can be too large, return it modulo 10^9 + 7.

Example 1:

Input: nums = [42,11,1,97]
Output: 2
Explanation: The two pairs are:
 - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
 - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.

Example 2:

Input: nums = [13,10,35,24,76]
Output: 4

Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 109


*/

function countNicePairs(nums: number[]): number {
    const rev = (n: number): number => parseInt(n.toString().split('').reverse().join(''));

    const mod = 10 ** 9 + 7;

    let countMap: { [key: number]: number } = {};

    let nice = 0;

    nums.forEach((num) => {
        const val = num - rev(num);
        if (countMap[val] !== undefined) {
            nice = (nice + countMap[val]) % mod;
        }

        countMap[val] = (countMap[val] || 0) + 1;
    });

    return nice;
}

console.log(countNicePairs([42, 11, 1, 97])); // 2
console.log(countNicePairs([13, 10, 35, 24, 76])); // 4

// tsc 1814\ -\ count\ nice\ pairs.ts && node 1814\ -\ count\ nice\ pairs.js
