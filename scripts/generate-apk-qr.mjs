import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const source = await readFile(new URL("../src/lib/apk-download.ts", import.meta.url), "utf8");
const match = source.match(/APK_DOWNLOAD_URL\s*=\s*"([^"]+)"/);

if (!match) {
  throw new Error("Could not find APK_DOWNLOAD_URL in src/lib/apk-download.ts");
}

await QRCode.toFile(
  fileURLToPath(new URL("../public/app-download-qr.png", import.meta.url)),
  match[1],
  {
    errorCorrectionLevel: "H",
    margin: 4,
    scale: 12,
    color: {
      dark: "#102f26",
      light: "#ffffff",
    },
  },
);

console.log("Generated public/app-download-qr.png");
