export const incrementCount = (count) =>({
    type:"INCREMENT",
    payload:count
});

export const decrementCount = (count) =>({
    type:"DECREMENT",
    payload:count
});

export const reset = (count)=>({
    type:"RESET",
    payload:count
});