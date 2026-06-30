export const TABS = [
  "Profile",
  "Outfits",
  "Events",
  "Photocards",
  "Merch",
  "Checklist",
  "Others",
] as const;

export type TabId = (typeof TABS)[number];

export const profileDetails = {
  fullName: "Foo Yi Shyan",
  stageName: "Yishyan",
  title: "KLP48 Captain",
  birthday: "June 28, 2004",
  birthplace: "Perak, Malaysia",
  height: `165 cm (5'5")`,
  zodiac: "Cancer",
  position: "Captain",
  hobbies: ["Skating", "Singing", "Vlogging", "Painting", "Travelling"],
  specialSkills: ["Singing", "Dancing"],
  charmPoints: ["Eyes", "Smile"],
  catchphrase:
    "Hi everyone, saya Yi Shyan. Manis sepertimu simpan saya di dalam hati kamu.",
  catchphraseTranslation:
    "(Hi everyone, I am Yi Shyan. Sweet like you keep me in your heart.)",
  social: {
    instagram: {
      label: "@yishyan_klp48",
      href: "https://www.instagram.com/yishyan_klp48",
    },
    twitter: {
      label: "@Yishyan_klp48",
      href: "https://x.com/Yishyan_klp48",
    },
    tiktok: {
      label: "@https.shyan",
      href: "https://www.tiktok.com/@https.shyan",
    },
  },
};

export type Outfit = {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
};

export const outfitCategories = [
  {
    id: "uniform",
    title: "Official Uniforms",
    icon: "👗",
    count: 5,
    outfits: [
      {
        id: "heavy-rotation",
        name: "Heavy Rotation",
        description: "KLP48 debut single and Heavy Rotation single uniform",
        color: "from-emerald-500 to-emerald-600",
        image: "/images/outfits/heavy-rotation.jpg",
      },
      {
        id: "alasanku-maybe",
        name: "Alasanku Maybe",
        description: "Alasanku Maybe KLP48 single uniform",
        color: "from-pink-500 to-rose-500",
        image: "/images/outfits/alasanku-maybe.jpg",
      },
      {
        id: "oh-my-pumpkin",
        name: "Oh My Pumpkin",
        description: "Oh! My Pumpkin AKB48 single uniform",
        color: "from-orange-400 to-amber-500",
        image: "/images/outfits/oh-my-pumpkin.jpg",
      },
      {
        id: "green-flash",
        name: "Green Flash",
        description: "  Green Flash KLP48 single uniform",
        color: "from-lime-400 to-green-500",
        image: "/images/outfits/green-flash.jpg",
      },
      {
        id: "kerana-ku-suka",
        name: "Kerana Ku Suka",
        description: "KLP48 Gen2 debut and Kerana Ku Suka single uniform",
        color: "from-sky-400 to-sky-500",
        image: "/images/outfits/kerana-ku-suka.jpg",
      },
    ],
  },

  {
    id: "theatre",
    title: "Theatre & KLP Time",
    icon: "🎭",
    count: 16,
    outfits: [
      {
        id: "cny-2025",
        name: "Chinese New Year 2025",
        description: "",
        color: "from-orange-500 to-red-500",
        image: "/images/outfits/cny-2025.jpg",
      },
      {
        id: "klptime-fight20251",
        name: "KLP Time 2025",
        description: "",
        color: "from-purple-500 to-violet-500",
        image: "/images/outfits/klptime-fight20251.jpg",
      },
      {
        id: "klptime-fight20253",
        name: "KLP Time 2025",
        description: "",
        color: "from-fuchsia-500 to-pink-500",
        image: "/images/outfits/klptime-fight20253.jpg",
      },
      {
        id: "klptime-fight20252",
        name: "KLP Time 2025",
        description: "",
        color: "from-lime-500 to-emerald-500",
        image: "/images/outfits/klptime-fight20252.jpg",
      },
      {
        id: "birthday-party",
        name: "Yishyan Birthday Party 2025",
        description: "",
        color: "from-pink-500 to-rose-500",
        image: "/images/outfits/birthday-party.jpg",
      },
      {
        id: "cny-2026",
        name: "Meet & Greet 2026",
        description: "Chinese New Year 2026 Theme",
        color: "from-purple-500 to-indigo-500",
        image: "/images/outfits/cny-20261.jpg",
      },
      {
        id: "klp-tuition-2026",
        name: "KLP Tuition 2026",
        description: "Teacher Yishyan",
        color: "from-gray-600 to-stone-700",
        image: "/images/outfits/klp-tuition-2026.jpg",
      },
      {
        id: "raya-2026",
        name: "Meet & Greet 2026",
        description: "Cheki Raya Theme",
        color: "from-red-500 to-pink-600",
        image: "/images/outfits/raya-2026.jpg",
      },
      {
        id: "sport",
        name: "Sport Day 2026",
        description: "Blue Team Captain",
        color: "from-sky-400 to-sky-500",
        image: "/images/outfits/sport.jpg",
      },
      {
        id: "liveshow",
        name: "Mini Live Show 2026",
        description: "Heavy Rotation Ishou Comeback",
        color: "from-green-500 to-emerald-500",
        image: "/images/outfits/liveshow.jpg",
      },
      {
        id: "miss-klp48",
        name: "KLP Time 2026",
        description: "Miss KLP48",
        color: "from-stone-700 to-amber-600",
        image: "/images/outfits/miss-klp48.jpg",
      },
      {
        id: "meet-greet",
        name: "Meet & Greet 2026",
        description: "Message Card",
        color: "from-amber-400 to-yellow-500",
        image: "/images/outfits/meet-greet.jpg",
      },
      {
        id: "personal-sign",
        name: "Meet & Greet 2026",
        description: "Sign Personal Item",
        color: "from-violet-400 to-fuchsia-500",
        image: "/images/outfits/personal-sign.jpg",
      },
      {
        id: "klp-time",
        name: "KLP Time 2026",
        description: "Dance Challenge 2026",
        color: "from-indigo-500 to-blue-500",
        image: "/images/outfits/klp-time.jpg",
      },
      {
        id: "fan-time",
        name: "KLP Time 2026",
        description: "Fan Time Fun Time",
        color: "from-yellow-400 to-orange-400",
        image: "/images/outfits/fan-time.jpg",
      },
      {
        id: "birthday-party2026",
        name: "Yishyan Birthday Party 2026",
        description: "",
        color: "from-teal-400 via-sky-300 to-white",
        image: "/images/outfits/birthday-party2026.jpg",
      },


    ],
  },

  {
    id: "casual",
    title: "Casual & Outside Events",
    icon: "🌸",
    count: 6,
    outfits: [
      
      {
        id: "okinawa-2025",
        name: "Okinawa 2025",
        description: "",
        color: "from-teal-500 to-cyan-500",
        image: "/images/outfits/okinawa-2025.jpg",
      },
      {
        id: "akb48-theatre-visit-2025",
        name: "AKB48 Theatre Visit 2025",
        description: "",
        color: "from-rose-500 to-red-500",
        image: "/images/outfits/akb48-theatre-visit-2025.jpg",
      },
      {
        id: "shanghai-2025",
        name: "Shanghai 2025",
        description: "",
        color: "from-purple-500 to-violet-500",
        image: "/images/outfits/shanghai-2025.jpg",
      },
      {
        id: "genting-2026",
        name: "Genting 2026",
        description: "",
        color: "from-amber-500 to-orange-500",
        image: "/images/outfits/genting-2026.jpg",
      },
      {
        id: "yishyan-update-2026-1",
        name: "Yishyan Update",
        description: "16 Feb 2026",
        color: "from-stone-700 to-amber-600",
        image: "/images/outfits/yishyan-update-2026-1.jpg",
      },
      {
        id: "yishyan-update-2026-2",
        name: "Yishyan Update",
        description: "23 Feb 2026",
        color: "from-gray-500 to-zinc-600",
        image: "/images/outfits/yishyan-update-2026-2.jpg",
      },
    ],
  },

  {
    id: "special",
    title: "Special Events",
    icon: "✨",
    count: 6,
    outfits: [
      
      {
        id: "bon-odori20251",
        name: "Bon Odori 2025",
        description: "Yishyan in Kimono Version 1",
        color: "from-orange-500 to-red-500",
        image: "/images/outfits/special-event1.jpg",
      },
      {
        id: "bon-odori20252",
        name: "Bon Odori 2025",
        description: "Yishyan in Kimono Version 2",
        color: "from-sky-500 to-indigo-500",
        image: "/images/outfits/special-event2.jpg",
      },
      {
        id: "anniversary-2025",
        name: "1st Anniversary 2025",
        description: "Yishyan in KLP48 Anniversary T-shirt",
        color: "from-emerald-500 to-green-500",
        image: "/images/outfits/anniversary-2025.jpg",
      },
      {
        id: "special-event3",
        name: "Rumah Terbuka Raya Mantayay 2026",
        description: "",
        color: "from-teal-500 to-cyan-500",
        image: "/images/outfits/special-event3.jpg",
      },
      {
        id: "special-event",
        name: "KLP 520 Dinner 2026",
        description: "",
        color: "from-pink-500 to-rose-500",
        image: "/images/outfits/special-event.jpg",
      },
      {
        id: "birthday-wish2026",
        name: "Birthday Wish 2026",
        description: "",
        color: "from-white via-blue-100 to-blue-400",
        image: "/images/outfits/birthday-wish2026.jpg",
      },
    ],
  },

] as const;

export type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  year: number;
  upcoming?: boolean;
};

export const events: EventItem[] = [
  {
    id: "cosmic-spring",
    title: "Cos-mic Spring Festival",
    location: "Lalaport BBCC",
    date: "Sat, Apr 25, 2026",
    year: 2026,
    upcoming: true,
  },
  {
    id: "deruan-kasih",
    title: "Deruan Kasih Aidilfitri",
    location: "Lalaport BBCC",
    date: "Sun, Apr 5, 2026",
    year: 2026,
    upcoming: true,
  },
  {
    id: "xuan-fan-party",
    title: "XUAN Curry Fishball x Entertainment Fan Party",
    location: "Centre Court, Pavillion KL",
    date: "Sat, Jan 17, 2026",
    year: 2026,
  },
  {
    id: "anime-fantasia",
    title: "Anime Fantasia",
    location: "Resorts World Genting, Pahang",
    date: "Sat, Jan 3, 2026",
    year: 2026,
  },
  {
    id: "klp-debut-showcase",
    title: "KLP48 Debut Showcase",
    location: "Zepp Kuala Lumpur",
    date: "Sat, Aug 24, 2025",
    year: 2025,
  },
  {
    id: "fan-meet-kl",
    title: "KLP48 Fan Meeting Kuala Lumpur",
    location: "The Exchange TRX",
    date: "Sun, Jun 15, 2025",
    year: 2025,
  },
  {
    id: "anniversary-live",
    title: "KLP48 1st Anniversary Mini Live",
    location: "KLP48 Theatre",
    date: "Sat, Dec 14, 2024",
    year: 2024,
  },
];

export const theatreShows = [
  { title: "Theatre Meet & Greet: Cheki Session", date: "Sun, Apr 26, 2026" },
  { title: "KLP Time: Miss KLP", date: "Sun, Apr 19, 2026" },
  { title: "KLP48 Mini Live show", date: "Sat, Apr 11, 2026" },
  { title: "KLP Time: Variety Program", date: "Sun, Apr 5, 2026" },
  { title: "KLP Time: Quiz Show", date: "Sat, Mar 28, 2026" },
  { title: "Mini Sports Day", date: "Sun, Mar 22, 2026" },
];


export type MajorEvent = {
  id: string;
  date: string;
  title: string;
  venue: string;
  category: string[];
};

export type TheatreEvent = {
  id: string;
  date: string;
  title: string;
  venue: string;
  category: string;
};



export const photocardSets = [
  {
    id: 1,
    title: "First Ishou",
    releaseDate: "August 2024",
    description: "The debut photocard series",
    cards: ["/images/photocards/first-ishou-1.jpg"],
  },

  {
    id: 2,
    title: "AMG",
    releaseDate: "August 2024",
    description: "AMG special edition",
    cards: ["/images/photocards/amg-1.jpg"],
  },

  {
    id: 3,
    title: "Cosmic",
    releaseDate: "September 2024",
    description: "Heavy Rotation Ishou Edition",
    cards: ["/images/photocards/cosmic-1.jpg"],
  },

  {
    id: 4,
    title: "Halloween 2025",
    releaseDate: "October 2024",
    description: "Spooky Halloween edition",
    cards: [
      "/images/photocards/halloween-1.jpg",
      "/images/photocards/halloween-2.jpg",
    ],
  },

  {
    id: 5,
    title: "Pokemon Run",
    releaseDate: "November 2024",
    description: "Pokemon collaboration",
    cards: ["/images/photocards/pokemon-run-1.jpg"],
  },

  {
    id: 6,
    title: "M6",
    releaseDate: "December 2024",
    description: "MLBB M6 special series",
    cards: [
      "/images/photocards/m6-1.jpg",
      "/images/photocards/m6-2.jpg",
      "/images/photocards/m6-3.jpg",
    ],
  },

  {
    id: 7,
    title: "Heavy Rotation",
    releaseDate: "December 2024",
    description: "Heavy Rotation MV Outfit Series",
    cards: [
      "/images/photocards/heavy-rotation-1.jpg",
      "/images/photocards/heavy-rotation-2.jpg",
      "/images/photocards/heavy-rotation-3.jpg",
    ],
  },

  {
    id: 8,
    title: "Valentine 2025",
    releaseDate: "February 2025",
    description: "Valentine's Day edition",
    cards: [
      "/images/photocards/valentine-1.jpg",
      "/images/photocards/valentine-2.jpg",
      "/images/photocards/valentine-3.jpg",
    ],
  },

  {
    id: 9,
    title: "School Edition",
    releaseDate: "March 2025",
    description: "School themed collection",
    cards: [
      "/images/photocards/school-1.jpg",
      "/images/photocards/school-2.jpg",
    ],
  },

  {
    id: 10,
    title: "9090 Collab",
    releaseDate: "March 2025",
    description: "9090 collaboration",
    cards: [
      "/images/photocards/9090-1.jpg",
      "/images/photocards/9090-2.jpg",
    ],
  },

  {
    id: 11,
    title: "Office Siren",
    releaseDate: "April 2025",
    description: "Office Siren concept",
    cards: [
      "/images/photocards/office-siren-1.jpg",
      "/images/photocards/office-siren-2.jpg",
      "/images/photocards/office-siren-3.jpg",
    ],
  },

  {
    id: 12,
    title: "OOTD",
    releaseDate: "July 2025",
    description: "Outfit of the Day series",
    cards: [
      "/images/photocards/ootd-1.jpg",
      "/images/photocards/ootd-2.jpg",
      "/images/photocards/ootd-3.jpg",
    ],
  },

  {
    id: 13,
    title: "Yukata",
    releaseDate: "July 2025",
    description: "Traditional Yukata edition",
    cards: [
      "/images/photocards/yukata-1.jpg",
      "/images/photocards/yukata-2.jpg",
      "/images/photocards/yukata-3.jpg",
    ],
  },

  {
    id: 14,
    title: "1st Anniversary",
    releaseDate: "August 2025",
    description: "First anniversary special",
    cards: [
      "/images/photocards/anniversary-1.jpg",
      "/images/photocards/anniversary-2.jpg",
      "/images/photocards/anniversary-3.jpg",
    ],
  },

  {
    id: 15,
    title: "Nekomimi",
    releaseDate: "November 2025",
    description: "Cat ears themed edition",
    cards: [
      "/images/photocards/nekomimi-1.jpg",
      "/images/photocards/nekomimi-2.jpg",
      "/images/photocards/nekomimi-3.jpg",
    ],
  },

  {
    id: 16,
    title: "Dream Stage TCG",
    releaseDate: "December 2025",
    description: "Trading Card Game Special Edition",
    isSpecial: true,
    cards: [
      "/images/photocards/dream-stage-1.jpg",
    ],
  },

  {
    id: 17,
    title: "Meido",
    releaseDate: "January 2026",
    description: "Maid outfit edition",
    cards: [
      "/images/photocards/meido-1.jpg",
      "/images/photocards/meido-2.jpg",
      "/images/photocards/meido-3.jpg",
    ],
  },

  {
    id: 18,
    title: "New Year 2026",
    releaseDate: "March 2026",
    description: "New Year celebration",
    cards: [
      "/images/photocards/newyear-2026-1.jpg",
      "/images/photocards/newyear-2026-2.jpg",
      "/images/photocards/newyear-2026-3.jpg",
    ],
  },

  {
    id: 19,
    title: "Hearts",
    releaseDate: "April 2026",
    description: "Hearts themed collection",
    cards: [
      "/images/photocards/hearts-1.jpg",
      "/images/photocards/hearts-2.jpg",
      "/images/photocards/hearts-3.jpg",
    ],
  },

  {
    id: 20,
    title: "Pesona Melayu",
    releaseDate: "May 2026",
    description: "Melayu outfit collection",
    cards: [
      "/images/photocards/pesona-melayu-1.jpg",
      "/images/photocards/pesona-melayu-2.jpg",
      "/images/photocards/pesona-melayu-3.jpg",
    ],
  },

  
];

export const photocardStats = {
  totalSeries: 20,
  totalCards: 44,
  specialCards: 1,
};

export type MerchItem = {
  id: string;
  name: string;
};

export type MerchCategory = {
  id: string;
  title: string;
  items: MerchItem[];
};

export const merchCategories: MerchCategory[] = [
  {
    id: "special",
    title: "Special Merch",
    items: [{ id: "yi-shyan-hoodie", name: "Yi Shyan Hoodie" }],
  },
  
  {
    id: "concert",
    title: "Concert Merchandise",
    items: [
      { id: "bloom-tshirt", name: "BLOOM Concert 1st Anniversary T-Shirt" },
      { id: "bloom-towel", name: "BLOOM Concert 1st Anniversary Towel" },
      { id: "bloom-lightstick", name: "Bloom Concert 1st Anniversary Lightstick" },
      { id: "bloom-l-folder", name: "Bloom Concert 1st Anniversary L Folder File" },
      { id: "super-bash-fan", name: "Super Bash Concert Fan" },
      { id: "super-bash-lightstick", name: "Super Bash Concert Lightstick" },
      { id: "super-bash-poster", name: "Super Bash Concert Poster" },
    ],
  },
  {
    id: "collectibles",
    title: "Collectibles",
    items: [
      { id: "acrylic-stand-hr", name: "Arcylic Stand – Heavy Rotation Ishou" },
      { id: "acrylic-stand-alasanku", name: "Arcylic Stand – Alasanku Maybe Ishou" },
      { id: "yishyan-flag", name: "Yishyan Flag" },
      { id: "badge-first-cry", name: "Badge Collection 1 – First Cry" },
      { id: "badge-cosmic", name: "Badge Collection 2 – Cosmic" },
      { id: "badge-nekomimi", name: "Badge Collection 3 – Nekomimi design" },
      { id: "badge-birthday-2026", name: "Badge Collection 4 – Birthday 2026" },
      { id: "nekomimi-l-folder", name: "Nekomimi L-Shape Folder/File" },
      { id: "holo-ticket-green-flash", name: "Holo ticket – Green Flash Ishou" },
      { id: "pvc-card-gen1-2025", name: "PVC Transparent Card Gen 1 2025" },
    ],
  },
  {
    id: "display",
    title: "Display Items",
    items: [
      {
        id: "stage-acrylic-bg",
        name: "Stage Acrylic Background (5-member stand holder)",
      },
    ],
  },
  
];

/** Flat list of all merch (all categories). */
export const merchItems: MerchItem[] = merchCategories.flatMap((c) => c.items);

/** Collectibles only — used for checklist merchandise collection. */
export const collectibleItems: MerchItem[] =
  merchCategories.find((c) => c.id === "collectibles")?.items ?? [];

export type ChecklistItem = {
  id: string;
  label: string;
  category: "Photocards" | "Merch" | "Special";
  subcategory?: string;
  rarity?: "Common" | "Rare" | "Ultra Rare";
};

export function buildChecklistItems(): ChecklistItem[] {
  const items: ChecklistItem[] = [];

  photocardSets.forEach((set) => {
    for (let i = 0; i < set.cards.length; i++) {
      items.push({
        id: `pc-${set.id}-${i + 1}`,
        label: `${set.title} — Card ${i + 1}`,
        category: "Photocards",
        rarity: i === 0 ? "Rare" : "Common",
      });
    }
  });

  collectibleItems.forEach((m) => {
    items.push({
      id: `merch-${m.id}`,
      label: m.name,
      category: "Merch",
      subcategory: "Collectibles",
    });
  });

  items.push({
    id: "special-yishyan-hoodie",
    label: "Yishyan Official Hoodie",
    category: "Special",
    rarity: "Ultra Rare",
  });

  return items;
}

export const othersLinks = [
  {
    title: "KLP48 Official Website",
    description: "Official group news and member profiles",
    href: "https://klp48.my",
    icon: "🌐",
  },
  {
    title: "KLP48 Theatre",
    description: "Theatre schedule and ticket information",
    href: "https://klp48.my",
    icon: "🎭",
  },
  {
    title: "Yishyan on Instagram",
    description: "Latest photos and updates",
    href: "https://www.instagram.com/yishyan_klp48",
    icon: "📷",
  },
  {
    title: "Fan Guide",
    description: "Tips for theatre visits, cheki, and fan etiquette",
    href: "#",
    icon: "📖",
  },
];

export const fanNotes = [
  "Replace placeholder images in public/images/ with your own photos.",
  "Checklist progress is saved in your browser (local storage).",
  "Tap photocards on the Photocards tab to flip them.",
];

export const majorEvents: MajorEvent[] = [
  {
    id: "acg-matsuri-2024-08-17",
    date: "2024-08-17",
    title: "ACG Matsuri",
    venue: "LaLaport BBCC",
    category: ["First Appearance"],
  },
  {
    id: "first-cry-debut-concert-2024-08-18",
    date: "2024-08-18",
    title: "First Cry Debut Concert",
    venue: "ZEPP Kuala Lumpur",
    category: ["Special Event"],
  },
  {
    id: "animangaki-2024-08-23",
    date: "2024-08-23",
    title: "Animangaki",
    venue: "MIECC",
    category: ["Press Conference", "Tencho"],
  },
  {
    id: "animangaki-2024-08-24",
    date: "2024-08-24",
    title: "Animangaki",
    venue: "MIECC",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "cos-mic-2024-09-14",
    date: "2024-09-14",
    title: "COS-MIC",
    venue: "Sunway Pyramid",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "cos-mic-2024-09-15",
    date: "2024-09-15",
    title: "COS-MIC",
    venue: "Sunway Pyramid",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "cos-mic-2024-09-16",
    date: "2024-09-16",
    title: "COS-MIC",
    venue: "Sunway Pyramid",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "klp48-artistic-co-beaute-expo-2024-10-05",
    date: "2024-10-05",
    title: "KLP48 x ARTISTIC & CO @ Beaute Expo Malaysia 2024",
    venue: "KLCC",
    category: ["Talk Show", "Tencho"],
  },
  {
    id: "v-muse-2024-10-13",
    date: "2024-10-13",
    title: "V-Muse",
    venue: "JioSpace",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "monster-lab-2024-10-26",
    date: "2024-10-26",
    title: "Monster Lab",
    venue: "LaLaport BBCC",
    category: ["Meet & Greet", "Talk Show"],
  },
  {
    id: "monster-lab-2024-10-27",
    date: "2024-10-27",
    title: "Monster Lab",
    venue: "LaLaport BBCC",
    category: ["Meet & Greet", "Talk Show"],
  },
  {
    id: "jkt48-theatre-visit-2024-10-30",
    date: "2024-10-30",
    title: "JKT48 Theatre Visit",
    venue: "Jakarta, Indonesia",
    category: ["Special Event"],
  },
  {
    id: "ddt-pro-wrestling-2024-11-04",
    date: "2024-11-04",
    title: "DDT Pro Wrestling",
    venue: "Japan",
    category: ["Live Performance"],
  },
  {
    id: "baseball-event-2024-11-16",
    date: "2024-11-16",
    title: "Baseball Event",
    venue: "Japan",
    category: ["Meet & Greet", "Talk Show"],
  },
  {
    id: "m6-carnival-2024-12-15",
    date: "2024-12-15",
    title: "M6 Carnival",
    venue: "Bukit Jalil",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "comic-fiesta-2024-12-21",
    date: "2024-12-21",
    title: "Comic Fiesta 2024",
    venue: "KLCC",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "comic-fiesta-2024-12-22",
    date: "2024-12-22",
    title: "Comic Fiesta 2024",
    venue: "KLCC",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "lalaport-neon-nye-countdown-2024-12-28",
    date: "2024-12-28",
    title: "LaLaport Neon NYE Countdown Event",
    venue: "LaLaport BBCC",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "lalaport-neon-nye-countdown-2024-12-29",
    date: "2024-12-29",
    title: "LaLaport Neon NYE Countdown Event",
    venue: "LaLaport BBCC",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "my-beauty-cosmetics-expo-2025-03-01",
    date: "2025-03-01",
    title: "My Beauty & Cosmetics Expo 2025",
    venue: "Mid Valley Exhibition Centre",
    category: ["Meet & Greet"],
  },
  {
    id: "my-beauty-cosmetics-expo-2025-03-02",
    date: "2025-03-02",
    title: "My Beauty & Cosmetics Expo 2025",
    venue: "Mid Valley Exhibition Centre",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "klp-time-group-cheki-2025-03-16",
    date: "2025-03-16",
    title: "KLP Time! Group Cheki",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Talk Show", "Meet & Greet"],
  },
  {
    id: "klp-time-group-cheki-2025-03-21",
    date: "2025-03-21",
    title: "KLP Time! Group Cheki",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Talk Show", "Meet & Greet"],
  },
  {
    id: "klp-x-9090-2025-03-23",
    date: "2025-03-23",
    title: "KLP X 9090",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Tencho"],
  },
  {
    id: "klp-time-group-cheki-2025-03-28",
    date: "2025-03-28",
    title: "KLP Time! Group Cheki",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Talk Show", "Meet & Greet"],
  },
  {
    id: "girls-groove-innovation-2025-04-06",
    date: "2025-04-06",
    title: "Girls Groove Innovation",
    venue: "Okinawa, Japan",
    category: ["Live Performance"],
  },
  {
    id: "klp-time-competition-2025-04-12",
    date: "2025-04-12",
    title: "KLP Time! Competition",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Talk Show", "Meet & Greet"],
  },
  {
    id: "klp-time-competition-2025-04-13",
    date: "2025-04-13",
    title: "KLP Time! Competition",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Talk Show", "Meet & Greet"],
  },
  {
    id: "kl-city-walk-2025-04-17",
    date: "2025-04-17",
    title: "KL City Walk",
    venue: "Berjaya Times Square",
    category: ["Special Event"],
  },
  {
    id: "anime-fest-plus-2025-04-19",
    date: "2025-04-19",
    title: "Anime Fest! Plus+",
    venue: "IOI Mall Damansara",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "anime-fest-plus-2025-04-20",
    date: "2025-04-20",
    title: "Anime Fest! Plus+",
    venue: "IOI Mall Damansara",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "special-free-live-2025-04-26",
    date: "2025-04-26",
    title: "Special Free Live",
    venue: "LaLaport Rooftop",
    category: ["Live Performance"],
  },
  {
    id: "klp-time-competition-final-round-2025-04-27",
    date: "2025-04-27",
    title: "KLP Time! Competition Final Round",
    venue: "LaLaport BBCC",
    category: ["Special Event", "Meet & Greet"],
  },
  {
    id: "japan-cultural-festival-2025-06-21",
    date: "2025-06-21",
    title: "Japan Cultural Festival",
    venue: "EcoWorld Gallery",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "japan-cultural-festival-2025-06-22",
    date: "2025-06-22",
    title: "Japan Cultural Festival",
    venue: "EcoWorld Gallery",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "super-gt-malaysia-2025-06-28",
    date: "2025-06-28",
    title: "Super GT Malaysia 2025",
    venue: "Petronas Sepang International Circuit",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "yi-shyan-birthday-party-2025-06-29",
    date: "2025-06-29",
    title: "Yi Shyan Birthday Party",
    venue: "LaLaport BBCC",
    category: ["Birthday Event"],
  },
  {
    id: "bernama-tv-apa-khabar-malaysia-2025-06-30",
    date: "2025-06-30",
    title: "BERNAMA TV: Apa Khabar Malaysia",
    venue: "BERNAMA TV",
    category: ["Talk Show"],
  },
  {
    id: "jam-music-festival-2025-07-04",
    date: "2025-07-04",
    title: "JAM Music Festival 2025",
    venue: "JioSpace",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "mitsui-outlet-10th-anniversary-2025-07-05",
    date: "2025-07-05",
    title: "Mitsui Outlet 10th Anniversary",
    venue: "Mitsui Outlet Park KLIA Sepang",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "nijigen-expo-2025-07-12",
    date: "2025-07-12",
    title: "NIJIGEN EXPO",
    venue: "Mid Valley Exhibition Centre",
    category: ["Live Performance", "Meet & Greet", "Tencho"],
  },
  {
    id: "nijigen-expo-2025-07-13",
    date: "2025-07-13",
    title: "NIJIGEN EXPO",
    venue: "Mid Valley Exhibition Centre",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "klp48-x-jkt48-ig-live-2025-07-22",
    date: "2025-07-22",
    title: "KLP48 X JKT48 IG Live",
    venue: "Instagram",
    category: ["Special Event"],
  },
  {
    id: "bon-odori-fashion-show-2025-07-26",
    date: "2025-07-26",
    title: "Bon Odori Fashion Show",
    venue: "LaLaport BBCC",
    category: ["Special Event"],
  },
  {
    id: "bon-odori-fashion-show-2025-07-27",
    date: "2025-07-27",
    title: "Bon Odori Fashion Show",
    venue: "LaLaport BBCC",
    category: ["Special Event"],
  },
  {
    id: "bon-odori-2025-08-02",
    date: "2025-08-02",
    title: "Bon Odori 2025",
    venue: "LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "bon-odori-2025-08-03",
    date: "2025-08-03",
    title: "Bon Odori 2025",
    venue: "LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "klp48-1st-anniversary-concert-bloom-2025-08-16",
    date: "2025-08-16",
    title: 'KLP48 1st Anniversary Concert "BLOOM"',
    venue: "Kuala Lumpur",
    category: ["Live Performance"],
  },
  {
    id: "suzuha-ann-drea-birthday-party-2025-08-17",
    date: "2025-08-17",
    title: "Suzuha & Ann Drea Birthday Party",
    venue: "LaLaport BBCC",
    category: ["Birthday Event"],
  },
  {
    id: "khalies-birthday-party-2025-08-30",
    date: "2025-08-30",
    title: "Khalies Birthday Party",
    venue: "LaLaport BBCC",
    category: ["Birthday Event"],
  },
  {
    id: "cos-mic-2025-09-13",
    date: "2025-09-13",
    title: "COS-MIC 2025",
    venue: "Sunway Pyramid Convention Centre",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "cos-mic-2025-09-14",
    date: "2025-09-14",
    title: "COS-MIC 2025",
    venue: "Sunway Pyramid Convention Centre",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "jam-shanghai-pop-vol-2-2025-10-02",
    date: "2025-10-02",
    title: "JAM Shanghai POP Vol 2",
    venue: "Shanghai",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "jam-shanghai-pop-vol-2-2025-10-03",
    date: "2025-10-03",
    title: "JAM Shanghai POP Vol 2",
    venue: "Shanghai",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "jam-shanghai-pop-vol-2-2025-10-04",
    date: "2025-10-04",
    title: "JAM Shanghai POP Vol 2",
    venue: "Shanghai",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "astronomical-observatory-vol-10-11-2025-10-05",
    date: "2025-10-05",
    title: "Astronomical Observatory Vol 10 and Vol 11",
    venue: "Shanghai",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "akb48-handshake-event-2025-10-13",
    date: "2025-10-13",
    title: "AKB48 Handshake Event",
    venue: "Tokyo, Japan",
    category: ["Special Event"],
  },
  {
    id: "lucine-graduation-2025-10-19",
    date: "2025-10-19",
    title: "Lucine Graduation",
    venue: "Six in the City, PJ",
    category: ["Special Event", "Live Performance", "Meet & Greet"],
  },
  {
    id: "otakyun-2025-11-01",
    date: "2025-11-01",
    title: "Otakyun! 2025",
    venue: "Kuching, Sarawak",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "otakyun-2025-11-02",
    date: "2025-11-02",
    title: "Otakyun! 2025",
    venue: "Kuching, Sarawak",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "love-and-peace-with-ngt48-2025-11-15",
    date: "2025-11-15",
    title: "LOVE & PEACE (with NGT48)",
    venue: "JioSpace",
    category: ["Live Performance"],
  },
  {
    id: "acg-matsuri-2025-11-16",
    date: "2025-11-16",
    title: "ACG Matsuri 2025",
    venue: "LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "klp-pop-up-store-2025-11-29",
    date: "2025-11-29",
    title: "KLP Pop Up Store",
    venue: "Lalaport",
    category: ["Special Event", "Tencho"],
  },
  {
    id: "astro-aec-xuan-xuan-curry-fishball-2025-11-29",
    date: "2025-11-29",
    title: "Astro AEC: XUAN XUAN Curry Fishball",
    venue: "Astro AEC",
    category: ["Talk Show"],
  },
  {
    id: "cocoa-devi-hillary-birthday-party-2025-12-01",
    date: "2025-12-01",
    title: "Cocoa, Devi & Hillary Birthday Party",
    venue: "LaLaport BBCC",
    category: ["Birthday Event"],
  },
  {
    id: "klp-pop-up-store-message-card-2025-12-07",
    date: "2025-12-07",
    title: "KLP Pop Up Store - Message Card",
    venue: "LaLaport BBCC",
    category: ["Tencho"],
  },
  {
    id: "motion-ime-festival-2025-12-14",
    date: "2025-12-14",
    title: "Motion Ime Festival 2025",
    venue: "Jakarta, Indonesia",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "superbash-concert-2025-12-27",
    date: "2025-12-27",
    title: "Superbash Concert",
    venue: "JioSpace",
    category: ["Live Performance", "Meet & Greet"],
  },
  {
    id: "jingle-jam-christmas-2025-12-28",
    date: "2025-12-28",
    title: "Jingle Jam Christmas 2025",
    venue: "LaLaport BBCC",
    category: ["Live Performance", "Special Event"],
  },
  {
    id: "klp48-theatre-pre-opening-the-first-curtain-call-2025-12-28",
    date: "2025-12-28",
    title: 'KLP48 Theatre Pre-Opening Event "The First Curtain Call"',
    venue: "KLP48 Theatre",
    category: ["Special Event"],
  },
  {
    id: "kita-countdown-concert-2025-12-31",
    date: "2025-12-31",
    title: "KITA Countdown Concert",
    venue: "Kuala Lumpur",
    category: ["Live Performance"],
  },
  {
    id: "anime-fantasia-live-2026-01-03",
    date: "2026-01-03",
    title: "Anime Fantasia Live",
    venue: "Arena of Stars, Genting",
    category: ["Live Performance"],
  },
  {
    id: "xuan-curry-fishball-entertainment-fan-party-2026-01-17",
    date: "2026-01-17",
    title: "XUAN Curry Fishball x Entertainment Fan Party",
    venue: "Pavilion Bukit Bintang",
    category: ["Live Performance"],
  },
  {
    id: "buka-puasa-dinner-with-klp48-members-2026-03-12",
    date: "2026-03-12",
    title: "Buka Puasa Dinner with KLP48 Members",
    venue: "Kita Dining, LaLaport BBCC",
    category: ["Meet & Greet"],
  },
  {
    id: "deruan-kasih-aidilfitri-2026-04-05",
    date: "2026-04-05",
    title: "Deruan Kasih Aidilfitri",
    venue: "LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "cos-mic-spring-festival-2026-04-25",
    date: "2026-04-25",
    title: "COS-MIC Spring Festival",
    venue: "WOW Plaza, LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "cos-mic-spring-festival-2026-04-26",
    date: "2026-04-26",
    title: "COS-MIC Spring Festival",
    venue: "WOW Plaza, LaLaport BBCC",
    category: ["Live Performance"],
  },
  {
    id: "520-dinner-with-klp48-members-2026-05-20",
    date: "2026-05-20",
    title: "520 Dinner with KLP48 Members",
    venue: "Padi House, LaLaport BBCC",
    category: ["Meet & Greet"],
  },
  {
    id: "mini-sports-day-2026-05-30",
    date: "2026-05-30",
    title: "Mini Sports Day",
    venue: "Stadium Pickleball KWC",
    category: ["Special Event"],
  },
  {
    id: "nijigen-expo-2026-05-30",
    date: "2026-05-30",
    title: "Nijigen Expo 2026",
    venue: "MITEC",
    category: ["Live Performance", "Tencho"],
  },
  {
    id: "bilibili-world-2026-07-10",
    date: "2026-07-10",
    title: "BiliBili World 2026",
    venue: "Shanghai, China",
    category: ["Live Performance"],
  },
  {
    id: "jam-shanghaiday1-2026-07-11",
    date: "2026-07-11",
    title: "JAM Shanghai 2026 Summer Festival",
    venue: "Shanghai, China",
    category: ["Live Performance"],
  },
  {
    id: "jam-shanghaiday2-2026-07-12",
    date: "2026-07-12",
    title: "JAM Shanghai 2026 Summer Festival",
    venue: "Shanghai, China",
    category: ["Live Performance"],
  },
  {
    id: "japan-expo26day3-2026-07-26",
    date: "2026-07-26",
    title: "Japan Expo Malaysia 2026",
    venue: "KLCC",
    category: ["Live Performance"],
  },
  {
    id: "tokyo-idol-festival-2026-08-01",
    date: "2026-08-01",
    title: "Tokyo Idol Festival 2026",
    venue: "Tokyo, Japan",
    category: ["Live Performance"],
  },
  {
    id: "klp48-2nd-anniversary-celebration-2026-08-15",
    date: "2026-08-15",
    title: "KLP48 2nd Anniversary Celebration",
    venue: "KLP48 Theatre",
    category: ["Special Event"],
  },

];

export const theatreEvents: TheatreEvent[] = [
  {
    id: "klp48-theatre-pre-opening-2025-12-28",
    date: "2025-12-28",
    title: "KLP48 Theatre Pre-Opening",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "klp48-mini-live-show-2026-01-18",
    date: "2026-01-18",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "theatre-meet-and-greet-2026-01-24",
    date: "2026-01-24",
    title: "Theatre Meet & Greet",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp48-mini-live-show-2026-02-01",
    date: "2026-02-01",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-show-your-talent-2026-02-06",
    date: "2026-02-06",
    title: "KLP Time: Show Your Talent",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "theatre-meet-and-greet-2026-02-07",
    date: "2026-02-07",
    title: "Theatre Meet & Greet",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp48-mini-live-show-2026-02-08",
    date: "2026-02-08",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-amanda-birthday-party-2026-02-13",
    date: "2026-02-13",
    title: "KLP Time: Amanda Birthday Party",
    venue: "KLP48 Theatre",
    category: "Birthday Party",
  },
  {
    id: "klp-tuition-2026-02-22",
    date: "2026-02-22",
    title: "KLP Tuition",
    venue: "KLP48 Theatre",
    category: "KLP Tuition",
  },
  {
    id: "yurina-farewell-ceremony-2026-02-28",
    date: "2026-02-28",
    title: "Yurina Farewell Ceremony",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "suzuha-farewell-ceremony-2026-02-28",
    date: "2026-02-28",
    title: "Suzuha Farewell Ceremony",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "theatre-meet-and-greet-talk-session-2026-03-01",
    date: "2026-03-01",
    title: "Theatre Meet & Greet: Talk Session",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-tuition-2026-03-07",
    date: "2026-03-07",
    title: "KLP Tuition",
    venue: "KLP48 Theatre",
    category: "KLP Tuition",
  },
  {
    id: "klp-time-special-competition-show-2026-03-08",
    date: "2026-03-08",
    title: "KLP Time: Special Competition Show",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "klp48-time-special-white-day-show-2026-03-14",
    date: "2026-03-14",
    title: "KLP48 Time (Special White Day Show)",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "theatre-meet-and-greet-cheki-session-2026-03-15",
    date: "2026-03-15",
    title: "Theatre Meet & Greet: Cheki Session",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "pre-event-special-live-stream-mini-sport-day-2026-03-17",
    date: "2026-03-17",
    title: "Pre-event Special Live Stream (Mini Sport Day)",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "klp48-time-comedy-show-2026-03-27",
    date: "2026-03-27",
    title: "KLP48 Time (Comedy Show)",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp48-mini-live-show-2026-03-28",
    date: "2026-03-28",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-game-day-2026-04-03",
    date: "2026-04-03",
    title: "KLP Time: Game Day",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp48-mini-live-show-2026-04-04",
    date: "2026-04-04",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "theatre-meet-and-greet-talk-session-2026-04-05",
    date: "2026-04-05",
    title: "Theatre Meet & Greet: Talk Session",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-time-variety-program-2026-04-11",
    date: "2026-04-11",
    title: "KLP Time: Variety Program",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "mini-sports-day-2026-04-12",
    date: "2026-04-12",
    title: "Mini Sports Day",
    venue: "KLP48 Theatre",
    category: "Special Show",
  },
  {
    id: "klp-time-quiz-show-2026-04-17",
    date: "2026-04-17",
    title: "KLP Time: Quiz Show",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "tencho-event-2026-04-18",
    date: "2026-04-18",
    title: "Tencho Event",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-time-variety-program-2026-04-18",
    date: "2026-04-18",
    title: "KLP Time: Variety Program",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp48-mini-live-show-2026-04-19",
    date: "2026-04-19",
    title: "KLP48 Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-miss-klp-2026-04-24",
    date: "2026-04-24",
    title: "KLP Time: Miss KLP",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "theatre-meet-and-greet-cheki-session-2026-04-26",
    date: "2026-04-26",
    title: "Theatre Meet & Greet: Cheki Session",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-tuition-2026-05-02",
    date: "2026-05-02",
    title: "KLP Tuition",
    venue: "KLP48 Theatre",
    category: "KLP Tuition",
  },
  {
    id: "theatre-meet-and-greet-personal-item-signing-2026-05-03",
    date: "2026-05-03",
    title: "Theatre Meet & Greet: Personal Item Signing",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "mini-live-show-can-record-2026-05-09",
    date: "2026-05-09",
    title: "Mini Live Show (Can Record)",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-variety-program-2026-05-10",
    date: "2026-05-10",
    title: "KLP Time: Variety Program",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp-time-drama-queen-2026-05-15",
    date: "2026-05-15",
    title: "KLP Time: Drama Queen",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "mini-live-show-2026-05-16",
    date: "2026-05-16",
    title: "Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-dance-challenge-2026-05-22",
    date: "2026-05-22",
    title: "KLP Time: Dance Challenge",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "theatre-meet-and-greet-2026-05-23",
    date: "2026-05-23",
    title: "Theatre Meet & Greet",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-time-48g-karaoke-challenge-2026-05-29",
    date: "2026-05-29",
    title: "KLP Time: 48G Karaoke Challenge",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp-time-game-day-2026-06-05",
    date: "2026-06-05",
    title: "KLP Time: Game Day",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp-tuition-2026-06-06",
    date: "2026-06-06",
    title: "KLP Tuition",
    venue: "KLP48 Theatre",
    category: "KLP Tuition",
  },
  {
    id: "mini-live-show-2026-06-07",
    date: "2026-06-07",
    title: "Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-variety-program-2026-06-12",
    date: "2026-06-12",
    title: "KLP Time: Variety Program",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp-time-variety-program-2026-06-19",
    date: "2026-06-19",
    title: "KLP Time: Variety Program",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "mini-live-show-2026-06-20",
    date: "2026-06-20",
    title: "Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-fan-time-fun-time-2026-06-21",
    date: "2026-06-21",
    title: "KLP Time: FAN TIME FUN TIME",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "klp-time-fun-game-with-members-2026-06-26",
    date: "2026-06-26",
    title: "KLP Time: Fun Game with Members",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "theatre-meet-and-greet-2026-06-27",
    date: "2026-06-27",
    title: "Theatre Meet & Greet ",
    venue: "KLP48 Theatre",
    category: "Meet & Greet",
  },
  {
    id: "klp-time-yi-shyan-birthday-party-2026-06-28",
    date: "2026-06-28",
    title: "KLP Time: Yi Shyan's Birthday Party",
    venue: "KLP48 Theatre",
    category: "Birthday Party",
  },
  {
    id: "klp-time-klp-next-top-model-2026-07-04",
    date: "2026-07-04",
    title: "KLP Time: KLP's Next Top Model",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "mini-live-show-2026-07-05",
    date: "2026-07-05",
    title: "Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },
  {
    id: "klp-time-salwa-birthday-party-2026-07-17",
    date: "2026-07-17",
    title: "KLP Time: Salwa's Birthday Party",
    venue: "KLP48 Theatre",
    category: "Birthday Party",
  },
  {
    id: "klp-time-fun-game-with-members-2026-07-18",
    date: "2026-07-18",
    title: "KLP Time: Fun Game with Members",
    venue: "KLP48 Theatre",
    category: "KLP Time",
  },
  {
    id: "mini-live-show-2026-07-19",
    date: "2026-07-19",
    title: "Mini Live Show",
    venue: "KLP48 Theatre",
    category: "Mini Live",
  },

];

export const specialAppearances = [
  {
    title: "Astro AEC: XUAN加你娱玩 (XUAN Curry Fishball)",
    date: "2025-11-29",
  },
  {
    title: "BERNAMA TV: Apa Khabar Malaysia",
    date: "2025-06-30",
  },
];

export const dramas = [
  {
    title: "From Palace to Present",
    role: "Zhang Jingping",
  },
];

export const soloProjects = [
  {
    title: "TBA",
  },
];

export const funFacts = [
  "Yishyan is a first-generation member of KLP48",
  "She loves painting and creative activities",
  "Skating is one of her favorite hobbies",
  "She enjoys travelling and exploring new places",
  "Active on social media with vlogs and updates",
  "Calls her fans 'Shyangs', a blend of 'Shyan' and the Malay word 'Sayang'",
];

export const songParticipation = [
  "Heavy Rotation",
  "Aitakatta (Japanese ver.)",
  "High Tension (Japanese ver.)",
  "Namida Surprise! (English ver.)",
  "Shonichi (Chinese ver.)",
  "Alasanku Maybe",
  "Flying Get",
  "Melon Jus",
  "Oh my pumpkin!",
  "Green Flash",
  "Shoujotachi yo (Malay ver.)",
];

export const klp48Info = [
  "Group: KLP48 (Kuala Lumpur 48)",
  "Location: Kuala Lumpur, Malaysia",
  "Sister Group: AKB48",
  "Generation: 1st Generation Member",
];