const U = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`;

// All verified Sri Lanka images from Unsplash
const SL = {
  sigiriyaAerial:  '1612862862126-865765df2ded', // Aerial Sigiriya Rock Fortress
  sigiriyaForest:  '1711797750174-c3750dd9d7c9', // Sigiriya rock in forest
  ellaArches:      '1566296314736-6eaac1ca0cb9', // Nine Arches Bridge Ella (blue train)
  ellaArches2:     '1574611122955-5baa61496637', // Nine Arches Bridge close-up
  ellaTrain:       '1578519050142-afb511e518de', // Train on bridge in forest
  beach:           '1580910527739-556eb89f9d65', // Palm trees on Sri Lanka beach
  stiltFish:       '1519566335946-e6f65f0f4fdf', // Stilt fishermen Sri Lanka
  coconutSwing:    '1569670380685-4582bf29a24a', // Man swinging on coconut tree
  boats:           '1707236606614-fbee3070f156', // Boats on water
  waterfall:       '1609681980718-340e7f4b11d7', // Sri Lanka waterfall misty
  elephants:       '1571406761758-9a3eed5338ef', // Elephants Sri Lanka
  colombo:         '1623595289196-007a22dd8560', // Lotus Tower Colombo
  kandyTemple:     '1665849050430-5e8c16bacf7e', // Temple of the Tooth Kandy
  kandyBuilding:   '1626091022888-485eb96c494a', // Kandy building by water
  galleLight:      '1703588866434-3ce7163742ed', // Galle Fort lighthouse
  galleFort:       '1704797390325-b057758d8c3d', // Tuk tuk + Galle lighthouse
  kandyDance:      '1566766188646-5d0310191714', // Fire dancing Kandy
  kandyTrain:      '1578517929167-db9ed31cd5c6', // Blue train near houses
  sigiriyaStairs:  '1624963145721-277432579507', // Stairs climbing (Sigiriya)
  aerialWater:     '1525849306000-cc26ceb5c1d7', // Aerial water view
};

export const heroSlides = [
  {
    image: U(SL.sigiriyaAerial, 1920, 1080),
    title: 'Discover the Beauty',
    highlight: 'of Sri Lanka',
    sub: 'Ancient temples, misty highlands & pristine beaches await you.',
  },
  {
    image: U(SL.beach, 1920, 1080),
    title: 'Golden Beaches &',
    highlight: 'Crystal Waters',
    sub: 'From Mirissa to Unawatuna — paradise is closer than you think.',
  },
  {
    image: U(SL.ellaArches, 1920, 1080),
    title: 'Tea Country &',
    highlight: 'Mountain Escapes',
    sub: 'Explore misty hills, colonial bungalows and scenic train rides.',
  },
  {
    image: U(SL.waterfall, 1920, 1080),
    title: 'Ancient Wonders &',
    highlight: 'Cultural Heritage',
    sub: 'Walk among UNESCO World Heritage sites and living history.',
  },
];

export const destinations = [
  { name: 'Sigiriya',  tag: 'Cultural',  image: U(SL.sigiriyaAerial, 700, 900) },
  { name: 'Ella',      tag: 'Highlands', image: U(SL.ellaArches,     700, 700) },
  { name: 'Mirissa',   tag: 'Beach',     image: U(SL.stiltFish,      700, 700) },
  { name: 'Kandy',     tag: 'Heritage',  image: U(SL.kandyTemple,    700, 700) },
  { name: 'Yala',      tag: 'Wildlife',  image: U(SL.elephants,      700, 700) },
  { name: 'Galle',     tag: 'Historic',  image: U(SL.galleLight,     700, 700) },
];

export const galleryImages = [
  U(SL.sigiriyaAerial,  600, 400),
  U(SL.ellaArches,      600, 400),
  U(SL.beach,           600, 400),
  U(SL.elephants,       600, 400),
  U(SL.kandyTemple,     600, 400),
  U(SL.stiltFish,       600, 400),
  U(SL.waterfall,       600, 400),
  U(SL.galleLight,      600, 400),
  U(SL.coconutSwing,    600, 400),
  U(SL.ellaTrain,       600, 400),
  U(SL.colombo,         600, 400),
  U(SL.sigiriyaForest,  600, 400),
];

export const tours = [
  {
    id: 1,
    title: "Nature's Romance Journey",
    category: 'couples',
    tag: 'Honeymooners & Couples',
    days: 3,
    distance: '348 km',
    price: 255,
    rating: 4.9,
    reviews: 124,
    image: U(SL.ellaTrain, 800, 500),
    highlights: ['Horton Plains', 'Ella', 'Nine Arches Bridge', "Lipton's Seat"],
    itinerary: [
      "Hike at Horton Plains → Ambewela Farm → Romantic plantation bungalow",
      "Scenic train ride to Ella → Little Adam's Peak → Nine Arches Bridge",
      "Lipton's Seat sunrise → Dambatenne Tea Factory → Adisham Bungalow",
    ],
  },
  {
    id: 2,
    title: 'Guardian Summer Journey',
    category: 'family',
    tag: 'Explorers & Families',
    days: 5,
    distance: '680 km',
    price: 499,
    rating: 4.8,
    reviews: 98,
    image: U(SL.sigiriyaAerial, 800, 500),
    highlights: ['Sigiriya Rock Fortress', 'Dambulla', 'Riverston', 'Kandy', 'Nuwara Eliya', 'Ella'],
    itinerary: [
      "Arrival → Sigiriya Rock Fortress → Sunset at Pidurangala",
      "Dambulla Cave Temple → Riverston Peak",
      "Temple of the Tooth → Botanical Gardens → Cultural Show",
      "Tea factory tour → Gregory Lake → Victoria Park",
      "Ella Rock Hike → Nine Arches Bridge → Airport Transfer",
    ],
  },
  {
    id: 3,
    title: 'Beach Paradise Escape',
    category: 'beach',
    tag: 'Beach Lovers',
    days: 4,
    distance: '420 km',
    price: 350,
    rating: 4.9,
    reviews: 76,
    image: U(SL.stiltFish, 800, 500),
    highlights: ['Mirissa Beach', 'Galle Fort', 'Unawatuna', 'Whale Watching'],
    itinerary: [
      "Arrival → Galle Fort heritage walk → Sunset at the ramparts",
      "Unawatuna beach → Jungle Beach hike → Mirissa evening",
      "Whale watching cruise → Mirissa beach afternoon",
      "Hikkaduwa coral reef snorkeling → Departure",
    ],
  },
  {
    id: 4,
    title: 'Complete Sri Lanka Grand Tour',
    category: 'adventure',
    tag: 'Adventure Seekers',
    days: 7,
    distance: '900 km',
    price: 799,
    rating: 5.0,
    reviews: 52,
    image: U(SL.sigiriyaForest, 800, 500),
    highlights: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle'],
    itinerary: [
      "Arrival Colombo → Transfer to Sigiriya → Cultural triangle",
      "Sigiriya climb → Polonnaruwa ancient city exploration",
      "Kandy → Temple of the Tooth → Peradeniya Botanical Gardens",
      "Tea Country → Nuwara Eliya → Gregory Lake",
      "Ella → Little Adam's Peak → Nine Arches Bridge",
      "Yala National Park safari → Wildlife encounters",
      "Galle Fort → Beach → Departure",
    ],
  },
  {
    id: 5,
    title: 'Wildlife & Jungle Safari',
    category: 'adventure',
    tag: 'Adventure Seekers',
    days: 3,
    distance: '280 km',
    price: 320,
    rating: 4.7,
    reviews: 45,
    image: U(SL.elephants, 800, 500),
    highlights: ['Yala National Park', 'Leopards', 'Elephant Gathering', 'Bird Watching'],
    itinerary: [
      "Arrival → Udawalawe Elephant Transit Home → Evening game drive",
      "Full day Yala safari → Leopard tracking → Crocodile watching",
      "Morning bird walk → Bundala National Park → Departure",
    ],
  },
  {
    id: 6,
    title: 'Heritage & Culture Trail',
    category: 'culture',
    tag: 'Cultural Explorers',
    days: 5,
    distance: '520 km',
    price: 440,
    rating: 4.8,
    reviews: 63,
    image: U(SL.kandyTemple, 800, 500),
    highlights: ['Galle Fort', 'Colombo', 'Anuradhapura', 'Polonnaruwa', 'Mihintale'],
    itinerary: [
      "Colombo city tour → National Museum → Galle Face Green",
      "Anuradhapura ancient city → Ruwanwelisaya → Jetavanaramaya",
      "Polonnaruwa ruins → Gal Vihara rock sculptures",
      "Dambulla Cave Temple → Sigiriya Lion Rock",
      "Kandy cultural show → Temple of the Tooth → Departure",
    ],
  },
];

export const services = [
  { icon: '🗺️', title: 'Custom Itinerary Planning', desc: 'Personalized travel plans tailored to your interests, timeline, and budget.' },
  { icon: '🚗', title: 'Rent-a-Car with Driver', desc: 'Well-maintained vehicles with experienced, English-speaking local drivers.' },
  { icon: '🏨', title: 'Hotel & Resort Bookings', desc: 'Carefully selected accommodations from budget-friendly to luxury resorts.' },
  { icon: '✈️', title: 'Airport Transfers', desc: 'Comfortable and timely transfers to and from Bandaranaike International Airport.' },
  { icon: '🧭', title: 'Local Guides & Support', desc: 'Knowledgeable guides and 24/7 customer support throughout your journey.' },
  { icon: '🌏', title: 'Island-wide Coverage', desc: 'Complete coverage of all major destinations across beautiful Sri Lanka.' },
];

export const fleet = [
  {
    name: 'Toyota Coaster',
    passengers: 20,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Air Conditioning', 'Professional Driver', 'Insurance Covered', 'GPS Tracking', 'Ample Luggage Space'],
  },
  {
    name: 'Toyota HiAce',
    passengers: 12,
    image: 'https://images.unsplash.com/photo-1570125744261-7df6e51c5b04?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Air Conditioning', 'Professional Driver', 'Insurance Covered', 'GPS Tracking'],
  },
  {
    name: 'Toyota KDH Van',
    passengers: 6,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Comfortable Seating', 'Air Conditioning', 'Experienced Driver', 'Well Maintained'],
  },
  {
    name: 'Honda Vezel SUV',
    passengers: 4,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Fuel Efficient', 'Premium Comfort', 'Local Driver', '24/7 Support'],
  },
  {
    name: 'Toyota Prius',
    passengers: 3,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Eco-Friendly', 'Premium Comfort', 'Local Driver', '24/7 Support'],
  },
  {
    name: 'Mini Car',
    passengers: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=350&auto=format&fit=crop&q=80',
    features: ['Fuel Efficient', 'City Ready', 'Local Driver', '24/7 Support'],
  },
];

export const testimonials = [
  { name: 'Sarah & James Wilson', country: 'United Kingdom', initials: 'SJ', text: "Our honeymoon in Sri Lanka was absolutely magical! CeyBee Travels made everything perfect. The train ride to Ella and sunrise at Lipton's Seat were unforgettable.", tour: "Nature's Romance Journey", stars: 5 },
  { name: 'The Martinez Family', country: 'Spain', initials: 'MF', text: 'Traveling with kids can be challenging, but CeyBee Travels took care of everything. Our driver was patient and knowledgeable. Sigiriya was absolutely breathtaking!', tour: 'Guardian Summer Journey', stars: 5 },
  { name: 'Michael Chen', country: 'Australia', initials: 'MC', text: 'The personalized itinerary was exactly what I wanted. The local guides shared amazing stories about Sri Lankan culture. Exceptional service from start to finish!', tour: 'Complete Sri Lanka Grand Tour', stars: 5 },
];

export const stats = [
  { num: 1000, suffix: '+', label: 'Happy Travelers' },
  { num: 50,   suffix: '+', label: 'Tour Packages' },
  { num: 5,    suffix: '+', label: 'Years Experience' },
  { num: 24,   suffix: '/7', label: 'Customer Support' },
];
