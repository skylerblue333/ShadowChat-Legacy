import { describe, expect, it } from "vitest";
import { parseRealtimeEnvelope } from "./message-contract";

describe("realtime message contract", () => {
  it("accepts a created message", () => {
    const envelope = parseRealtimeEnvelope({
      type: "message.created",
      data: {
        id: "m1",
        roomId: "room-1",
        senderId: "user-1",
        body: "hello",
        createdAt: "2026-08-23T12:00:00.000Z",
        clientMessageId: "client-1",
      },
    });
    expect(envelope.type).toBe("message.created");
  });

  it("rejects an empty message body", () => {
    expect(() => parseRealtimeEnvelope({
      type: "message.created",
      data: { id: "m1", roomId: "room-1", senderId: "user-1", body: "", createdAt: "2026-08-23T12:00:00.000Z", clientMessageId: "client-1" },
    })).toThrow();
  });
});
