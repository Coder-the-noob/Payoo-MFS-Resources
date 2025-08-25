const validPin = 1234;

document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Add Money button clicked");
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const pin = parseInt(document.getElementById('pin').value);

    console.log("Selected Bank:", bank);
    console.log("Account Number:", accountNumber);
    console.log("Amount to Add:", amount);
    console.log("Pin Number:", pin);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

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

    document.getElementById('available-balance').innerText = totalNewBalance;
})

// toggole button

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "block";
})