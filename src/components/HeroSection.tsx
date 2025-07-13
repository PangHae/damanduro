"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const isMobile = useIsMobile();

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 pt-20 pb-16 sm:pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-bounce mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-3xl sm:text-4xl">🚀</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            숙소 홈페이지
            <br />
            <span className="text-yellow-300">전문가</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-medium px-4">
            예약 늘리는 홈페이지, 우리가 만들어드립니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              🚀 {isMobile ? "무료 상담" : "무료 상담받기"}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all hover:shadow-xl w-full sm:w-auto"
            >
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
                📞 {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/90 text-base sm:text-lg px-4">
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span className="font-medium">5년 경력</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span className="font-medium">50+ 프로젝트</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span className="font-medium">1년 무상 A/S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
}
