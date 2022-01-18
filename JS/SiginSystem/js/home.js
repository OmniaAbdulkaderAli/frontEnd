var signOut = document.getElementById('logout');
var row = document.querySelector('.row');
var theName= document.querySelector('.name')
var posts = []




if (signOut) {
    signOut.addEventListener('click', signout)
}

function signout() {

    location.href = "index.html";
}


// var xml = new XMLHttpRequest();
// xml.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// xml.send();
// xml.onreadystatechange = function () {
//     if(xml.readyState == 4 && xml.status == 200){
//      posts = JSON.parse( xml.response)
//     }
//     console.log(posts)
//     allPosts();
// }
 

var xml = new XMLHttpRequest();
xml.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xml.send();
xml.addEventListener('readystatechange', function ()  {

    if(xml.readyState == 4 && xml.status == 200){
        posts = JSON.parse( xml.response)
       }
       console.log(posts)
       allPosts();
} ) 
 

function allPosts(){
    var card = ` `; 

    for (i = 0; i < posts.length; i++) {   
    card += `<div class="col-lg-4 ">
        <div class="card  mt-5 text-center py-3 shadow ">
        <h3> ${ posts[i].title}</h3>
        <p>${posts[i].body}</p>
        </div>
        </div>`
  
      row.innerHTML = card;function validationInput() {

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
  }
}
