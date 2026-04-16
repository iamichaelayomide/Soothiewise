"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  ChevronRight,
  HeartPulse,
  Home,
  MessageCircle,
  MoonStar,
  Sparkles,
  SunMedium,
  User,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TabId = "home" | "checkin" | "reset" | "circles" | "profile";
type PanelTone = "soft" | "warm" | "ink";

const moods = [
  { id: "calm", label: "Calm", emoji: "😌", accent: "bg-[#fff8d4]" },
  { id: "steady", label: "Steady", emoji: "🙂", accent: "bg-[#ffef87]" },
  { id: "foggy", label: "Foggy", emoji: "🌫️", accent: "bg-[#fff1b8]" },
  { id: "heavy", label: "Heavy", emoji: "🌧️", accent: "bg-[#f9d80b]" },
] as const;

const resets = [
  {
    id: "breath",
    title: "Breathing reset",
    copy: "Four slow breaths, then a pause.",
    icon: MoonStar,
  },
  {
    id: "walk",
    title: "Tiny walk",
    copy: "Two quiet minutes outside.",
    icon: Waves,
  },
  {
    id: "voice",
    title: "Voice note",
    copy: "Say the thing you keep carrying.",
    icon: MessageCircle,
  },
  {
    id: "food",
    title: "Water + food",
    copy: "Drink water and pick one simple meal.",
    icon: SunMedium,
  },
] as const;

const circles = [
  {
    id: "burnout",
    title: "Burnout Recovery",
    copy: "For people whose battery is always low.",
  },
  {
    id: "exam",
    title: "Exam Stress",
    copy: "For deadlines, cramming, and panic.",
  },
  {
    id: "parents",
    title: "Mothers Circle",
    copy: "A softer space for tired caregivers.",
  },
  {
    id: "men",
    title: "Men's Wellness",
    copy: "Talk, listen, and reset without noise.",
  },
  {
    id: "grief",
    title: "Grief and Loss",
    copy: "Gentle support for hard days and nights.",
  },
  {
    id: "general",
    title: "General Support",
    copy: "Open space for days that do not fit a label.",
  },
] as const;

const stats = [
  { label: "Today", value: "8:10 AM" },
  { label: "Streak", value: "4 days" },
  { label: "Mood", value: "Steady" },
] as const;

const tabs: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "checkin", label: "Check in", icon: HeartPulse },
  { id: "reset", label: "Reset", icon: Sparkles },
  { id: "circles", label: "Circles", icon: BookOpen },
  { id: "profile", label: "Profile", icon: User },
];

function Panel({
  tone = "soft",
  className = "",
  children,
}: {
  tone?: PanelTone;
  className?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === "soft"
      ? "app-panel-soft"
      : tone === "warm"
        ? "app-panel-warm"
        : "app-panel-ink";

  return <section className={`${toneClass} ${className}`}>{children}</section>;
}

function TabButton({
  active,
  id,
  label,
  icon: Icon,
  onSelect,
}: {
  active: boolean;
  id: TabId;
  label: string;
  icon: LucideIcon;
  onSelect: (tab: TabId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={active}
      className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[1rem] px-2 py-2 text-[0.66rem] font-black uppercase tracking-[0.08em] transition ${
        active
          ? "bg-ink text-yellow shadow-[0_10px_24px_rgba(28,28,20,0.24)]"
          : "text-ink/60 hover:bg-[#fff4b4]"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="truncate">{label}</span>
    </button>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [selectedMood, setSelectedMood] =
    useState<(typeof moods)[number]["id"]>("steady");
  const [selectedReset, setSelectedReset] =
    useState<(typeof resets)[number]["id"]>("breath");
  const [joinedCircles, setJoinedCircles] = useState<string[]>([
    "burnout",
    "exam",
  ]);
  const [checkInSaved, setCheckInSaved] = useState(false);

  const currentMood =
    moods.find((mood) => mood.id === selectedMood) ?? moods[1];
  const currentReset =
    resets.find((reset) => reset.id === selectedReset) ?? resets[0];

  function toggleCircle(circleId: string) {
    setJoinedCircles((current) =>
      current.includes(circleId)
        ? current.filter((id) => id !== circleId)
        : [...current, circleId],
    );
  }

  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,_rgba(255,250,190,0.95),_transparent_38%),linear-gradient(180deg,#f7dc18_0%,#eacb00_100%)] px-0 py-0 md:flex md:items-center md:justify-center md:px-4 md:py-4">
      <div className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#f4d713] text-ink md:min-h-[calc(100svh-2rem)] md:max-w-[430px] md:rounded-[2rem] md:border-[3px] md:border-ink md:shadow-[0_28px_80px_rgba(28,28,20,0.26)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />

        <header className="relative flex items-start justify-between px-5 pb-3 pt-4">
          <div>
            <div className="app-chip bg-[#fff4b4]">Soothewise</div>
            <h1 className="mt-3 text-[2.2rem] leading-[0.9]">
              Yellow days, softer pace.
            </h1>
            <p className="mt-3 max-w-[22ch] text-sm leading-6 text-ink/75">
              A mobile check-in app that keeps the surface bright and the next
              step small.
            </p>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-[2.5px] border-ink bg-[#fff6c8] shadow-[4px_4px_0px_0px_#1C1C14] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
        </header>

        <div className="relative flex-1 overflow-y-auto px-5 pb-28 pt-1">
          {activeTab === "home" && (
            <div className="space-y-4">
              <Panel tone="warm" className="p-4">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="app-chip bg-[#fff3ae]">Today</div>
                    <h2 className="text-[1.75rem] leading-[0.95]">
                      How are we holding up?
                    </h2>
                    <p className="text-sm leading-6 text-ink/75">
                      Tap once to log the mood, once to pick a reset, or once
                      to open a circle.
                    </p>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink bg-[#fff7d1] text-3xl">
                    {currentMood.emoji}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.1rem] border-[2px] border-ink bg-[#fff7cf] px-3 py-2"
                    >
                      <div className="text-[0.65rem] font-black uppercase tracking-[0.08em] text-ink/55">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-sm font-black">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("checkin")}
                    className="app-button-primary flex-1"
                  >
                    Start check-in
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("reset")}
                    className="app-button-secondary"
                  >
                    Reset
                  </button>
                </div>
              </Panel>

              <Panel tone="soft" className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="app-chip bg-[#fff4b4]">Saved note</div>
                    <h2 className="mt-3 text-[1.35rem] leading-[1.05]">
                      {checkInSaved
                        ? `Your last mood was ${currentMood.label}.`
                        : "Nothing saved yet."}
                    </h2>
                  </div>
                  <Sparkles className="h-6 w-6 shrink-0" />
                </div>

                <p className="mt-3 text-sm leading-6 text-ink/75">
                  {checkInSaved
                    ? "You can come back any time and keep moving from here."
                    : "Use the mood screen to save the first entry and set the tone for the day."}
                </p>
              </Panel>

              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("checkin")}
                  className="flex items-center justify-between rounded-[1.25rem] border-[2.5px] border-ink bg-[#fff3ad] px-4 py-4 text-left shadow-[4px_4px_0px_0px_#1C1C14]"
                >
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.08em]">
                      Update mood
                    </div>
                    <div className="mt-1 text-sm text-ink/70">
                      Pick the feeling that fits today.
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("circles")}
                  className="flex items-center justify-between rounded-[1.25rem] border-[2.5px] border-ink bg-[#fff3ad] px-4 py-4 text-left shadow-[4px_4px_0px_0px_#1C1C14]"
                >
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.08em]">
                      Open circles
                    </div>
                    <div className="mt-1 text-sm text-ink/70">
                      Join a supportive space in one tap.
                    </div>
                  </div>
                  <BookOpen className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "checkin" && (
            <div className="space-y-4">
              <div>
                <div className="app-chip bg-[#fff4b4]">Mood check</div>
                <h2 className="mt-3 text-[1.7rem] leading-[1.02]">
                  Pick the mood without overthinking it.
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  You can always change it later. The point is to make today
                  visible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {moods.map((mood) => {
                  const active = mood.id === selectedMood;
                  return (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setSelectedMood(mood.id)}
                      className={`rounded-[1.3rem] border-[2.5px] border-ink p-4 text-left transition ${
                        active
                          ? "bg-ink text-yellow shadow-[6px_6px_0px_0px_#1C1C14]"
                          : mood.accent + " shadow-[4px_4px_0px_0px_#1C1C14]"
                      }`}
                    >
                      <div className="text-3xl">{mood.emoji}</div>
                      <div className="mt-3 text-sm font-black uppercase tracking-[0.08em]">
                        {mood.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              <Panel tone="soft" className="p-4">
                <div className="app-chip bg-[#fff4b4]">Selected mood</div>
                <h2 className="mt-3 text-[1.4rem] leading-[1.05]">
                  {currentMood.emoji} {currentMood.label}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  That suggests the next move should be short, quiet, and easy
                  to finish.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setCheckInSaved(true);
                    setActiveTab("home");
                  }}
                  className="mt-4 app-button-primary w-full"
                >
                  Save check-in
                </button>
              </Panel>
            </div>
          )}

          {activeTab === "reset" && (
            <div className="space-y-4">
              <div>
                <div className="app-chip bg-[#fff4b4]">Reset library</div>
                <h2 className="mt-3 text-[1.7rem] leading-[1.02]">
                  Choose a reset for the next five minutes.
                </h2>
              </div>

              <div className="space-y-3">
                {resets.map((reset) => {
                  const Icon = reset.icon;
                  const active = reset.id === selectedReset;
                  return (
                    <button
                      key={reset.id}
                      type="button"
                      onClick={() => setSelectedReset(reset.id)}
                      className={`flex w-full items-start gap-3 rounded-[1.3rem] border-[2.5px] border-ink p-4 text-left transition ${
                        active
                          ? "bg-ink text-yellow shadow-[6px_6px_0px_0px_#1C1C14]"
                          : "bg-[#fff5c2] shadow-[4px_4px_0px_0px_#1C1C14]"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-ink ${
                          active ? "bg-yellow text-ink" : "bg-[#fff8de] text-ink"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-black uppercase tracking-[0.08em]">
                          {reset.title}
                        </div>
                        <div
                          className={`mt-1 text-sm ${
                            active ? "text-yellow/80" : "text-ink/70"
                          }`}
                        >
                          {reset.copy}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <Panel tone="warm" className="p-4">
                <div className="app-chip bg-[#fff4b4]">Ready now</div>
                <h2 className="mt-3 text-[1.45rem] leading-[1.05]">
                  {currentReset.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  {currentReset.copy}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveTab("home")}
                  className="mt-4 app-button-primary w-full"
                >
                  Start reset
                </button>
              </Panel>
            </div>
          )}

          {activeTab === "circles" && (
            <div className="space-y-4">
              <div>
                <div className="app-chip bg-[#fff4b4]">Community circles</div>
                <h2 className="mt-3 text-[1.7rem] leading-[1.02]">
                  Join support spaces that feel safe.
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  {joinedCircles.length} circle
                  {joinedCircles.length === 1 ? "" : "s"} joined.
                </p>
              </div>

              <div className="grid gap-3">
                {circles.map((circle) => {
                  const joined = joinedCircles.includes(circle.id);
                  return (
                    <Panel
                      key={circle.id}
                      tone={joined ? "ink" : "soft"}
                      className="p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-black uppercase tracking-[0.08em]">
                            {circle.title}
                          </div>
                          <p
                            className={`mt-2 text-sm leading-6 ${
                              joined ? "text-yellow/75" : "text-ink/70"
                            }`}
                          >
                            {circle.copy}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleCircle(circle.id)}
                          className={`rounded-full border-[2px] border-ink px-3 py-1 text-[0.7rem] font-black uppercase tracking-[0.08em] transition ${
                            joined ? "bg-yellow text-ink" : "bg-[#fff4b4] text-ink"
                          }`}
                        >
                          {joined ? "Joined" : "Join"}
                        </button>
                      </div>
                    </Panel>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-4">
              <div>
                <div className="app-chip bg-[#fff4b4]">Profile</div>
                <h2 className="mt-3 text-[1.7rem] leading-[1.02]">
                  Keep the app simple, private, and yours.
                </h2>
              </div>

              <Panel tone="warm" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full border-[2.5px] border-ink bg-[#fff7d1] text-ink">
                    <User className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg font-black">Ayomide</div>
                    <div className="text-sm text-ink/70">
                      Private account on this device
                    </div>
                  </div>
                </div>
              </Panel>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Check-ins", value: "14" },
                  { label: "Streak", value: "4 days" },
                  { label: "Focus", value: "Calm" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.1rem] border-[2.5px] border-ink bg-[#fff6c8] px-4 py-3 shadow-[4px_4px_0px_0px_#1C1C14]"
                  >
                    <div className="text-[0.65rem] font-black uppercase tracking-[0.08em] text-ink/55">
                      {item.label}
                    </div>
                    <div className="mt-2 text-xl font-black">{item.value}</div>
                  </div>
                ))}
              </div>

              <Panel tone="soft" className="p-4">
                <div className="app-chip bg-[#fff4b4]">Settings</div>
                <div className="mt-3 space-y-3">
                  {[
                    "Private by design",
                    "Notifications",
                    "Support contact",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[1rem] bg-[#fff7d1] px-3 py-3"
                    >
                      <span className="text-sm font-bold">{item}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          )}
        </div>

        <footer className="absolute inset-x-0 bottom-0 border-t-[2.5px] border-ink bg-[#f4d713]/96 px-3 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur">
          <div className="grid grid-cols-5 gap-2">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                active={activeTab === tab.id}
                onSelect={setActiveTab}
              />
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
