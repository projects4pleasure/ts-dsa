# size

Returns the number of items in the stack.

```mermaid
flowchart TD
  A([Start: size]) --> B[Count the items]
  B --> C([Return the count; the stack is unchanged])
```

## Before / after

| | Stack (bottom to top) | Result |
|---|---|---|
| Before | `[1, 2, 3]` | |
| After `size` | `[1, 2, 3]` | `3` |
| Before | `[]` | |
| After `size` | `[]` | `0` |
