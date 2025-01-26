import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
      <div className="absolute -left-4 top-1">
        <span className='flex size-[11px]'>
          <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-75 rounded-full">
            <span className="relative inline-flex size-[11px] bg-primary rounded-full"></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Ping