"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  ScanLine,
  Zap,
  Gift,
  Smartphone,
  ShoppingCart,
  CheckCircle2,
  Sparkles,
  CalendarClock,
  ShieldCheck,
  BarChart3,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Helper: simple container
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Feature: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <Card className="shadow-sm hover:shadow-md transition-shadow rounded-2xl">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
        <Icon className="h-6 w-6" />
      </span>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">{children}</CardContent>
  </Card>
);

const HowStep: React.FC<{
  n: number;
  title: string;
  children: React.ReactNode;
}> = ({ n, title, children }) => (
  <div className="relative rounded-2xl border bg-white/60 p-6 shadow-sm">
    <div className="absolute -top-3 left-6 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
      Step {n}
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground text-sm">{children}</p>
  </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl border p-6 text-center bg-white/80">
    <div className="text-3xl font-bold tracking-tight">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

export default function GardenCentersLanding() {
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/40 to-white text-gray-900">
      {/* Sticky nav */}
      <div className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            <span className="font-semibold">Toast for Garden Centers</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#customers" className="hover:opacity-80">Customers</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <a href="#demo">Talk to a specialist</a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href="#demo">Book your free demo</a>
            </Button>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
          <div className="absolute top-32 -right-24 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        </div>
        <Container className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <motion.div {...fadeUp}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              New: mobile inventory + loyalty, purpose-built for plant shops
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Plant-shop POS that lets you <span className="text-green-700">grow</span>, not stress
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Speed up checkout, track inventory from your phone, and bring customers back with built-in marketing and loyalty—on the same Toast platform powering millions of transactions every day.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#demo">Book your free demo</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl">
                <a href="#video">See it in action</a>
              </Button>
              <div className="text-xs text-muted-foreground">No commitment • 15-minute walkthrough</div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="↑ 50%" label="Faster checkout" />
              <Stat value="< 2 min" label="Inventory updates" />
              <Stat value="3x" label="Repeat visits w/ loyalty" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <Card className="rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Instant demo (30 sec)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black/5 flex items-center justify-center text-sm text-muted-foreground">
                  {/* Placeholder video block; swap with actual embed */}
                  Product tour video
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Scan plant tags w/ your phone</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Lightning-fast checkout anywhere</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Loyalty + email built-in</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Social proof band */}
      <section className="border-y bg-white/60">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 py-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> PCI compliant</div>
          <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Real-time analytics</div>
          <div className="flex items-center gap-2"><Bot className="h-4 w-4" /> 24/7 support</div>
          <div className="flex items-center gap-2"><CalendarClock className="h-4 w-4" /> Go-live in days</div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to run (and grow) your garden center</h2>
            <p className="mt-3 text-muted-foreground">From scanning and labeling to checkout and marketing—your tools finally live in one place.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature icon={ScanLine} title="Mobile inventory">
              Scan plant tags, update counts, and print labels—right from your phone. Bulk import varieties and automate re-order points.
            </Feature>
            <Feature icon={Zap} title="Fast, flexible checkout">
              Sell at the register, curbside, or out in the greenhouse using handhelds. Accept cards, tap-to-pay, and gift cards.
            </Feature>
            <Feature icon={Gift} title="Loyalty & memberships">
              Turn shoppers into regulars with points, tiers, and memberships. Built-in email and promos keep customers coming back.
            </Feature>
            <Feature icon={Smartphone} title="Online orders & pickup">
              Offer pickup or local delivery with live inventory. Manage orders and catalog from the same back office.
            </Feature>
            <Feature icon={ShoppingCart} title="Bundles & seasonal kits">
              Create kits (planter + soil + fertilizer) with one tap. Set seasonal pricing and promotions in seconds.
            </Feature>
            <Feature icon={Leaf} title="Grower-friendly SKU tools">
              Track varieties, sizes, and care notes. Auto-assign barcodes and print weather-resistant labels.
            </Feature>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white/60 py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-3 text-muted-foreground">Three simple steps from shelf to sale—no tech headaches.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <HowStep n={1} title="Scan & stock">
              Use your phone to scan plants, add varieties, and set prices. Auto-syncs across registers and online.
            </HowStep>
            <HowStep n={2} title="Sell anywhere">
              Check out customers at the counter or on the floor. Lines vanish; shoppers smile.
            </HowStep>
            <HowStep n={3} title="Bring them back">
              Launch loyalty and emails tailored to seasons. Track results in real-time reports.
            </HowStep>
          </div>
        </Container>
      </section>

      {/* Customers / Testimonials */}
      <section id="customers" className="py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by growers and garden centers</h2>
            <p className="mt-3 text-muted-foreground">Real results from businesses like yours.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 text-green-700" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg key={idx} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-gray-700">
                    “We shaved minutes off every checkout and finally ditched spreadsheets. Spring rush has never felt this smooth.”
                  </blockquote>
                  <div className="mt-4 text-xs text-muted-foreground">Sunnydale Garden • 2 locations</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="bg-white/60 py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Flexible options for every season</h2>
            <p className="mt-3 text-muted-foreground">
              Start with a handheld or go all-in with registers and kiosks. We’ll tailor a package to your volume and footprint.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "From $0/mo + processing",
                points: ["Tap-to-pay on iPhone/Android", "Inventory basics", "Email & loyalty starter"],
              },
              {
                name: "Growth",
                price: "Custom quote",
                points: ["Handhelds + registers", "Advanced inventory & labels", "Online orders + pickup"],
              },
              {
                name: "Multi-location",
                price: "Custom quote",
                points: ["Enterprise reporting", "Centralized catalog", "Priority support 24/7"],
              },
            ].map((tier, i) => (
              <Card key={tier.name} className={`rounded-2xl ${i === 1 ? "border-green-600 shadow-lg" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{tier.name}</span>
                    <span className="text-sm font-normal text-muted-foreground">{tier.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {tier.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-700" /> <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-5 w-full rounded-2xl">
                    <a href="#demo">Get a tailored quote</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Demo form */}
      <section id="demo" className="py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book your free demo</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us a bit about your shop and we’ll match you with a garden-center specialist.
            </p>
          </motion.div>
          <Card className="mx-auto max-w-3xl rounded-2xl">
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! A Toast specialist will reach out shortly.");
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Alex Rivera" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" required placeholder="alex@sunnydalegarden.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business name</Label>
                  <Input id="business" required placeholder="Sunnydale Garden" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="notes">What are you hoping to improve?</Label>
                  <Textarea
                    id="notes"
                    placeholder="e.g., faster checkout in spring, better tracking for seasonal stock, loyalty program…"
                  />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about Toast products. You can unsubscribe at any time.
                  </div>
                  <Button type="submit" className="rounded-2xl">
                    Request demo
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white/60 py-16 md:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-3 text-muted-foreground">Short, straight answers to help you decide.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                q: "Does Toast work outdoors in a greenhouse?",
                a: "Yes. Our handhelds and tap-to-pay on phone work great wherever you have Wi-Fi or LTE. Hardware options include splash-resistant gear.",
              },
              {
                q: "Can I import my existing plant catalog?",
                a: "Absolutely. Upload CSVs, map fields for varieties and sizes, and you’re live in minutes. Our team can help with setup.",
              },
              {
                q: "What about label printing?",
                a: "Print durable, weather-resistant labels and tags with barcodes directly from Toast.",
              },
              {
                q: "How quickly can we go live?",
                a: "Most shops launch in days, not weeks. We guide you through training and data import.",
              },
            ].map(({ q, a }) => (
              <Card key={q} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{q}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{a}</CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Toast, Inc.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#demo" className="hover:opacity-80">Contact sales</a>
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
