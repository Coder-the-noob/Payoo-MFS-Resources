document.getElementById('loginButton')
.addEventListener('click', function(event){
    // Prevent the default form submission
    event.preventDefault();
    console.log("login button clicked");

    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const pinNumberValue = document.getElementById('pin-number').value;

    const mobileNumberConverted = parseInt(mobileNumberValue);
    const pinNumberConverted = parseInt(pinNumberValue);

    if(mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid mobile number or PIN. Please try again.");
    }
})