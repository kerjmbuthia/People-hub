import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.SITES_STATIC_EXPORT==='1'?{output:'export' as const}:{}),
  async headers() { return [{source:"/:path*",headers:[{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive, nosnippet"},{key:"Referrer-Policy",value:"same-origin"}]}]; },
};

export default nextConfig;
