import { useSyncExternalStore } from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number; size: string };

let cart: CartItem[] = [];
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const cartStore = {
  subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); },
  get() { return cart; },
  add(product: Product, size = "M") {
    const existing = cart.find((c) => c.product.id === product.id && c.size === size);
    cart = existing
      ? cart.map((c) => c === existing ? { ...c, qty: c.qty + 1 } : c)
      : [...cart, { product, qty: 1, size }];
    emit();
  },
  remove(id: string, size: string) {
    cart = cart.filter((c) => !(c.product.id === id && c.size === size));
    emit();
  },
  setQty(id: string, size: string, qty: number) {
    cart = qty <= 0
      ? cart.filter((c) => !(c.product.id === id && c.size === size))
      : cart.map((c) => c.product.id === id && c.size === size ? { ...c, qty } : c);
    emit();
  },
  clear() { cart = []; emit(); },
};

export function useCart() {
  return useSyncExternalStore(cartStore.subscribe, cartStore.get, cartStore.get);
}

export const formatPKR = (n: number) =>
  new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(n);
