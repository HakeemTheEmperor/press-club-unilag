"use client";

import Link from "next/link";
import { Newspaper, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/nav";

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/executives", label: "Executives" },
    { href: "https://blog.unilagpress.com", label: "Blog", external: true },
    { href: "/events", label: "Events" },
  ] satisfies NavItem[];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Newspaper className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Unilag Press
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = !item.external && pathName.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className={[
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-foreground bg-primary px-4 py-2 rounded-lg font-semibold"
                      : "text-foreground hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-primary border-2 bg-primary-foreground px-4 py-2 text-sm text-primary hover:opacity-90 hover:bg-muted transition-opacity font-semibold"
            >
              Join Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col gap-4 px-4 py-4">
              {navItems.map((item) => {
                const isActive =
                  !item.external && pathName.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    className={[
                      "text-sm font-medium py-2 transition-colors",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary",
                    ].join(" ")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
