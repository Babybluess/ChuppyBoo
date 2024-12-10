import { TokenCard } from '@/app/type/icon.type';
import React, { Dispatch, useState } from 'react';
import { Transaction } from './Transaction';

const tokenData: TokenCard[] = [
	{
		name: 'SOL',
		image: './icons/solanaToken.png',
		total: '134',
		value: '1,863',
		profit: '100.06',
		isIncreased: false,
	},
	{
		name: 'SOL',
		image: './icons/solanaToken.png',
		total: '134',
		value: '1,863',
		profit: '100.06',
		isIncreased: true,
	},
	{
		name: 'SOL',
		image: './icons/solanaToken.png',
		total: '134',
		value: '1,863',
		profit: '100.06',
		isIncreased: false,
	},
	{
		name: 'SOL',
		image: './icons/solanaToken.png',
		total: '134',
		value: '1,863',
		profit: '100.06',
		isIncreased: false,
	},
];

function History() {
	return (
		<div className="flex flex-col gap-4 overflow-y-scroll h-[280px]">
			{tokenData.map((item, index) => (
				<Transaction key={index} token={item} />
			))}
		</div>
	);
}

export default History;