//Authentication process
nome = document.getElementById("nome")
password = document.getElementById("password");
confirmPassword = document.getElementById("confimPassword");


function authentication() {


    function nameVerify() {
        nomeValue = nome.value;
        localStorage.setItem('valueText', nomeValue);

        if (nomeValue == "") {
            return false
        } else {
            return true
        }
    }

    function passwordVerify() {
        verifyOne = password.value;
        verifyTwo = confirmPassword.value;

        if (verifyOne == verifyTwo) {
            return true
        } else {
            return false
        }
    }


    if (nameVerify() && passwordVerify() == true) {
        window.location.replace("https://guttenbergjr.github.io/Login_Authentication/homepage.html");
        alert("Conta criada com sucesso!")
    } else if (nameVerify() == false && passwordVerify() == true) {
        alert("Campo 'nome' preenchido incorretamente")
    } else if (nameVerify() == true && passwordVerify() == false) {
        alert("Campo 'senha' preenchido incorretamente")
    } else {
        alert("ERROR 404")
    }
}
//End of authentication

//Simple name display
let nameDisplay = document.getElementById("userName");
nameDisplay.textContent = localStorage.getItem('valueText');
//End of name display


// Mobile nav display

var navStatus = document.querySelector(".list");
var mobileMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", () =>{
    var nav = document.querySelector(".list")
    
    if(nav.style.display === "flex"){   
        nav.style.display = "none"
    } else{
        nav.style.display = "flex"
    }

})
//End of mobile Nav











// End of mobile nav




