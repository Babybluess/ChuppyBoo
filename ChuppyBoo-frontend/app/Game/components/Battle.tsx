import { useDataContext } from "@/app/layout/SlideProvider";
import { BattleType } from "@/app/type/icon.type";
import React from "react";
import { FaGem } from "react-icons/fa";

function Battle({
 battle
}: {
  battle: BattleType
}) {
  const { setActiveTab } = useDataContext()
  return (
    <div className="w-full h-20 rounded-xl bg-[#273257] border-[1px] border-[#23305d] relative z-10">
      <img
        src={battle.map}
        alt="map"
        className=" absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 rounded-xl"
      />
      <div className="p-2 flex justify-between items-center w-full h-full absolute top-0 left-0 z-10">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="text-white text-xl font-bold">{battle.name}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaGem className="text-yellow-500 w-5 h-5" />
            <span className="text-white">{battle.reward}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-gray-300 text-xs">
            Type: <span className="text-white text-xs">{battle.type}</span>
          </span>
          <button className="p-2 rounded-full border-[1px] border-orange-400 text-sm text-white" onClick={() => setActiveTab("Battle")}>
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Battle;
