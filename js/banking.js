// creat a function for similler code
/*
function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
console.log("First = ", first );
console.log("second = ", second);
*/

function getInput(){
    const depositInput = document.getElementById('deposit-input-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // clear the input field
    depositInput.value = '';
    
    return depositAmount;

    
}


// get Deposit and total Balance by event handler
document.getElementById('deposit-button').addEventListener('click', function(){
    // get amount from deposit input field
    /*
    const depositInput = document.getElementById('deposit-input-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */
   const depositAmount = getInput();
    
    // get deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    // add new amount to deposit total 
    const newDepositAmount = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositAmount;

    // update total balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    const newBalance = previousBalance + depositAmount;
    balanceTotal.innerText = newBalance;

    

})

// get withdraw and reduce balance by event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */

    //get withdraw total and add total withdraw balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawBalanceText = withdrawTotal.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawBalanceText);

    const newWithdrawBalance = previousWithdrawBalance + withdrawAmount;
    withdrawTotal.innerText = newWithdrawBalance;

    // get total balance and reduce by withdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the input field
    withdrawInput.value = '';

})