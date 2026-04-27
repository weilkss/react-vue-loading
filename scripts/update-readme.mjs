import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8"));
const version = pkg.version;

const readme = readFileSync(join(__dirname, "README.md"), "utf8");
const updated = readme.replace(/react-vue-loading@v[\d.]+/g, `react-vue-loading@v${version}`);
writeFileSync(join(__dirname, "README.md"), updated);

console.log(`README.md version updated to v${version}`);
