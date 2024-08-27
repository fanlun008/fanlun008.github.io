import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

console.log("当前文件路径:", __filename);
console.log("当前文件夹路径:", __dirname);