"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export function Header({ scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
              <span className="text-white text-xl font-bold">다</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                다맨드러
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                예약 늘리는 홈페이지
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              서비스
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              포트폴리오
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              고객후기
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              문의하기
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm"
            >
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
                {isMobile ? "상담" : "상담받기"}
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">메뉴</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Card className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 rounded-none">
          <div className="px-4 py-6 space-y-4">
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("services")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              서비스
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("portfolio")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              포트폴리오
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("reviews")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              고객후기
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("contact")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              문의하기
            </Button>
          </div>
        </Card>
      )}
    </header>
  );
}
