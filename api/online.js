// api/online.js

// Use a global variable to store users in memory.
// NOTE: On Vercel, this memory resets if the site hasn't been visited in a while.
const store = global.onlineUsers || (global.onlineUsers = new Map());

export default function handler(req, res) {
  const { id } = req.query;
  const now = Date.now();

  // 1. If the user has an ID, update their "last seen" time
  if (id) {
    store.set(id, now);
  }

  // 2. Remove users who haven't pinged in the last 30 seconds
  // (The client pings every 15s, so 30s gives them a buffer)
  for (const [key, lastSeen] of store) {
    if (now - lastSeen > 30000) {
      store.delete(key);
    }
  }

  // 3. tell the browser NEVER to cache this response
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

  // 4. Return the count as plain text
  res.status(200).send(String(store.size));
}