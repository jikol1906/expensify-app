export default (expenses) => {

    return expenses
        .map((expense) => expense.amount)
        .reduce((amount1,amount2) => amount1+amount2, 0);

};





