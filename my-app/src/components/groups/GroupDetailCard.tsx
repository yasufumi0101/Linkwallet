// components/groups/GroupDetailCard.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GroupMembersList from "./GroupMembersList";

type Member = {
  id: number;
  name: string;
  progress: number;
};

type GroupDetailCardProps = {
  groupProgress: number;
  members: Member[];
};

function getTreeImage(progress: number) {
  if (progress < 20) return "/tree/1.jpg";
  if (progress < 40) return "/tree/2.jpg";
  if (progress < 60) return "/tree/3.jpg";
  if (progress < 80) return "/tree/4.jpg";
  if (progress < 100) return "/tree/5.jpg";
  return "/tree/6.jpg";
}

export default function GroupDetailCard({
  groupProgress,
  members,
}: GroupDetailCardProps) {
  const treeImage = getTreeImage(groupProgress);

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4">
      {/* カードの枠は共通で中身だけスライド */}
      <div className="bg-[#F5F5F5] rounded-2xl border border-gray-300 shadow-sm px-4 py-4">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="pb-6"
        >
          {/* スライド1：木の画像 */}
          <SwiperSlide>
            <div className="flex items-center justify-center h-48">
              <img
                src={treeImage}
                alt="tree"
                className="max-h-full object-contain"
              />
            </div>
          </SwiperSlide>

          {/* スライド2：メンバー一覧 */}
          <SwiperSlide>
            <div className="h-48 overflow-y-auto">
              <GroupMembersList members={members} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
