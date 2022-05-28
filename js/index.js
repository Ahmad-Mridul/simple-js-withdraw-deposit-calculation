document.getElementById("submit-btn").addEventListener('click', function() {
    const userEmailField = document.getElementById("user-email");
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById("user-password");
    const userPassword = userPasswordField.value;
    if(userEmail =='admin@gmail.com' && userPassword =='secret'){
        window.location.href='../banking.html'
    }else{
        alert('wrong user name or password');
    }
});
