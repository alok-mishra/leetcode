/*
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]



Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l1Current = l1;
    let l2Current = l2;
    let carry = 0;
    let lSum = new ListNode();
    let lSumCurrent = lSum;

    while (l1Current || l2Current) {
        const l1Val = l1Current ? l1Current.val : 0;
        const l2Val = l2Current ? l2Current.val : 0;
        const sum = l1Val + l2Val + carry;
        const sumDigit = sum % 10;
        carry = Math.floor(sum / 10);

        lSumCurrent.next = new ListNode(sumDigit);
        lSumCurrent = lSumCurrent.next;

        l1Current = l1Current && l1Current.next;
        l2Current = l2Current && l2Current.next;
    }

    if (carry) {
        lSumCurrent.next = new ListNode(carry);
    }

    return lSum.next;
}

// Test cases
console.log(
    addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))
); // [7,0,8]
console.log(addTwoNumbers(new ListNode(0), new ListNode(0))); // [0]
console.log(
    addTwoNumbers(
        new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
        ),
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
); // [8,9,9,9,0,0,0,1]

/*
function JustArrayAddTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    l1 = l1 && l1.reverse();
    l2 = l2 && l2.reverse();

    const l1Num = l1 ? parseInt(l1.join('')) : 0;
    const l2Num = l2 ? parseInt(l2.join('')) : 0;

    const lSumNum = l1Num + l2Num;

    const lSum = lSumNum
        .toString()
        .split('')
        .reverse()
        .map((num) => parseInt(num));

    return lSum;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
console.log(addTwoNumbers([0], [0])); // [0]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [8,9,9,9,0,0,0,1]
*/
