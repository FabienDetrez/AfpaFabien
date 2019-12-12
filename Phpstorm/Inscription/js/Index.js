/*$('#buttonSend').on('click', function(event, target){
  if (!checkEmptyInput()){
    checkMailFormat();
  }
});*/

$(document).on('submit', function(event, target){
  event.preventDefault();
  if (!checkEmptyInput()){
      checkMailFormat();
  }
});

function checkEmptyInput(){
  let retour = true
  $(".notempty").each(function (i,elt){
    if(elt.value == ""){
      $(elt).toggleClass("border-danger");
      $(elt).next().toggleClass("d-none");
      retour = false
    }
  });
  return retour;
}

function checkMailFormat(){

}

/*function validateEmail() {
  // There are, I feel, better version of this regex online
  // You can check "https://emailregex.com/"
  var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

  // document.getElementById() - Easier to read & understand, and more widely used
  var address = document.getElementById('email').value;
  //address = $('#Email').val();

  // Corrected your returns - not the main issue in the function, but the old
  // returns might have caused confusion
  if (reg.test(address) == false) {
    alert("Email not valid");
    return false
  }
  return true
}*/

let bp;
