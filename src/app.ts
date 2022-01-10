class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): number[] {
  let result: ListNode | null = null;
  let current: ListNode | null = null;
  let carry: number = 0;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    if (result) {
      current.next = node;
      current = current.next;
    } else {
      result = node;
      current = result;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return [result?.val, result?.next?.val, result?.next?.next?.val];
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const res = addTwoNumbers(l1, l2);
console.log(res);
