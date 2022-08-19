const baseAmount = 3000;

const amountReducer = (state = baseAmount, action) => {
    switch(action.type) {
        case 'INC': return state + action.amount;
        case 'DEC':  return state - action.amount;
        default: return state;
    }
}

export default amountReducer;