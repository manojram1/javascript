
function validateForm(e){
    e.preventDefault();
    
    var formName = /^[a-zA-Z]+[a-zA-Z]+$/;
    var formEmail = /^\S+@\S+$/;
    var formPassword = /^[A-Za-z]\w{6,15}$/;
    var formPhone = /^\+?([0-9]{10})\?$/;
  
    var name = document.getElementById('name').value.trim();
    var e_mail = document.getElementById('email').value.toLowerCase().trim();
    var pass = document.getElementById('password').value.trim();
    var confirm_pass = document.getElementById('confirm-password').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if(!formName.test(name)){
    document.getElementById('nameErr').innerHTML = 'Please enter a valid first and last name.';
    document.getElementById('name').focus();
    }

     if(!formEmail.test(e_mail)){
        document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
        document.getElementById('email').focus();
    }

    if (!formPassword.test(pass)){
        document.getElementById('passErr').innerHTML = 'Please enter a valid Password';
        document.getElementById('password').focus();
    }

    if (pass !== confirm_pass){
        document.getElementById('confirmPassErr').innerHTML = 'Please recheck your confirmed password';
        document.getElementById('password').focus();   
    }

    if (!formPhone.test(phone)){
        document.getElementById('phoneErr').innerHTML = 'Please enter the number in  XXXXX XXXXX format';
        document.getElementById('phone').focus();
    }
}