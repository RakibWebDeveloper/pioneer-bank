//login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("mouseleave", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})


//deposit button event handler

const depositBtn = document.getElementById("deposit");

depositBtn.addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    console.log(depositNumber);
    
})
