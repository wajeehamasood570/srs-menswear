import kurtaCream from "@/assets/product-kurta-cream.jpg";
import kurtaBlack from "@/assets/product-kurta-black.jpg";
import waistcoatNavy from "@/assets/product-waistcoat-navy.jpg";
import whiteSuit from "@/assets/product-white-suit.jpg";
import suitGrey from "@/assets/product-suit-grey.jpg";
import princeCoat from "@/assets/product-prince-coat.jpg";
import tshirtPurple from "@/assets/tshirt-support-purple.jpg.asset.json";
import tshirtBlack from "@/assets/tshirt-support-black.jpg.asset.json";
import trouserBlackDrop from "@/assets/trouser-black-drop.jpg.asset.json";
import trouserCharcoal from "@/assets/trouser-charcoal.jpg.asset.json";
import trouserOlive from "@/assets/trouser-olive.jpg.asset.json";
import trouserSteel from "@/assets/trouser-steel-blue.jpg.asset.json";
import trouserNavy from "@/assets/trouser-navy.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  category: "Kurta" | "Shalwar Kameez" | "Waistcoat" | "Prince Coat" | "Formal Suit" | "T-Shirt" | "Trousers";
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  description: string;
  sizes?: string[];
  sizeChart?: { size: string; chest?: string; length?: string; waist?: string; sleeve?: string }[];
};

const dropShoulderChart = [
  { size: "L", chest: "22\"", length: "28\"", sleeve: "Drop" },
  { size: "XL", chest: "23\"", length: "29\"", sleeve: "Drop" },
  { size: "2XL", chest: "24\"", length: "30\"", sleeve: "Drop" },
  { size: "3XL", chest: "25\"", length: "31\"", sleeve: "Drop" },
];

const trouserChart = [
  { size: "L", waist: "32\"", length: "40\"" },
  { size: "XL", waist: "34\"", length: "41\"" },
  { size: "2XL", waist: "36\"", length: "42\"" },
  { size: "3XL", waist: "38\"", length: "43\"" },
];

const dropSizes = ["L", "XL", "2XL", "3XL"];

export const products: Product[] = [
  { id: "t1", name: "Support Print Drop Shoulder Tee — Black", category: "T-Shirt", price: 3100, oldPrice: 3995, image: tshirtBlack.url, tag: "Limited Stock", description: "Premium imported China fabric drop shoulder tee. Oversized fit with signature 'Support' print across the chest.", sizes: dropSizes, sizeChart: dropShoulderChart },
  { id: "t2", name: "Support Print Drop Shoulder Tee — Mauve", category: "T-Shirt", price: 3100, oldPrice: 3995, image: tshirtPurple.url, tag: "Limited Stock", description: "Premium imported China fabric drop shoulder tee in mauve. Relaxed oversized silhouette with 'Support' graphic.", sizes: dropSizes, sizeChart: dropShoulderChart },
  { id: "tr1", name: "Slim Pintuck Trouser — Charcoal Black", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserCharcoal.url, tag: "Bestseller", description: "Tailored slim-fit drawstring trouser with front pintuck detail. Soft, breathable fabric for all-day comfort.", sizes: dropSizes, sizeChart: trouserChart },
  { id: "tr2", name: "Slim Pintuck Trouser — Navy Blue", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserNavy.url, description: "Classic navy slim trouser with pintuck crease and elasticated drawstring waist.", sizes: dropSizes, sizeChart: trouserChart },
  { id: "tr3", name: "Slim Pintuck Trouser — Dark Olive", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserOlive.url, tag: "New", description: "Dark olive green slim trouser. Modern silhouette with refined pintuck stitching.", sizes: dropSizes, sizeChart: trouserChart },
  { id: "tr4", name: "Slim Pintuck Trouser — Steel Blue", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserSteel.url, description: "Steel blue linen-blend trouser with pintuck front and drawstring waist — refined casual wear.", sizes: dropSizes, sizeChart: trouserChart },
  { id: "tr5", name: "Contrast Drawstring Trouser — Black", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserBlackDrop.url, tag: "New", description: "Black slim trouser with contrast white drawstring and signature pintuck front seam.", sizes: dropSizes, sizeChart: trouserChart },
  { id: "p1", name: "Classic Cream Kurta", category: "Kurta", price: 4500, oldPrice: 5500, image: kurtaCream, tag: "Bestseller", description: "Premium cotton blend kurta tailored for an elegant fit. Perfect for daily wear and casual gatherings." },
  { id: "p2", name: "Midnight Black Kurta", category: "Kurta", price: 4800, image: kurtaBlack, description: "A timeless black kurta crafted from breathable fabric with a sleek modern cut." },
  { id: "p3", name: "Royal Navy Waistcoat", category: "Waistcoat", price: 6200, oldPrice: 7500, image: waistcoatNavy, description: "Slim-fit navy waistcoat with mandarin collar — a refined choice for formal occasions." },
  { id: "p4", name: "Ivory Cotton Suit", category: "Shalwar Kameez", price: 5200, image: whiteSuit, tag: "Eid Pick", description: "Crisp ivory shalwar kameez stitched in soft cotton for all-day comfort." },
  { id: "p5", name: "Charcoal 3-Piece Suit", category: "Formal Suit", price: 18500, oldPrice: 22000, image: suitGrey, tag: "Premium", description: "Tailored three-piece suit in fine charcoal wool blend — boardroom ready." },
  { id: "p6", name: "Maroon Wedding Prince Coat", category: "Prince Coat", price: 24500, image: princeCoat, tag: "Wedding", description: "Hand-embroidered maroon prince coat — a regal statement for your wedding day." },
];

export const categories = [
  { name: "T-Shirt", count: 2 },
  { name: "Trousers", count: 5 },
  { name: "Kurta", count: 24 },
  { name: "Shalwar Kameez", count: 18 },
  { name: "Waistcoat", count: 12 },
  { name: "Prince Coat", count: 9 },
  { name: "Formal Suit", count: 15 },
];
