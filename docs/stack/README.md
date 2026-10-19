# Stack diagrams

A stack is a last-in, first-out collection. The top of the stack is the end of the underlying list.

- [push](push.md): add a value to the top
- [pop](pop.md): remove and return the top value
- [peek](peek.md): return the top value without removing it
- [is-empty](is-empty.md): check whether the stack holds no items
- [size](size.md): count the items
- [clear](clear.md): remove all items
- [to-array](to-array.md): copy the items, bottom first

## Per-language names

| Diagram | TypeScript | Dart | Python |
|---|---|---|---|
| push | `push` | `push` | `push` |
| pop | `pop` | `pop` | `pop` |
| peek | `peek` | `peek` | `peek` |
| is-empty | `isEmpty` | `isEmpty` | `is_empty` |
| size | `size` | `size` | `size` |
| clear | `clear` | `clear` | `clear` |
| to-array | `toArray` | `toList` | `to_list` |

In the diagrams, "nothing" means the language's empty value (`undefined`, `null` or `None`).
