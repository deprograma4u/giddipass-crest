/**
 * ALL editable content for the Giddipass Crest website lives in this file.
 *
 * To update the site:
 *  - Prices: replace "GH₵ —" with the real price, e.g. "GH₵ 85".
 *  - Photos: drop the restaurant's own photos into /public/images and change the paths below.
 *  - Menu: add, remove or rename items inside `menu`.
 */

export const PRICE_PLACEHOLDER = "GH₵ —";

export const restaurant = {
  name: "Giddipass Crest",
  altName: "Crest Restaurant",
  tagline: "Rooftop restaurant in the heart of Tamale",
  priceNote: "Budget-friendly",

  phone: {
    display: "+233 24 420 7608",
    tel: "+233244207608",
    whatsapp: "233244207608",
  },
  altPhone: {
    display: "+233 55 882 9871",
    tel: "+233558829871",
  },

  address: {
    line1: "Hospital Road, opposite SSNIT",
    line2: "Central Tamale, Ghana",
    plusCode: "C535+8Q7, Tamale",
  },
  coords: { lat: 9.403286, lng: -0.8405811 },

  hours: {
    summary: "Open daily 8 AM – 11:30 PM",
    // Used for the "Open now" badge. 24h clock, Ghana time (GMT).
    opens: 8 * 60,
    closes: 23 * 60 + 30,
    days: [
      { day: "Monday", time: "8:00 AM – 11:30 PM" },
      { day: "Tuesday", time: "8:00 AM – 11:30 PM" },
      { day: "Wednesday", time: "8:00 AM – 11:30 PM" },
      { day: "Thursday", time: "8:00 AM – 11:30 PM" },
      { day: "Friday", time: "8:00 AM – 11:30 PM" },
      { day: "Saturday", time: "8:00 AM – 11:30 PM" },
      { day: "Sunday", time: "8:00 AM – 11:30 PM" },
    ],
  },

  hero: {
    eyebrow: "Rooftop · Central Tamale",
    titleStart: "Tamale's Rooftop",
    titleAccent: "at Sunset",
    subtitle:
      "Great local food, cold drinks and the best view in the heart of the city.",
    image: "/images/hero-rooftop.webp",
    imageMobile: "/images/hero-rooftop-mobile.webp",
  },
};

/* ---------- WhatsApp ---------- */

const ORDER_MESSAGE = "Hello Giddipass Crest, I'd like to place an order: ";

const BOOKING_MESSAGE =
  "Hello Giddipass Crest, I'd like to reserve a table. Number of people: __  Day and time: __";

/** WhatsApp link with a pre-filled table reservation message. */
export function bookingLink() {
  return `https://wa.me/${restaurant.phone.whatsapp}?text=${encodeURIComponent(BOOKING_MESSAGE)}`;
}

/** WhatsApp link with a pre-filled order message (optionally including a dish). */
export function whatsappLink(dish?: string) {
  const text = dish ? `${ORDER_MESSAGE}${dish}` : ORDER_MESSAGE;
  return `https://wa.me/${restaurant.phone.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* ---------- Signature dishes ---------- */

export type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "Banku & Tilapia",
    description:
      "Our house favourite. Whole grilled tilapia, soft banku, hot pepper and fresh onions.",
    price: PRICE_PLACEHOLDER,
    image: "/images/banku-tilapia.webp",
  },
  {
    name: "Jollof Rice",
    description: "Smoky, well-spiced party jollof served with grilled chicken.",
    price: PRICE_PLACEHOLDER,
    image: "/images/jollof-rice.webp",
  },
  {
    name: "Fried Rice & Chicken",
    description: "Golden fried rice with vegetables and well-seasoned chicken.",
    price: PRICE_PLACEHOLDER,
    image: "/images/fried-rice-chicken.webp",
  },
  {
    name: "TZ with Ayoyo",
    description: "A Northern classic: smooth TZ with rich green ayoyo soup.",
    price: PRICE_PLACEHOLDER,
    image: "/images/tz-ayoyo.webp",
  },
];

/* ---------- Full menu (sample items: confirm with the owner) ---------- */

export type MenuItem = { name: string; description?: string; price: string };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "local",
    label: "Local Dishes",
    items: [
      { name: "Banku & Grilled Tilapia", description: "With hot pepper and onions", price: PRICE_PLACEHOLDER },
      { name: "TZ with Ayoyo Soup", description: "With your choice of meat or fish", price: PRICE_PLACEHOLDER },
      { name: "Banku with Okro Soup", price: PRICE_PLACEHOLDER },
      { name: "Fufu with Light Soup", description: "Goat or chicken", price: PRICE_PLACEHOLDER },
      { name: "Kenkey with Fried Fish", description: "With shito and pepper", price: PRICE_PLACEHOLDER },
    ],
  },
  {
    id: "rice",
    label: "Rice Dishes",
    items: [
      { name: "Jollof Rice & Chicken", price: PRICE_PLACEHOLDER },
      { name: "Fried Rice & Chicken", price: PRICE_PLACEHOLDER },
      { name: "Waakye Special", description: "With egg, wele, gari and shito", price: PRICE_PLACEHOLDER },
      { name: "Plain Rice & Stew", description: "Chicken, beef or fish", price: PRICE_PLACEHOLDER },
    ],
  },
  {
    id: "grills",
    label: "Grills",
    items: [
      { name: "Whole Grilled Tilapia", price: PRICE_PLACEHOLDER },
      { name: "Grilled Chicken", description: "Quarter or half", price: PRICE_PLACEHOLDER },
      { name: "Grilled Guinea Fowl", price: PRICE_PLACEHOLDER },
      { name: "Beef Khebab", description: "Spiced skewers, great with a cold drink", price: PRICE_PLACEHOLDER },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Chilled Soft Drinks", description: "Coke, Fanta, Sprite and more", price: PRICE_PLACEHOLDER },
      { name: "Malt", price: PRICE_PLACEHOLDER },
      { name: "Sobolo (Bissap)", description: "Chilled hibiscus drink", price: PRICE_PLACEHOLDER },
      { name: "Fresh Juice", price: PRICE_PLACEHOLDER },
      { name: "Bottled Water", price: PRICE_PLACEHOLDER },
    ],
  },
];

/* ---------- Rooftop ---------- */

export const rooftop = {
  title: "The Rooftop",
  intro:
    "Climb the stairs and the city opens up. Catch the sun going down over central Tamale, stay as the lights come on, and settle in for the evening with good food and friends.",
  image: "/images/gallery-city-lights.webp",
  highlights: [
    { icon: "sunset", title: "Sunset views", text: "The best seat in town to watch the sky turn gold." },
    { icon: "tv", title: "Match nights", text: "Big screen, cold drinks and Champions League football." },
    { icon: "users", title: "Meet your people", text: "Relaxed, friendly and right in the heart of the city." },
  ],
  gallery: [
    { src: "/images/gallery-rooftop-evening.webp", alt: "Rooftop view as the sun goes down" },
    { src: "/images/jollof-rice.webp", alt: "Jollof rice with grilled skewers" },
    { src: "/images/gallery-match-night.webp", alt: "Friends watching a football match" },
    { src: "/images/drinks.webp", alt: "Cold drinks on the table" },
    { src: "/images/grills.webp", alt: "Skewers fresh off the grill" },
    { src: "/images/banku-tilapia.webp", alt: "Grilled tilapia" },
  ],
};

/* ---------- What guests say ----------
 * Themes paraphrased from public Google reviews. No invented names or quotes.
 * Swap in real reviews (with permission) when available.
 */

export const guestThemes = [
  {
    icon: "sunset",
    title: "Best sunset view in Tamale",
    text: "Guests keep coming back for the rooftop, by day and by night.",
  },
  {
    icon: "fish",
    title: "Banku & tilapia worth the trip",
    text: "Many say it's the best banku and tilapia in Tamale.",
  },
  {
    icon: "tv",
    title: "The place for match nights",
    text: "A relaxed spot to meet friends and watch the big games.",
  },
];

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Rooftop", href: "#rooftop" },
  { label: "Visit", href: "#visit" },
];
