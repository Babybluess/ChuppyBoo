import React from "react";
import Profile from "./components/Profile";
import { useDataContext } from "../layout/SlideProvider";

function HomeScreen() {
  const { data } = useDataContext();
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center">
      <img src="./assets/character/bg-game.png" alt="battle" className="w-full h-full absolute top-0 left-0 z-0 object-cover" />
      <img src="./assets/character/character.png" alt="battle" className="absolute bottom-16 left-0 z-10 object-contain" />
      <Profile img={data[0]} name={"@Blabybluess"} diamonds={100} />
    </div>
  );
}

export default HomeScreen;
