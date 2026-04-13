"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";

const questions = [
  "How often have you felt low or hopeless recently?",
  "Have you lost interest in things you normally enjoy?",
  "How has your energy been?",
  "How has your sleep been?",
  "Have you felt anxious or on edge?",
  "Have you been having trouble concentrating?",
  "Have you had any thoughts of hurting yourself?",
  "How often do you feel drained at the end of your day?",
  "Do you feel like you're just going through the motions?",
  "How often does work or school feel pointless?",
  "How would you describe your sleep quality lately?",
  "How many hours do you typically sleep?",
];

const answers = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

export function IntakeScreener() {
  const [index, setIndex] = useState(0);
  const { intakeResponses, setIntakeResponse } = useOnboardingStore();

  const next = () => setIndex((prev) => Math.min(prev + 1, questions.length - 1));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="text-sm font-bold uppercase tracking-[0.05em] text-ink/70">
          Question {index + 1} of {questions.length}
        </div>
        <h3 className="text-xl font-bold">{questions[index]}</h3>
        <div className="grid gap-3">
          {answers.map((answer) => {
            const isActive = intakeResponses[index] === answer;
            return (
              <button
                key={answer}
                type="button"
                onClick={() => setIntakeResponse(index, answer)}
                className={
                  "rounded-xl2 border-[3px] border-ink px-4 py-3 text-left font-semibold " +
                  (isActive ? "bg-ink text-white" : "bg-white")
                }
              >
                {answer}
              </button>
            );
          })}
        </div>
      </Card>
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={prev}>
          Back
        </Button>
        <Button variant="dark" onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
}
