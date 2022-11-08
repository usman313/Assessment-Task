import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state/index';

export default function Counter() {

    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch);
    const counterValue = useSelector(state => state.counter);

    return (
        <>
            <div className='grid grid-rows-2 border border-3'>
                <div className='text-center font-bold'>
                    Counter Component
                </div>
                <div className='grid grid-cols-3 mb-6 border-2'>
                    <div className='justify-self-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type='button' onClick={()=>{(dispatch(action.addCouterValue(1)))}} >
                            Add Button
                        </button>
                    </div>
                    <div className='text-center'>
                        Counter Value : {counterValue}
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type='button' onClick={()=>{(dispatch(action.subCouterValue(1)))}} >
                            Subtract Button
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
