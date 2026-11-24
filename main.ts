import { mkdirSync, writeFileSync } from "node:fs";

// The winning line: a micro-anecdote that sounds true. A named scene,
// one sensory detail (the leaf, the grape), one small reveal at the end.
// No punchline, no explaining metaphor, one concept only.
const LINE =
  "My toddler handed the cashier a leaf at the market today and said, 'Keep the change.' The cashier gave him a grape. Fair trade.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
