//Authentication process
nome = document.getElementById("nome")
password = document.getElementById("password");
confirmPassword = document.getElementById("confimPassword");


function authentication(){


    function nameVerify(){
        nomeValue = nome.value;
        localStorage.setItem('valueText', nomeValue);
    
        if(nomeValue == ""){
            return false
        } else{
            return true
        }
    }

    function passwordVerify(){
        verifyOne = password.value;
        verifyTwo = confirmPassword.value;
    
        if(verifyOne == verifyTwo){
            return true
        } else{
            return false
        }
    }


    if(nameVerify() && passwordVerify() == true){
        window.location.href = "homepage.html";
        alert("Conta criada com sucesso!")
    } else if(nameVerify() == false && passwordVerify() == true){
        alert("Campo 'nome' preenchido incorretamente")
    } else if(nameVerify() == true && passwordVerify() == false) {
         alert("Campo 'senha' preenchido incorretamente")
    } else{
        alert("ERROR 404")
    }
}
//End of authentication

//Simple name display
let nameDisplay = document.getElementById("userName");
nameDisplay.textContent = localStorage.getItem('valueText');
//End of name display




