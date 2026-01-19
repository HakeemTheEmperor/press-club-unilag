"use client";

import { Mail, Newspaper } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 w-fit"
            >
              <div className="relative h-16 w-16 flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Unilag Press Club Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground leading-none">
                  The Press Club
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  University of Lagos
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Student journalism excellence at the University of Lagos.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.unilagpress.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/executives"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Executives
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Get updates on new articles and events.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded px-3 py-2 text-sm border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded px-3 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Unilag Press Club. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
