document.addEventListener("DOMContentLoaded", function() {
 fields.name = document.getElementById('name');
 fields.email = document.getElementById('email');
 fields.subject = document.getElementById('subject');
 fields.message = document.getElementById('message');
})
function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined') return false;
 return (value.length > 0);
}
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.name, isNotEmpty);
 valid &= fieldValidation(fields.email, isNotEmpty);
 valid &= fieldValidation(fields.subject, isNotEmpty);
 valid &= fieldValidation(fields.message, isNotEmpty);
 return valid;
}
class User {
 constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
 this.name = name;
 this.email = email;
 this.subject = subject;
 this.message = message;
 }
}
function sendContact(){
    if  (isValid()){
    let usr = new User(name.value, email.value, subject.value, message.value);
    alert(`${usr.name} thanks for contacting me!`)
    }
    else {
    alert("There was an error")
    }
}