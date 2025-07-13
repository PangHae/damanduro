"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            실제 제작 <span className="text-blue-600">사례</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            사장님들이 직접 경험한 성공 사례들을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern mountain resort with wooden cabins"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-3xl mb-4">🔗</span>
                  <p className="text-lg font-semibold">사이트 보기</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-blue-600 font-semibold">
                펜션
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                설악산 힐링 펜션
              </h3>
              <p className="text-gray-600 mb-4">
                강원도 평창 | 6개월 후 예약률 300% 증가
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2024.03 완료</span>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">📈</span>
                  <span className="text-sm font-medium">+300%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Item 2 */}
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Cozy guesthouse with modern interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-3xl mb-4">🔗</span>
                  <p className="text-lg font-semibold">사이트 보기</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-purple-600 font-semibold">
                게스트하우스
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                부산 바다뷰 게스트하우스
              </h3>
              <p className="text-gray-600 mb-4">
                부산 해운대 | 5개월 후 예약률 250% 증가
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2024.01 완료</span>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">📈</span>
                  <span className="text-sm font-medium">+250%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Item 3 */}
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Charming cafe with outdoor seating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-3xl mb-4">🔗</span>
                  <p className="text-lg font-semibold">사이트 보기</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-green-600 font-semibold">
                카페
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                제주 힐링 카페
              </h3>
              <p className="text-gray-600 mb-4">
                제주 서귀포 | 4개월 후 방문객 200% 증가
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2023.12 완료</span>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">📈</span>
                  <span className="text-sm font-medium">+200%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
