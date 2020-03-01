//login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})


//deposit button event handler

const depositBtn = document.getElementById("deposit");

depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";

})


// Withdraw button handler 

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {

    const withdrawNumber = getInputNumber("withdrawAmount");
    
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";

})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);

    const total = depositNumber + currentNumber;

    document.getElementById(id).innerText = total;
}
