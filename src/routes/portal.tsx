import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layouts/PortalLayout";
export const Route = createFileRoute("/portal")({ component: PortalLayout });
