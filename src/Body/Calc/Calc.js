import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCalc, subCalc, resetCalc } from '../../actions/actionTransaction';

export default function Calc() {
    const num1 = useRef(0);
    const num2 = useRef(0);
    // const [calculated, setCalculated] = useState('');
    const calculated = useSelector(state => state.calcReducer);
    const dispatch = useDispatch();

    const handleAddCalc = () => {
      dispatch(addCalc({ num1: num1.current.value, num2: num2.current.value }));
    }
    const handleSubCalc = () => {
      dispatch(subCalc({ num1: num1.current.value, num2: num2.current.value }));
    }

    const handleReset = () => {
        num1.current.value = '';
        num2.current.value = '';
        dispatch(resetCalc());
    }

  return (
    <div className="justify-center body-content">
        <h1>Calculation</h1>
        <input className='form-control mt-3' type="number" placeholder='Number 1' ref={num1} />
        <input className='form-control mt-3' type="number" placeholder='Number 2' ref={num2} />
        <button className='btn btn-success mt-3' type="button" onClick={handleAddCalc}>Add</button>
        <button className='btn btn-success mt-3' type="button" onClick={handleSubCalc}>Subtract</button>
        <button className='btn btn-dark mt-3' type="button" onClick={handleReset}>Reset</button>
        <h3 className='mt-3'>{ calculated }</h3>
    </div>
  )
}
