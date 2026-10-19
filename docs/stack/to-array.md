# to-array

Returns a copy of the items, bottom first and top last. Changing the copy does not change the stack.

```mermaid
flowchart TD
  A([Start: to-array]) --> B[Create a new list]
  B --> C[Copy the items in order, bottom to top]
  C --> D([Return the new list; the stack is unchanged])
```

## Before / after

| | Stack (bottom to top) | Result |
|---|---|---|
| Before | `[1, 2, 3]` | |
| After `to-array` | `[1, 2, 3]` | copy `[1, 2, 3]` |
| After changing the copy | `[1, 2, 3]` | copy `[1, 2, 3, 4]` |
