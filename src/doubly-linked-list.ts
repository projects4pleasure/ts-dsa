export class DoublyLinkedListNode<T> {
  public value: T;
  public next: DoublyLinkedListNode<T> | undefined;
  public prev: DoublyLinkedListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

export class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | undefined;
  public tail: DoublyLinkedListNode<T> | undefined;
  public length: number;

  constructor(value?: T) {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
    if (value !== undefined) {
      this.push(value);
    }
  }

  public push(value: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode<T>(value);
    if (this.tail === undefined) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return node;
  }

  public pop(): DoublyLinkedListNode<T> | undefined {
    const node = this.tail;
    if (node === undefined) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = node.prev;
      this.tail.next = undefined;
      node.prev = undefined;
    }
    this.length--;
    return node;
  }

  public insert(index: number, value: T): DoublyLinkedListNode<T> | undefined {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === this.length) {
      return this.push(value);
    }
    const node = new DoublyLinkedListNode<T>(value);
    const next = this.getNode(index);
    node.next = next;
    node.prev = next.prev;
    if (next.prev === undefined) {
      this.head = node;
    } else {
      next.prev.next = node;
    }
    next.prev = node;
    this.length++;
    return node;
  }

  public remove(index: number): DoublyLinkedListNode<T> | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    const node = this.getNode(index);
    if (node.prev === undefined) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
    if (node.next === undefined) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    node.next = undefined;
    node.prev = undefined;
    this.length--;
    return node;
  }

  public print(): void {
    let current = this.head;
    while (current !== undefined) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Assumes 0 <= index < length; walks from the nearer end.
  private getNode(index: number): DoublyLinkedListNode<T> {
    let current: DoublyLinkedListNode<T>;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) current = current.prev;
    }
    return current;
  }
}
