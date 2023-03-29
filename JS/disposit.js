// step 1 : add event listener to the  diposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2 : get the diposit amound from the diposit input feild
    const depositFeild = document.getElementById('deposit-feild');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step 3 : get the current diposit total
    const depositTotalElement =  document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 : add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText =  currentDepositTotal;

    // step 5 : get balacne current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 : calculate carrent total balance
    const currentBlanceTotal =  previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBlanceTotal;


    // step : 7 clear the deposit feild
    depositFeild.value = '';
})

