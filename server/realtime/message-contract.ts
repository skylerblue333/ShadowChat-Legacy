import { z } from "zod";

export const chatMessageSchema = z.object({
  id: z.string().min(1),
  roomId: z.string().min(1),
  senderId: z.string().min(1),
  body: z.string().trim().min(1).max(10_000),
  createdAt: z.string().datetime(),
  clientMessageId: z.string().min(1).max(128),
});

export const realtimeEnvelopeSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("message.created"), data: chatMessageSchema }),
  z.object({ type: z.literal("message.deleted"), data: z.object({ roomId: z.string().min(1), messageId: z.string().min(1) }) }),
  z.object({ type: z.literal("presence.updated"), data: z.object({ roomId: z.string().min(1), userId: z.string().min(1), online: z.boolean() }) }),
]);

export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type RealtimeEnvelope = z.infer<typeof realtimeEnvelopeSchema>;

export function parseRealtimeEnvelope(input: unknown): RealtimeEnvelope {
  return realtimeEnvelopeSchema.parse(input);
}
