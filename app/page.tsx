"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CirclePlus,
  HeartPulse,
  Home,
  MessageCircle,
  MoonStar,
  Sparkles,
  SunMedium,
  User,
  Waves,
  BookOpen,
} from "lucide-react";

type TabId = "home" | "checkin" | "reset" | "circles" | "profile";

const moods = [
  { id: "calm", label: "Calm", emoji: "😌", color: "bg-safe text-white" },
  { id: "steady", label: "Steady", emoji: "🙂", color: "bg-yellow text-ink" },
  { id: "foggy", label: "Foggy", emoji: "🌫️", color: "bg-white text-ink" },
  { id: "heavy", label: "Heavy", emoji: "🌧️", color: "bg-danger text-white" },
] as const;

const resets = [
  {
    id: "breath",
    title: "Breathing reset",
    copy: "Four slow breaths and a short pause.",
    icon: MoonStar,
  },
  {
    id: "walk",
    title: "Tiny walk",
    copy: "Two minutes outside with your phone on silent.",
    icon: Waves,
  },
  {
    id: "voice",
    title: "Voice note",
    copy: "Say the thing you keep carrying out loud.",
    icon: MessageCircle,
  },
  {
    id: "food",
    title: "Water + food",
    copy: "Drink water and choose one simple meal.",
    icon: SunMedium,
  },
] as const;

const circles = [
  {
    id: "burnout",
    title: "Burnout Recovery",
    copy: "For people whose battery is always at 8 percent.",
  },
  {
    id: "exam",
    title: "Exam Stress",
    copy: "Short support for deadlines, cramming, and panic.",
  },
  {
    id: "parents",
    title: "Mothers Circle",
    copy: "A softer space for tired caregivers.",
  },
  {
    id: "men",
    title: "Men's Wellness",
    copy: "Talk, listen, and reset without the noise.",
  },
  {
    id: "grief",
    title: "Grief and Loss",
    copy: "Gentle support for hard days and harder nights.",
  },
  {
    id: "general",
    title: "General Support",
    copy: "Open space for the days that do not fit a label.",
  },
] as const;

const timeline = [
  { label: "Today", value: "Checked in at 8:10 AM" },
  { label: "Streak", value: "4 days in a row" },
  { label: "Next step", value: "Gentle reset in 2 minutes" },
] as const;

const tabItems: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "checkin", label: "Check in", icon: HeartPulse },
  { id: "reset", label: "Reset", icon: Sparkles },
  { id: "circles", label: "Circles", icon: BookOpen },
  { id: "profile", label: "Profile", icon: User },
];

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
  icon: typeof Home;
  onSelect: (tab: TabId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={active}
      className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[1.1rem] px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] transition ${
        active
          ? "bg-ink text-yellow shadow-[0_8px_24px_rgba(28,28,20,0.28)]"
          : "text-ink/55 hover:bg-ink/5"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="truncate">{label}</span>
    </button>
  );
}

function ScreenCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[1.6rem] border-[2.5px] border-ink bg-white p-4 shadow-[0_10px_0px_0px_#1C1C14] ${className}`}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [selectedMood, setSelectedMood] = useState<(typeof moods)[number]["id"]>(
    "steady",
  );
  const [selectedReset, setSelectedReset] = useState<(typeof resets)[number]["id"]>(
    "breath",
  );
  const [joinedCircles, setJoinedCircles] = useState<string[]>(["burnout", "exam"]);
  const [checkInSaved, setCheckInSaved] = useState(false);

  const selectedMoodData = useMemo(
    () => moods.find((mood) => mood.id === selectedMood) ?? moods[1],
    [selectedMood],
  );

  const selectedResetData = useMemo(
    () => resets.find((reset) => reset.id === selectedReset) ?? resets[0],
    [selectedReset],
  );

  const joinedCount = joinedCircles.length;

  function saveCheckIn() {
    setCheckInSaved(true);
    setActiveTab("home");
  }

  function toggleCircle(circleId: string) {
    setJoinedCircles((current) =>
      current.includes(circleId)
        ? current.filter((id) => id !== circleId)
        : [...current, circleId],
    );
  }

  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,_rgba(255,230,0,0.28),_transparent_36%),linear-gradient(180deg,_#f8f4e6_0%,_#f4ecd2_100%)] px-0 py-0 md:flex md:items-center md:justify-center md:px-4 md:py-4">
      <div className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#f7f0dc] text-ink md:min-h-[calc(100svh-2rem)] md:max-w-[430px] md:rounded-[2rem] md:border-[3px] md:border-ink md:shadow-[0_24px_80px_rgba(28,28,20,0.24)]">
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,230,0,0.34),transparent)]" />

        <header className="relative flex items-start justify-between px-5 pb-3 pt-4">
          <div>
            <div className="label text-ink/60">Soothewise</div>
            <h1 className="mt-2 text-[2rem] leading-[0.92] text-ink">
              A calm check-in app.
            </h1>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-[2.5px] border-ink bg-white shadow-[4px_4px_0px_0px_#1C1C14] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
        </header>

        <div className="relative px-5">
          <div className="rounded-[1.5rem] border-[2.5px] border-ink bg-ink px-4 py-3 text-white shadow-[6px_6px_0px_0px_#1C1C14]">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.08em] text-white/65">
              <span>Locked space</span>
              <span>09:41</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white/80">
                  Hello, Ayomide
                </div>
                <div className="mt-1 text-lg font-black">
                  {selectedMoodData.emoji} {selectedMoodData.label} today
                </div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-yellow text-ink">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-5 pb-28 pt-4">
          {activeTab === "home" && (
            <div className="space-y-4">
              <ScreenCard className="bg-ink text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="label text-white/60">Next check-in</div>
                    <p className="mt-2 max-w-[20ch] text-2xl font-black uppercase leading-[0.95]">
                      Keep the rhythm, not the pressure.
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow text-ink">
                    <HeartPulse className="h-8 w-8" />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.08em] text-white/65">
                    <span>Today's energy</span>
                    <span>72%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[72%] rounded-full bg-yellow" />
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("checkin")}
                    className="flex-1 rounded-[1rem] border-[2.5px] border-white bg-yellow px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-ink transition active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    Start check-in
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("reset")}
                    className="rounded-[1rem] border-[2.5px] border-white bg-transparent px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition active:translate-x-1 active:translate-y-1"
                  >
                    Reset
                  </button>
                </div>
              </ScreenCard>

              <div className="grid gap-3 sm:grid-cols-3">
                {timeline.map((item) => (
                  <ScreenCard key={item.label} className="p-3">
                    <div className="label text-ink/50">{item.label}</div>
                    <div className="mt-2 text-sm font-bold">{item.value}</div>
                  </ScreenCard>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <div>
                    <div className="label text-ink/50">Quick actions</div>
                    <h2 className="mt-1 text-[1.4rem]">One tap away.</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className="text-sm font-bold uppercase tracking-[0.08em] text-ink/70"
                  >
                    View profile
                  </button>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("checkin")}
                    className="flex w-full items-center justify-between rounded-[1.4rem] border-[2.5px] border-ink bg-white px-4 py-4 text-left shadow-[4px_4px_0px_0px_#1C1C14]"
                  >
                    <div>
                      <div className="text-sm font-black uppercase tracking-[0.08em]">
                        Update mood
                      </div>
                      <div className="mt-1 text-sm text-ink/70">
                        Choose how today actually feels.
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("circles")}
                    className="flex w-full items-center justify-between rounded-[1.4rem] border-[2.5px] border-ink bg-white px-4 py-4 text-left shadow-[4px_4px_0px_0px_#1C1C14]"
                  >
                    <div>
                      <div className="text-sm font-black uppercase tracking-[0.08em]">
                        Join a circle
                      </div>
                      <div className="mt-1 text-sm text-ink/70">
                        Safe peer groups for the right kind of support.
                      </div>
                    </div>
                    <CirclePlus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <ScreenCard className="bg-white">
                <div className="label text-ink/50">Saved note</div>
                <p className="mt-2 text-lg font-bold leading-tight">
                  {checkInSaved
                    ? "Your latest check-in is saved. Come back when you need the next step."
                    : "No check-in saved yet. Tap the mood screen to log one in under a minute."}
                </p>
              </ScreenCard>
            </div>
          )}

          {activeTab === "checkin" && (
            <div className="space-y-4">
              <div className="px-1">
                <div className="label text-ink/50">Mood check</div>
                <h2 className="mt-2 text-[1.8rem] leading-[1.02]">
                  Name the feeling without overexplaining it.
                </h2>
                <p className="mt-3 text-sm text-ink/70">
                  You can change this later. The goal is to make the state
                  visible, not perfect.
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
                          : "bg-white shadow-[4px_4px_0px_0px_#1C1C14]"
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

              <ScreenCard>
                <div className="label text-ink/50">What this means</div>
                <p className="mt-2 text-sm leading-6 text-ink/80">
                  You picked <strong>{selectedMoodData.label}</strong>. That
                  usually means the next step should be small, quiet, and easy
                  to finish.
                </p>

                <button
                  type="button"
                  onClick={saveCheckIn}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-[1rem] border-[2.5px] border-ink bg-yellow px-4 py-3 text-sm font-black uppercase tracking-[0.08em] shadow-[4px_4px_0px_0px_#1C1C14] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  Save check-in
                  <CheckCircle2 className="h-4 w-4" />
                </button>
              </ScreenCard>
            </div>
          )}

          {activeTab === "reset" && (
            <div className="space-y-4">
              <div className="px-1">
                <div className="label text-ink/50">Reset library</div>
                <h2 className="mt-2 text-[1.8rem] leading-[1.02]">
                  Pick a reset that fits the next five minutes.
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
                      className={`flex w-full items-start gap-3 rounded-[1.35rem] border-[2.5px] border-ink p-4 text-left transition ${
                        active
                          ? "bg-ink text-white shadow-[6px_6px_0px_0px_#1C1C14]"
                          : "bg-white shadow-[4px_4px_0px_0px_#1C1C14]"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-ink ${
                          active ? "bg-yellow text-ink" : "bg-yellow/70 text-ink"
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
                            active ? "text-white/80" : "text-ink/70"
                          }`}
                        >
                          {reset.copy}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <ScreenCard className="bg-ink text-white">
                <div className="label text-white/55">Ready now</div>
                <div className="mt-2 text-lg font-black uppercase leading-[1.05]">
                  {selectedResetData.title}
                </div>
                <p className="mt-2 text-sm text-white/75">
                  {selectedResetData.copy}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab("home")}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-[1rem] border-[2.5px] border-white bg-yellow px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-ink transition active:translate-x-1 active:translate-y-1"
                >
                  Start reset
                  <Sparkles className="h-4 w-4" />
                </button>
              </ScreenCard>
            </div>
          )}

          {activeTab === "circles" && (
            <div className="space-y-4">
              <div className="px-1">
                <div className="label text-ink/50">Community circles</div>
                <h2 className="mt-2 text-[1.8rem] leading-[1.02]">
                  Join support spaces that feel safe.
                </h2>
                <p className="mt-3 text-sm text-ink/70">
                  {joinedCount} circle{joinedCount === 1 ? "" : "s"} joined.
                </p>
              </div>

              <div className="grid gap-3">
                {circles.map((circle) => {
                  const joined = joinedCircles.includes(circle.id);
                  return (
                    <ScreenCard
                      key={circle.id}
                      className={joined ? "bg-ink text-white" : "bg-white"}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-black uppercase tracking-[0.08em]">
                            {circle.title}
                          </div>
                          <p
                            className={`mt-2 text-sm ${
                              joined ? "text-white/75" : "text-ink/70"
                            }`}
                          >
                            {circle.copy}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleCircle(circle.id)}
                          className={`rounded-full border-[2px] border-ink px-3 py-1 text-[0.7rem] font-black uppercase tracking-[0.08em] transition ${
                            joined ? "bg-yellow text-ink" : "bg-safe text-white"
                          }`}
                        >
                          {joined ? "Joined" : "Join"}
                        </button>
                      </div>
                    </ScreenCard>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-4">
              <div className="px-1">
                <div className="label text-ink/50">Profile</div>
                <h2 className="mt-2 text-[1.8rem] leading-[1.02]">
                  Keep the app simple, private, and yours.
                </h2>
              </div>

              <ScreenCard className="bg-ink text-white">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-yellow text-ink">
                    <User className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg font-black">Ayomide</div>
                    <div className="text-sm text-white/70">
                      Private account on this device
                    </div>
                  </div>
                </div>
              </ScreenCard>

              <div className="grid gap-3 sm:grid-cols-3">
                <ScreenCard>
                  <div className="label text-ink/50">Check-ins</div>
                  <div className="mt-2 text-2xl font-black">14</div>
                </ScreenCard>
                <ScreenCard>
                  <div className="label text-ink/50">Streak</div>
                  <div className="mt-2 text-2xl font-black">4 days</div>
                </ScreenCard>
                <ScreenCard>
                  <div className="label text-ink/50">Focus</div>
                  <div className="mt-2 text-2xl font-black">Calm</div>
                </ScreenCard>
              </div>

              <ScreenCard>
                <div className="label text-ink/50">Settings</div>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between rounded-[1rem] bg-ink/5 px-3 py-3">
                    <span className="text-sm font-bold">Private by design</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between rounded-[1rem] bg-ink/5 px-3 py-3">
                    <span className="text-sm font-bold">Notifications</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between rounded-[1rem] bg-ink/5 px-3 py-3">
                    <span className="text-sm font-bold">Support contact</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </ScreenCard>
            </div>
          )}
        </div>

        <footer className="absolute inset-x-0 bottom-0 border-t-[2.5px] border-ink bg-[#f7f0dc]/95 px-3 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur">
          <div className="grid grid-cols-5 gap-2">
            {tabItems.map((tab) => (
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
