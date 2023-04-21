import React, {useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { Increment,Decrement } from '../Pages/Player/action';
// useselector is like getstate() to getstate fro store

const Player = () => {
  const count = useSelector((state)=>{
    return state.count
  });
  const dispatch = useDispatch()
  console.log(count);
  
  return (
    <div>
      <center>
        <h1 className='text-primary'>Redux | react-Redux</h1>
       <h3 className='text-danger'>
          Counter : {count}

        </h3>
        <button className="btn btn-warning m-2" onClick={()=>{dispatch(Increment())}}>Increment</button>
        <button className="btn btn-warning m-2" onClick={()=>{dispatch(Decrement())}}>Decrement</button>
       </center>
    </div>
  )
}

export default Player