import React, { useCallback } from 'react';
import { useStore } from '../../store/globalStore/globalStore';
import './Counter.css';


function Counter() {
    const { state, dispatch } = useStore();
    const { value } = state;

    const increment = useCallback(() => dispatch({ type: "increment" }), [
        dispatch
      ]);
      const decrement = useCallback(() => dispatch({ type: "decrement" }), [
        dispatch
      ]);


    const disableDecrement = () => true ? value === 0 : false;

    return (
        <div className="counter">
            <span 
            className="num">{value}</span>
            <button 
            className="inc"
            onClick={increment}
            >+</button>
            <button 
            className="dec"
            onClick={decrement}
            disabled={disableDecrement()}
            >-</button>
        </div>
    );
}

export default Counter;