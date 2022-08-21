import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decAmount, incAmount } from '../../actions/actionTransaction';
// import amountReducer from '../../reducers/reducerTransaction';
import Alerts from '../Users/Alerts';
// import { decAmount, incAmount } from '../../actions/actionTransaction';

export default function ReduxTransaction() {
  const [money, setMoney] = useState(0);
  const amount = useSelector(state => state.amountReducer);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);


  useEffect(() => {
      if(amount >= 1000 && amount <= 3000) {
            let message1 = {
                msg: "You have to keep minimum balance 3000 in your account.",
                bgColor: "bg-warning",
                textColor: "text-white",
                opacity: 1
            };
            setMessage(message1);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
        if(amount === 0) {
            let message1 = {
                msg: "Your balance is 0. Please add amount.",
                bgColor: "bg-danger",
                textColor: "text-white",
                opacity: 1
            };
            setMessage(message1);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
  }, [amount])

  const moneyHandler = (event) => {
    setMoney(event.target.value);
  }

  function clear() {
    setMoney(0);
  }

  const addMoney = () => {
    if(+money === 0) {
        checkValidAmount();
        return;
    }
    dispatch(incAmount(+money));
    clear();
  }
  const subMoney = () => {
      if(+money === 0) {
        checkValidAmount();
        return;
      }
    dispatch(decAmount(+money)); 
    clear();
  }

  const checkValidAmount = () => {
    let message1 = {
        msg: "Amount should be greater than 0. Please add amount.",
        bgColor: "bg-warning",
        textColor: "text-white",
        opacity: 1
    };
    setMessage(message1);
    setError(true);
    setTimeout(() => {
        setError(false);
    }, 2000);
  }

  return (
    <Fragment>
        <div className="body-content justify-center">
            <form className="mb-2">
                <input type="number" min="0" max="100000" className="form-control" value={money} onChange={moneyHandler} />
            </form>
            <button className="btn btn-md btn-outline-danger m-2" disabled={amount === 0 ? true : false} onClick={subMoney}>Subtract (-)</button>
            <span className="p-3"><b>{amount}</b></span>
            <button className="btn btn-md btn-outline-primary m-2" onClick={addMoney}>Add (+)</button>
        </div>
        { error && <Alerts msg={message}/> }
    </Fragment>
  )
}
