function emailValidation() {
    const emailAddress = document.getElementById('emailInput');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMessage = document.getElementById('errorMessage');
    if (emailPattern.test(emailAddress.value)) {
        window.location.href = './success.html';
        localStorage.setItem('subscribedEmailAddress', emailAddress.value)
    }
    else {
        errorMessage.style.display = 'block';
        emailAddress.style.background = '#FFE8E6';
        emailAddress.style.border = "red 1px solid";
        emailAddress.style.color = 'rgb(255, 98, 87)';
    }
}

function reAttempt() {
    const emailAddress = document.getElementById('emailInput');
    emailAddress.style.border = "1px solid rgb(146, 148, 160)";
    emailAddress.style.color = 'rgb(36, 39, 66)';
}

