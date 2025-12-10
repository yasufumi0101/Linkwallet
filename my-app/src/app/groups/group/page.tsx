// app/groups/[id]/page.tsx
import GroupSummaryCard from "@/components/groups/GroupSummaryCard";
import GroupDetailCard from "@/components/groups/GroupDetailCard";

const group = {
  id: 1,
  name: "9月旅行",
  progress: 80,
};

const members = [
  { id: 1, name: "ユーザA", progress: 80 },
  { id: 2, name: "ユーザB", progress: 80 },
  { id: 3, name: "ユーザC", progress: 80 },
];

export default function GroupDetailPage() {
  return (
    <div className="min-h-screen bg-[#E6FAF4] pt-6 pb-20">
      {/* 右上の出金ボタン */}
      <div className="flex justify-end px-6 mb-4">
        <button
          className="
            rounded-full px-4 py-2
            bg-pink-50 text-pink-500 text-xs
            border border-pink-200 shadow-sm
          "
        >
          出金
        </button>
      </div>

      {/* 上のグループ概要カード */}
      <GroupSummaryCard name={group.name} progress={group.progress} />

      {/* 下のスライドするカード */}
      <GroupDetailCard groupProgress={group.progress} members={members} />
    </div>
  );
}
