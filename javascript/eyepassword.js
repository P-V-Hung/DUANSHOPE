const eyepassword = document.querySelectorAll(".auth-form_input-password");
const icon_password = document.querySelectorAll(".fa-eye");
let error_password = document.querySelector('.error_password');
let password_dk = "";
for(let i = 0; i < icon_password.length ;i++){
    icon_password[i].onclick = function (){
        if(eyepassword[i].type == "text"){
            eyepassword[i].type = "password";
        }else{
            eyepassword[i].type = "text";
        }
    }
}

