import { readFile } from "node:fs/promises";
import jsQR from "jsqr";
import { PNG } from "pngjs";

const source = await readFile(new URL("../src/lib/apk-download.ts", import.meta.url), "utf8");
const match = source.match(/APK_DOWNLOAD_URL\s*=\s*"([^"]+)"/);

if (!match) {
  throw new Error("Could not find APK_DOWNLOAD_URL in src/lib/apk-download.ts");
}

const image = PNG.sync.read(
  await readFile(new URL("../public/app-download-qr.png", import.meta.url)),
);
const decoded = jsQR(new Uint8ClampedArray(image.data), image.width, image.height);

if (!decoded) {
  throw new Error("Could not decode public/app-download-qr.png");
}

if (decoded.data !== match[1]) {
  throw new Error(`QR destination mismatch: ${decoded.data}`);
}

console.log(`QR verified: ${decoded.data}`);
