export default (state) => {
    let total = 0;
    state.expenses.map((expense)=>{
        total+=expense.amount;
    })
    return total;
};