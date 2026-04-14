const features = [
  {
    title: "Daily Check-Ins",
    copy: "Quick mood pulses that build a gentle, honest baseline over time.",
  },
  {
    title: "Guided Support",
    copy: "Short, culturally grounded prompts designed for real Nigerian days.",
  },
  {
    title: "Therapist-Ready",
    copy: "When you need more, your story is already organized and ready.",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Check in",
    copy: "One minute to name how today actually feels.",
  },
  {
    label: "Step 2",
    title: "Ground",
    copy: "Pick a short reset that matches your mood.",
  },
  {
    label: "Step 3",
    title: "Care plan",
    copy: "A simple, repeatable routine for heavy weeks.",
  },
];

const testimonials = [
  {
    name: "Still River",
    role: "Product Designer, Lagos",
    quote:
      "It feels calm and honest. The check-ins are small but they keep me steady.",
  },
  {
    name: "Bright Dawn",
    role: "NYSC Corps Member",
    quote:
      "The routines are short enough to actually finish. That matters a lot.",
  },
  {
    name: "Quiet Ember",
    role: "Founder, Abuja",
    quote:
      "Soothewise gives me language for my headspace when I have none.",
  },
];

const circles = [
  "Burnout Recovery",
  "Exam Stress",
  "Mothers Circle",
  "Men's Wellness",
  "Grief & Loss",
  "General Support",
];

export default function HomePage() {
  return (
    <main>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="label">Soothewise</div>
            <h1>Private mental wellness support for heavy days.</h1>
            <p className="text-lg text-ink/80">
              A calm, culturally grounded space to check in, decompress, and
              find the next right step. Built for Nigeria and Africa. No
              backend needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="brutalist-border brutalist-shadow brutalist-hover brutalist-active rounded-lg bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-yellow">
                Start a check-in
              </button>
              <button className="brutalist-border brutalist-hover brutalist-active rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.05em]">
                See how it works
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <span className="brutalist-border rounded-full bg-white px-4 py-2">
                No backend required
              </span>
              <span className="brutalist-border rounded-full bg-white px-4 py-2">
                Built for mobile
              </span>
              <span className="brutalist-border rounded-full bg-white px-4 py-2">
                Private by design
              </span>
            </div>
          </div>
          <div className="card-surface space-y-6 p-8">
            <div className="label">Today’s Pulse</div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-xl2 border-[3px] border-ink bg-white px-4 py-3">
                <div>
                  <div className="text-sm font-bold uppercase">Mood</div>
                  <div className="text-2xl">🙂</div>
                </div>
                <div className="text-sm text-ink/70">Steady, slightly tired</div>
              </div>
              <div className="flex items-center justify-between rounded-xl2 border-[3px] border-ink bg-white px-4 py-3">
                <div>
                  <div className="text-sm font-bold uppercase">Energy</div>
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="text-sm text-ink/70">Low but manageable</div>
              </div>
              <div className="rounded-xl2 border-[3px] border-ink bg-white px-4 py-3 text-sm text-ink/70">
                Suggested reset: 5-minute breathing for anxiety
              </div>
            </div>
            <div className="rounded-xl2 border-[3px] border-ink bg-yellow px-4 py-3 text-sm font-semibold">
              You are not behind. You are carrying a lot.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="label">What you get</div>
              <h2>Small steps, steady care.</h2>
            </div>
            <p className="max-w-xl text-lg text-ink/70">
              Designed to feel like a steady companion, not another dashboard
              you have to maintain.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card-surface p-6">
                <h3>{feature.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="label">How it works</div>
          <h2 className="mt-3">A simple loop you can keep.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="card-surface p-6">
                <div className="label">{step.label}</div>
                <h3 className="mt-2">{step.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="label">Community circles</div>
              <h2 className="mt-3">Find a space that feels safe.</h2>
            </div>
            <p className="max-w-xl text-lg text-ink/70">
              Peer spaces for students, professionals, parents, and anyone
              carrying too much.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {circles.map((circle) => (
              <div key={circle} className="card-surface p-5">
                <div className="text-sm font-bold uppercase">{circle}</div>
                <p className="mt-2 text-sm text-ink/70">
                  Moderated, supportive, and easy to join.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="label">Real voices</div>
          <h2 className="mt-3">People who found a softer pace.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-surface p-6">
                <p className="text-sm text-ink/80">“{testimonial.quote}”</p>
                <div className="mt-4 text-sm font-bold">
                  {testimonial.name}
                </div>
                <div className="text-xs text-ink/60">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="label">Ready when you are</div>
            <h2 className="mt-3">Start with a one-minute check-in.</h2>
          </div>
          <button className="brutalist-border brutalist-shadow brutalist-hover brutalist-active rounded-lg bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-yellow">
            Begin now
          </button>
        </div>
      </section>
    </main>
  );
}
