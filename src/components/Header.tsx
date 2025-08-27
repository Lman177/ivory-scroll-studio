'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Templates', href: '/templates' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Heart className="h-9 w-9 text-wedding-rose group-hover:text-primary transition-colors duration-200" />
              <div className="absolute inset-0 h-9 w-9 text-wedding-rose group-hover:text-primary transition-colors duration-200 animate-pulse opacity-20" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                Cuppi
              </span>
              <span className="font-display text-xs text-muted-foreground tracking-wider uppercase">
                Love
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-muted/30 rounded-full p-1 backdrop-blur-sm border border-border/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105",
                    pathname === item.href
                      ? "text-white gradient-primary shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 px-6 py-3 rounded-full font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Create Invite
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-2 rounded-full hover:bg-accent transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 px-4 py-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                    "animate-in slide-in-from-left-2 fade-in-50",
                    pathname === item.href
                      ? "text-primary bg-primary/10 border border-primary/20 shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50 hover:shadow-sm"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart className="h-4 w-4 mr-3 opacity-60" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 animate-in slide-in-from-bottom-2 fade-in-50" style={{ animationDelay: '150ms' }}>
                <Button className="w-full gradient-primary text-white shadow-lg py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-200">
                  <Heart className="h-4 w-4 mr-2" />
                  Create Invite
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}