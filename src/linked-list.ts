class LinkedListNode<T> {
  next: LinkedListNode<T>;
  value: T;

  constructor();
  constructor(value: T);
  constructor(value?: T) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;

  constructor();
  constructor(value: T);
  constructor(value?: T) {
    const newNode = new LinkedListNode<T>(value);
    if (value) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = undefined;
      this.tail = undefined;
      this.length = 0;
    }
  }

  public append(value: T): LinkedListNode<T> {
    const newNode = new LinkedListNode<T>(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    console.log(this.head);
    return newNode;
  }

  public print(): void {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }

  public prepend(value: T): LinkedListNode<T> {
    const newNode = new LinkedListNode<T>(value);
    if (this.length === 0) {
      this.append(value);
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return newNode;
  }

  public insert(position: number, value: T): LinkedListNode<T> {

    if (position < 0 || position > this.length) {
      return undefined;
    }
    if (position === 0) {
      return this.prepend(value);
    }
    const newNode = new LinkedListNode<T>(value);

    let index = 0;
    let curNode = this.head;
    let prevNode = curNode;
    while (index < position) {
      prevNode = curNode;
      curNode = curNode.next;
      index++;
    }

    prevNode.next = newNode;
    newNode.next = curNode;
    this.length++;

    return newNode;
  }

  public getValue(position: number): T {

    if (position < 0 || position > this.length) {
      return undefined;
    }

    let index = 0;
    let curNode = this.head;
    while (index < position) {
      curNode = curNode.next;
      index++;
    }

    return curNode.value;
  }

  public setValue(position: number, value: T): LinkedListNode<T> {

    if (position < 0 || position > this.length) {
      return undefined;
    }

    let index = 0;
    let curNode = this.head;
    while (index < position) {
      curNode = curNode.next;
      index++;
    }

    curNode.value = value;

    return curNode;
  }

  public pop(): LinkedListNode<T> {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      const tempNode = this.head;
      this.head = undefined;
      this.tail = undefined;
      this.length = 0;
      return tempNode;
    }
    let curNode = this.head;
    let prevNode = this.head;
    while (curNode.next) {
      prevNode = curNode;
      curNode = curNode.next;
    }

    prevNode.next = undefined;
    this.length--;
    return curNode;
  }

  // TODO:
  public remove(position: number): LinkedListNode<T> {

    return undefined;
  }

  // TODO:
  public reverse(): LinkedList<T> {

    return undefined;
  }

}

// Tester
(() => {
  const numLinkedList = new LinkedList<number>();

  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach((numToAdd) => {
    console.log(`New node appended: ${numLinkedList.append(numToAdd).value}`);
  });

  [0, -10, -20, -30].forEach((numToAdd) => {
    console.log(`New node prepended: ${numLinkedList.prepend(numToAdd).value}`);
  });

  numLinkedList.insert(7, 3.5);
  numLinkedList.insert(0, -40);
  numLinkedList.print();

  console.log(`Value at position 7 is: ${numLinkedList.getValue(7)}`);
  console.log(`New Value at position 7 is: ${numLinkedList.setValue(7, 3.3876).value}`);
  console.log(`Length before pop: ${numLinkedList.length}
    Popped value: ${numLinkedList.pop().value}
    Length after pop: ${numLinkedList.length}`);

  console.log(`Length before pop: ${numLinkedList.length}
    Popped value: ${numLinkedList.pop().value}
    Length after pop: ${numLinkedList.length}`);

  const strLinkedList = new LinkedList<string>('Puma');

  ['Nike', 'Hoka', 'On', 'Brooks', 'Skechers'].forEach((strToAdd) => {
    console.log(`New node appended: ${strLinkedList.append(strToAdd).value}`);
  });

  ['Adidas', 'New Balance'].forEach((strToAdd) => {
    console.log(`New node prepended: ${strLinkedList.prepend(strToAdd).value}`);
  });
  strLinkedList.print();
})();