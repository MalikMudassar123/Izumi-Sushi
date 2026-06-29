export type MenuItem = {
  id: string;
  category: string;
  name: string;
  nameJp: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export type Category = {
  id: string;
  label: string;
  labelJp: string;
};

export const menuCategories: Category[] = [
  { id: "all",       label: "All",        labelJp: "全て" },
  { id: "omakase",   label: "Omakase",    labelJp: "おまかせ" },
  { id: "nigiri",    label: "Nigiri",     labelJp: "握り" },
  { id: "maki",      label: "Maki",       labelJp: "巻き" },
  { id: "sashimi",   label: "Sashimi",    labelJp: "刺身" },
  { id: "starters",  label: "Starters",   labelJp: "前菜" },
  { id: "desserts",  label: "Desserts",   labelJp: "甘味" },
];

export const menuItems: MenuItem[] = [
  // ── Omakase ──────────────────────────────────────────────────────
  {
    id: "om-1",
    category: "omakase",
    name: "Chef's Omakase",
    nameJp: "おまかせ",
    description: "An 18-course journey curated nightly by Chef Tanaka. Seasonal ingredients, spontaneous expression.",
    price: "$320",
    image: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600&q=80&auto=format&fit=crop",
    tag: "Signature",
  },
  {
    id: "om-2",
    category: "omakase",
    name: "Kaiseki Course",
    nameJp: "懐石",
    description: "A 12-course traditional kaiseki progression. Land and sea in harmonious sequence.",
    price: "$220",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop",
    tag: "Chef's Pick",
  },

  // ── Nigiri ───────────────────────────────────────────────────────
  {
    id: "ni-1",
    category: "nigiri",
    name: "Otoro Nigiri",
    nameJp: "大トロ",
    description: "Premium bluefin tuna belly aged 5 days. Served over hand-pressed shari with wasabi and sea salt.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80&auto=format&fit=crop",
    tag: "Premium",
  },
  {
    id: "ni-2",
    category: "nigiri",
    name: "Uni Nigiri",
    nameJp: "雲丹",
    description: "Hokkaido sea urchin on warm shari, finished with yuzu zest and a touch of gold leaf.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&q=80&auto=format&fit=crop",
    tag: "Seasonal",
  },
  {
    id: "ni-3",
    category: "nigiri",
    name: "Hamachi Nigiri",
    nameJp: "ハマチ",
    description: "Yellowtail from Kagoshima, lightly torched with jalapeño ponzu.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "ni-4",
    category: "nigiri",
    name: "Ikura Nigiri",
    nameJp: "イクラ",
    description: "Salmon roe marinated in dashi soy, bursting with ocean depth over delicate rice.",
    price: "$16",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=600&q=80&auto=format&fit=crop",
  },

  // ── Maki ─────────────────────────────────────────────────────────
  {
    id: "ma-1",
    category: "maki",
    name: "Izumi Dragon Roll",
    nameJp: "龍巻き",
    description: "Tempura prawn, avocado, cucumber, topped with thinly sliced salmon and truffle aioli.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80&auto=format&fit=crop",
    tag: "House Special",
  },
  {
    id: "ma-2",
    category: "maki",
    name: "Spicy Tuna Roll",
    nameJp: "辛口鮪",
    description: "Fresh bluefin tuna with togarashi spice blend, crispy shallots and micro shiso.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "ma-3",
    category: "maki",
    name: "Black Truffle Roll",
    nameJp: "トリュフ巻き",
    description: "Wild mushroom duxelles, king crab, black truffle oil, wrapped in squid ink nori.",
    price: "$42",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format&fit=crop",
    tag: "Premium",
  },

  // ── Sashimi ──────────────────────────────────────────────────────
  {
    id: "sa-1",
    category: "sashimi",
    name: "Premium Sashimi Platter",
    nameJp: "刺身盛り合わせ",
    description: "A curated selection of 15 slices: otoro, sake, hamachi, tai, and ikura. Market-fresh daily.",
    price: "$78",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80&auto=format&fit=crop",
    tag: "Chef's Selection",
  },
  {
    id: "sa-2",
    category: "sashimi",
    name: "Wagyu Sashimi",
    nameJp: "和牛刺身",
    description: "A5 Miyazaki wagyu, paper-thin sliced, with ponzu, grated daikon and sesame.",
    price: "$52",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format&fit=crop",
    tag: "Premium",
  },

  // ── Starters ─────────────────────────────────────────────────────
  {
    id: "st-1",
    category: "starters",
    name: "Dashi Chawanmushi",
    nameJp: "茶碗蒸し",
    description: "Silky steamed egg custard with snow crab, edamame, and shaved bonito in warm dashi.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "st-2",
    category: "starters",
    name: "Agedashi Tofu",
    nameJp: "揚げ出し豆腐",
    description: "House-made silken tofu, lightly fried, in a delicate tsuyu broth with ginger and micro greens.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "st-3",
    category: "starters",
    name: "Edamame Truffle",
    nameJp: "枝豆トリュフ",
    description: "Steamed edamame finished with black truffle salt and a drop of aged balsamic.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&q=80&auto=format&fit=crop",
  },

  // ── Desserts ─────────────────────────────────────────────────────
  {
    id: "de-1",
    category: "desserts",
    name: "Matcha Mille-Crêpe",
    nameJp: "抹茶ミルクレープ",
    description: "20 layers of whisper-thin crêpes with ceremonial grade matcha cream. Delicate, earthy, perfect.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&auto=format&fit=crop",
    tag: "Signature",
  },
  {
    id: "de-2",
    category: "desserts",
    name: "Yuzu Panna Cotta",
    nameJp: "柚子パンナコッタ",
    description: "Delicate panna cotta with yuzu curd, crystallised ginger, and compressed mandarin.",
    price: "$16",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80&auto=format&fit=crop",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie Laurent",
    title: "Food Critic, Le Monde",
    quote: "Izumi doesn't just serve sushi — it narrates a story of Japan's culinary soul. Each course moved me closer to something I can only describe as reverence. Flawless in every dimension.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Thornton",
    title: "Michelin Guide Inspector",
    quote: "In thirty years of dining I have rarely encountered a kitchen where technical perfection and genuine emotion coexist so naturally. An extraordinary restaurant.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Aiko Nakamura",
    title: "Culinary Author",
    quote: "Chef Tanaka's omakase is the most honest expression of wa-shoku I have tasted outside Kyoto. The seafood speaks for itself — the seasoning only listens.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Marcus Reid",
    title: "Forbes Travel Editor",
    quote: "The atmosphere, the presentation, the quiet theatre of service — every detail earns your full attention. We lingered three hours and still felt the evening ended too soon.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Elena Vasquez",
    title: "Executive Chef, Marea",
    quote: "As a chef myself, I am rarely surprised. Izumi surprised me at every course. The precision of the knife work and the restraint in seasoning are simply on another level.",
    rating: 5,
  },
  {
    id: "t6",
    name: "David Chen",
    title: "Wine & Spirits Magazine",
    quote: "The sake pairing alone is worth the journey. Each pour was chosen with an intuition that elevated the food beyond anything I expected. A genuinely transportive evening.",
    rating: 5,
  },
];
