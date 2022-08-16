import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { dec, inc } from './Redux/actions';
import './App.css';



const Counter = () => {
    const numChange = useSelector(state => state.numChange);
    const dispatch = useDispatch()
  return (
    <>
    <div className="main-div">
      

      <div className="container">
  
      <h1>counter</h1>
      
      <div class="quantity">
        <a class="quantityMinus"  onClick={() => dispatch(dec())}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={numChange} />
        <a class="quantityPlus"  onClick={() => dispatch(inc())}><span>+</span></a>
      </div>
  
          </div>
        </div>
        </>
  )
}

export default Counter