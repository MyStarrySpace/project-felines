import type { NextConfig } from "next";
import path from "path";

const canisDir = path.resolve(__dirname, "node_modules/@untangling/canis/dist");

const nextConfig: NextConfig = {
  transpilePackages: ["@untangling/canis"],
  turbopack: {},
  webpack: (config) => {
    // Resolve @untangling/canis subpath exports for symlinked dev install
    config.resolve.alias = {
      ...config.resolve.alias,
      "@untangling/canis/react": path.join(canisDir, "react.js"),
      "@untangling/canis": path.join(canisDir, "index.js"),
    };

    // The WASM engine code has `new URL("canis_bg.wasm", import.meta.url)` which
    // webpack tries to resolve statically. Ignore WASM file resolution since
    // it's only loaded at runtime inside a Web Worker.
    config.module.rules.push({
      test: /canis-.*\.js$/,
      resolve: {
        fullySpecified: false,
      },
    });

    // Treat WASM URLs as external (not bundled)
    const originalExternals = config.externals || [];
    config.externals = [
      ...(Array.isArray(originalExternals) ? originalExternals : [originalExternals]),
      ({ request }: { request?: string }, callback: (err: null, result?: string) => void) => {
        if (request && /canis_bg\.wasm$/.test(request)) {
          return callback(null, `commonjs ${request}`);
        }
        callback(null);
      },
    ];

    return config;
  },
};

export default nextConfig;
