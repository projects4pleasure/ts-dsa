import { test } from "node:test";
import * as assert from "node:assert";
import { Stack } from "./stack.js";

test("new stack is empty", () => {
  const s = new Stack<number>();
  assert.strictEqual(s.isEmpty(), true);
  assert.strictEqual(s.size, 0);
  assert.deepStrictEqual(s.toArray(), []);
});

test("pop, peek and clear on an empty stack", () => {
  const s = new Stack<number>();
  assert.strictEqual(s.pop(), undefined);
  assert.strictEqual(s.peek(), undefined);
  s.clear();
  assert.strictEqual(s.isEmpty(), true);
  assert.strictEqual(s.size, 0);
});

test("push updates isEmpty and size", () => {
  const s = new Stack<number>();
  s.push(1);
  assert.strictEqual(s.isEmpty(), false);
  assert.strictEqual(s.size, 1);
  s.push(2);
  assert.strictEqual(s.size, 2);
});

test("pop returns items in LIFO order", () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  s.push(3);
  assert.strictEqual(s.pop(), 3);
  assert.strictEqual(s.pop(), 2);
  assert.strictEqual(s.pop(), 1);
  assert.strictEqual(s.pop(), undefined);
});

test("pop to empty updates isEmpty and size", () => {
  const s = new Stack<string>();
  s.push("a");
  s.pop();
  assert.strictEqual(s.isEmpty(), true);
  assert.strictEqual(s.size, 0);
});

test("peek does not remove", () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  assert.strictEqual(s.peek(), 2);
  assert.strictEqual(s.peek(), 2);
  assert.strictEqual(s.size, 2);
});

test("clear empties the stack and it can be reused", () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  s.clear();
  assert.strictEqual(s.isEmpty(), true);
  assert.strictEqual(s.size, 0);
  assert.strictEqual(s.pop(), undefined);
  s.push(7);
  assert.strictEqual(s.peek(), 7);
  assert.strictEqual(s.size, 1);
});

test("toArray returns a copy, bottom first", () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  s.push(3);
  const arr = s.toArray();
  assert.deepStrictEqual(arr, [1, 2, 3]);
  arr.push(4);
  arr[0] = 99;
  assert.deepStrictEqual(s.toArray(), [1, 2, 3]);
  assert.strictEqual(s.size, 3);
});

test("falsy values can be pushed", () => {
  const s = new Stack<unknown>();
  s.push(undefined);
  s.push(0);
  s.push("");
  s.push(false);
  s.push(null);
  assert.strictEqual(s.size, 5);
  assert.strictEqual(s.isEmpty(), false);
  assert.strictEqual(s.peek(), null);
  assert.deepStrictEqual(s.toArray(), [undefined, 0, "", false, null]);
  assert.strictEqual(s.pop(), null);
  assert.strictEqual(s.pop(), false);
  assert.strictEqual(s.pop(), "");
  assert.strictEqual(s.pop(), 0);
  assert.strictEqual(s.size, 1);
  assert.strictEqual(s.pop(), undefined);
  assert.strictEqual(s.isEmpty(), true);
});
