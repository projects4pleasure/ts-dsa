# peek

Returns the top value without removing it, or nothing if the stack is empty.

```mermaid
flowchart TD
  A([Start: peek]) --> B{Is the stack empty?}
  B -- Yes --> C([Return nothing])
  B -- No --> D[Read the last item]
  D --> E([Return it; the stack is unchanged])
```

## Before / after

| | Stack (bottom to top) | Size | Result |
|---|---|---|---|
| Before | `[1, 2, 3]` | 3 | |
| After `peek()` | `[1, 2, 3]` | 3 | `3` |
| Empty before | `[]` | 0 | |
| Empty after `peek()` | `[]` | 0 | nothing |
