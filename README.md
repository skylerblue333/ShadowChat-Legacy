# ShadowChat Legacy

Legacy messaging implementation and reusable realtime-domain source for the SKYCOIN4444 ecosystem.

## Current audit

The repository contains 240 tracked files in the current audit snapshot, with TypeScript/React, SQL, configuration, and existing tests. The legacy source remains valuable as implementation evidence and as a candidate source for reusable messaging behavior.

## New realtime foundation

This pass adds a typed realtime contract under `server/realtime/` using the repository's existing Zod dependency:

- validated message-created events
- validated message-deleted events
- validated presence updates
- room/user/message identifiers
- message length and timestamp validation
- discriminated realtime envelopes
- Vitest coverage for accepted and rejected messages

This is a **realtime contract boundary**, not a claim that the legacy repository is itself the canonical production ShadowChat service.

## Consolidation strategy

Preserve the strongest messaging, presence, moderation, identity, and UI implementations from this repository. Merge verified realtime contracts into the canonical ShadowChat boundary instead of creating another messaging backend.

When a missing capability requires a mature open-source foundation, evaluate established public projects for security, maintenance, license compatibility, and integration fit before adoption. Preserve attribution and isolate third-party code behind stable interfaces.

## Status

- Legacy implementation: **preserved**
- Realtime contract: **implemented**
- Realtime contract tests: **implemented**
- Canonical ShadowChat merge: **pending integration testing**
- Database/auth production integration: **not claimed**
- Production deployment: **not verified**

## Next integration targets

**Identity/Auth → Database → Realtime → ShadowChat → Notifications → Moderation → canonical frontend**

## License

MIT, subject to the checked-in license and applicable third-party dependency licenses.
