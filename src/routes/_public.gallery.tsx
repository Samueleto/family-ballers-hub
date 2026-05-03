import { createFileRoute } from "@tanstack/react-router";
import { GALLERY } from "@/lib/dummy-data";

export const Route = createFileRoute("/_public/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Family Ballers" }, { name: "description", content: "Photos from our events, charity outreach and brotherhood moments." }]}),
  component: () => (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {GALLERY.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-lg border bg-muted">
            <img src={src} alt="" className="h-full w-full object-cover transition-transform hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  ),
});
