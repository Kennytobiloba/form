document.addEventListener('DOMContentLoaded', function () {
const firebaseConfig = {
  apiKey: "AIzaSyCJgY9qZN6cFPwQjbWwl28_LhdNv2VhF9Y",
    authDomain: "form-e5d58.firebaseapp.com",
    databaseURL: "https://form-e5d58-default-rtdb.firebaseio.com",
    projectId: "form-e5d58",
     storageBucket: "form-e5d58.appspot.com",
    messagingSenderId: "9751696745",
   appId: "1:9751696745:web:8207881e5bbb63b7fe19f8"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('form');

document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  var firstName = getElementVal("firstname");
  var lastName = getElementVal("lastName");
  var email = getElementVal("email");
  var socialSecurity = getElementVal("socialSecurity");
  var driverLicense = getElementVal("driverLicense");
  var zipCode = getElementVal("zipCode");
  var address = getElementVal("address");
  var payment = getElementVal("payment");
  var state = getElementVal("state");
  var city = getElementVal("city");
  saveMessages(firstName, lastName, email, socialSecurity, driverLicense, zipCode, address,payment,state,city);
  document.getElementById('contactForm').reset();
}

const saveMessages = (firstName, lastName, email, socialSecurity, driverLicense,zipCode,address,payment,state,city) => {
   var newContactForm =  contactFormDB.push()

   newContactForm.set({
    firstName: firstName,
    lastName: lastName,
    email : email,
    socialSecurity : socialSecurity,
    driverLicense : driverLicense,
    zipCode : zipCode,
    address : address,
    payment : payment,
    state : state,
    city : city,
   })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
});
