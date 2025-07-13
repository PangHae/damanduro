"use client";

import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            3단계로 완성하는
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              숙소 홈페이지
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            복잡한 과정 없이 간단하게, 하지만 전문적으로 만들어드립니다.
            <br />
            40-60대 사장님들도 쉽게 이해할 수 있도록 단계별로 진행합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 1 */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    1
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                상담 & 기획
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                사장님의 숙소 특성과 목표를 파악하여 맞춤형 기획안을 제시합니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-xl">
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    숙소 특성 분석
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    타겟 고객 설정
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    기능 요구사항 정리
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    2
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚙</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                디자인 & 개발
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                매력적인 디자인과 예약 시스템을 포함한 완전한 웹사이트를
                제작합니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-xl">
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    반응형 웹디자인
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    예약 시스템 구축
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    관리자 페이지 제작
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    3
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🚀</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                런칭 & 관리
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                사이트 오픈 후 사용법 교육과 지속적인 관리 서비스를 제공합니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-xl">
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    도메인 & 호스팅 설정
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    사용법 교육
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    1년 무상 A/S
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
