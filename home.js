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

// function to handleToggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(let i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
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


// transfer money form submission
const validTransferPin = 1234;
document.getElementById('transfer-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Transfer Money button clicked");

    const receiverAccount = getInputFieldValueNumber('receiver-account');
    const transferAmount = getInputValue("transfer-amount");
    const pin = getInputValue("transfer-pin");

    console.log("Receiver Account:", receiverAccount);
    console.log("Transfer Amount:", transferAmount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue('available-balance');

    // validation
    if(receiverAccount.length !== 11) {
        alert("Please enter a valid 11-digit receiver account number.");
        return;
    }

    if(isNaN(transferAmount) || transferAmount <= 0) {
        alert("Please enter a valid amount to transfer.");
        return;
    }

    if(pin !== validTransferPin) {
        alert("Please enter a valid 4-digit PIN.");
        return;
    }

    // calculate new balance
    const totalNewBalance = availableBalance - transferAmount;

    if(totalNewBalance < 0) {
        alert("Insufficient balance to transfer.");
        return;
    }

    // update balance
    setInnerTextValue(totalNewBalance);

    alert(`Successfully transferred ${transferAmount} to account ${receiverAccount}.`);
});



// toggle button

document.getElementById('add-button').addEventListener('click', function(){
     handleToggle('add-money-parent');
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    handleToggle('cash-out-parent');
})

document.getElementById('transfer-button').addEventListener('click', function(){
    handleToggle('transfer-parent');
})
      


