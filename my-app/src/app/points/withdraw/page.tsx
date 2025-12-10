// app/withdraw/page.tsx
import WithdrawScreen from "@/components/points/withdraw/WithdrawScreen";

const destination = {
  bankName: "〇〇銀行",
  branchName: "××支店",
  accountType: "普通",
  accountNumber: "123456",
  holderName: "チョキン　タロウ",
};

export default function WithdrawPage() {
  const points = 25000; // ここは本来ユーザーごとの残高から取得

  return (
    <WithdrawScreen points={points} destination={destination} />
  );
}
