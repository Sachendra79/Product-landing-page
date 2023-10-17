// function clearErrors(){
//  errors = document.getElementsByClassName('formerror');
//   for(let item of errors)
//   {
//       item.innerHTML = "";
//   }
// }
// function seterror(id, error){
  
//   element = document.getElementById(id);
//   element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm(){
//   var returnval = true;
//   clearErrors();
//  var name = document.forms['myForm']["fname"].value;
//   if (name.length<5){
//       seterror("name", "*Length is too small:");
//        returnval = false;
//   }

//   if (name.length == 0){
//       seterror("name", "*Length Can't be Zero!");
//        returnval = false;
//   }

//   var email = document.forms['myForm']["femail"].value;
//   if (email.length>15){
//       seterror("email", "*Use Short Email:");
//        returnval = false;
//   }

//    return returnval;
// }

  document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault() 
    alert('Your message has been received');
    });



 





