function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    inputField.value='';
    return inputAmount;
}
function updateValue(id,inputAmount){
    const previousField  = document.getElementById(id);
    const previousText = previousField.innerText;
    const previousAmount = parseFloat(previousText);
    previousField.innerText = previousAmount +inputAmount;
}
function balanceAmount(){
    const previousBalanceField = document.getElementById('balance');
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}
function updateBalance(inputAmount,isAdd){
    const previousBalanceField = document.getElementById('balance');
    const previousBalance = balanceAmount();
    if(isAdd){
        previousBalanceField.innerText = (inputAmount + previousBalance).toFixed(2);
    }else{
        previousBalanceField.innerText = (previousBalance-inputAmount).toFixed(2);
    }
}
document.getElementById('depo-btn').addEventListener('click',function(){
    const inputAmount = getInputValue('add-depo');
    if(inputAmount<0){
        alert('invalid amount');
    }else{
        updateValue('depo-amount',inputAmount);
        updateBalance(inputAmount,true);
    }
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputAmount = getInputValue('withdraw');
    const balance = balanceAmount();
    if(inputAmount<0 || inputAmount>balance){
        alert('invalid amount');
    }else{
        updateValue('total-withdraw',inputAmount);
        updateBalance(inputAmount,false);
    }
})