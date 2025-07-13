"use client";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white text-xl font-bold">다</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}
                </h3>
                <p className="text-gray-400 text-sm">예약 늘리는 홈페이지</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              숙소 전용 홈페이지 제작 전문가로서 5년간 50여개의 프로젝트를
              성공적으로 완료했습니다. 사장님의 성공이 우리의 성공입니다.
            </p>
            <div className="flex space-x-4">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                📞
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                📧
              </a>
              {/* <a
                href={process.env.NEXT_PUBLIC_KAKAO_URL}
                className="text-gray-400 hover:text-white transition-colors"
              >
                💬
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  홈페이지 제작
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  예약 시스템
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  관리자 페이지
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SEO 최적화
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 {process.env.NEXT_PUBLIC_PHONE}</li>
              <li>📱 {process.env.NEXT_PUBLIC_PHONE_SUB}</li>
              <li>📧 {process.env.NEXT_PUBLIC_EMAIL}</li>
              <li>🕐 {process.env.NEXT_PUBLIC_WORKING_HOURS}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>
              &copy; 2024 {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights
              reserved.
            </p>
            <div className="text-sm space-y-1">
              <p>
                사업자등록번호: {process.env.NEXT_PUBLIC_BUSINESS_NUMBER} |
                대표자: {process.env.NEXT_PUBLIC_CEO}
              </p>
              <p>주소: {process.env.NEXT_PUBLIC_ADDRESS}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
