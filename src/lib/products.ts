import waistcoatNavy from "@/assets/product-waistcoat-navy.jpg";
import whiteSuit from "@/assets/product-white-suit.jpg";
import princeCoat from "@/assets/product-prince-coat.jpg";
import tshirtPurple from "@/assets/tshirt-support-purple.jpg.asset.json";
import tshirtBlack from "@/assets/tshirt-support-black.jpg.asset.json";
import trouserBlackDrop from "@/assets/trouser-black-drop.jpg.asset.json";
import trouserCharcoal from "@/assets/trouser-charcoal.jpg.asset.json";
import trouserOlive from "@/assets/trouser-olive.jpg.asset.json";
import trouserSteel from "@/assets/trouser-steel-blue.jpg.asset.json";
import trouserNavy from "@/assets/trouser-navy.jpg.asset.json";

export type ProductDetails = {
  fabric?: string;
  fit?: string;
  waist?: string;
  pockets?: string;
  features?: string[];
  care?: string[];
};

export type Product = {
  id: string;
  name: string;
  category: "Shalwar Kameez" | "Waistcoat" | "Prince Coat" | "T-Shirt" | "Trousers";
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  description: string;
  sizes?: string[];
  sizeChart?: { size: string; chest?: string; length?: string; waist?: string; sleeve?: string }[];
  details?: ProductDetails;
};

const dropShoulderChart = [
  { size: "L", chest: "22\"", length: "28\"", sleeve: "Drop" },
  { size: "XL", chest: "23\"", length: "29\"", sleeve: "Drop" },
  { size: "2XL", chest: "24\"", length: "30\"", sleeve: "Drop" },
  { size: "3XL", chest: "25\"", length: "31\"", sleeve: "Drop" },
];

const trouserSizes = ["30", "32", "34", "36", "38"];
const tshirtSizes = ["L", "XL", "2XL", "3XL"];

const trouserDetails: ProductDetails = {
  fabric: "Premium Cotton Blend",
  fit: "Slim Fit",
  waist: "Elastic Waistband with Drawstring",
  pockets: "2 Side Pockets + 1 Back Pocket",
  features: [
    "Stylish Slim Fit Look",
    "Soft & Comfortable Fabric",
    "Durable Stitching",
    "Perfect for All Seasons",
  ],
  care: ["Machine Wash", "Do Not Bleach", "Iron Low Heat", "Dry in Shade"],
};

export const products: Product[] = [
  { id: "t1", name: "Support Print Drop Shoulder Tee — Black", category: "T-Shirt", price: 3100, oldPrice: 3995, image: tshirtBlack.url, tag: "Limited Stock", description: "Premium imported China fabric drop shoulder tee. Oversized fit with signature 'Support' print across the chest.", sizes: tshirtSizes, sizeChart: dropShoulderChart },
  { id: "t2", name: "Support Print Drop Shoulder Tee — Mauve", category: "T-Shirt", price: 3100, oldPrice: 3995, image: tshirtPurple.url, tag: "Limited Stock", description: "Premium imported China fabric drop shoulder tee in mauve. Relaxed oversized silhouette with 'Support' graphic.", sizes: tshirtSizes, sizeChart: dropShoulderChart },

  { id: "tr1", name: "Premium Slim Fit Trouser — Charcoal Black", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserCharcoal.url, tag: "Bestseller", description: "Modern Style. Everyday Comfort. Crafted with premium fabric and tailored for a sharp slim fit look — perfect for casual wear, office, and smart occasions.", sizes: trouserSizes, details: trouserDetails },
  { id: "tr2", name: "Premium Slim Fit Trouser — Navy Blue", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserNavy.url, description: "Classic navy slim trouser with adjustable drawstring waist and refined pintuck front seam.", sizes: trouserSizes, details: trouserDetails },
  { id: "tr3", name: "Premium Slim Fit Trouser — Dark Olive", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserOlive.url, tag: "New", description: "Dark olive green slim-fit trouser with modern silhouette and elastic drawstring waistband.", sizes: trouserSizes, details: trouserDetails },
  { id: "tr4", name: "Premium Slim Fit Trouser — Steel Blue", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserSteel.url, description: "Steel blue slim trouser — refined casual wear with pintuck front and drawstring waist.", sizes: trouserSizes, details: trouserDetails },
  { id: "tr5", name: "Premium Slim Fit Trouser — Contrast Black", category: "Trousers", price: 3100, oldPrice: 3995, image: trouserBlackDrop.url, tag: "New", description: "Black slim trouser with contrast white drawstring and signature pintuck front — sharp, modern, comfortable.", sizes: trouserSizes, details: trouserDetails },

  { id: "p3", name: "Royal Navy Waistcoat", category: "Waistcoat", price: 6200, oldPrice: 7500, image: waistcoatNavy, description: "Slim-fit navy waistcoat with mandarin collar — a refined choice for formal occasions." },
  { id: "p4", name: "Ivory Cotton Suit", category: "Shalwar Kameez", price: 5200, image: whiteSuit, tag: "Eid Pick", description: "Crisp ivory shalwar kameez stitched in soft cotton for all-day comfort." },
  { id: "p6", name: "Maroon Wedding Prince Coat", category: "Prince Coat", price: 24500, image: princeCoat, tag: "Wedding", description: "Hand-embroidered maroon prince coat — a regal statement for your wedding day." },
];

export const categories = [
  { name: "T-Shirt", count: 2 },
  { name: "Trousers", count: 5 },
  { name: "Shalwar Kameez", count: 18 },
  { name: "Waistcoat", count: 12 },
  { name: "Prince Coat", count: 9 },
];
