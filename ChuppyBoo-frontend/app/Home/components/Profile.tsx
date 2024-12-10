import { useDataContext } from "@/app/layout/SlideProvider";
import React from "react";
import { FaArrowAltCircleRight, FaGem } from "react-icons/fa"; // Icon

const Profile = ({
  img,
  name,
  diamonds,
}: {
  img: string;
  name: string;
  diamonds: number;
}) => {
  const { setActiveTab } = useDataContext()
  return (
    <div className="w-full h-[10vh] z-10 flex flex-col items-center">
      <div className="w-full flex justify-between items-center bg-gradient-to-b from-[#58403C] to-[#3F2A23] rounded-t-2xl p-4">
        <div className="w-full text-white flex items-center gap-2">
          <div className="border-2 border-white rounded-2xl">
            <img src={img} alt="Profile" className="w-12 h-12 rounded-full" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Hey</span>
            <span className="text-white text-sm">{name}</span>
          </div>
        </div>
        {/* /// Router button */}
        <div className="w-[40%] p-2 px-3 cursor-pointer rounded-lg border-[1px] border-[#EC8474] bg-[#68473F] text-white flex justify-between items-center" onClick={(() => setActiveTab("Profile"))}>
          <span className="text-[8px] font-semibold">Your Profile</span>
          <FaArrowAltCircleRight className="text-[#EC8474] w-3 h-3"/>
        </div>
      </div>

      <div className="w-full p-4 bg-gradient-to-b from-[#483531] to-[#3F2A23] text-white text-center rounded-b-2xl flex items-center gap-2">
        <FaGem className="text-yellow-500" />
        <span>{diamonds}</span>
      </div>
    </div>
  );
};

export default Profile;
