import { JSX } from "react"

export type IconItem = {
    name: string,
    icon: JSX.Element | string
}

export type TokenCard = {
	name: string;
	image: string;
	total: string;
	value: string;
	profit: string;
	isIncreased: boolean;
};

export type NFT = {
	name: string;
	image: string;
};

export type BattleType = {
	name: string,
	map: string,
	type: string,
	reward: number
}

export type BooInfo = {
	name: string,
	avatar: string,
	origin: string,
	specialSkill: string,
	property: string,
	planet: string
}