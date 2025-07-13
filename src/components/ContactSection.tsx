"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { type InsertContact } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function ContactSection() {
  const [formData, setFormData] = useState<InsertContact>({
    name: "",
    phone: "",
    type: "",
    budget: "",
    message: "",
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      toast({
        title: "개인정보 수집 동의 필요",
        description: "개인정보 수집 및 이용에 동의해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "상담 신청이 완료되었습니다!",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });

      setFormData({
        name: "",
        phone: "",
        type: "",
        budget: "",
        message: "",
      });
      setAgreedToPrivacy(false);
    } catch {
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            무료 상담{" "}
            <span className="text-blue-600 dark:text-blue-400">신청</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            사장님의 숙소에 맞는 맞춤 견적을 받아보세요.
            <br />
            상담은 무료이며, 부담없이 문의하세요.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block"
                >
                  이름 *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="성함을 입력해주세요"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block"
                >
                  연락처 *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={process.env.NEXT_PUBLIC_PHONE_DISPLAY}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label
                  htmlFor="type"
                  className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block"
                >
                  숙소 타입 *
                </Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="pension">펜션</SelectItem>
                    <SelectItem value="guesthouse">게스트하우스</SelectItem>
                    <SelectItem value="motel">모텔</SelectItem>
                    <SelectItem value="hotel">호텔</SelectItem>
                    <SelectItem value="cafe">카페</SelectItem>
                    <SelectItem value="restaurant">음식점</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="budget"
                  className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block"
                >
                  예산 범위
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="under-100">100만원 이하</SelectItem>
                    <SelectItem value="100-200">100-200만원</SelectItem>
                    <SelectItem value="200-300">200-300만원</SelectItem>
                    <SelectItem value="300-500">300-500만원</SelectItem>
                    <SelectItem value="over-500">500만원 이상</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block"
              >
                상세 내용
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="원하시는 기능이나 참고할 사이트가 있으시면 알려주세요"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agree"
                checked={agreedToPrivacy}
                onCheckedChange={(checked) =>
                  setAgreedToPrivacy(checked as boolean)
                }
                className="border-gray-300 dark:border-gray-600"
              />
              <Label
                htmlFor="agree"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                개인정보 수집 및 이용에 동의합니다.
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg hover:shadow-lg transition-all"
              >
                📧 {isSubmitting ? "전송 중..." : "무료 상담 신청하기"}
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 py-3 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-gray-300 dark:border-gray-600"
              >
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
                  📞 {isMobile ? "바로 전화" : "바로 전화하기"}
                </a>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
