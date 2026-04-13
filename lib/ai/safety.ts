export interface SafetyResult {
  safe: boolean;
  severity: "low" | "medium" | "high" | "critical";
}

export function detectRisk(_input: string): SafetyResult {
  return { safe: true, severity: "low" };
}
