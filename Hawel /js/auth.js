$("#submitBtn").click(function () {
    nameValidate()
 


})


function nameValidate() {

    
    let re = /^[a-zA-Z\-]+$/;
    let log = userName.value;
    let resultRegister = re.test(log);
    if (resultRegister == false) {


        userName.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center">  please enter store name </p>'

    } else {
        userName.classList.remove('bg-danger', 'text-light')
        err.innerHTML = '<p class="alert ale </p>'
        phoneValidation()

    }

}



function phoneValidation(){


    let reg = /^01[0-2,5]{1}[0-9]{8}$/
    let log = phone.value;
    let resultRegister = reg.test(log);
    if (resultRegister == false && phone.value.length == 0  ) {

        phone.classList.add('bg-danger', 'text-light')
        err.innerHTML = '<p class=" text-danger text-center "> your number must be 12 number  </p>'
    

    } else {

        phone.classList.remove('bg-danger', 'text-light')
        err.innerHTML = ''

    
    }

}


