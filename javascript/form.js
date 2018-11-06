function submit(){
    console.log("test");
    validateform();
    document.getElementById("form1").submit();
}

function reset(){
    console.log("test2");
    document.getElementById("form1").reset();
}

function validateform(){
    var fname = document.getElementById('fname').value;
    if (fname === ""){
        alert("Enter first name please!");
        return false;
    }

    var lname = document.getElementById('lname').value;
    if (lname === ""){
        alert("Enter last name please!");
        return false;
    }

    var email = document.getElementById('email').value;
    if (email === ""){
        alert("Enter E-mail address please!");
        return false;
    }

    var phone = document.getElementById('phone').value;
    if (phone === ""){
        alert("Enter phone number please!");
        return false;
    }
    var mess = document.getElementById('mess').value;
}