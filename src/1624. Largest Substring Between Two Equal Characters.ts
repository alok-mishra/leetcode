/*
1624. Largest Substring Between Two Equal Characters
https://leetcode.com/problems/largest-substring-between-two-equal-characters/
Easy

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.


Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.


Constraints:

    1 <= s.length <= 300
    s contains only lowercase English letters.

*/

function maxLengthBetweenEqualCharacters(s: string): number {
    let longest = -1;

    let letterMap = new Map<string, number>();

    for (const c of s) {
        letterMap.set(c, (letterMap.get(c) || 0) + 1);

        if ((letterMap.get(c) as number) > 1) {
            let firstIndex = s.indexOf(c);
            let lastIndex = s.lastIndexOf(c);

            longest = Math.max(longest, lastIndex - firstIndex - 1);
        }
    }

    return longest;
}

// Tests
console.log(maxLengthBetweenEqualCharacters('aa')); // 0
console.log(maxLengthBetweenEqualCharacters('abca')); // 2
console.log(maxLengthBetweenEqualCharacters('cbzxy')); // -1
