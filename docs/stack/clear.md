# clear

Removes all items from the stack.

```mermaid
flowchart TD
  A([Start: clear]) --> B{Is the stack empty?}
  B -- Yes --> C([Done: nothing to remove])
  B -- No --> D[Remove all items]
  D --> E[Size becomes 0]
  E --> F([Done: nothing returned])
```

## Before / after

| | Stack (bottom to top) | Size |
|---|---|---|
| Before | `[1, 2, 3]` | 3 |
| After `clear()` | `[]` | 0 |
| Empty before | `[]` | 0 |
| Empty after `clear()` | `[]` | 0 |
