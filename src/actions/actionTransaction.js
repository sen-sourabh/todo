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