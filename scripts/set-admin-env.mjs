import fs from "node:fs";
import path from "node:path";

const [, , username, password] = process.argv;

if (!username || !password) {
  console.error("Usage: npm run admin:set -- <username> <password>");
  process.exit(1);
}

const envPath = path.resolve(process.cwd(), ".env");
const envExists = fs.existsSync(envPath);
let envContent = envExists ? fs.readFileSync(envPath, "utf8") : "";
const eol = envContent.includes("\r\n") ? "\r\n" : "\n";

const quoteEnvValue = (value) =>
  `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

const upsertEnvValue = (content, key, value) => {
  const line = `${key}=${quoteEnvValue(value)}`;
  const pattern = new RegExp(`^${key}=.*$`, "m");

  if (pattern.test(content)) {
    return content.replace(pattern, line);
  }

  if (!content.endsWith(eol) && content.length > 0) {
    content += eol;
  }

  return `${content}${line}${eol}`;
};

envContent = upsertEnvValue(envContent, "ADMIN_USERNAME", username);
envContent = upsertEnvValue(envContent, "ADMIN_PASSWORD", password);

fs.writeFileSync(envPath, envContent, "utf8");

console.log("Admin credentials saved in .env");
console.log(`ADMIN_USERNAME=${username}`);
console.log("ADMIN_PASSWORD=********");
