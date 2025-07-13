"use client";

import { Card, CardContent } from "@/components/ui/card";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-blue-600 to-purple-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            고객 후기
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            실제 사장님들의 생생한 후기를 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <Card className="p-8 border border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">김○○ 사장님</h4>
                  <p className="text-gray-600 text-sm">펜션 운영 (강원도)</p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                홈페이지 만들고 나서 예약이 정말 많이 늘었어요. 특히 모바일에서
                예약이 쉬워서 젊은 고객들이 많이 찾아주세요. 1년 A/S도 든든하고
                추천합니다!
              </p>
            </CardContent>
          </Card>

          {/* Review 2 */}
          <Card className="p-8 border border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">박○○ 사장님</h4>
                  <p className="text-gray-600 text-sm">
                    게스트하우스 운영 (부산)
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                처음에는 잘 모르겠어서 걱정했는데, 사용법도 친절하게 알려주시고
                관리자 페이지도 정말 편해요. 예약 관리가 이렇게 쉬울 줄
                몰랐습니다.
              </p>
            </CardContent>
          </Card>

          {/* Review 3 */}
          <Card className="p-8 border border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">최○○ 사장님</h4>
                  <p className="text-gray-600 text-sm">카페 운영 (제주)</p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                디자인이 정말 예뻐요! 인스타그램에 올린 것처럼 멋지게 나와서
                손님들이 많이 칭찬해주세요. 네이버에서도 잘 나와서 만족합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
