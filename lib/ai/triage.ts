export interface Scores {
  phq9: number;
  gad7: number;
  burnout: number;
  sleep: number;
}

export function scorePhq9(_responses: Record<string, number>): number {
  return 0;
}

export function scoreGad7(_responses: Record<string, number>): number {
  return 0;
}

export function classifyTriage(_scores: Scores): "GREEN" | "AMBER" | "RED" {
  return "GREEN";
}
