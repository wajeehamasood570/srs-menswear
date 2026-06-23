import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X, Plus, Minus, Trash2, Truck, ShieldCheck, RefreshCcw, Star, Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/srs-logo.asset.json";
import heroImg from "@/assets/hero-mens.jpg";
import { products, categories, type Product } from "@/lib/products";
import { cartStore, useCart, formatPKR } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRS Men's Wear Karachi — Premium Kurta, Suits & Wedding Wear" },
      { name: "description", content: "Shop SRS Men's Wear in Karachi: handcrafted kurtas, shalwar kameez, waistcoats, prince coats and formal suits. Visit us at Hyderi Market or order online with Cash on Delivery." },
      { property: "og:title", content: "SRS Men's Wear Karachi" },
      { property: "og:description", content: "Premium men's fashion in Karachi — handcrafted kurtas, suits & wedding wear." },
    ],
  }),
  component: HomePage,
});

const SIZES = ["S", "M", "L", "XL", "XXL"];

function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<string>("All");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = activeCat === "All" || p.category === activeCat;
      const okQ = !query || p.name.toLowerCase().includes(query.toLowerCase());
      return okCat && okQ;
    });
  }, [activeCat, query]);

  return (
    <div className="min-h-screen bg-background">
      <Toaster theme="dark" position="top-center" />
      <AnnouncementBar />
      <Header
        onCartOpen={() => setCartOpen(true)}
        onMenuOpen={() => setMenuOpen(true)}
        onSearch={setQuery}
        query={query}
      />

      <main>
        <Hero />
        <CategoryStrip active={activeCat} onChange={setActiveCat} />
        <ProductGrid
          products={filtered}
          onQuickView={setQuickView}
          activeCat={activeCat}
        />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelect={(c) => { setActiveCat(c); setMenuOpen(false); }}
      />
      <QuickView product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-gold text-center text-xs sm:text-sm py-2 px-4 font-medium">
      Free shipping on orders over PKR 5,000 · Cash on Delivery available across Pakistan
    </div>
  );
}

function Header({ onCartOpen, onMenuOpen, onSearch, query }: {
  onCartOpen: () => void; onMenuOpen: () => void; onSearch: (q: string) => void; query: string;
}) {
  const cart = useCart();
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button onClick={onMenuOpen} className="lg:hidden text-foreground" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>

        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset.url} alt="SRS Men's Wear" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg text-gold">SRS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Men's Wear</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
          {categories.map((c) => (
            <a key={c.name} href="#shop" className="hover:text-gold transition-colors">{c.name}</a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button onClick={() => setSearchOpen((s) => !s)} className="p-2 hover:text-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button onClick={onCartOpen} className="relative p-2 hover:text-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      {searchOpen && (
        <div className="border-t border-border bg-background px-4 py-3 sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search for kurta, suits, prince coat..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {query && <button onClick={() => onSearch("")}><X className="h-4 w-4 text-muted-foreground" /></button>}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={heroImg} alt="SRS Men's Wear hero" className="h-full w-full object-cover object-top" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Summer / Eid Collection 2026</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.05]">
            Dress like a <span className="text-gold italic">Gentleman.</span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg max-w-md">
            Handcrafted kurtas, prince coats and formal suits — tailored in Pakistan with premium fabrics and timeless cuts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-primary-foreground hover:opacity-90 font-medium">
              <a href="#shop">Shop Collection</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary">
              <a href="#shop">New Arrivals</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryStrip({ active, onChange }: { active: string; onChange: (c: string) => void }) {
  const all = [{ name: "All", count: products.length }, ...categories];
  return (
    <section id="shop" className="border-b border-border bg-card/40">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 scrollbar-none">
        {all.map((c) => {
          const isActive = active === c.name;
          return (
            <button
              key={c.name}
              onClick={() => onChange(c.name)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
                isActive
                  ? "border-gold bg-gold text-primary-foreground font-medium"
                  : "border-border bg-transparent text-foreground hover:border-gold/50"
              }`}
            >
              {c.name} <span className="opacity-60 text-xs">({c.count})</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ProductGrid({ products, onQuickView, activeCat }: {
  products: Product[]; onQuickView: (p: Product) => void; activeCat: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl">{activeCat === "All" ? "Featured Collection" : activeCat}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{products.length} products</p>
        </div>
      </div>
      {products.length === 0 ? (
        <div className="rounded-lg border border-border p-12 text-center text-muted-foreground">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} p={p} onQuickView={onQuickView} />)}
        </div>
      )}
    </section>
  );
}

function ProductCard({ p, onQuickView }: { p: Product; onQuickView: (p: Product) => void }) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-lg bg-card aspect-[3/4]">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.tag && (
          <Badge className="absolute left-3 top-3 bg-gold text-primary-foreground hover:bg-gold border-0">{p.tag}</Badge>
        )}
        <button
          onClick={() => onQuickView(p)}
          className="absolute inset-x-3 bottom-3 translate-y-12 rounded-md bg-background/90 py-2 text-sm font-medium opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick View
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{p.category}</p>
        <h3 className="font-display text-base leading-tight">{p.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-gold font-medium">{formatPKR(p.price)}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPKR(p.oldPrice)}</span>}
        </div>
      </div>
    </article>
  );
}

function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const availableSizes = product?.sizes ?? SIZES;
  const [size, setSize] = useState(availableSizes[0] ?? "M");
  useEffect(() => { if (product) setSize((product.sizes ?? SIZES)[0] ?? "M"); }, [product]);
  if (!product) return null;

  const add = () => {
    cartStore.add(product, size);
    toast.success(`${product.name} added to cart`, { description: `Size: ${size}` });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4" onClick={onClose}>
      <div
        className="w-full max-w-3xl overflow-hidden rounded-t-2xl sm:rounded-2xl bg-popover border border-border max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid sm:grid-cols-2">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          <div className="p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{product.category}</p>
                <h3 className="font-display text-2xl mt-1">{product.name}</h3>
              </div>
              <button onClick={onClose} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl text-gold font-medium">{formatPKR(product.price)}</span>
              {product.oldPrice && <span className="text-sm text-muted-foreground line-through">{formatPKR(product.oldPrice)}</span>}
            </div>
            {product.oldPrice && (
              <p className="mt-1 text-xs font-medium text-green-500">⚠ Limited Stock Available</p>
            )}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-10 min-w-12 px-3 rounded-md border text-sm transition-all ${
                      size === s ? "border-gold bg-gold text-primary-foreground font-medium" : "border-border hover:border-gold/50"
                    }`}
                  >{s}</button>
                ))}
              </div>
            </div>

            {product.sizeChart && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Size Chart</p>
                <div className="overflow-x-auto rounded-md border border-border">
                  <table className="w-full text-xs">
                    <thead className="bg-secondary/60">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium">Size</th>
                        {product.sizeChart[0].chest && <th className="px-3 py-2 text-left font-medium">Chest</th>}
                        {product.sizeChart[0].waist && <th className="px-3 py-2 text-left font-medium">Waist</th>}
                        {product.sizeChart[0].length && <th className="px-3 py-2 text-left font-medium">Length</th>}
                        {product.sizeChart[0].sleeve && <th className="px-3 py-2 text-left font-medium">Sleeve</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizeChart.map((row) => (
                        <tr key={row.size} className="border-t border-border">
                          <td className="px-3 py-2 font-medium">{row.size}</td>
                          {row.chest && <td className="px-3 py-2">{row.chest}</td>}
                          {row.waist && <td className="px-3 py-2">{row.waist}</td>}
                          {row.length && <td className="px-3 py-2">{row.length}</td>}
                          {row.sleeve && <td className="px-3 py-2">{row.sleeve}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <Button onClick={add} size="lg" className="mt-6 bg-gold text-primary-foreground hover:opacity-90">
              <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cart = useCart();
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-popover transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <h3 className="font-display text-xl">Your Cart ({cart.length})</h3>
          <button onClick={onClose} aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button onClick={onClose} variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id + item.size} className="flex gap-3">
                  <img src={item.product.image} alt={item.product.name} className="h-24 w-20 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h4 className="text-sm font-medium leading-snug truncate">{item.product.name}</h4>
                      <button onClick={() => cartStore.remove(item.product.id, item.size)} aria-label="Remove">
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-md border border-border">
                        <button className="px-2 py-1" onClick={() => cartStore.setQty(item.product.id, item.size, item.qty - 1)}><Minus className="h-3 w-3" /></button>
                        <span className="text-sm w-6 text-center">{item.qty}</span>
                        <button className="px-2 py-1" onClick={() => cartStore.setQty(item.product.id, item.size, item.qty + 1)}><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="text-sm text-gold font-medium">{formatPKR(item.product.price * item.qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>{formatPKR(subtotal)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span>{subtotal >= 5000 ? "Free" : formatPKR(250)}</span></div>
              <div className="flex justify-between font-medium text-base border-t border-border pt-3">
                <span>Total</span><span className="text-gold">{formatPKR(subtotal + (subtotal >= 5000 ? 0 : 250))}</span>
              </div>
              <Button
                size="lg"
                className="w-full bg-gold text-primary-foreground hover:opacity-90"
                onClick={() => { toast.success("Order placed!", { description: "This is a demo — no real payment processed." }); cartStore.clear(); onClose(); }}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function MobileMenu({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (c: string) => void }) {
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black/70 transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} />
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col border-r border-border bg-popover transition-transform lg:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="SRS" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-gold">SRS Men's Wear</span>
          </div>
          <button onClick={onClose}><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <button onClick={() => onSelect("All")} className="block w-full rounded-md px-3 py-3 text-left hover:bg-secondary">All Products</button>
          {categories.map((c) => (
            <button key={c.name} onClick={() => onSelect(c.name)} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-secondary">
              <span>{c.name}</span>
              <span className="text-xs text-muted-foreground">{c.count}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

function Features() {
  const items = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over PKR 5,000" },
    { icon: ShieldCheck, title: "Secure Checkout", desc: "Cash on Delivery available" },
    { icon: RefreshCcw, title: "Easy Returns", desc: "7-day exchange policy" },
    { icon: Star, title: "Premium Quality", desc: "Handcrafted in Pakistan" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
              <i.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display text-base">{i.title}</h4>
              <p className="text-xs text-muted-foreground">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Ahmed K.", text: "Stitching quality is top notch. Fits perfectly — got many compliments at the wedding!" },
    { name: "Bilal S.", text: "Ordered the prince coat for my barat. Looked exactly like the picture. Highly recommend." },
    { name: "Hamza R.", text: "Fast delivery and the kurta fabric is super comfortable. Will order again." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Reviews</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">What our customers say</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-6">
            <div className="flex text-gold mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            <p className="mt-4 text-sm font-medium">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-card/40 border-y border-border">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Join the SRS Club</h2>
        <p className="mt-2 text-sm text-muted-foreground">Get 10% off your first order and early access to new drops.</p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
          onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed!", { description: "Check your inbox for the discount code." }); (e.target as HTMLFormElement).reset(); }}
        >
          <input
            required type="email" placeholder="your@email.com"
            className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <Button type="submit" className="bg-gold text-primary-foreground hover:opacity-90">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="SRS" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-lg text-gold">SRS</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Men's Wear</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Premium men's fashion handcrafted in Karachi with timeless cuts and quality fabrics. Deals in Men Clothing since 2010.</p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a href="https://instagram.com/srsgarments" target="_blank" rel="noreferrer" className="hover:text-gold"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com/garmentssrs" target="_blank" rel="noreferrer" className="hover:text-gold"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gold"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {categories.map((c) => <li key={c.name}><a href="#shop" className="hover:text-gold">{c.name}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-gold">Size Guide</a></li>
            <li><a href="#" className="hover:text-gold">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold">Track Order</a></li>
            <li><a href="#" className="hover:text-gold">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <span>Shop No. B/10, Mansoor Market Main, Hyderi Market, Karachi</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+923322243032" className="hover:text-gold">+92 332 224 3032 (Saad)</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+923322243269" className="hover:text-gold">+92 332 224 3269 (Rafiq)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 S.R.S Garments — Men's Wear Karachi. All rights reserved.
      </div>
    </footer>
  );
}
