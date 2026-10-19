# is-empty

Reports whether the stack holds no items.

```mermaid
flowchart TD
  A([Start: is-empty]) --> B{Is the size 0?}
  B -- Yes --> C([Return true])
  B -- No --> D([Return false])
```

## Before / after

| | Stack (bottom to top) | Result |
|---|---|---|
| Before | `[]` | |
| After `is-empty` | `[]` | `true` |
| Before | `[1]` | |
| After `is-empty` | `[1]` | `false` |
