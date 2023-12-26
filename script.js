//Authentication process
nome = document.getElementById("nome")
password = document.getElementById("password");
confirmPassword = document.getElementById("confimPassword");


function authentication(){

    function nameVerify(){
        nomeValue = nome.value;
    
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

    function redirect(){
        location.replace("https://www.w3schools.com")
    }

    if(nameVerify() && passwordVerify() == true){
        redirect()
    } else if(nameVerify() == false && passwordVerify() == true){
        alert("Campo 'nome' preenchido incorretamente")
    } else if(nameVerify() == true && passwordVerify() == false) {
         alert("Campo 'senha' preenchido incorretamente")
    } else{
        alert("ERROR 404")
    }
}
