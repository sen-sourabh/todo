import React, { useReducer } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux';
// import { actionCreators } from '../State/index'


const moneyReducer = (state, action) => {
  if(action.type === "DEPOSIT") {
    return { value: state.value + action.value }
  } else if (action.type === "WITHDRAW") {
    return { value: state.value - action.value }
  }
  return { value: state.value }
}

export default function About() {
  // const dispatch = useDispatch();
  // const money = useSelector(state => state.amount);
  const [moneyState, dispatchMoney] = useReducer(moneyReducer, { value: 0 });

  const moneyTransaction = (transactionType) => {
    dispatchMoney({ type: transactionType, value: 100 });
  }
  const {value: amount} = moneyState;

  return (
    <div className="justify-center body-content">
        <div>
            <h1> About </h1>
        </div>
        <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        {/* <div className="my-3">
          <button className="btn-outline-primary btn-lg mx-3 btn-outline-none" disabled={money === 0 ? true : false} onClick={() => dispatch(actionCreators.withdrawMoney(100))}><b>-</b></button>
          <b> Add Money (100 rs) </b>
          <button className="btn-outline-primary btn-lg mx-3 btn-outline-none" onClick={() => dispatch(actionCreators.depositMoney(100))}><b>+</b></button>
        </div> */}
        <div className="my-3">
          <button className="btn-outline-primary btn-lg mx-3 btn-outline-none" disabled={!amount > 0 ? true : false} onClick={() => moneyTransaction('WITHDRAW')}><b>-</b></button>
          <b> {`Your Money ${amount}`} </b>
          <button className="btn-outline-primary btn-lg mx-3 btn-outline-none" onClick={() => moneyTransaction('DEPOSIT')}><b>+</b></button>
        </div>
    </div>
  )
}
