// Cruds
var nameInput = document.getElementById("nameInput");
var phoneInput = document.getElementById("phoneInput");
var emailInput = document.getElementById("emailInput");
var addressInput = document.getElementById("addressInput");
var groupSelectInput = document.getElementById("groupSelectInput");
var noteTextareaInput = document.getElementById("noteTextareaInput");
var favoriteCheckInput = document.getElementById("favoriteCheckInput");
var emergencyCheckInput = document.getElementById("emergencyCheckInput");
var imageInput = document.getElementById("change-photo-input");
var imgLivePrev = document.getElementById("imgLivePrev");
var addContactModal = document.getElementById('addContactModal')
var groupSelectCartona=""
var profileIconStyle=document.getElementById("profileIconStyle")


var addContactModalLabel = document.getElementById('addContactModalLabel')
var Addbtn = document.getElementById("Addbtn");
var updateBtn = document.getElementById("updateBtn");


// 
var contactModalElement = document.getElementById('addContactModal');
var contactModalInstance = new bootstrap.Modal(contactModalElement);


var totalEmergency = document.getElementById("totalEmergency");
var totalFavorites = document.getElementById("totalFavorites");
var total = document.getElementById("total");

function totalLengh() {
  total.textContent = allContacts.length;
  totalFavorites.textContent = allContacts.filter(contact => contact.favoriteCheck).length;
  totalEmergency.textContent = allContacts.filter(contact => contact.emergencyCheck).length;
}
/*


  var addBtn = document.getElementById("addBtn");
 */

/*
var contactTobeUpdated
*/
var allContacts = JSON.parse(localStorage.getItem("allContacts")) || [];

displayOutOfStockFavorite()
displayOutOfStockEmergency()
displayContacts();

function setFormToAddContact()
  {
    addContactModalLabel.innerText = "Add Contact Contact"
    clearForm()
    updateBtn.classList.replace("d-block", "d-none");
    Addbtn.classList.replace("d-none", "d-block");
    if (profileIconStyle.classList.contains("d-none")) {
      profileIconStyle.classList.replace("d-none","d-block");
    }
  } 

// ~addcontacts
function AddContact() {
if (canAddContact()) 
  {
  if (
    validation(nameInput) &&
    validation(phoneInput) &&
    validation(emailInput) &&
    validation(addressInput) &&
    validation(noteTextareaInput)
  ) 

  {

    if(groupSelectInput.value.length >0){
     groupSelectInput_value = JSON.stringify(groupSelectInput.value).toLowerCase().replace(/"/g, '');

if( groupSelectInput_value == "friends"){
groupSelectCartona = `<div class="other-Grop-friends p-2 d-inline-block rounded-3">
              friends
            </div>`
            
}

else if( groupSelectInput_value == "family"){
groupSelectCartona = `<div class="other-Grop-family p-2 d-inline-block rounded-3">
              family
            </div>`
            
}

else if( groupSelectInput_value == "work"){
groupSelectCartona = `<div class="other-Grop-work p-2 d-inline-block rounded-3">
              work
            </div>` 
             
}

else if(groupSelectInput_value == "other"){
   groupSelectCartona = `<div class="other-Grop-other p-2 d-inline-block rounded-3">
              other 
            </div>`
             
}

else if( groupSelectInput_value == "school"){
  groupSelectCartona = `<div class="other-Grop-school p-2 d-inline-block rounded-3">
              school
            </div>`
             
}
else {
  
  groupSelectCartona = ``
 }

}



  if (imageInput.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload = function () {
      //   //~ creating product Obj
       
      


      var newContact = {
        id: Date.now(),
        name: nameInput.value,
        phone: phoneInput.value,
          email: emailInput.value,
        address:addressInput.value,
        groupSelect: groupSelectCartona,
        noteTextarea: noteTextareaInput.value,
        favoriteCheck: favoriteCheckInput.checked,
        emergencyCheck: emergencyCheckInput.checked,
        image: reader.result,
        has_image: true,

        groupSelectup:groupSelectInput.value
        

      };
      //   ~ push the product object inside the array
      allContacts.push(newContact);
      
      
      //   ~ display the products as a ui
      displayContacts();
      saveIntoLocalStorage();
        displayOutOfStockFavorite()
        displayOutOfStockEmergency()

      clearForm()
    };
  } 
  else 
    {
    
    
    var newContact = {
       id: Date.now(),
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        address:addressInput.value,
        groupSelect: groupSelectCartona,
        noteTextarea: noteTextareaInput.value,
        favoriteCheck: favoriteCheckInput.checked,
        emergencyCheck: emergencyCheckInput.checked,
      image: nameInput.value.charAt(0).toUpperCase(),
      has_image: false,
      
      groupSelectup : groupSelectInput.value
      
    };
    //   ~ push the product object inside the array
    allContacts.push(newContact);
  

    //   ~ display the products as a ui
    displayContacts();
    saveIntoLocalStorage();
      displayOutOfStockFavorite()
      displayOutOfStockEmergency()

    clearForm()

  }

  
  contactModalInstance.hide();
  Swal.fire({
  title: "Added!",
  text: "contact has been add successful!",
  icon: "success"
});
}

  else {
    Swal.fire({
  icon: "error",
  title: "Missing...",
  text: "Please Enter a Valid Data!",
   

  
  
});
  }
}

else {
  Swal.fire({
  icon: "error",
  title: "Duplicate...",
  text: "Contact with this phone number already exists!", 
});
}
  
}

// ~displaycontacts
function displayContacts(Arr=allContacts) {

totalLengh()

  var htmlMarkup = "";

if (Arr.length==0) {
  htmlMarkup = ` <div class="empty-state d-flex flex-column justify-content-center align-items-center text-center">
              <i
                class="fa-solid fa-address-book icon bg-icon rounded-3 d-flex justify-content-center align-items-center"
              ></i>
              <p class="fs-5 fw-bold mb-1">No contacts found</p>
              <p class="fs-7">
                Click "<span class="fw-bold">Add Contact</span>" to get started
              </p>
            </div>`;
}

else
{
  for (var i = 0; i < Arr.length; i++) {
    htmlMarkup += `<div class="col-md-6 p-2 contact-card-bg rounded-4">
                
            <div class="d-flex">
              <div class="position-relative p-3 contact-icon rounded-3 text-light d-flex align-items-center justify-content-center">
               ${Arr[i].favoriteCheck ? `<div class="text-light position-absolute abs-star rounded-circle d-flex align-items-center justify-content-center">
                 <i class="fa-solid fa-star"></i>
                 </div>` : ``}

               
                 ${Arr[i].has_image ? `<img src="${Arr[i].image}" alt="" class="imagee">` 
                 : `<p>${Arr[i].image}</p>`}
              

                
                 ${Arr[i].emergencyCheck ? `<div class="text-light position-absolute abs-heart rounded-circle d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-heart-pulse"></i>
                  </div>` : ``}
              </div>



              <div>
                 <h6 class="ms-3 h3">${Arr[i].name}</h6>
                   <div class="d-flex">
                      <div class="me-2 ms-3 d-inline-block contact-call-icon d-flex align-items-center justify-content-center p-2 rounded-3">
                  
                    <i class="fa-solid fa-phone"></i>
                  
                </div>
                 <p class="fs-6"> ${Arr[i].phone}</p>
                   </div>
              </div>
            </div>





            ${Arr[i].email ? `<div class="d-flex">
              <div class="contact-gmail-icon d-flex align-items-center justify-content-center p-2 rounded-3 me-3">
                <i class="fa-solid fa-envelope"></i>
              </div>
             <p class="text-light-emphasis">${Arr[i].email}</p>
             </div>` : ``}



             ${Arr[i].address?`<div class="d-flex">
              <div class="contact-Adress-icon d-flex align-items-center justify-content-center p-2 rounded-3 me-3">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <p class="text-light-emphasis">${Arr[i].address}</p>
            </div>` : ``}
            


           

          ${Arr[i].groupSelect}


            ${Arr[i].emergencyCheck ? ` <div class="Emergency-Grop p-2 d-inline-block rounded-3">
              <i class="fa-solid fa-heart-pulse"></i> Emergency
            </div>` : ``}


            <hr>
            <div class="d-flex justify-content-between">
              <div>

              
              ${Arr[i].phone? `  <div class="d-inline-block rounded-3 contact-hr-call me-2">
                  
                  <a href="tel:${Arr[i].phone}" class="p-2 rounded-3 mb-3">
                     <i class="fa-solid fa-phone"></i>
                  </a>
                </div>` : ``}


              ${Arr[i].email? `   <div class="d-inline-block rounded-3 contact-hr-gmail">
                 <a href="mailto:abdoemad1582004@gmail.com" class="p-2 rounded-3 mb-4">
                   <i class="fa-solid fa-envelope"></i>
                 </a>
                </div>
                ` : ``}
                </div>



              <div>
                 <i class=" ${Arr[i].favoriteCheck? 
                  `fa-solid fa-star hov2 ` :
                   `fa-regular fa-star hov1 `} p-2" onclick="togleFavIcon(this,${Arr[i].id})"></i>




           <i class=" ${Arr[i].emergencyCheck ? 
                  'fa-solid fa-heart-pulse hov4 ' :
                   'fa-regular fa-heart hov3 '} p-2" onclick="togleEmerIcon(this,${Arr[i].id})"></i>




                <button class="border-n hov5" data-bs-toggle="modal" data-bs-target="#addContactModal"
                
                onclick="setFormForUpdate(${Arr[i].id})"
                >

                  <i class="fa-solid fa-pen"></i>

                </button>


                <button class="border-n hov6"  onclick="deleteContact(${Arr[i].id})">

                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
              </div> `;
  }
}
  
  document.getElementById("display-wrapperContacts").innerHTML = htmlMarkup;
}


// ~ Live Img Prev
imageInput.onchange = function () {
  var reader = new FileReader();
  reader.readAsDataURL(imageInput.files[0]);
  reader.onload = function () {
    imgLivePrev.setAttribute("src", reader.result);
    imgLivePrev.classList.replace("d-none","d-block")
    profileIconStyle.classList.replace("d-block","d-none");

  };
};



// ~DeleteFunc
function deleteContact(id) {
Swal.fire({
  title: "Delete Contact?",
  text: "Are you sure you want to delete this content? This action cannot be undone.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#888",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     console.log(id);
allContacts = allContacts.filter(function (contact) {
    return contact.id != id;
  });
 displayContacts();
  saveIntoLocalStorage();
  displayOutOfStockFavorite()
  displayOutOfStockEmergency()

  
    Swal.fire({
      title: "Deleted!",
      text: "contact has been deleted.",
      icon: "success"
    });
  }
});




 
}

// ~saveIntoLocalStorage
function saveIntoLocalStorage() {
  localStorage.setItem("allContacts", JSON.stringify(allContacts));
}

// ~ setFormForUpdate

function setFormForUpdate(id) {
addContactModalLabel.innerText = "Edit Contact Contact"
  contactTobeUpdated = allContacts.find(function (contact) {
    return contact.id == id;
  });
  console.log(contactTobeUpdated);

  nameInput.value = contactTobeUpdated.name;
  phoneInput.value = contactTobeUpdated.phone;
  emailInput.value = contactTobeUpdated.email;
  addressInput.value = contactTobeUpdated.address;
  groupSelectInput.value = contactTobeUpdated.groupSelectup;
  noteTextareaInput.value = contactTobeUpdated.noteTextarea;
  favoriteCheckInput.checked = contactTobeUpdated.favoriteCheck;
  emergencyCheckInput.checked = contactTobeUpdated.emergencyCheck;
  if (contactTobeUpdated.has_image) {
    imgLivePrev.setAttribute("src", contactTobeUpdated.image);
    imgLivePrev.classList.replace("d-none", "d-block");
  profileIconStyle.classList.add("d-none");
  }
  else {
    imgLivePrev.classList.replace("d-block", "d-none");
    profileIconStyle.classList.replace("d-none", "d-block");
  }
   updateBtn.classList.replace("d-none", "d-block");
   Addbtn.classList.replace("d-block", "d-none");
}

// ~ update contact

function updateContact() {
if ( validation(nameInput) &&
    validation(phoneInput) &&
    validation(emailInput) &&
    validation(addressInput) &&
    validation(noteTextareaInput))
    {
   if(groupSelectInput.value.length >0){
     groupSelectInput_value = JSON.stringify(groupSelectInput.value).toLowerCase().replace(/"/g, '');

if( groupSelectInput_value == "friends"){
groupSelectCartona = `<div class="other-Grop-friends p-2 d-inline-block rounded-3">
              friends
            </div>`
            
}

else if( groupSelectInput_value == "family"){
groupSelectCartona = `<div class="other-Grop-family p-2 d-inline-block rounded-3">
              family
            </div>`
            
}

else if( groupSelectInput_value == "work"){
groupSelectCartona = `<div class="other-Grop-work p-2 d-inline-block rounded-3">
              work
            </div>` 
             
}

else if(groupSelectInput_value == "other"){
   groupSelectCartona = `<div class="other-Grop-other p-2 d-inline-block rounded-3">
              other 
            </div>`
             
}

else if( groupSelectInput_value == "school"){
  groupSelectCartona = `<div class="other-Grop-school p-2 d-inline-block rounded-3">
              school
            </div>`
             
}
else {
  
  groupSelectCartona = ``
 }

}


if (contactTobeUpdated.has_image) {


  if(imageInput.files[0]){

    var reader  = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload  = function(){

     


       contactTobeUpdated.name = nameInput.value;
    contactTobeUpdated.phone = phoneInput.value;
      contactTobeUpdated.email = emailInput.value;
    contactTobeUpdated.address = addressInput.value;
      contactTobeUpdated.groupSelect = groupSelectCartona;
        contactTobeUpdated.noteTextarea = noteTextareaInput.value;
        contactTobeUpdated.favoriteCheck = favoriteCheckInput.checked;
          contactTobeUpdated.emergencyCheck = emergencyCheckInput.checked;
     contactTobeUpdated.image = reader.result
     contactTobeUpdated.groupSelectup=groupSelectCartona.value
      contactTobeUpdated.has_image = true



   
    displayContacts();
    saveIntoLocalStorage();
    displayOutOfStockFavorite()
    displayOutOfStockEmergency()
    updateBtn.classList.replace("d-block", "d-none");
    Addbtn.classList.replace("d-none", "d-block");
    clearForm()
    profileIconStyle.classList.remove("d-none");
  }
  }else{
   
    
    
    contactTobeUpdated.name = nameInput.value;
    contactTobeUpdated.phone = phoneInput.value;
      contactTobeUpdated.email = emailInput.value;
    contactTobeUpdated.address = addressInput.value;
      contactTobeUpdated.groupSelect = groupSelectCartona;
        contactTobeUpdated.noteTextarea = noteTextareaInput.value;
        contactTobeUpdated.favoriteCheck = favoriteCheckInput.checked;
          contactTobeUpdated.emergencyCheck = emergencyCheckInput.checked;
    
   contactTobeUpdated.has_image = true
    contactTobeUpdated.groupSelectup=groupSelectInput.value
   
    displayContacts();
    saveIntoLocalStorage();
    displayOutOfStockFavorite()
    displayOutOfStockEmergency()
    updateBtn.classList.replace("d-block", "d-none");
    Addbtn.classList.replace("d-none", "d-block");
    clearForm()
  }
}

else {
  if(imageInput.files[0])
    {

    var reader  = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload  = function(){

     


       contactTobeUpdated.name = nameInput.value;
    contactTobeUpdated.phone = phoneInput.value;
      contactTobeUpdated.email = emailInput.value;
    contactTobeUpdated.address = addressInput.value;
      contactTobeUpdated.groupSelect = groupSelectCartona;
        contactTobeUpdated.noteTextarea = noteTextareaInput.value;
        contactTobeUpdated.favoriteCheck = favoriteCheckInput.checked;
          contactTobeUpdated.emergencyCheck = emergencyCheckInput.checked;
     contactTobeUpdated.image = reader.result
     contactTobeUpdated.groupSelectup=groupSelectCartona.value
      contactTobeUpdated.has_image = true

   
    displayContacts();
    saveIntoLocalStorage();
      displayOutOfStockFavorite()
      displayOutOfStockEmergency()
  
    updateBtn.classList.replace("d-block", "d-none");
    Addbtn.classList.replace("d-none", "d-block");
    clearForm()
    profileIconStyle.classList.remove("d-none");
  }
  }
  
  else
    {
   
    
    
    contactTobeUpdated.name = nameInput.value;
    contactTobeUpdated.phone = phoneInput.value;
      contactTobeUpdated.email = emailInput.value;
    contactTobeUpdated.address = addressInput.value;
      contactTobeUpdated.groupSelect = groupSelectCartona;
        contactTobeUpdated.noteTextarea = noteTextareaInput.value;
        contactTobeUpdated.favoriteCheck = favoriteCheckInput.checked;
          contactTobeUpdated.emergencyCheck = emergencyCheckInput.checked;
     contactTobeUpdated.image = nameInput.value.charAt(0).toUpperCase()
   contactTobeUpdated.has_image = false
    contactTobeUpdated.groupSelectup=groupSelectInput.value
   
    displayContacts();
    saveIntoLocalStorage();
    displayOutOfStockFavorite()
    displayOutOfStockEmergency()
    updateBtn.classList.replace("d-block", "d-none");
    Addbtn.classList.replace("d-none", "d-block");
    clearForm()
  }}

  
  addContactModalLabel.innerText = "Add Contact Contact"
  contactModalInstance.hide();
  Swal.fire({
  title: "Updated!",
  text: "contact has been updated successful!",
  icon: "success"
});

}

else {
  

}
}


function clearForm(){
   nameInput.value       =null
        phoneInput.value =null
        emailInput.value =null
        addressInput.value =null
        groupSelectInput.value = "Select a group"
        imgLivePrev.classList.replace("d-block","d-none")
        imageInput.value =null
       noteTextareaInput.value =null
       favoriteCheckInput.checked =false
       emergencyCheckInput.checked =false
       
}

function search(value){
  var searchedContacts = allContacts.filter(function(contact){
   return contact.name.toLowerCase().includes(value.toLowerCase())
    || contact.phone.toLowerCase().includes(value.toLowerCase()) 
    || contact.email.toLowerCase().includes(value.toLowerCase())
     
      
     
  })

   displayContacts(searchedContacts)
}


function togleFavIcon(th,id)
{
    var contacthastoggleFavicon = allContacts.find(function (contact) {
    return contact.id == id;
  });
  contacthastoggleFavicon.favoriteCheck = !contacthastoggleFavicon.favoriteCheck;
  saveIntoLocalStorage();
  if(th.classList.contains("fa-regular")){
    th.classList.replace("fa-regular","fa-solid")
    th.classList.replace("hov1","hov2")
  }
  else {
    th.classList.replace("fa-solid","fa-regular")
    th.classList.replace("hov2","hov1")
  }
   displayOutOfStockFavorite()
  displayContacts();
}

function togleEmerIcon(th,id)
{

  var contacthastoggleEmericon = allContacts.find(function (contact) {
    return contact.id == id;
  });
  contacthastoggleEmericon.emergencyCheck = !contacthastoggleEmericon.emergencyCheck;
  saveIntoLocalStorage();

   if(th.classList.contains("fa-regular")){
    th.classList.replace("fa-regular","fa-solid")
    th.classList.replace("fa-heart","fa-heart-pulse")
    th.classList.replace("hov3","hov4")
  }
  else {
    th.classList.replace("fa-solid","fa-regular")
    th.classList.replace("fa-heart-pulse","fa-heart")
    th.classList.replace("hov4","hov3")
  }
  displayOutOfStockEmergency()
  displayContacts();
}

     


function displayOutOfStockFavorite()
{
  var favoriteContacts = allContacts.filter(function(contact){
    return contact.favoriteCheck == true
  })
 



  var htmlMarkup = "";

  if(favoriteContacts.length==0)
  {
    htmlMarkup = ` <div class="empty-state d-flex flex-column justify-content-center align-items-center text-center">
              <p class="fs-5  mb-1">No favorites yet</p>
            </div>`;
}
else
{
   for (var i = 0; i < favoriteContacts.length; i++) {
    htmlMarkup += `<div class="card-body p-1">
                <div class="text-center text-muted row">
                  <div class=" d-flex align-items-baseline mb-3 mb-md-0 justify-content-between">
                    <div class="d-flex align-items-center">


                      <div class="d-flex justify-content-center align-items-center  Favorites-side-icon-left  text-light">
                           ${favoriteContacts[i].has_image ? `<img src="${favoriteContacts[i].image}" alt="" class="imagee">` 
                 : `<p>${favoriteContacts[i].image}</p>`}
                      </div>

                      
                     <div class="p-1">
                       <h6>${favoriteContacts[i].name}</h6>
                      <p class=""> ${favoriteContacts[i].phone}</p>
                     </div>
                    </div>

                    <div class="Favorites-side-icon-right d-flex align-items-center justify-content-center p-3 rounded-3">
                  <a href="tel:${favoriteContacts[i].phone}">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                </div>
                  </div>

                </div>
              </div>`;
  }
}
 
  document.getElementById("OutOfStockFavorite").innerHTML = htmlMarkup;
  
}




function displayOutOfStockEmergency()
{
  var EmergencyContacts = allContacts.filter(function(contact){
    return contact.emergencyCheck == true
  })
  
  var htmlMarkup = "";

  if(EmergencyContacts.length==0)
  {
      htmlMarkup = ` <div class="empty-state d-flex flex-column justify-content-center align-items-center text-center">
              <p class="fs-5  mb-1">No emergency yet</p>
            </div>`;
  }



  else
  {
    for (var i = 0; i < EmergencyContacts.length; i++) {
    htmlMarkup += `<div class="card-body p-1">
                <div class="text-center text-muted row">
                  <div class=" d-flex align-items-baseline mb-3 mb-md-0 justify-content-between">
                    <div class="d-flex align-items-center">


                      <div class="d-flex justify-content-center align-items-center  Emergency-side-icon-left  text-light bgbg">
                           ${EmergencyContacts[i].has_image ? `<img src="${EmergencyContacts[i].image}" alt="" class="imagee">` 
                 : `<p>${EmergencyContacts[i].image}</p>`}
                      </div>

                      
                     <div class="p-1">
                       <h6 class="ms-0">${EmergencyContacts[i].name}</h6>
                      <p class=""> ${EmergencyContacts[i].phone}</p>
                     </div>
                    </div>

                    <div class="Favorites-side-icon-right d-flex align-items-center justify-content-center p-3 rounded-3">
                  <a href="tel:${EmergencyContacts[i].phone}">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                </div>
                  </div>

                </div>
              </div>`;
  }
  }
 
  document.getElementById("OutOfStockEmergency").innerHTML = htmlMarkup;
  
}

// regexxxx


function validation(element) {


  var regex = {
    nameInput: /^[a-z]{3}[a-z ]{0,50}$/i,
    phoneInput: /^(002|\+2)?01[0125][0-9]{8}$/,
    emailInput: /^([a-zA-Z]{3}[a-zA-Z0-9_]{0,97}@(gmail|yahoo)\.com$)|(^$)/,
    addressInput: /^([a-z]{2}[a-z0-9 ]{0,97}$)|(^$)/i,
    noteTextareaInput: /^([a-z]{2}[\w\s.,-]{0,97}$)|(^$)/i,
  };


  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
    return false;
  }
}

function canAddContact(){
var currentPhone = phoneInput.value.trim();
  
  var canAdd = allContacts.filter(function(contact) {
    return contact.phone.trim() === currentPhone;
  });

  console.log("Is phone unique?", canAdd.length === 0);
  return canAdd.length === 0;
}