/*
1578. Minimum Time to Make Rope Colorful
https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
Medium

Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

Return the minimum time Bob needs to make the rope colorful.


Example 1:

Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.

Example 2:

Input: colors = "abc", neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.

Example 3:

Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.


Constraints:

    n == colors.length == neededTime.length
    1 <= n <= 105
    1 <= neededTime[i] <= 104
    colors contains only lowercase English letters.

*/

function minCost(colors: string, neededTime: number[]): number {
    let baloons = colors.split('');
    let mininumTime = 0;

    for (let i = 0; i < baloons.length; i++) {
        let nextSimilarBaloonIndex = i;
        let compareBaloons = [i];

        while (baloons[nextSimilarBaloonIndex + 1] === baloons[i]) {
            compareBaloons.push(nextSimilarBaloonIndex + 1);
            nextSimilarBaloonIndex++;
        }

        compareBaloons.sort((a, b) => neededTime[a] - neededTime[b]);

        for (let j = 0; j < compareBaloons.length - 1; j++) {
            mininumTime += neededTime[compareBaloons[j]];
        }

        i = nextSimilarBaloonIndex;
    }

    return mininumTime;
}

console.log(minCost('abaac', [1, 2, 3, 4, 5])); // 3
console.log(minCost('abc', [1, 2, 3])); // 0
console.log(minCost('aabaa', [1, 2, 3, 4, 1])); // 2
console.log(minCost('bbbaaa', [4, 9, 3, 8, 8, 9])); // 23
