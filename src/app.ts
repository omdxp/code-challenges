class SinglyNode {
  private _next: SinglyNode | undefined;
  public get next(): SinglyNode | undefined {
    return this._next;
  }
  public set next(v: SinglyNode | undefined) {
    this._next = v;
  }

  constructor(public value: number) {
    this.value = value;
    this.next = undefined;
  }
}

class SinglyLinkedList {
  private _head: SinglyNode | undefined;
  public get head(): SinglyNode | undefined {
    return this._head;
  }
  public set head(v: SinglyNode | undefined) {
    this._head = v;
  }

  private _tail: SinglyNode | undefined;
  public get tail(): SinglyNode | undefined {
    return this._tail;
  }
  public set tail(v: SinglyNode | undefined) {
    this._tail = v;
  }

  private _size: number;
  public get size(): number {
    return this._size;
  }

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this._size = 0;
  }

  push(value: number) {
    const newNode = new SinglyNode(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this._size++;
    return this;
  }

  print() {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.value + " -> ";
      curr = curr.next;
    }
    str += "null";
    console.log(str);
  }
}

function reverseLinkedList(head: SinglyNode | undefined) {
  let prev: SinglyNode | undefined;
  let curr = head;
  let next: SinglyNode | undefined;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function print(head: SinglyNode | undefined) {
  let str = "";
  let curr = head;
  while (curr) {
    str += curr.value + " -> ";
    curr = curr.next;
  }
  str += "null";
  console.log(str);
}

const l = new SinglyLinkedList();

l.push(1).push(2).push(3).push(4);

l.print();

print(reverseLinkedList(l.head));
