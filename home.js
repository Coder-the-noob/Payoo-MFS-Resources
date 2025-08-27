const validPin = 1234;
const transactionsData = [];

// function to get input value
function getInputValue(id) {
  const inputField = parseInt(document.getElementById(id).value);
  return inputField;
}

function getInputFieldValueNumber(id) {
  const inputField = document.getElementById(id).value;
  return inputField;
}

// function to get innertext
function getInnerTextValue(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}

// function to set innerText
function setInnerTextValue(value) {
  const element = document.getElementById("available-balance");
  element.innerText = value;
}

// function to handleToggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function borderColorToggle
function borderToggle(id) {
  const formsBtn = document.getElementsByClassName("form-btn");

  for (const form of formsBtn) {
    form.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    form.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Add Money Form Submission
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Add Money button clicked");
    const bank = document.getElementById("bank").value;
    const accountNumber = getInputFieldValueNumber("account-number");
    const amount = getInputValue("amount");
    const pin = getInputValue("pin");

    console.log("Selected Bank:", bank);
    console.log("Account Number:", accountNumber);
    console.log("Amount to Add:", amount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue("available-balance");

    console.log(availableBalance);

    if (accountNumber.length !== 11) {
      alert("Please enter a valid 11-digit account number.");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to add.");
      return;
    }

    if (pin !== validPin) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    const totalNewBalance = amount + availableBalance;

    setInnerTextValue(totalNewBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };

    transactionsData.push(data);
  });

// withdraw money form submission
const validAgentPin = 1234;
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Withdraw Money button clicked");
    const agentNumber = getInputFieldValueNumber("agent-number");
    const withdrawAmount = getInputValue("withdraw-amount");
    const pin = getInputValue("pin-number");

    console.log("Agent Number:", agentNumber);
    console.log("Withdraw Amount:", withdrawAmount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue("available-balance");

    console.log(availableBalance);

    if (agentNumber.length !== 11) {
      alert("Please enter a valid 11-digit agent number.");
      return;
    }

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }

    if (pin !== validAgentPin) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    const totalNewBalance = availableBalance - withdrawAmount;

    if (totalNewBalance < 0) {
      alert("Insufficient balance.");
      return;
    }

    setInnerTextValue(totalNewBalance);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleString(),
    };

    transactionsData.push(data);
  });

// transfer money form submission
const validTransferPin = 1234;
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Transfer Money button clicked");

    const receiverAccount = getInputFieldValueNumber("receiver-account");
    const transferAmount = getInputValue("transfer-amount");
    const pin = getInputValue("transfer-pin");

    console.log("Receiver Account:", receiverAccount);
    console.log("Transfer Amount:", transferAmount);
    console.log("Pin Number:", pin);

    const availableBalance = getInnerTextValue("available-balance");

    // validation
    if (receiverAccount.length !== 11) {
      alert("Please enter a valid 11-digit receiver account number.");
      return;
    }

    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Please enter a valid amount to transfer.");
      return;
    }

    if (pin !== validTransferPin) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    // calculate new balance
    const totalNewBalance = availableBalance - transferAmount;

    if (totalNewBalance < 0) {
      alert("Insufficient balance to transfer.");
      return;
    }

    // update balance
    setInnerTextValue(totalNewBalance);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleString()
    };

    transactionsData.push(data);

    alert(
      `Successfully transferred ${transferAmount} to account ${receiverAccount}.`
    );
  });

// Bonus Coupons
const bonusCoupons = {
  BONUS100: 100,
  BONUS50: 50,
  BONUS20: 20,
};
// get bonus
document
  .getElementById("bonus-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Get Bonus button clicked");

    const coupon = document.getElementById("bonus-coupon").value.trim();
    const availableBalance = getInnerTextValue("available-balance");

    if (bonusCoupons[coupon]) {
      const bonusAmount = bonusCoupons[coupon];
      const newBalance = availableBalance + bonusAmount;

      setInnerTextValue(newBalance);

      alert(`🎉 Coupon applied! You received ${bonusAmount} TK bonus.`);
    } else {
      alert("❌ Invalid coupon code. Try again.");
    }

    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleString(),
    };

    transactionsData.push(data);
  });

const validPayPin = 1234;
// Pay Bill
document
  .getElementById("pay-bills-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Pay Bill button clicked");

    const billerAccount = document.getElementById(
      "biller-account-number"
    ).value;
    const billAmount = parseInt(document.getElementById("bill-amount").value);
    const pin = parseInt(document.getElementById("pay-pin").value);

    const availableBalance = getInnerTextValue("available-balance");

    // Validation
    if (billerAccount.length !== 11) {
      alert("⚠️ Please enter a valid 11-digit biller account number.");
      return;
    }

    if (isNaN(billAmount) || billAmount <= 0) {
      alert("⚠️ Please enter a valid bill amount.");
      return;
    }

    if (pin !== validPayPin) {
      alert("⚠️ Invalid PIN.");
      return;
    }

    const newBalance = availableBalance - billAmount;

    if (newBalance < 0) {
      alert("⚠️ Insufficient balance to pay this bill.");
      return;
    }

    setInnerTextValue(newBalance);

    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleString(),
    };

    transactionsData.push(data);

    alert(
      `✅ Successfully paid ${billAmount} TK to biller account ${billerAccount}.`
    );
  });

// transactions history
document.getElementById("transactions-btn")
  .addEventListener("click", function () {
    const transactionsList = document.getElementById("transactions-container");
    transactionsList.innerHTML = "";

    for (const data of transactionsData) {
      const div = document.createElement("div");
      div.innerHTML = `
            <div 
            class="bg-white rounded-xl p-3 flex justify-between items-center my-3">
                            
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" class="mx-auto" />
              </div>

              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `;

      transactionsList.appendChild(div);
    }

    
  });

// toggle button

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  borderToggle("add-button");
});

document.getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    borderToggle("cash-out-button");
  });

document.getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-parent");
    borderToggle("transfer-button");
  });

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("bonus-parent");
  borderToggle("bonus-btn");

  console.log("bonus button clicked");
});

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  borderToggle("pay-bill-btn");

  console.log("pay bill button clicked");
});

document.getElementById("transactions-btn")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    borderToggle("transactions-btn");

    console.log("transactions button clicked");
  });
