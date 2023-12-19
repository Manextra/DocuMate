import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  const data =[{
    desc:"In the vast realm of technology, innovation is the driving force. As we navigate the ever-evolving landscape of possibilities...",filesize:"0.91mb",close:false,tag:{isOpen:true,tagTitle:"Download now!",tagcolor:"red"}
  },
  {
    desc:"The intricate dance of nature unfolds in every corner of our planet. From the majestic mountains to the serene oceans, each ecosystem tells a unique story.",filesize:"0.87mb",close:true,tag:{isOpen:true,tagTitle:"Go for it!",tagcolor:"pink"}
  },
  {
    desc:"As the global economy continues to surge forward, businesses face a myriad of challenges and opportunities.",filesize:"0.99mb",close:true,tag:{isOpen:true,tagTitle:"Upload",tagcolor:"green"}
  },
  {
    desc:"Literature has long been a mirror reflecting the essence of human experience. In this exploration of the written word..",filesize:"0.29mb",close:false,tag:{isOpen:true,tagTitle:"Download now!",tagcolor:"pink"}
  }]
  
  return (
      <div ref={ref}className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-7'>
       {data.map((item,index)=>
       (
          <Card data={item} reference={ref} />
       ))}
      </div>
  )
}

export default Foreground