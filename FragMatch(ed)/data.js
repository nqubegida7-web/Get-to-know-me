/* ============================================================
   FRAGMATCH — SHARED DATA
   Import this in both index.html and results.html
   ============================================================ */

/* FRAGRANCE DATABASE */
const fragrances = [
  { name: "Versace Pour Homme",         house: "Versace",              season: "summer", profile: "fresh",  notes: ["citrus", "marine", "aromatic"],                   price: 70,  image: "" },
  { name: "Parfums de Marly Layton",    house: "Parfums de Marly",     season: "winter", profile: "sweet",  notes: ["vanilla", "apple", "cardamom"],                   price: 200, image: "" },
  { name: "Armaf Club de Nuit Intense", house: "Armaf",                season: "fall",   profile: "woody",  notes: ["pineapple", "birch", "musk"],                     price: 25,  image: "" },
  { name: "Bleu de Chanel",             house: "Chanel",               season: "spring", profile: "fresh",  notes: ["citrus", "woody", "ginger"],                      price: 150, image: "" },
  { name: "Dior Sauvage",               house: "Dior",                 season: "summer", profile: "fresh",  notes: ["bergamot", "pepper", "ambroxan"],                 price: 130, image: "" },
  { name: "Creed Aventus",              house: "Creed",                season: "all",    profile: "woody",  notes: ["pineapple", "birch", "musk"],                     price: 350, image: "" },
  { name: "Paco Rabanne 1 Million",     house: "Paco Rabanne",         season: "fall",   profile: "sweet",  notes: ["leather", "cinnamon", "honey"],                   price: 80,  image: "" },
  { name: "Tom Ford Oud Wood",          house: "Tom Ford",             season: "winter", profile: "woody",  notes: ["oud", "sandalwood", "cardamom"],                  price: 250, image: "" },
  { name: "Acqua di Parma Colonia",     house: "Acqua di Parma",       season: "summer", profile: "fresh",  notes: ["citrus", "lavender", "rosemary"],                 price: 140, image: "" },
  { name: "Jo Malone Wood Sage & Sea Salt", house: "Jo Malone",        season: "summer", profile: "fresh",  notes: ["sage", "sea salt", "ambroxan"],                   price: 160, image: "" },
  { name: "Chanel No. 5",               house: "Chanel",               season: "all",    profile: "floral", notes: ["jasmine", "rose", "vanilla"],                     price: 140, image: "" },
  { name: "Dior J'adore",               house: "Dior",                 season: "spring", profile: "floral", notes: ["jasmine", "rose", "yuzu"],                        price: 120, image: "" },
  { name: "YSL Black Opium",            house: "Yves Saint Laurent",   season: "fall",   profile: "sweet",  notes: ["coffee", "vanilla", "white flowers"],             price: 110, image: "" },
  { name: "Gucci Bloom",                house: "Gucci",                season: "spring", profile: "floral", notes: ["jasmine", "tuberose", "rangoon creeper"],         price: 130, image: "" },
  { name: "Calvin Klein CK One",        house: "Calvin Klein",         season: "summer", profile: "fresh",  notes: ["citrus", "pineapple", "musk"],                    price: 40,  image: "" },
  { name: "Hugo Boss Bottled",          house: "Hugo Boss",            season: "fall",   profile: "woody",  notes: ["apple", "cinnamon", "tonka bean"],                price: 75,  image: "" },
  { name: "Ralph Lauren Polo Blue",     house: "Ralph Lauren",         season: "summer", profile: "fresh",  notes: ["citrus", "marine", "woody"],                      price: 80,  image: "" },
  { name: "Givenchy Gentleman",         house: "Givenchy",             season: "fall",   profile: "woody",  notes: ["iris", "leather", "cedar"],                       price: 90,  image: "" },
  { name: "Burberry Brit",              house: "Burberry",             season: "spring", profile: "fresh",  notes: ["citrus", "lavender", "patchouli"],                price: 70,  image: "" },
  { name: "Armani Code",                house: "Giorgio Armani",       season: "fall",   profile: "woody",  notes: ["citrus", "leather", "tobacco"],                   price: 85,  image: "" },
  { name: "D&G Light Blue",             house: "Dolce & Gabbana",      season: "summer", profile: "fresh",  notes: ["citrus", "cedar", "apple"],                       price: 80,  image: "" },
  { name: "Victoria's Secret Bombshell",house: "Victoria's Secret",    season: "spring", profile: "floral", notes: ["peach", "jasmine", "vanilla"],                    price: 45,  image: "" },
  { name: "Lancôme La Vie Est Belle",   house: "Lancôme",              season: "all",    profile: "sweet",  notes: ["iris", "patchouli", "gourmand"],                  price: 110, image: "" },
  { name: "Estée Lauder Beautiful",     house: "Estée Lauder",         season: "spring", profile: "floral", notes: ["jasmine", "rose", "patchouli"],                   price: 90,  image: "" },
  { name: "Hermès Terre d'Hermès",      house: "Hermès",               season: "fall",   profile: "woody",  notes: ["grapefruit", "cedar", "benzoin"],                 price: 130, image: "" },
  { name: "Louis Vuitton Imagination",  house: "Louis Vuitton",        season: "spring", profile: "floral", notes: ["peony", "rose", "patchouli"],                     price: 240, image: "" },
  { name: "Prada Amber",                house: "Prada",                season: "winter", profile: "sweet",  notes: ["amber", "vanilla", "cinnamon"],                   price: 120, image: "" },
  { name: "Cartier Déclaration",        house: "Cartier",              season: "fall",   profile: "woody",  notes: ["bergamot", "jasmine", "vetiver"],                 price: 130, image: "" },
  { name: "Bvlgari Man Wood Essence",   house: "Bvlgari",              season: "winter", profile: "woody",  notes: ["cedar", "sandalwood", "cardamom"],                price: 100, image: "" },
  { name: "Montblanc Legend",           house: "Montblanc",            season: "fall",   profile: "woody",  notes: ["apple", "geranium", "sandalwood"],                price: 70,  image: "" },
  { name: "Salvatore Ferragamo Uomo",   house: "Salvatore Ferragamo",  season: "summer", profile: "fresh",  notes: ["citrus", "marine", "woody"],                      price: 65,  image: "" },
  { name: "Issey Miyake L'Eau d'Issey", house: "Issey Miyake",         season: "summer", profile: "fresh",  notes: ["marine", "yuzu", "lily"],                         price: 70,  image: "" },
  { name: "Narciso Rodriguez For Her",  house: "Narciso Rodriguez",    season: "all",    profile: "floral", notes: ["rose", "musk", "sandalwood"],                     price: 90,  image: "" },
  { name: "Marc Jacobs Daisy",          house: "Marc Jacobs",          season: "spring", profile: "floral", notes: ["violet", "jasmine", "musk"],                      price: 75,  image: "" },
  { name: "Thierry Mugler Angel",       house: "Thierry Mugler",       season: "winter", profile: "sweet",  notes: ["vanilla", "cocoa", "patchouli"],                  price: 100, image: "" },
  // Niche
  { name: "Le Labo Santal 33",          house: "Le Labo",              season: "all",    profile: "woody",  notes: ["sandalwood", "cedar", "leather"],                 price: 220, image: "" },
  { name: "Byredo Gypsy Water",         house: "Byredo",               season: "all",    profile: "fresh",  notes: ["bergamot", "pine", "vanilla"],                    price: 200, image: "" },
  { name: "Maison Francis Kurkdjian Baccarat Rouge 540", house: "Maison Francis Kurkdjian", season: "all", profile: "sweet", notes: ["jasmine", "saffron", "cedarwood"], price: 325, image: "" },
  { name: "Diptyque Philosykos",        house: "Diptyque",             season: "summer", profile: "fresh",  notes: ["fig", "cedar", "white wood"],                     price: 185, image: "" },
  { name: "Frederic Malle Portrait of a Lady", house: "Frederic Malle", season: "fall",  profile: "floral", notes: ["rose", "patchouli", "sandalwood"],                price: 285, image: "" },
  { name: "Serge Lutens Ambre Sultan",  house: "Serge Lutens",         season: "winter", profile: "sweet",  notes: ["amber", "benzoin", "vanilla"],                    price: 170, image: "" },
  { name: "Penhaligon's Halfeti",       house: "Penhaligon's",         season: "all",    profile: "woody",  notes: ["rose", "oud", "sandalwood"],                      price: 195, image: "" },
  { name: "D.S. & Durga I Don't Know What", house: "D.S. & Durga",    season: "spring", profile: "fresh",  notes: ["citrus", "marine", "musk"],                       price: 175, image: "" },
  { name: "Maison Louis Marie No.04",   house: "Maison Louis Marie",   season: "winter", profile: "woody",  notes: ["sandalwood", "vetiver", "amber"],                 price: 95,  image: "" },
  // Middle Eastern
  { name: "Lattafa Yara",               house: "Lattafa",              season: "spring", profile: "floral", notes: ["jasmine", "rose", "vanilla"],                     price: 30,  image: "" },
  { name: "Lattafa Fakhar Rose",        house: "Lattafa",              season: "spring", profile: "floral", notes: ["rose", "jasmine", "musk"],                        price: 25,  image: "" },
  { name: "Lattafa Qudrat",             house: "Lattafa",              season: "fall",   profile: "woody",  notes: ["oud", "sandalwood", "amber"],                     price: 35,  image: "" },
  { name: "Lattafa Khamrah",            house: "Lattafa",              season: "winter", profile: "sweet",  notes: ["vanilla", "cocoa", "spicy"],                      price: 28,  image: "" },
  { name: "Lattafa Asad",               house: "Lattafa",              season: "fall",   profile: "woody",  notes: ["oud", "sandalwood", "cardamom"],                  price: 32,  image: "" },
  { name: "Amouage Interlude Man",      house: "Amouage",              season: "fall",   profile: "woody",  notes: ["tobacco", "sandalwood", "frankincense"],          price: 300, image: "" },
  { name: "Amouage Jubilation XXV",     house: "Amouage",              season: "all",    profile: "floral", notes: ["rose", "jasmine", "frankincense"],                price: 400, image: "" },
  { name: "Amouage Reflection Man",     house: "Amouage",              season: "winter", profile: "floral", notes: ["neroli", "rose", "sandalwood"],                   price: 280, image: "" },
  { name: "Ajmal Oud",                  house: "Ajmal",                season: "fall",   profile: "woody",  notes: ["oud", "sandalwood", "amber"],                     price: 55,  image: "" },
  { name: "Ajmal Amber",                house: "Ajmal",                season: "winter", profile: "sweet",  notes: ["amber", "vanilla", "spicy"],                      price: 45,  image: "" },
  { name: "Ajmal Musk",                 house: "Ajmal",                season: "all",    profile: "sweet",  notes: ["musk", "vanilla", "amber"],                       price: 35,  image: "" },
  { name: "Rasasi La Yuqawam",          house: "Rasasi",               season: "all",    profile: "woody",  notes: ["oud", "rose", "sandalwood"],                      price: 20,  image: "" },
  { name: "Rasasi Hawas",               house: "Rasasi",               season: "fall",   profile: "sweet",  notes: ["vanilla", "cinnamon", "amber"],                   price: 15,  image: "" },
  { name: "Rasasi Romance",             house: "Rasasi",               season: "spring", profile: "floral", notes: ["rose", "jasmine", "vanilla"],                     price: 12,  image: "" },
  { name: "French Avenue Elegance",     house: "French Avenue",        season: "spring", profile: "floral", notes: ["jasmine", "rose", "musk"],                        price: 22,  image: "" },
  { name: "French Avenue Pour Lui",     house: "French Avenue",        season: "fall",   profile: "woody",  notes: ["cedar", "leather", "vanilla"],                    price: 25,  image: "" },
  { name: "French Avenue Midnight",     house: "French Avenue",        season: "fall",   profile: "woody",  notes: ["oud", "leather", "amber"],                        price: 30,  image: "" },
];

/* CATEGORIZE FRAGRANCES */
const arabHouses   = ["Lattafa", "French Avenue", "Amouage", "Ajmal", "Rasasi"];
const nicheHouses  = ["Frederic Malle", "Serge Lutens", "Le Labo", "Diptyque", "Byredo",
                      "Maison Francis Kurkdjian", "Maison Louis Marie", "D.S. & Durga",
                      "Penhaligon's", "Floris", "Annick Goutal", "Caron"];

fragrances.forEach(f => {
  if      (arabHouses.includes(f.house))  f.category = 'arab';
  else if (nicheHouses.includes(f.house)) f.category = 'niche';
  else                                     f.category = 'designer';
});

/* CLONE DATABASE */
const clones = {
  "creed aventus":              { clone: "Armaf Club de Nuit Intense", price: 25 },
  "dior sauvage":               { clone: "Zara Vibrant Leather",       price: 18 },
  "chanel bleu de chanel":      { clone: "Zara Seoul",                 price: 18 },
  "versace pour homme":         { clone: "Adidas Originals",           price: 12 },
  "paco rabanne 1 million":     { clone: "Lattafa Asad",               price: 32 },
  "tom ford oud wood":          { clone: "Bvlgari Man Wood Essence",   price: 100 },
  "acqua di parma colonia":     { clone: "Nautica Voyage",             price: 20 },
  "jo malone wood sage sea salt":{ clone: "Zara Emotions Seoul",       price: 20 },
  "chanel no. 5":               { clone: "Victoria's Secret Bombshell",price: 45 },
  "dior jadore":                { clone: "Lancôme La Vie Est Belle",   price: 110 },
  "ysl black opium":            { clone: "Lattafa Khamrah",            price: 28 },
  "gucci bloom":                { clone: "Lattafa Yara",               price: 30 },
  "baccarat rouge 540":         { clone: "Lattafa Yara Cafe",          price: 28 },
  "le labo santal 33":          { clone: "Maison Louis Marie No.04",   price: 95 },
  "thierry mugler angel":       { clone: "Rasasi Hawas",               price: 15 },
  "marc jacobs daisy":          { clone: "Lattafa Fakhar Rose",        price: 25 },
};

/* EXCHANGE RATES — fetched live, these are fallbacks */
let exchangeRates = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149, AED: 3.67,
  SAR: 3.75, INR: 83, CNY: 7.24, KRW: 1325, BRL: 4.97,
  ZAR: 18.6, AUD: 1.53, CAD: 1.36, CHF: 0.90, SEK: 10.4,
  NOK: 10.6, DKK: 6.9, PLN: 4.0, TRY: 30.5, ILS: 3.7,
  EGP: 30.9, THB: 35.1, SGD: 1.34, HKD: 7.82, MYR: 4.7,
  IDR: 15700, PHP: 56, TWD: 31.5,
};

/* Fisher-Yates shuffle — fair randomization */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Fetch live rates (no API key needed) */
async function fetchLiveRates() {
  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=USD');
    if (res.ok) {
      const data = await res.json();
      exchangeRates = { USD: 1, ...data.rates };
    }
  } catch (_) { /* silently fall back to hardcoded rates */ }
}
