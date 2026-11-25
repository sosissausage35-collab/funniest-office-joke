import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one office joke, one line, punchline last.
const ENTRY =
  "The office printer jammed on the deadline, so I printed my resignation \u2014 it came out perfectly.";

function validateEntry(text) {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

// OUTPUT_DIR is a directory (default /output/entry.txt per the harness).
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const target = outputDir.endsWith("entry.txt")
  ? outputDir
  : join(outputDir, "entry.txt");

mkdirSync(target.slice(0, -"entry.txt".length) || ".", { recursive: true });
writeFileSync(target, ENTRY, "utf8");
