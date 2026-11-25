// Unsent: The Micro-Confession Sprint — entry program.
//
// Writes the two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, and the unsent message itself,
// one line written exactly as it was typed, with no explanation after it.
//
// The confession (chosen by internal pairwise judging over 6 variants,
// using the RULES.txt judge criteria lexicographically + margin):
//   To: my ex-wife's new husband
//   Thank you for being kind to my kids on the days I'm not there —
//   all 182 of them last year. I hope they never have to choose between us.
// Why it wins: the reason it stayed in drafts is felt, never stated
// (thanking the man who replaced him feels like surrender — carried by
// "all 182 of them" and "choose between us"); the To: line is
// irreplaceable (the custody detail only fits the new husband); the
// message reads as typed-and-deleted, not written to be sent.
// Gate: 1-260 chars total (165 incl. trailing newline), message at most 200 chars (135).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "To: my ex-wife's new husband\n" +
  "Thank you for being kind to my kids on the days I'm not there — all 182 of them last year. I hope they never have to choose between us.\n";

// Guard the gate: /output/entry.txt must be UTF-8, 1-260 chars, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 260 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-260 gate`);
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
