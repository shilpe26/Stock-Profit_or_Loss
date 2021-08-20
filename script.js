var initialPrice = document.querySelector('#initial_price');
var stockQuantity = document.querySelector('#stocks_quantity');
var currentPrice = document.querySelector('#current_price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip&&qty&&curr){
        calculateProfitAndLoss(ip,qty,curr);
    }else{
        showOutput(`Please fill all the fields! 🙄`);
    }
    document.querySelector('#output-box').style.cssText = ` width: 80%;
    height: 3rem;
    border: 2px solid black;
    padding: 20px;
    margin: 10px auto auto;
    font-size: 20px;
    text-align: center;
    background: rgba(0, 0, 0, 0) linear-gradient(pink, rgb(130, 130, 196)) repeat scroll 0% 0%;
    border-radius: 10px;`;
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
