"use client";

import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            포함되는 <span className="text-blue-600">모든 기능</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            추가 비용 없이 숙소 운영에 필요한 모든 기능을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                반응형 웹사이트
              </h3>
              <p className="text-gray-600 leading-relaxed">
                PC, 모바일, 태블릿 모든 기기에서 완벽하게 작동합니다
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                예약 시스템
              </h3>
              <p className="text-gray-600 leading-relaxed">
                실시간 예약 관리와 자동 확인 시스템으로 편리하게
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                관리자 페이지
              </h3>
              <p className="text-gray-600 leading-relaxed">
                예약 현황, 고객 관리를 한 곳에서 쉽게 처리
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SEO 최적화
              </h3>
              <p className="text-gray-600 leading-relaxed">
                구글, 네이버에서 쉽게 찾을 수 있도록 최적화
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
