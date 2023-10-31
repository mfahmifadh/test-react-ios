import Head from 'next/head'
import { type ReactNode } from 'react'
import React from 'react'

interface MainProps {
  blocks: string[]
}
export default function Main ({ blocks }: MainProps): ReactNode {
  return (
    <>
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className='max-w-lg bg-slate-300 flex flex-col flex-1 gap-2 sm:gap-6 w-full'>
        <h1 className='text-2xl md:text-5xl font-bold text-center pt-2 sm:pt-6 text-slate-700 uppercase'>Memory Game</h1>
        <div className='bg-slate-200 p-4 md:p-12'>
          <div className='grid grid-cols-4 w-fit mx-auto gap-2 md:gap-8'>
            <button className='w-20 h-20 bg-red-500 rounded-lg' />
            <button className='w-20 h-20 bg-yellow-500 rounded-lg' />
            <button className='w-20 h-20 bg-green-500 rounded-lg' />
            <button className='w-20 h-20 bg-indigo-500 rounded-lg' />
            <button className='w-20 h-20 bg-orange-500 rounded-lg' />
            <button className='w-20 h-20 bg-red-500 rounded-lg' />
            <button className='w-20 h-20 bg-yellow-500 rounded-lg' />
            <button className='w-20 h-20 bg-green-500 rounded-lg' />
            <button className='w-20 h-20 bg-indigo-500 rounded-lg' />
            <button className='w-20 h-20 bg-orange-500 rounded-lg' />
            <button className='w-20 h-20 bg-cyan-500 rounded-lg' />
            <button className='w-20 h-20 bg-pink-500 rounded-lg' />
            <button className='w-20 h-20 bg-stone-500 rounded-lg' />
            <button className='w-20 h-20 bg-cyan-500 rounded-lg' />
            <button className='w-20 h-20 bg-pink-500 rounded-lg' />
            <button className='w-20 h-20 bg-stone-500 rounded-lg' />
          </div>
        </div>
        <div id='control' className='px-4 md:px-12 flex flex-col gap-2 sm:gap-6 pb-2 sm:pb-6'>
          <div className='font-bold text-slate-700 flex justify-between sm:text-2xl'>
            <p>0/0 Matches</p>
            <p>0 Tries</p>
          </div>
          <button className='bg-slate-500 disabled:opacity-50 text-white p-2 sm:p-4 uppercase font-semibold text-sm sm:text-xl rounded-lg'>Reset</button>
        </div>
      </div>
    </>
  )
}
