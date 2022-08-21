export const incAmount = (money) => {
    return {
        type: 'INC',
        amount: money
    };
}

export const decAmount = (money) => {
    return {
        type: 'DEC',
        amount: money
    };
}

export const addCalc = (data) => {
    return {
        type: 'ADD',
        data: data
    };
}

export const subCalc = (data) => {
    return {
        type: 'SUB',
        data: data
    };
}

export const resetCalc = () =>{
    return {
        type: 'RESET'
    };
}