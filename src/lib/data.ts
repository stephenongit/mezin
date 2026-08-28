export interface Product {
  id: string;
  name: string;
  category: string;
  packSize: string;
  description: string;
  price?: number;
  image: string;
  featured?: boolean;
  badge?: string;
}

export const categories = ["All", "பொடி வகைகள்", "மாவு வகைகள்", "புட்டு மாவு"] as const;
export type Category = (typeof categories)[number];

const productImage = (name: string, color: string) => `https://placehold.co/600x600/F7F3E9/${color}?text=${encodeURIComponent(name)}`;

export const products: Product[] = [
  { id: "milagai-thool", name: "மிளகாய் தூள்", category: "பொடி வகைகள்", packSize: "1/4 kg", description: "Freshly ground chilli powder.", price: 80, image: productImage("Milagai Thool", "C62828"), featured: true },
  { id: "kulambu-thool", name: "குழம்பு தூள்", category: "பொடி வகைகள்", packSize: "1/4 kg", description: "Traditional kulambu masala powder.", price: 80, image: productImage("Kulambu Thool", "8D4A1D") },
  { id: "sambar-thool", name: "சாம்பார் தூள்", category: "பொடி வகைகள்", packSize: "1/4 kg", description: "Aromatic spice blend for sambar.", price: 80, image: productImage("Sambar Thool", "E67E22"), featured: true },
  { id: "manjal-thool", name: "மஞ்சள் தூள்", category: "பொடி வகைகள்", packSize: "100 gm", description: "Pure turmeric powder.", price: 40, image: productImage("Manjal Thool", "F1C40F") },
  { id: "idli-podi", name: "இட்லி பொடி", category: "பொடி வகைகள்", packSize: "100 gm", description: "Tasty traditional idli podi.", price: 40, image: productImage("Idli Podi", "B54B2D"), featured: true },
  { id: "rasa-podi", name: "ரசப்பொடி", category: "பொடி வகைகள்", packSize: "100 gm", description: "Flavorful rasam powder.", price: 40, image: productImage("Rasa Podi", "A64B2A") },
  { id: "malli-thool", name: "மல்லி தூள்", category: "பொடி வகைகள்", packSize: "1/4 kg", description: "Fresh coriander powder.", price: 60, image: productImage("Malli Thool", "6E8B3D") },
  { id: "ragi-maavu", name: "ராகி மாவு", category: "மாவு வகைகள்", packSize: "1/2 kg", description: "Nutritious ragi flour.", price: 35, image: productImage("Ragi Maavu", "7B4B2A"), featured: true },
  { id: "siruthaniyam-maavu", name: "சிறுதானிய மாவு", category: "மாவு வகைகள்", packSize: "1/2 kg", description: "Wholesome millet flour.", price: 55, image: productImage("Siruthaniyam Maavu", "9A7B4F") },
  { id: "gothumai-maavu", name: "கோதுமை மாவு", category: "மாவு வகைகள்", packSize: "1 kg", description: "Quality whole wheat flour.", price: 60, image: productImage("Gothumai Maavu", "C49A6C") },
  { id: "kambu-maavu", name: "கம்பு மாவு", category: "மாவு வகைகள்", packSize: "1/2 kg", description: "Natural pearl millet flour.", price: 25, image: productImage("Kambu Maavu", "6B5B3E") },
  { id: "cholam-maavu", name: "சோள மாவு", category: "மாவு வகைகள்", packSize: "1/2 kg", description: "Fresh corn flour.", price: 35, image: productImage("Cholam Maavu", "E1B12C") },
  { id: "pacharisi-maavu", name: "பச்சரிசி மாவு", category: "மாவு வகைகள்", packSize: "1/2 kg", description: "Finely ground raw rice flour.", price: 25, image: productImage("Pacharisi Maavu", "EEE9DD") },
  { id: "mapillai-samba-puttu-maavu", name: "மாப்பிள்ளை சம்பா புட்டு மாவு", category: "புட்டு மாவு", packSize: "1/2 kg", description: "Traditional Mappillai Samba puttu flour.", price: 55, image: productImage("Mappillai Samba Puttu", "9B5A2E"), featured: true },
  { id: "gothumai-puttu-maavu", name: "கோதுமை புட்டு மாவு", category: "புட்டு மாவு", packSize: "1/2 kg", description: "Nutritious wheat puttu flour.", price: 55, image: productImage("Gothumai Puttu", "C49A6C") },
];

export const featuredProducts = products.filter((product) => product.featured);
