var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');
var signupBtn = document.getElementById('register');
var signinBtn = document.getElementById('login');
var userName = document.querySelector('.signup input[name="username"]');
var userEmail = document.querySelector('.signup input[name="email"]');
var userPassword = document.querySelector('.signup input[name="password"]');
var loginEmail = document.querySelector('.signin input[name="loginName"]');
var loginPassword = document.querySelector('.signin input[name="loginPassword"]');
var errSingup = document.getElementById('errSignup');
var err = document.getElementById('err');
var users = [];

if(signupBtn){
    signupBtn.addEventListener('click', addUser)
}

if(signinBtn){
    signinBtn.addEventListener('click', login)
}

/* validation functions */

function validationInput() {

    if (userName.value == "" || userEmail.value == "" || userPassword.value == "") {
        errSingup.innerHTML = '<p class="alert alert-danger">  All Field are reqierd  </p>'
    } else {
        errSingup.innerHTML = "";
        return true;
    }

}

function validatesignupemai() {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var log = userEmail.value;
    var resultRegister = re.test(log);
    if (resultRegister == true) return true
    else {
        userEmail.classList.add('bg-danger', 'text-light')
        errSingup.innerHTML = '<p class="alert alert-danger">  email doesn\'t match the fromat  </p>'
    }
}

function passwordValidation() {

    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    var log = userPassword.value;
    var resultRegister = reg.test(log);
    if (resultRegister == true) return true
    else {
        userPassword.classList.add('bg-danger', 'text-light')
        errSingup.innerHTML = '<p class="alert alert-danger">  Password should contain at least 1 upper case & lower case letter, a digit and a symbol   </p>'
    }


}

function dblValidation(){

    users = JSON.parse(localStorage.getItem('addUser'))
    for(i=0; i< users.length ; i++){

        if(users[i].emai ==userEmail.value){
            errSingup.innerHTML='<p class="alert alert-danger">  this user already exist  </p>';

        }
        else {
            return true
        }
        
    }
}
 
function validationSinin() {

    if (loginEmail.value == "" || loginPassword.value == "") {

        err.innerHTML = '<p class="alert alert-danger">  All Field are reqierd  </p>'
    } else {
        err.innerHTML = "";
        return true;
    }

}

// register function

function addUser() {

    if (validationInput() == true && validatesignupemai() == true && passwordValidation() == true && dblValidation() == true  ) {

        var user = {
            name: userName.value,
            emai: userEmail.value,
            password: userPassword.value
        }
        users.unshift(user);
        localStorage.setItem("addUser", JSON.stringify(users));
        location.href = "home.html";
    }

}

function login() {

if(validationSinin() == true ){

    var mail = loginEmail.value;
    var password = loginPassword.value;
        users = JSON.parse(localStorage.getItem('addUser'))

        
        for(i=0 ; i < users.length ; i++)
        {

            if (mail == users[i].emai && password == users[i].password) {
        
                   
                 location.href = "home.html";
        
            } else {
                err.innerHTML = '<p class="alert alert-danger">  password or email is wrong please check again </p>'
            }
        }
}
   
}


// design functions

if(signUpButton){
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    
    });
}

 if(signInButton){
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
 }



 // function clear() {
//     userName.value = "";
//     userEmail.value = "";
//     userPassword.value = "";
//     loginEmail.value = "";
//     loginPassword.value = "";

// }
