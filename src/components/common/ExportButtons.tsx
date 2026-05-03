import { Button } from "@/components/ui/button";
import { FileSpreadsheet, FileText } from "lucide-react";
import { toast } from "sonner";

export function ExportButtons({ name = "report" }: { name?: string }) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={() => toast.info(`Excel export (${name}) — UI placeholder`)}>
        <FileSpreadsheet className="h-4 w-4" /> Excel
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast.info(`PDF export (${name}) — UI placeholder`)}>
        <FileText className="h-4 w-4" /> PDF
      </Button>
    </div>
  );
}
