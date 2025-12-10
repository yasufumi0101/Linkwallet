// components/withdraw/WithdrawScreen.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DestinationCard from "./DestinationCard";
import ResultDialog from "./ResultDialog";

type Destination = {
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
  holderName: string;
};

type ResultStatus = "success" | "error" | null;

type Props = {
  points: number;
  destination: Destination;
};


export default function WithdrawScreen({ points, destination }: Props) {
  const [notifyChecked, setNotifyChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultStatus>(null);
  const router = useRouter();
  const yen = points; // 1ポイント=1円の想定。違うレートなら計算を書き換え

  const format = (n: number) => n.toLocaleString("ja-JP");

  const handleWithdraw = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // 本来はここで API を叩く
      // 例: await withdrawApi({ points, destination, notify: notifyChecked });
      await new Promise((res) => setTimeout(res, 800)); // ダミー待機

      // 成功 or 失敗をここで判定
      const isSuccess = true; // 今は常に成功扱い
      setResult(isSuccess ? "success" : "error");
    } catch (e) {
      setResult("error");
    } finally {
      setLoading(false);
    }

    // notifyChecked の値はサーバー側で通知フラグとして使うイメージ
    console.log("notify other members:", notifyChecked);
  };

  return (
    <div className="min-h-screen bg-[#E6FAF4] pt-10 pb-24">
      {/* 残高表示 */}
      <div className="text-center mb-8 text-black">
        <p className="text-3xl font-extrabold tracking-wide">
          {format(points)} <span className="text-xl font-semibold">ポイント</span>
        </p>
        <p className="text-sm text-gray-700 mt-1">{format(yen)} 円</p>
      </div>

      {/* 出金先カード */}
      <div className="mb-8">
        <DestinationCard destination={destination} />
      </div>

      {/* チェックボックス */}
      <div className="w-full max-w-md mx-auto px-6 mb-10">
        <label className="flex items-start gap-2 text-sm cursor-pointer text-black">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 border border-gray-700 rounded-sm"
            checked={notifyChecked}
            onChange={(e) => setNotifyChecked(e.target.checked)}
          />
          <span>
            出金したことは他のメンバーに
            <br />
            知らされます。
          </span>
        </label>
      </div>

      {/* 出金ボタン */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleWithdraw}
          disabled={loading || !notifyChecked}
          className={`
            px-12 py-3 rounded-full text-sm font-medium shadow
            ${
                !notifyChecked
                  ? "bg-gray-300 text-gray-500 border-gray-300 opacity-60 cursor-not-allowed"
                  : "bg-pink-50 text-pink-500 border-pink-200 active:scale-95"
              }
            ${loading ? "opacity-60 cursor-not-allowed" : "active:scale-95"}
          `}
        >
          {loading ? "処理中..." : "出金"}
        </button>
      </div>

      {/* ポップアップ（成功 / 失敗） */}
      <ResultDialog status={result} onClose={() => 
          {
            if (result === "success") {
              router.replace("/home");   // ← 出金成功時はホームへ遷移
            }
            setResult(null);
          }
        } />
    </div>
  );
}
