import { TokenCard } from "@/app/type/icon.type";
import { FaGem } from "react-icons/fa";

export const Transaction = ({ token }: { token: TokenCard }) => {
  return (
    <div className="p-4 flex justify-between items-center rounded-xl bg-[#28212F]">
      <div className="flex gap-2 items-center">
        <FaGem className="text-yellow-500 w-6 h-6" />
        <span className="font-semibold text-white">Diamond</span>
      </div>
      <div className="flex flex-col gap-[5px] font-thin items-end">
        {token.isIncreased ? (
          <span className="text-sm text-[#2FD47B]">+{token.profit}</span>
        ) : (
          <span className="text-sm text-[#FF4545]">-${token.profit}</span>
        )}
      </div>
    </div>
  );
};
