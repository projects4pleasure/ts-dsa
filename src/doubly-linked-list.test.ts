import { test, mock } from "node:test";
import * as assert from "node:assert";
import { DoublyLinkedList } from "./doubly-linked-list.js";

function forward<T>(list: DoublyLinkedList<T>): T[] {
  const out: T[] = [];
  for (let n = list.head; n !== undefined; n = n.next) out.push(n.value);
  return out;
}

function backward<T>(list: DoublyLinkedList<T>): T[] {
  const out: T[] = [];
  for (let n = list.tail; n !== undefined; n = n.prev) out.unshift(n.value);
  return out;
}

function check<T>(list: DoublyLinkedList<T>, expected: T[]): void {
  assert.deepStrictEqual(forward(list), expected);
  assert.deepStrictEqual(backward(list), expected);
  assert.strictEqual(list.length, expected.length);
  assert.strictEqual(list.head?.prev, undefined);
  assert.strictEqual(list.tail?.next, undefined);
}

test("constructor", () => {
  const empty = new DoublyLinkedList<number>();
  assert.strictEqual(empty.head, undefined);
  assert.strictEqual(empty.tail, undefined);
  check(empty, []);
  check(new DoublyLinkedList(5), [5]);
  check(new DoublyLinkedList(0), [0]);
});

test("push", () => {
  const list = new DoublyLinkedList<number>();
  const a = list.push(1);
  assert.strictEqual(a.value, 1);
  assert.strictEqual(list.head, a);
  assert.strictEqual(list.tail, a);
  check(list, [1]);
  const b = list.push(0);
  assert.strictEqual(list.tail, b);
  assert.strictEqual(b.prev, a);
  check(list, [1, 0]);
});

test("pop", () => {
  const list = new DoublyLinkedList<number>();
  assert.strictEqual(list.pop(), undefined);
  list.push(1);
  const only = list.pop();
  assert.strictEqual(only?.value, 1);
  assert.strictEqual(list.head, undefined);
  assert.strictEqual(list.tail, undefined);
  check(list, []);
  list.push(1);
  list.push(2);
  list.push(3);
  const last = list.pop();
  assert.strictEqual(last?.value, 3);
  assert.strictEqual(last?.prev, undefined);
  check(list, [1, 2]);
});

test("insert", () => {
  const list = new DoublyLinkedList<number>();
  assert.strictEqual(list.insert(1, 9), undefined);
  assert.strictEqual(list.insert(-1, 9), undefined);
  check(list, []);
  assert.strictEqual(list.insert(0, 0)?.value, 0);
  check(list, [0]);
  list.insert(0, 1); // head
  check(list, [1, 0]);
  list.insert(2, 2); // tail (index == length)
  check(list, [1, 0, 2]);
  assert.strictEqual(list.tail?.value, 2);
  list.insert(1, 3); // middle
  check(list, [1, 3, 0, 2]);
  list.insert(3, 4); // middle, back half
  check(list, [1, 3, 0, 4, 2]);
  assert.strictEqual(list.insert(6, 9), undefined);
  assert.strictEqual(list.insert(-1, 9), undefined);
  check(list, [1, 3, 0, 4, 2]);
});

test("remove", () => {
  const list = new DoublyLinkedList<number>();
  assert.strictEqual(list.remove(0), undefined);
  list.push(0);
  const only = list.remove(0);
  assert.strictEqual(only?.value, 0);
  assert.strictEqual(list.head, undefined);
  assert.strictEqual(list.tail, undefined);
  check(list, []);

  [1, 2, 3, 4, 5].forEach((v) => list.push(v));
  const head = list.remove(0);
  assert.strictEqual(head?.value, 1);
  assert.strictEqual(head?.next, undefined);
  check(list, [2, 3, 4, 5]);
  const tail = list.remove(3);
  assert.strictEqual(tail?.value, 5);
  assert.strictEqual(tail?.prev, undefined);
  check(list, [2, 3, 4]);
  assert.strictEqual(list.remove(1)?.value, 3);
  check(list, [2, 4]);
  assert.strictEqual(list.remove(2), undefined);
  assert.strictEqual(list.remove(-1), undefined);
  check(list, [2, 4]);
});

test("print", () => {
  const log = mock.method(console, "log", () => {});
  try {
    new DoublyLinkedList<number>().print();
    assert.strictEqual(log.mock.callCount(), 0);
    const list = new DoublyLinkedList<number>(0);
    list.push(1);
    list.push(2);
    list.print();
    assert.deepStrictEqual(
      log.mock.calls.map((c) => c.arguments[0]),
      [0, 1, 2]
    );
  } finally {
    log.mock.restore();
  }
});
