import React from 'react'
import Background from './Components/Background';
import Foreground from './Components/Foreground';
function App() {
  return (
    <div className='bg-black w-full h-screen text-xl text-white relative'>
    <Background/>
    <Foreground/>
    </div>
  )
}

export default App