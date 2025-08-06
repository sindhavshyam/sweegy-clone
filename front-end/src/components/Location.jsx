import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

function Location() {
  return (
    <div>
      <div className='h-fit w-full bg-zinc-300 block'>
      <div className="text-2xl text-black flex lg:hidden gap-2">
          <div className="w-full p-2 shadow flex items-center gap-3">
            <div>
              <FaLocationDot />
            </div>
            <div>
              <h6 className="text-sm text-zinc-700">Ahmedabad</h6>
              <p className="text-xs text-zinc-600">Silver Oak Univercity</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Location
