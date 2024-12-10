import { BattleType, BooInfo } from "../type/icon.type";

export const slideData = [
  "./assets/slime/slime1.png",
  "./assets/slime/slime2.png",
];

export const battleData: BattleType[] = [
  {
    name: "Battle 1",
    type: "Solo",
    map: "./assets/map/sand_map.jpg",
    reward: 800,
  },
  {
    name: "Battle 2",
    type: "Solo",
    map: "./assets/map/mars_map.jpg",
    reward: 800,
  },
  {
    name: "Battle 3",
    type: "Solo",
    map: "./assets/map/earth_map.jpg",
    reward: 800,
  },
];

export const BooList: BooInfo[] = [
  {
    name: "Grelim",
    avatar: "./assets/character/grelim_avatar.png",
    origin: "./assets/map/sand_map.jpg",
    specialSkill: "./card/pizza_card.png",
    property: "Ground",
    planet: "Sand Planet",
  },
  {
    name: "Watcol",
    avatar: "./assets/character/watcol_avatar.png",
    origin: "./assets/map/earth_map.jpg",
    specialSkill: "./card/chupbachup_card.png",
    property: "Water",
    planet: "Earth Planet",
  },
];
