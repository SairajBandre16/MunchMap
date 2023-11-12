import React, { useState } from 'react'

function RangeSelect({onRadiusChange}) {
    const [radius, setRadius] = useState(50);
  return (
    <div>
      <h2 className='font-bold mt-5'>Select radius (in meter)</h2>
      <input type="range"
        className='w-full h-2
         bg-gray-200 
         appearance-none'
         min="0"
         max="100"
         step={10}
         onChange={(e)=>{setRadius(e.target.value);onRadiusChange(e.target.value)}}
         defaultValue={radius}
      />
      <label className='text-gray-500 text-[15px]'>{radius} Meters</label>
    </div>
  )
}

export default RangeSelect
