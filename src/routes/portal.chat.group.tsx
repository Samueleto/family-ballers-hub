import { createFileRoute } from "@tanstack/react-router";
import { ChatUI } from "@/components/common/ChatUI";
export const Route = createFileRoute("/portal/chat/group")({ component: () => <ChatUI title="Family Ballers — Group" /> });
