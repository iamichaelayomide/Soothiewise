import {
  PrismaClient,
  SessionFormat,
  CircleType,
  ContentFormat,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.therapist.createMany({
    data: [
      {
        name: "Dr. Amaka Osei",
        title: "Clinical Psychologist",
        bio: "Burnout and anxiety specialist helping professionals reset gently.",
        email: "amaka@soothewise.app",
        city: "Lagos",
        languages: ["English", "Yoruba"],
        sessionFormats: [SessionFormat.TEXT, SessionFormat.VIDEO],
        pricePerSession: 8500,
        isVerified: true,
      },
      {
        name: "Emeka Nwosu",
        title: "MSc, Trauma Therapist",
        bio: "Grief and trauma support with practical tools for healing.",
        email: "emeka@soothewise.app",
        city: "Abuja",
        languages: ["English", "Igbo"],
        sessionFormats: [SessionFormat.TEXT],
        pricePerSession: 6000,
        isVerified: true,
      },
      {
        name: "Fatima Al-Hassan",
        title: "Family Therapist",
        bio: "Faith-sensitive counseling for family stress and postpartum support.",
        email: "fatima@soothewise.app",
        city: "Kano",
        languages: ["English", "Hausa"],
        sessionFormats: [SessionFormat.TEXT],
        pricePerSession: 5500,
        isVerified: true,
      },
      {
        name: "Dr. Tunde Abiodun",
        title: "Clinical Psychologist",
        bio: "Men's wellness and burnout recovery with direct, grounded care.",
        email: "tunde@soothewise.app",
        city: "Lagos",
        languages: ["English", "Yoruba"],
        sessionFormats: [SessionFormat.VIDEO, SessionFormat.AUDIO],
        pricePerSession: 10000,
        isVerified: true,
      },
      {
        name: "Chisom Eze",
        title: "Women's Health Counselor",
        bio: "Postpartum and women's wellness support with warmth and clarity.",
        email: "chisom@soothewise.app",
        city: "Port Harcourt",
        languages: ["English"],
        sessionFormats: [SessionFormat.TEXT, SessionFormat.AUDIO],
        pricePerSession: 7000,
        isVerified: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: [
      {
        email: "green_user@demo.com",
        displayName: "Bright Dawn",
        isAnonymous: false,
      },
      {
        email: "amber_user@demo.com",
        displayName: "Still River",
        isAnonymous: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.communityCircle.createMany({
    data: [
      {
        name: "Student Support",
        type: CircleType.STUDENTS,
        description: "A calm space for school pressure and exam stress.",
        memberCount: 124,
      },
      {
        name: "Burnout Recovery",
        type: CircleType.PROFESSIONALS,
        description: "For professionals feeling drained or overwhelmed.",
        memberCount: 88,
      },
      {
        name: "Mothers Circle",
        type: CircleType.MOTHERS,
        description: "A quiet corner for postpartum and parenting emotions.",
        memberCount: 62,
      },
      {
        name: "Grief & Loss",
        type: CircleType.GRIEF,
        description: "Hold space for grief without being rushed.",
        memberCount: 47,
      },
      {
        name: "Men's Wellness",
        type: CircleType.MEN,
        description: "Direct, supportive conversations for men.",
        memberCount: 53,
      },
      {
        name: "General Support",
        type: CircleType.GENERAL,
        description: "Open support for whatever is heavy right now.",
        memberCount: 210,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.contentModule.createMany({
    data: [
      {
        title: "Burnout Reset 101",
        description: "A short reset to help you unclench after heavy weeks.",
        format: ContentFormat.TEXT,
        category: "burnout",
        tags: ["burnout", "work"],
        intensity: "medium",
        durationMins: 10,
        isFeatured: true,
      },
      {
        title: "Anxiety Reset",
        description: "A guided breathwork to slow a racing mind.",
        format: ContentFormat.EXERCISE,
        category: "anxiety",
        tags: ["anxiety", "breath"],
        intensity: "low",
        durationMins: 7,
      },
      {
        title: "Sleep Wind Down",
        description: "A 5-minute ritual for nights that feel too loud.",
        format: ContentFormat.AUDIO,
        category: "sleep",
        tags: ["sleep"],
        intensity: "low",
        durationMins: 5,
      },
      {
        title: "Grief Reflection",
        description: "Naming what you miss and what still matters.",
        format: ContentFormat.JOURNAL_PROMPT,
        category: "grief",
        tags: ["grief"],
        intensity: "medium",
        durationMins: 12,
      },
      {
        title: "Work Decompression",
        description: "Release the day before it follows you home.",
        format: ContentFormat.EXERCISE,
        category: "work",
        tags: ["burnout"],
        intensity: "low",
        durationMins: 8,
      },
      {
        title: "Relationship Repair",
        description: "A guide for the conversations you keep avoiding.",
        format: ContentFormat.TEXT,
        category: "relationships",
        tags: ["relationships"],
        intensity: "high",
        durationMins: 15,
      },
      {
        title: "Money Anxiety Check-in",
        description: "A grounded prompt for financial pressure.",
        format: ContentFormat.JOURNAL_PROMPT,
        category: "money",
        tags: ["anxiety", "money"],
        intensity: "medium",
        durationMins: 10,
      },
      {
        title: "Exam Pressure Reset",
        description: "Short focus reset for students under pressure.",
        format: ContentFormat.EXERCISE,
        category: "students",
        tags: ["exam"],
        intensity: "low",
        durationMins: 6,
      },
      {
        title: "Gentle Morning Check-in",
        description: "A 3-minute mood check-in to start your day.",
        format: ContentFormat.EXERCISE,
        category: "checkin",
        tags: ["mood"],
        intensity: "low",
        durationMins: 3,
      },
      {
        title: "Loneliness Reframe",
        description: "A soft reflection for days that feel too quiet.",
        format: ContentFormat.TEXT,
        category: "loneliness",
        tags: ["loneliness"],
        intensity: "medium",
        durationMins: 9,
      },
      {
        title: "Postpartum Pause",
        description: "A gentle prompt for new mothers finding their footing.",
        format: ContentFormat.JOURNAL_PROMPT,
        category: "postpartum",
        tags: ["postpartum"],
        intensity: "medium",
        durationMins: 8,
      },
      {
        title: "Men's Clarity Reset",
        description: "Direct steps to slow down and reset your headspace.",
        format: ContentFormat.TEXT,
        category: "men",
        tags: ["men"],
        intensity: "medium",
        durationMins: 7,
      },
      {
        title: "Faith-Sensitive Breath",
        description: "Breathing with gentle reflection when faith is present.",
        format: ContentFormat.EXERCISE,
        category: "faith",
        tags: ["faith"],
        intensity: "low",
        durationMins: 6,
      },
      {
        title: "Body Scan for Anxiety",
        description: "A slow scan to notice and soften body tension.",
        format: ContentFormat.AUDIO,
        category: "anxiety",
        tags: ["anxiety"],
        intensity: "low",
        durationMins: 9,
      },
      {
        title: "Evening Gratitude",
        description: "Three small things that mattered today.",
        format: ContentFormat.JOURNAL_PROMPT,
        category: "reflection",
        tags: ["gratitude"],
        intensity: "low",
        durationMins: 5,
      },
      {
        title: "Boundaries at Work",
        description: "A short guide to protect your energy at work.",
        format: ContentFormat.TEXT,
        category: "work",
        tags: ["boundaries"],
        intensity: "medium",
        durationMins: 11,
      },
      {
        title: "Heartbreak Hold",
        description: "Naming what hurts without rushing the healing.",
        format: ContentFormat.TEXT,
        category: "relationships",
        tags: ["heartbreak"],
        intensity: "high",
        durationMins: 12,
      },
      {
        title: "Sleep Signals",
        description: "Track patterns that change your sleep quality.",
        format: ContentFormat.TEXT,
        category: "sleep",
        tags: ["sleep"],
        intensity: "medium",
        durationMins: 10,
      },
      {
        title: "Quick Grounding 5-4-3-2-1",
        description: "A classic grounding sequence for high moments.",
        format: ContentFormat.EXERCISE,
        category: "grounding",
        tags: ["crisis"],
        intensity: "high",
        durationMins: 4,
      },
      {
        title: "Burnout Recovery Plan",
        description: "Five-day reset with small, doable steps.",
        format: ContentFormat.TEXT,
        category: "burnout",
        tags: ["burnout"],
        intensity: "medium",
        durationMins: 15,
        isFeatured: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.resource.createMany({
    data: [
      {
        title: "SURPIN Nigeria",
        type: "crisis_line",
        phone: "0800-850-0020",
        country: "Nigeria",
        isEmergency: true,
      },
      {
        title: "Lagos State Psychiatric Hospital",
        type: "hospital",
        phone: "01-8034-836",
        city: "Lagos",
        country: "Nigeria",
      },
      {
        title: "Mentally Aware Nigeria Initiative (MANI)",
        type: "ngo",
        url: "https://www.mymind.ng",
        country: "Nigeria",
      },
      {
        title: "She Writes Woman",
        type: "ngo",
        url: "https://www.shewriteswoman.org",
        country: "Nigeria",
      },
      {
        title: "Nigeria Suicide Prevention Initiative",
        type: "crisis_line",
        phone: "08062106493",
        country: "Nigeria",
        isEmergency: true,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
