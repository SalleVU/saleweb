(function() {

    function clearForm(){
        document.getElementById("form1").reset();
    }
    
    function sendMail(){
        var mail = document.getElementById("form1");
        document.getElementById("form1").action="mailto:sallevu32@gmail.com?subject=subject&body=body";
        document.getElementById("form1").submit();
    }
    
    var myfunction = function(event){
    event.preventDefault();
    validateForm();
    sendMail();
    
    }
    var form = document.getElementById("form1");
    
    form.addEventListener("submit", myfunction, true);
    
    var clearBtn = document.getElementById("clr");
        
    clearBtn.addEventListener("click", clearForm);

    function validateForm(){

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
})();
