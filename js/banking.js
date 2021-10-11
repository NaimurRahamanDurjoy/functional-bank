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

// Share the function between two input field below-----
function inputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputAmount = parseFloat(inputValueText);

    // clear the input field
    inputField.value = '';

    return inputAmount;   
}

function updateField(updateFieldId, inputAmount){
    const updateAmountTotal = document.getElementById(updateFieldId);
    const previousAmountTotalText = updateAmountTotal.innerText;
    const previousAmountTotal = parseFloat(previousAmountTotalText);

    const currentAmountTotal = previousAmountTotal + inputAmount;
    updateAmountTotal.innerText = currentAmountTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}

function updateBalanceField(getNewAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText); */
    const currentBalance = getCurrentBalance();

    if(isAdd == true){
        const newBalance = currentBalance + getNewAmount;
        balanceTotal.innerText = newBalance;
    }
    else if(isAdd == false){
        const newBalance = currentBalance - getNewAmount;
        balanceTotal.innerText = newBalance;
    }
}


// get Deposit and total Balance by event handler
document.getElementById('deposit-button').addEventListener('click', function(){
    // get amount from deposit input field
    /*
    const depositInput = document.getElementById('deposit-input-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */
   const depositAmount = inputField('deposit-input-field');
    
    // get deposit total and update amount
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    const newDepositAmount = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositAmount; */

    if(depositAmount > 0){
        updateField('deposit-total', depositAmount);
        updateBalanceField(depositAmount, true);
    }

    

    // update total balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    const newBalance = previousBalance + depositAmount;
    balanceTotal.innerText = newBalance;
 */
// updateBalanceField(depositAmount, true); <------------------------------
    

})



// get withdraw and reduce balance by event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */
   const withdrawAmount = inputField('withdraw-input');

    //get withdraw total and update total withdraw amount
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawBalanceText = withdrawTotal.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawBalanceText);

    const newWithdrawBalance = previousWithdrawBalance + withdrawAmount;
    withdrawTotal.innerText = newWithdrawBalance; */

    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateField('withdraw-total', withdrawAmount);
        updateBalanceField(withdrawAmount, false);
    }
    else if(withdrawAmount > currentBalance){
        console.log('Sorry you can not withdraw more than you have in balance!');
    }

    // updateField('withdraw-total', withdrawAmount); <----------------------------

    // get total balance and reduce by withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */

    // updateBalanceField(withdrawAmount, false); <------------------------------------
/* 
    //clear the input field
    withdrawInput.value = ''; */

})