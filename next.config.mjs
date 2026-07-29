import createNextIntlPlugin from "next-intl/plugin";
import fs from "fs";
import path from "path";

try {
  const publicImages = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(publicImages)) fs.mkdirSync(publicImages, { recursive: true });

  const src1 = "/home/faris/.gemini/antigravity/brain/dda80d45-bbbd-4368-b253-1c82feac72ae/network_mesh_bg_1785317675232.jpg";
  const src2 = "/home/faris/.gemini/antigravity/brain/dda80d45-bbbd-4368-b253-1c82feac72ae/cloud_router_bg_1785317693650.jpg";

  if (fs.existsSync(src1)) fs.copyFileSync(src1, path.join(publicImages, "network_mesh_bg.jpg"));
  if (fs.existsSync(src2)) fs.copyFileSync(src2, path.join(publicImages, "cloud_router_bg.jpg"));
} catch (err) {
  // ignore
}

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(config);