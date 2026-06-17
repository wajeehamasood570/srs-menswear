import kurtaCream from "@/assets/product-kurta-cream.jpg";
import kurtaBlack from "@/assets/product-kurta-black.jpg";
import waistcoatNavy from "@/assets/product-waistcoat-navy.jpg";
import whiteSuit from "@/assets/product-white-suit.jpg";
import suitGrey from "@/assets/product-suit-grey.jpg";
import princeCoat from "@/assets/product-prince-coat.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Kurta" | "Shalwar Kameez" | "Waistcoat" | "Prince Coat" | "Formal Suit";
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  description: string;
};

export const products: Product[] = [
  { id: "p1", name: "Classic Cream Kurta", category: "Kurta", price: 4500, oldPrice: 5500, image: kurtaCream, tag: "Bestseller", description: "Premium cotton blend kurta tailored for an elegant fit. Perfect for daily wear and casual gatherings." },
  { id: "p2", name: "Midnight Black Kurta", category: "Kurta", price: 4800, image: kurtaBlack, tag: "New", description: "A timeless black kurta crafted from breathable fabric with a sleek modern cut." },
  { id: "p3", name: "Royal Navy Waistcoat", category: "Waistcoat", price: 6200, oldPrice: 7500, image: waistcoatNavy, description: "Slim-fit navy waistcoat with mandarin collar — a refined choice for formal occasions." },
  { id: "p4", name: "Ivory Cotton Suit", category: "Shalwar Kameez", price: 5200, image: whiteSuit, tag: "Eid Pick", description: "Crisp ivory shalwar kameez stitched in soft cotton for all-day comfort." },
  { id: "p5", name: "Charcoal 3-Piece Suit", category: "Formal Suit", price: 18500, oldPrice: 22000, image: suitGrey, tag: "Premium", description: "Tailored three-piece suit in fine charcoal wool blend — boardroom ready." },
  { id: "p6", name: "Maroon Wedding Prince Coat", category: "Prince Coat", price: 24500, image: princeCoat, tag: "Wedding", description: "Hand-embroidered maroon prince coat — a regal statement for your wedding day." },
];

export const categories = [
  { name: "Kurta", count: 24 },
  { name: "Shalwar Kameez", count: 18 },
  { name: "Waistcoat", count: 12 },
  { name: "Prince Coat", count: 9 },
  { name: "Formal Suit", count: 15 },
];
