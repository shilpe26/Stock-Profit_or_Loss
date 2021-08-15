var initialPrice = document.querySelector('#initial_price');
var stockQuantity = document.querySelector('#stocks_quantity');
var currentPrice = document.querySelector('#current_price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);
out.document.querySelector('#submit-btn').style.cssText = `width: 300px;
height: 30px;
border: 1px solid blue;
padding: 20px;
margin:auto;
margin-top: 10px;
font-size: 20px;
text-align: center;
background: linear-gradient(to bottom, rgb(58, 180, 228), rgb(130, 130, 196));
border-radius: 10px;`;
function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    document.querySelector('#output-box').style.cssText = `width: 300px;
    height: 30px;
    border: 1px solid blue;
    padding: 20px;
    margin:auto;
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    background: linear-gradient(to bottom, pink, rgb(130, 130, 196));
    border-radius: 10px;`;
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`Hey the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`Hey the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}%`);
    } else if(initial == quantity == current){
        showOutput(`No pain no gain`);
    }
    else{
        showOutput(`Please give some inputs`);
    }
}
function showOutput(message){
    outputBox.innerHTML = message;
}
