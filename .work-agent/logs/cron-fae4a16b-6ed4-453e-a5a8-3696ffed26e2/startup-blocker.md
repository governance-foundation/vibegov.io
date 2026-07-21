# Startup Blocker

- Cron: `fae4a16b-6ed4-453e-a5a8-3696ffed26e2`
- Worker: `vibegov_developer`
- Local time: `2026-07-21 16:04 Australia/Sydney`
- UTC: `2026-07-21 06:04 UTC`

The required first visible Telegram start message could not be sent through the OpenClaw local gateway.

Attempts:

1. `message(action="send", channel="telegram", target="telegram:-5235304369", message="🛠 VibeGov developer: starting hourly issue worker run; reading bootstrap and checking resumable vibegov.io work first.")`
   - Result: gateway timeout after 30000 ms
   - Gateway target: `ws://127.0.0.1:18789`
   - Source: local loopback
   - Config: `C:\Users\maxbarrass\.openclaw\openclaw.json`
   - Bind: loopback
2. Same visible start message with `timeoutMs=60000`
   - Result: OpenClaw dynamic tool call timed out after 60000 ms while running tool `message`
3. Visible blocker message with required prefix and `timeoutMs=60000`
   - Result: OpenClaw dynamic tool call timed out after 60000 ms while running tool `message`

Per `C:\projects\governance-foundation\work-agents\docs\vibegov-developer-cron-bootstrap.md`, the run stopped at the startup visibility gate. No `vibegov.io` issue or PR work was selected or modified.
