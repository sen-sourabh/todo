const baseAmount = 3000;
const output = 0;
 
export const amountReducer = (state = baseAmount, action) => {
    switch(action.type) {
        case 'INC': return state + action.amount;
        case 'DEC':  return state - action.amount;
        default: return state;
    }
}

export const calcReducer = (state = output, action) => {
    switch(action.type) {
        case 'ADD': return state = +action.data.num1 + +action.data.num2;
        case 'SUB': return state = +action.data.num1 - +action.data.num2;
        case 'RESET': return state = 0;
        default: return state;
    }
}