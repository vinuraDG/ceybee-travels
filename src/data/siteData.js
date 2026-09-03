// ─── Cloudinary setup ─────────────────────────────────────────────────────
// 1. Replace YOUR_CLOUD_NAME below with your Cloudinary cloud name
// 2. Upload images to Cloudinary into the folder structure:
//      ceybee-travels/hero/
//      ceybee-travels/destinations/
//      ceybee-travels/tours/
//      ceybee-travels/about/
//      ceybee-travels/fleet/
//      ceybee-travels/gallery/
// 3. Use C() for your own Cloudinary images, U() for Unsplash fallbacks

const CLOUD = 'vvti1pbk';

// Cloudinary URL builder — auto format (WebP), auto quality, resize to fit
const C = (folder, filename, w = 800, h = 600) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},h_${h},c_fill,f_auto,q_auto/ceybee-travels/${folder}/${filename}`;

// Root-level Cloudinary image (no subfolder prefix)
const CR = (publicId, w = 800, h = 600) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},h_${h},c_fill,f_auto,q_auto/${publicId}`;

// Unsplash fallback (used until replaced with your own Cloudinary images)
const U = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`;

// ─── Unsplash photo IDs (fallback until Cloudinary images are uploaded) ───
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
    sub: 'From Mirissa to Unawatuna, paradise is closer than you think.',
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
  { name: 'Sigiriya',      tag: 'Cultural',   tagline: 'Climb the ancient rock fortress',      image: U(SL.sigiriyaAerial, 800, 1000) },
  { name: 'Ella',          tag: 'Highlands',  tagline: 'Mist, trains & nine arches',           image: U(SL.ellaArches,     700, 500) },
  { name: 'Mirissa',       tag: 'Beach',      tagline: 'Whale watching & golden sands',        image: U(SL.stiltFish,      700, 500) },
  { name: 'Kandy',         tag: 'Heritage',   tagline: 'Temple of the Tooth & dance shows',    image: U(SL.kandyTemple,    700, 500) },
  { name: 'Yala',          tag: 'Wildlife',   tagline: 'Leopards, elephants & wild safari',    image: U(SL.elephants,      700, 500) },
  { name: 'Galle',         tag: 'Historic',   tagline: 'Dutch fort, art & ocean views',        image: U(SL.galleLight,     700, 450) },
  { name: 'Colombo',       tag: 'City',       tagline: 'Lotus Tower & vibrant street life',    image: U(SL.colombo,        700, 450) },
  { name: 'Nuwara Eliya',  tag: 'Tea Country',tagline: 'Lush tea estates & cool highlands',    image: U(SL.waterfall,      700, 450) },
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
    bestTime: 'Dec – Apr',
    groupSize: '2 People',
    difficulty: 'Easy',
    description: "A romantic escape through Sri Lanka's misty highlands, built for couples who want privacy and real experiences. Scenic train rides through tea country, sunrise hikes above the clouds, quiet plantation stays — this one stays with you.",
    highlights: ['Horton Plains', 'Ella', 'Nine Arches Bridge', "Lipton's Seat"],
    included: ['Hotel pickups & drop-offs', 'All accommodation (3 nights)', 'Daily breakfast & dinner', 'Scenic train tickets', 'Expert local guide', 'All entrance fees', 'Air-conditioned transport'],
    itinerary: [
      { title: 'Misty Highlands Arrival', desc: "Hike at Horton Plains → World's End viewpoint → Ambewela Farm → Romantic plantation bungalow check-in" },
      { title: 'The Scenic Train Ride', desc: "Scenic train ride to Ella → Little Adam's Peak hike → Nine Arches Bridge → Sunset dinner" },
      { title: "Lipton's Seat & Departure", desc: "Lipton's Seat sunrise → Dambatenne Tea Factory tour → Adisham Bungalow → Departure transfer" },
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
    bestTime: 'Nov – Mar',
    groupSize: '3–7 People',
    difficulty: 'Moderate',
    description: "A 5-day family adventure blending ancient temples, lush mountains, and tea country. Every experience is carefully chosen to delight explorers of all ages while creating memories that the whole family will treasure for years.",
    highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Riverston Peak', 'Kandy', 'Nuwara Eliya', 'Ella'],
    included: ['Airport transfers', 'All accommodation (5 nights)', 'Daily breakfast', 'Comfortable AC vehicle', 'Expert family guide', 'All entrance fees', 'Kandy cultural show'],
    itinerary: [
      { title: 'Ancient Marvels & Sunset Wonders', desc: 'Arrival → Sigiriya Rock Fortress climb → Sunset at Pidurangala Rock' },
      { title: 'Spiritual Heritage & Nature Escape', desc: 'Dambulla Cave Temple → Riverston Peak viewpoint → Scenic village drive' },
      { title: 'Sacred City & Cultural Rhythms', desc: "Temple of the Tooth → Peradeniya Botanical Gardens → Traditional Kandyan cultural show" },
      { title: 'Tea Country Charms', desc: 'Tea factory tour → Gregory Lake → Victoria Park → Nuwara Eliya exploration' },
      { title: 'Adventures in Ella & Departure', desc: "Ella Rock Hike → Nine Arches Bridge → Little Adam's Peak → Airport Transfer" },
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
    bestTime: 'Nov – Apr',
    groupSize: '2–6 People',
    difficulty: 'Easy',
    description: "Four days of sun, sea, and history along Sri Lanka's stunning southern coast. Explore the UNESCO-listed Galle Fort, snorkel coral reefs, spot blue whales, and relax on some of Asia's most beautiful beaches.",
    highlights: ['Mirissa Beach', 'Galle Fort UNESCO', 'Unawatuna Bay', 'Whale Watching', 'Coral Snorkeling'],
    included: ['Hotel pickups & drop-offs', 'Beach resort accommodation (4 nights)', 'Daily breakfast', 'Whale watching cruise', 'Snorkeling equipment', 'Galle Fort guided walk', 'AC transport'],
    itinerary: [
      { title: 'Arrival & Galle Fort', desc: 'Arrival → Galle Fort heritage walk → Colonial ramparts sunset → Mirissa beach hotel check-in' },
      { title: 'Beach & Jungle Trails', desc: 'Unawatuna beach morning → Jungle Beach hike → Mirissa village evening' },
      { title: 'Blue Whale Encounter', desc: 'Early morning whale watching cruise → Mirissa beach afternoon relaxation → Seafood dinner' },
      { title: 'Coral Reefs & Departure', desc: 'Hikkaduwa coral reef snorkeling → Colombo shopping → Airport departure' },
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
    bestTime: 'Dec – Apr',
    groupSize: '2–8 People',
    difficulty: 'Moderate',
    description: "Seven days covering the best of Sri Lanka: ancient ruins, misty highlands, a real wildlife safari, and beautiful beaches. If you want to see the island properly without rushing, this is the trip to do it.",
    highlights: ['Sigiriya Rock', 'Kandy Temple', 'Nuwara Eliya', 'Ella Train', 'Yala Safari', 'Galle Fort'],
    included: ['All accommodation (7 nights)', 'Daily breakfast', 'Airport transfers', 'All entrance fees', 'Yala safari jeep', 'Expert guide throughout', 'Comfortable AC vehicle'],
    itinerary: [
      { title: 'Arrival & Cultural Triangle', desc: 'Arrival Colombo → Transfer to Sigiriya → Cultural triangle exploration' },
      { title: 'Ancient City Exploration', desc: 'Sigiriya Rock Fortress climb → Polonnaruwa ancient city ruins' },
      { title: 'Sacred Kandy', desc: "Kandy → Temple of the Tooth → Peradeniya Botanical Gardens" },
      { title: 'Tea Country Highlands', desc: 'Tea Country → Nuwara Eliya → Gregory Lake walks' },
      { title: 'Ella & Nine Arches', desc: "Ella → Little Adam's Peak → Nine Arches Bridge" },
      { title: 'Wild Yala Safari', desc: 'Yala National Park full-day safari → Leopard & elephant encounters' },
      { title: 'Galle & Departure', desc: 'Galle Fort walk → Beach relaxation → Colombo airport departure' },
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
    bestTime: 'Feb – Jul',
    groupSize: '2–6 People',
    difficulty: 'Easy',
    description: "A thrilling three-day wildlife journey through Sri Lanka's national parks. Encounter wild leopards, herds of elephants, crocodiles, and hundreds of exotic bird species in their natural habitat.",
    highlights: ['Yala National Park', 'Leopard Tracking', 'Elephant Gathering', 'Exotic Bird Watching', 'Bundala Wetlands'],
    included: ['Safari lodge accommodation (3 nights)', 'All meals included', 'Safari jeep & park fees', 'Expert wildlife tracker', 'Binoculars provided', 'Airport transfers'],
    itinerary: [
      { title: 'Arrival & First Safari', desc: 'Arrival → Udawalawe Elephant Transit Home → Evening game drive' },
      { title: 'Full Day Yala Safari', desc: 'Dawn to dusk Yala safari → Leopard tracking → Crocodile & buffalo watching' },
      { title: 'Wetlands & Departure', desc: 'Morning bird walk → Bundala National Park wetlands → Departure transfer' },
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
    bestTime: 'Jan – Apr',
    groupSize: '2–8 People',
    difficulty: 'Easy',
    description: "Five days diving into Sri Lanka's history, from ancient Buddhist kingdoms to colonial forts. You'll walk through UNESCO World Heritage sites, hear real stories from local guides, and finish with a Kandyan cultural show.",
    highlights: ['Galle Fort', 'Colombo City', 'Anuradhapura', 'Polonnaruwa Ruins', 'Sigiriya', 'Kandy'],
    included: ['All accommodation (5 nights)', 'Daily breakfast', 'Cultural site entry fees', 'Expert history guide', 'Kandy cultural show', 'AC vehicle throughout', 'Airport transfers'],
    itinerary: [
      { title: 'Colombo Discovery', desc: 'Colombo city tour → National Museum → Galle Face Green → Galle Fort walk' },
      { title: 'Sacred Anuradhapura', desc: 'Anuradhapura ancient city → Ruwanwelisaya stupa → Sacred Bodhi Tree → Jetavanaramaya' },
      { title: 'Polonnaruwa Ruins', desc: 'Polonnaruwa medieval ruins → Gal Vihara rock sculptures → Lotus Pond' },
      { title: 'Sigiriya Lion Rock', desc: 'Dambulla Cave Temple → Sigiriya Lion Rock climb → Sunset views' },
      { title: 'Kandy & Departure', desc: 'Kandy cultural dance show → Temple of the Tooth → Peradeniya Gardens → Departure' },
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
    image: CR('Toyota_Coaster', 600, 350),
    features: ['Air Conditioning', 'Professional Driver', 'Insurance Covered', 'GPS Tracking', 'Ample Luggage Space'],
  },
  {
    name: 'Toyota HiAce',
    passengers: 12,
    image: CR('Toyota_HiAce', 600, 350),
    features: ['Air Conditioning', 'Professional Driver', 'Insurance Covered', 'GPS Tracking'],
  },
  {
    name: 'Toyota KDH Van',
    passengers: 6,
    image: CR('Toyota_KDH_Van', 600, 350),
    features: ['Comfortable Seating', 'Air Conditioning', 'Experienced Driver', 'Well Maintained'],
  },
  {
    name: 'Honda Vezel SUV',
    passengers: 4,
    image: CR('Honda_Vezel_SUV', 600, 350),
    features: ['Fuel Efficient', 'Premium Comfort', 'Local Driver', '24/7 Support'],
  },
  {
    name: 'Toyota Prius',
    passengers: 3,
    image: CR('Toyota_Prius', 600, 350),
    features: ['Eco-Friendly', 'Premium Comfort', 'Local Driver', '24/7 Support'],
  },
  {
    name: 'Mini Car',
    passengers: 2,
    image: CR('Mini_Car', 600, 350),
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
