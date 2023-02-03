function checkPassword(){
    let password = document.querySelector("#password").value;
    let cnfrmPassword = document.querySelector("#cnfrm-password").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.querySelector("#message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Tog'ri yozildi";
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "Cod notog'ri";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Sorovni to'ldiring");
        message.textContent = "";
    }
}