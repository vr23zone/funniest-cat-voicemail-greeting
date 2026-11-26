import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You've reached Miso. If it's the vase, it fell. If it's dinner, I'm starving. If it's the vet, I never lived here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
