# pop

Removes and returns the top value, or nothing if the stack is empty.

```mermaid
flowchart TD
  A([Start: pop]) --> B{Is the stack empty?}
  B -- Yes --> C([Return nothing])
  B -- No --> D[Remove the last item]
  D --> E[Size decreases by 1]
  E --> F([Return the removed item])
```

## Before / after

| | Stack (bottom to top) | Size | Result |
|---|---|---|---|
| Before | `[1, 2, 3]` | 3 | |
| After `pop()` | `[1, 2]` | 2 | `3` |
| Empty before | `[]` | 0 | |
| Empty after `pop()` | `[]` | 0 | nothing |
