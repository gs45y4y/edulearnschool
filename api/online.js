const store = global.onlineUsers || (global.onlineUsers = new Map());

export default function handler(req, res) {
  const id = req.query.id;
  if (!id) return res.status(200).send("0");

  const now = Date.now();
  store.set(id, now);

  for (const [key, time] of store) {
    if (now - time > 30000) store.delete(key);
  }

  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(String(store.size));
}
