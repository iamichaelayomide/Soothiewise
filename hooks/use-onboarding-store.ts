import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingState {
  name: string;
  isAnonymous: boolean;
  goals: string[];
  customGoal: string;
  formatPreference: string;
  tonePreference: string;
  intakeResponses: Record<number, string>;
  setName: (name: string) => void;
  setAnonymous: (value: boolean) => void;
  toggleGoal: (goal: string) => void;
  setCustomGoal: (value: string) => void;
  setFormatPreference: (value: string) => void;
  setTonePreference: (value: string) => void;
  setIntakeResponse: (index: number, value: string) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      name: "",
      isAnonymous: false,
      goals: [],
      customGoal: "",
      formatPreference: "Through conversation — I want something to talk to",
      tonePreference: "Gentle",
      intakeResponses: {},
      setName: (name) => set({ name }),
      setAnonymous: (value) => set({ isAnonymous: value }),
      toggleGoal: (goal) =>
        set((state) => ({
          goals: state.goals.includes(goal)
            ? state.goals.filter((item) => item !== goal)
            : [...state.goals, goal],
        })),
      setCustomGoal: (value) => set({ customGoal: value }),
      setFormatPreference: (value) => set({ formatPreference: value }),
      setTonePreference: (value) => set({ tonePreference: value }),
      setIntakeResponse: (index, value) =>
        set((state) => ({
          intakeResponses: { ...state.intakeResponses, [index]: value },
        })),
      reset: () =>
        set({
          name: "",
          isAnonymous: false,
          goals: [],
          customGoal: "",
          formatPreference: "Through conversation — I want something to talk to",
          tonePreference: "Gentle",
          intakeResponses: {},
        }),
    }),
    {
      name: "soothewise-onboarding",
    }
  )
);
