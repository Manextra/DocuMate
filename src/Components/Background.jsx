import React from 'react'

function Background() {
  return (
    <>
    <div className='absolute z-[2] w-full h-screen'>
       {/* <div className='absolute top-[5%] w-full py-10 flex justify-center font-semibold text-xl text-gray-300'>DOCUMENTS</div> */}
      <h1 className='absolute text-9xl top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] m-5 leading-none tracking-tighter font-semibold text-gray-200'>DocuMate</h1>
      <h1 className='absolute text-xl bottom-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] m-5 leading-none tracking-normal font-light text-gray-400'>where thoughts find home</h1>
      </div>
    </>
  )
}

export default Background