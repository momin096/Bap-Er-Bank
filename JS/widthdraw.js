// 1.
/**
 *1. add event handler with the withdraw button
 *2. get the widthdraw amount from the widthdraw input feil
 *2.5 also make sure to convert the input into a number by using a parseFloat
 *3. get previous widthraw amount
 *4. calculate widthdraw amount
 *5. get the previous balance total
 *6. calculate new balance total
 *7. clear the input feild
 */


// step 1 : 
document.getElementById('btn-widthdraw').addEventListener('click', function(){
    // console.log('widthdraw button clicked');
    // step 2 :
    const widthdrawFeild = document.getElementById('withdraw-feild');
    const newWidthdrawAmountString = widthdrawFeild.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
    
    // step 7 
    widthdrawFeild.value = '';

    // step 3
    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWidthdrawTotalString = widthdrawTotalElement.innerText;
    const previousWidthdrawTotal = parseFloat(previousWidthdrawTotalString);
    console.log('newWidthdrawAmount');
    if(isNaN(newWidthdrawAmount)){
        alert('please provide a valid number');
        return;
    }
 

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   

    if(newWidthdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto taka nai');
        return;
    }
        // step 4 :
        const currentWidthdrawTotal = previousWidthdrawTotal + newWidthdrawAmount;
        widthdrawTotalElement.innerText = currentWidthdrawTotal;
    

    // step 6 
    const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;





})