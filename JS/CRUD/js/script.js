const pName = document.getElementById('name');
const pPrice = document.getElementById('price');
const pQuantity = document.getElementById('Quantity');
const pDescription = document.getElementById('Description');
const tablehead = document.getElementById('tablehead');
const tablebody = document.getElementById('tablebody');
const err = document.getElementById('err');
const btn= document.getElementById("mainBtn");
const searchInput = document.getElementById('searchProduct')


if (localStorage.getItem('productData') == null) {
    products=[ ];
} else {
    var products = JSON.parse(localStorage.getItem('productData'));
    showtable();
}



// validations

function emptyValidation(){

    if (pName.value == "" || pPrice.value == "" || pQuantity.value == "" ) {
        err.innerHTML = ` <h2 class=" btn btn-danger mt-5 "> sorry, all field are reqired</h2>`

    }else{
        return true}

}

function inputsValidation(){

let regexName= /^[a-zA-Z]{3,}$/;
let chckname =pName.value;
let result = regexName.test(chckname);
if (result) {

    err.innerHTML = "";

    return true
    
}else{
    
    err.innerHTML = ` <h2 class=" btn btn-danger mt-5 "> sorry, name fomrant not correct </h2>`

}



}


function addProduct() {

  if(emptyValidation()== true && inputsValidation()== true){
    
        err.innerHTML = " ";
        var product = {
            pName: pName.value,
            price: pPrice.value,
            quantity: pQuantity.value,
            description: pDescription.value,

        }
        products.unshift(product);
        localStorage.setItem("productData", JSON.stringify(products))
    clearInputs();
   showtable();
    }
    }

function showtable() {
    
    var strhead= "";

    var strbody = "";

    

    for (i = 0; i < products.length; i++) {
        strhead = `<tr class=" w-50"> 
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Description</th>
       <th> </th>
         <th> </th>
    </tr>`
   

        strbody += `
        <tr> 
    <td>${i+1}</td>
    <td>${products[i].pName} </td>
    <td>${products[i].price}</td>
    <td>${products[i].quantity}</td>
    <td>${ products[i].description}</td>
   
     <td> <button onclick="updateProduct(${i})" class="btn btn-warning"> Update </button> </td>
     <td> <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
</tr>
`
        
    }

    tablehead.innerHTML = strhead;
    tablebody.innerHTML = strbody;
}

function clearInputs() {

    pName.value = " ";
    pPrice.value = " ";
    pQuantity.value = " ";
    pDescription.value = " ";
}

function deleteProduct(index){
    products.splice(index,1);
   localStorage.setItem("productData", JSON.stringify(products));
 
    showtable();
    
}
function searchProduct(term){

    var strbody="";
for(i =0 ; i< products.length; i++){

    if(products[i].pName.includes(searchInput.value)){

        strbody += `
        <tr> 
    <td>${i+1}</td>
    <td>${products[i].pName} </td>
    <td>${products[i].price}</td>
    <td>${products[i].quantity}</td>
    <td>${ products[i].description}</td>
   
     <td> <button onclick="updateProduct(${i})" class="btn btn-warning"> Update </button> </td>
     <td> <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
</tr>
`
        tablebody.innerHTML = strbody;
        
    }
}

}

searchInput.addEventListener('keyup', searchProduct)




function updateProduct(index){
     pName.value = products[index].pName ;
     pPrice.value = products[index].price;
    pQuantity.value= products[index].quantity ;
     pDescription.value= products[index].description ;
 btn.innerHTML="Update";
btn.classList.add("btn-warning")
btn.setAttribute("onclick",`updateCutrentProduct(${index})`);

}

 function updateCutrentProduct(index){
    products[index].pName= pName.value ;
     products[index].price =pPrice.value ;
    products[index].quantity =pQuantity.value ;
     products[index].description = pDescription.value ;
    localStorage.setItem("productData", JSON.stringify(products))
    clearInputs();
   showtable();

   btn.innerHTML="Add product";
   btn.classList.remove("btn-warning")
   btn.setAttribute("onclick",`addProduct()`);

 }
