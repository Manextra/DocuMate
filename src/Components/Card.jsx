import React from 'react';
import { BsFileEarmarkText } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.8}} dragElastic={0.5} className='flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-sky-100/100 text-gray-700 p-7 overflow-hidden'>
      <BsFileEarmarkText />
      <p className='text-sm mt-4 leading-tight font-semibold '>
        {data.desc}
      </p>
      <div className='footer absolute bottom-0 w-full h-[7vw] left-0'>
        <div className='flex items-center justify-between py-1 px-6 '>
          <h5>{data.filesize}</h5>
          <span className='w-9 h-9 bg-gray-400 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose /> :<IoMdDownload />} 
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-5 ${data.tag.tagcolor === 'pink' ? 'bg-pink-600' : 'bg-purple-600'} content-center flex items-center justify-center`}>
          <h3 className='text-white text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
          )
}
      </div>
    </motion.div>
  );
}

export default Card;
