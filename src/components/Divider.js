import React from 'react'
import { useSelector } from 'react-redux'

export default function Divider() {
  const counter = useSelector(state => state.counter);
  return (
    <>
      <div>
        <div className='grid grid-cols-2 border border-1 mb-6 p-6'>
          <div>
            Divider Component: 6 / {counter}
          </div>
          <div className=''>
            New Value: {6/counter}
          </div>
        </div>
      </div>
    </>
  )
}
