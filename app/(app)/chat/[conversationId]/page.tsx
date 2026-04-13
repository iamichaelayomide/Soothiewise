"use client";

import { useEffect, useRef, useState } from "react";

import { ChatBubble } from "@/components/chat/chat-bubble";
import { ChatInput } from "@/components/chat/chat-input";
import { TypingIndicator } from "@/components/chat/typing-indicator";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

const mockReplies = [
  "That sounds heavy. What part of it feels the most constant right now?",
  "You’ve been carrying a lot. Where in your body do you feel it most?",
  "I hear the pressure. What’s the smallest thing that would feel like relief today?",
];

export default function ConversationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "I’m here with you. Tell me what’s been sitting on your chest lately.",
    },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const streamRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isStreaming]);

  const handleSend = (value: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response =
      mockReplies[Math.floor(Math.random() * mockReplies.length)] ??
      mockReplies[0];

    setIsStreaming(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    let index = 0;
    if (streamRef.current) clearInterval(streamRef.current);

    streamRef.current = setInterval(() => {
      index += 1;
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId
            ? { ...message, content: response.slice(0, index) }
            : message
        )
      );

      if (index >= response.length) {
        if (streamRef.current) clearInterval(streamRef.current);
        setIsStreaming(false);
      }
    }, 18);
  };

  return (
    <div className="flex min-h-screen flex-col bg-yellow">
      <div className="border-b-[3px] border-ink bg-yellow px-6 py-4">
        <div className="text-sm font-bold uppercase tracking-[0.05em]">
          Vent & Reflect
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex-1 space-y-4 overflow-y-auto px-6 py-6"
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            role={message.role}
            content={message.content}
            timestamp="Just now"
          />
        ))}
        {isStreaming ? <TypingIndicator /> : null}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
