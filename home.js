const validPin = 1234;

// function to get input value
function getInputValue(id) {
    const inputField = parseInt(document.getElementById(id).value);
    return inputField;
}

function getInputFieldValueNumber(id){
    const inputField = document.getElementById(id).value;
    return inputField;
}

// function to get innertext
function getInnerTextValue(id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}

// function to set innerText
function setInnerTextValue( value){
    const element = document.getElementById('available-balance');
    element.innerText = value;
}

// Add Money Form Submission
document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Add Money button clicked");
    const bank = document.getElementById('bank').value;
    const accountNumber = getInputFieldValueNumber("account-number");
    const amount = getInputValue("amount");
    const pin = getInputValue("pin");

    console.log("Selected Bank:", bank);
    console.log("Account Number:", accountNumber);
    console.log("Amount to Add:", amount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue('available-balance');

    console.log(availableBalance);

    if(accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }

    if(isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    if(pin !== validPin) {
        alert("Please enter a valid 4-digit PIN.");
        return;
    }

    const totalNewBalance = amount + availableBalance;

    setInnerTextValue(totalNewBalance);
})

// withdraw money form submission
const validAgentPin = 1234;
document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log("Withdraw Money button clicked");
    const agentNumber = getInputFieldValueNumber('agent-number');
    const withdrawAmount = getInputValue("withdraw-amount");
    const pin = getInputValue("pin-number");

    console.log("Agent Number:", agentNumber);
    console.log("Withdraw Amount:", withdrawAmount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue('available-balance');

    console.log(availableBalance);

    if(agentNumber.length !== 11) {
        alert("Please enter a valid 11-digit agent number.");
        return;
    }

    if(isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    if(pin !== validAgentPin) {
        alert("Please enter a valid 4-digit PIN.");
        return;
    }

    const totalNewBalance = availableBalance - withdrawAmount;

    if(totalNewBalance < 0) {
        alert("Insufficient balance.");
        return;
    }

    setInnerTextValue(totalNewBalance);
});


// toggle button

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "block";
})