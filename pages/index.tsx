import Head from 'next/head'
import { useState, type ReactNode } from 'react'
import React from 'react'

interface MainProps {
  blocks: string[]
}

export default function Main ({ blocks }: MainProps): ReactNode {
  const [countR, setCountR] = useState(1)
  const [countY, setCountY] = useState(1)
  const [countG, setCountG] = useState(1)
  const [countI, setCountI] = useState(1)
  const [countO, setCountO] = useState(1)
  const [countP, setCountP] = useState(1)
  const [countC, setCountC] = useState(1)
  const [countS, setCountS] = useState(1)
  const [score, setScore] = useState(0)
  const [val, setVal] = useState('')


  function clickReset () {
    setScore(0)
  }
  
  function clickRed () {
    if (countR < 2) {
      setCountR(countR + 1)
    } else if(countR == 2) {
      setScore(score + 1)
    }
  }

  function clickYellow () {
    if (countY < 2) {
      setCountY(countY + 1)
    } else if(countY == 2) {
      setScore(score + 1)
    }
  }

  function clickGreen () {
    if (countG < 2) {
      setCountG(countG + 1)
    } else if(countG == 2) {
      setScore(score + 1)
    }
  }

  function clickIndigo () {
    if (countI < 2) {
      setCountI(countI + 1)
    } else if(countI == 2) {
      setScore(score + 1)
    }
  }

  function clickOrange () {
    if (countO < 2) {
      setCountO(countO + 1)
    } else if(countO == 2) {
      setScore(score + 1)
    }
  }

  function clickCyan () {
    if (countC < 2) {
      setCountC(countC + 1)
    } else if(countC == 2) {
      setScore(score + 1)
    }
  }

  function clickPink () {
    if (countP < 2) {
      setCountP(countP + 1)
    } else if(countP == 2) {
      setScore(score + 1)
    }
  }

  function clickStone () {
    if (countS < 2) {
      setCountS(countS + 1)
    } else if(countS == 2) {
      setScore(score + 1)
    }
  }

  if (score == 8) {
    alert('Congratulations, you have completed the game!')
  }

  
  return (
    <>
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className='max-w-lg bg-slate-300 flex flex-col flex-1 gap-2 sm:gap-6 w-full'>
        <h1 className='text-2xl md:text-5xl font-bold text-center pt-2 sm:pt-6 text-slate-700 uppercase'>Memory Game</h1>
        <div className='bg-slate-200 p-4 md:p-12'>
          <div className='grid grid-cols-4 w-fit mx-auto gap-2 md:gap-8'>
            <button onClick={ clickRed } className='w-20 h-20 bg-slate-400 hover:bg-red-500 rounded-lg' />
            <button onClick={ clickYellow } className='w-20 h-20 bg-slate-400 hover:bg-yellow-500 rounded-lg' />
            <button onClick={ clickGreen } className='w-20 h-20 bg-slate-400 hover:bg-green-500 rounded-lg' />
            <button onClick={ clickIndigo } className='w-20 h-20 bg-slate-400 hover:bg-indigo-500 rounded-lg' />
            <button onClick={ clickOrange } className='w-20 h-20 bg-slate-400 hover:bg-orange-500 rounded-lg' />
            <button onClick={ clickRed } className='w-20 h-20 bg-slate-400 hover:bg-red-500 rounded-lg' />
            <button onClick={ clickYellow } className='w-20 h-20 bg-slate-400 hover:bg-yellow-500 rounded-lg' />
            <button onClick={ clickGreen }className='w-20 h-20 bg-slate-400 hover:bg-green-500 rounded-lg' />
            <button onClick={ clickIndigo } className='w-20 h-20 bg-slate-400 hover:bg-indigo-500 rounded-lg' />
            <button onClick={ clickOrange } className='w-20 h-20 bg-slate-400 hover:bg-orange-500 rounded-lg' />
            <button onClick={ clickCyan } className='w-20 h-20 bg-slate-400 hover:bg-cyan-500 rounded-lg' />
            <button onClick={ clickPink } className='w-20 h-20 bg-slate-400 hover:bg-pink-500 rounded-lg' />
            <button onClick={ clickStone } className='w-20 h-20 bg-slate-400 hover:bg-stone-500 rounded-lg' />
            <button onClick={ clickCyan } className='w-20 h-20 bg-slate-400 hover:bg-cyan-500 rounded-lg' />
            <button onClick={ clickPink } className='w-20 h-20 bg-slate-400 hover:bg-pink-500 rounded-lg' />
            <button onClick={ clickStone } className='w-20 h-20 bg-slate-400 hover:bg-stone-500 rounded-lg' />
          </div>
        </div>
        <div id='control' className='px-4 md:px-12 flex flex-col gap-2 sm:gap-6 pb-2 sm:pb-6'>
          <div className='font-bold text-slate-700 flex justify-between sm:text-2xl'>
            <p>{ score }/8 Matches</p>
            <p>0 Tries</p>
          </div>
          <button onClick={ clickReset } className='bg-slate-500 disabled:opacity-50 text-white p-2 sm:p-4 uppercase font-semibold text-sm sm:text-xl rounded-lg'>Reset</button>
        </div>
      </div>
    </>
  )
}


