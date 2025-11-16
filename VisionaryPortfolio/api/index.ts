// api/index.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import server from "../server/index"; // adjust path if your server file is elsewhere

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Forward request to your Express server instance
  return (server as any)(req, res);
}
