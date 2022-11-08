import React from 'react'
import { useSelector } from 'react-redux'

export default function Multiplier() {

    const counter = useSelector(state => state.counter)

    return (
        <>
            <div>
                <div className='grid grid-cols-2 border border-1 mb-6 p-6'>
                    <div>
                        Multiplyer Component:  -5 * {counter}
                    </div>
                    <div className=''>
                        New Value: {counter * -5}
                    </div>
                </div>
            </div>
        </>
    )
}