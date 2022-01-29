function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  let ret = true;
  if (name == null || name == "") {
    document.getElementById("name").style.border = "2px Solid Red";
    document.getElementById("erreurnom").style.display = "block";
    ret = false;
  } else if (name != "") {
    document.getElementById("name").style.border = "2px Solid green";
    document.getElementById("erreurnom").style.display = "none";
  }
  if (password.length < 6) {
    document.getElementById("password").style.border = "2px Solid red";
    document.getElementById("erreurpass").style.display = "block";
    ret = false;
  } else if (password.length > 6) {
    document.getElementById("password").style.border = "2px Solid green";
    document.getElementById("erreurpass").style.display = "none";
  }
  return ret;
}
function verif() {
  var mail = document.myform2.mail.value;
  var atposition = mail.indexOf("@");
  if (atposition < 1) {
    document.getElementById("mail").style.border = "2px Solid Red";
    document.getElementById("erreurmail").style.display = "block";
  } else if (atposition > 1) {
    document.getElementById("mail").style.border = "2px solid Green";
    document.getElementById("erreurmail").style.display = "none";
  }
}  

function verif2() {
  var n = document.myform3.namecard.value;
  var c = document.myform3.credit.value;
  var d = document.myform3.date.value;
  var s = document.myform3.secure.value;
  let ret = true;
  if (n == null || n == "") {
    document.getElementById("namecard").style.border = "2px Solid Red";
    document.getElementById("erreurnamecard").style.display = "block";
    ret = false;
  } else if (n != "") {
    document.getElementById("namecard").style.border = "2px Solid green";
    document.getElementById("erreurnamecard").style.display = "none";
  }
  if (s == null || s == "") {
    document.getElementById("secure").style.border = "2px Solid Red";
    document.getElementById("erreursecure").style.display = "block";
    ret = false;
  } else if (s != "") {
    document.getElementById("secure").style.border = "2px Solid green";
    document.getElementById("erreursecure").style.display = "none";
  }
  if (c == null || c == "") {
    document.getElementById("credit").style.border = "2px Solid Red";
    document.getElementById("erreurcredit").style.display = "block";
    ret = false;
  } else if (c != "") {
    document.getElementById("credit").style.border = "2px Solid green";
    document.getElementById("erreurcredit").style.display = "none";
  }
  if (d == null || d == "") {
    document.getElementById("date").style.border = "2px Solid Red";
    document.getElementById("erreurdate").style.display = "block";
    ret = false;
  } else if (d != "") {
    document.getElementById("date").style.border = "2px Solid green";
    document.getElementById("erreurdate").style.display = "none";
  }
  return ret;
}


function verif3() {
  var n = document.myform4.name.value;
  let ret = true;
  if (n == null || n == "") {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("erreunom").style.display = "block";
    ret = false;
  } else if (n != "") {
    document.getElementById("name").style.border = "2px Solid green";
    document.getElementById("erreunom").style.display = "none";
  }

  var mail = document.myform4.email.value;
  var atposition = mail.indexOf("@");
  if (atposition < 1) {
    document.getElementById("email").style.border = "2px Solid Red";
    document.getElementById("erreumail").style.display = "block";
    ret = false;
  } else if (atposition > 1) {
    document.getElementById("email").style.border = "2px solid Green";
    document.getElementById("erreumail").style.display = "none";
  }

  return ret;
}