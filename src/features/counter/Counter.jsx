/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const [incrementValue, setIncrementValue] = useState(0);
    const addValue = Number(incrementValue) || 0;
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
          <input value={incrementValue} onChange={(e) => setIncrementValue(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add By Value</button>
            <button onClick={() => {dispatch(reset());setIncrementValue(0)}}> Reset </button>
        </div>
      
    </section>
  )
}

export default Counter
