import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const pkg = JSON.parse(readFileSync(join(rootDir, "package.json"), "utf8"));
const version = pkg.version;

const readme = readFileSync(join(rootDir, "README.md"), "utf8");
const updated = readme.replace(
  /react-vue-loading@[\d.]+/g,
  `react-vue-loading@${version}`,
);
writeFileSync(join(rootDir, "README.md"), updated);

console.log(`README.md version updated to v${version}`);
