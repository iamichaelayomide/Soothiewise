import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TriageResultCardProps {
  level: "GREEN" | "AMBER" | "RED";
  message: string;
}

const levelCopy: Record<TriageResultCardProps["level"], string> = {
  GREEN: "YOU'RE IN A GOOD PLACE TO START",
  AMBER: "LET'S BUILD SOME STEADY GROUND",
  RED: "WE WANT TO MAKE SURE YOU'RE SAFE FIRST",
};

export function TriageResultCard({ level, message }: TriageResultCardProps) {
  return (
    <Card className="space-y-4">
      <Badge className={level === "RED" ? "bg-danger text-white" : ""}>
        {levelCopy[level]}
      </Badge>
      <p className="text-base text-ink/80">{message}</p>
    </Card>
  );
}
