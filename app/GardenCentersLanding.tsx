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

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Feature = ({ icon: Icon, title, children }) => (
  <Card className="shadow-sm hover:shadow-md transition-shadow rounded-2xl">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
        <Icon className="h-6 w-6" />
      </span>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const HowStep = ({ n, title, children }) => (
  <div className="relative rounded-2xl border bg-white/60 p-6 shadow-sm">
    <div className="absolute -top-3 left-6 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
      Step {n}
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground text-sm">{children}</p>
  </div>
);

const Stat = ({ value, label }) => (
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
            <a href="#pricing" className="hover:opacity-80">P
