"use strict"

let userName = document.getElementById('name');

let phone = document.getElementById('phone');
let email = document.getElementById('email');
let age = document.getElementById('age');
let password = document.getElementById('password');
let rePassword = document.getElementById('rePassword');
let err = document.getElementById('err')



$("#submitBtn").click(function () {
    validationInput()

})




function validationInput() {

    if (userName.value == "" || phone.value == "" || email.value == "" || age.value == "" || password.value == "" || rePassword.value == "") {
       
return false
    } else {
        
        $('#submitBtn').removeAttr('disabled');

    }

}




function nameValidate() {

    

    let re = /^[a-zA-Z\-]+$/;
    let log = userName.value;
    let resultRegister = re.test(log);
    if (resultRegister == false) {


        userName.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center">  email doesn\'t match the fromat  </p>'

    } else {
        userName.classList.remove('bg-danger', 'text-light')
        err.innerHTML = '<p class="alert ale </p>'


    }


}
userName.addEventListener('keydown', nameValidate)



function validatesignupemai() {

    
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let log = email.value;
        let resultRegister = re.test(log);
        if (resultRegister == false && email.value.length > 0 ) {
    
            email.classList.add('bg-danger', 'text-light')
            err.innerHTML = '<p class=" text-danger text-center">  email doesn\'t match the fromat  </p>'
    
        } else {
            email.classList.remove('bg-danger', 'text-light')
            err.innerHTML = '<p class="alert ale </p>'
    
    
        }
        

   


   
}

email.addEventListener('keyup', validatesignupemai)



function passwordValidation() {

    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let log = password.value;
    let resultRegister = reg.test(log);
    if (resultRegister == false  && password.value.length != 0 ) {
        password.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center">  Password should contain at least 1 upper case & lower case letter, a digit and a symbol   </p>'
   

    } else {
        password.classList.remove('bg-danger', 'text-light')
        err.innerHTML = ''
       
    }


}

password.addEventListener('keyup', passwordValidation)


function rePasswordValidation() {
    console.log(password.value)


    if (password.value != rePassword.value) {

        rePassword.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center">  Password doesn\'t match  </p>'

    } else {
        rePassword.classList.remove('bg-danger', 'text-light');
        err.innerHTML = ' '
    }


}
rePassword.addEventListener('keyup', rePasswordValidation)


function AgeValidation(){


    let reg = /^[1-9]?[0-9]{1}$|^100$/
    let log = age.value;
    let resultRegister = reg.test(log);
    if (resultRegister == false && age.value.length != 0  ) {
        age.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class="text-danger text-center"> The age must be a number less than 100  </p>'
    

    } else {

        age.classList.remove('bg-danger', 'text-light')
        err.innerHTML = ''

    
    }

}

age.addEventListener('keyup', AgeValidation)

function phoneValidation(){


    let reg = /^01[0-2,5]{1}[0-9]{8}$/
    let log = phone.value;
    let resultRegister = reg.test(log);
    if (resultRegister == false && phone.value.length != 0  ) {

        phone.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center "> your number must be 12 number  </p>'
    

    } else {

        phone.classList.remove('bg-danger', 'text-light')
        err.innerHTML = ''

    
    }

}

phone.addEventListener('keyup',phoneValidation )