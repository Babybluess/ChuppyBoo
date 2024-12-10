import React from 'react'
import { battleData } from '../const/data'
import Battle from './components/Battle'

function GameScreen() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4'>
        <span className='text-xl text-white font-bold'>Current Battle</span>
        <div className='flex flex-col gap-4 h-[80vh] w-full'>
            {
              battleData.map((item, index) => (
                <Battle key={index} battle={item}/>
              ))
            }
        </div>
    </div>
  )
}

export default GameScreen