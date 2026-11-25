# The Funniest Office Joke, Judged Head to Head

[![make.fun · u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/sosissausage35-collab/funniest-office-joke/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/sosissausage35-collab/funniest-office-joke/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One short line about office life — the whole entry:

> The office printer jammed on the deadline, so I printed my resignation — it came out perfectly.

## Why this joke

- **Setup and turn:** the printer that jams on every deadline document is something anyone who has worked in an office knows.
- **The turn:** the one thing the printer refuses to jam on is the resignation — the machine finally cooperates only when you are leaving.
- **Punchline last, every word earning its place:** one line, under 200 characters.

## How it works

`main.ts` (Node 22) writes the joke to `$OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It is deterministic — two runs write
identical bytes — with no network, no randomness, and no file reads
outside the repo. It throws if the entry is empty or outside 1–200
characters.

```sh
OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
