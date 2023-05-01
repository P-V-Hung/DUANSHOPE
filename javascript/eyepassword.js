// eyepassword
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
//Form log
let content_form = document.getElementsByClassName('black-cover');
const bong = document.getElementsByClassName('black-cover-bong');
let dk = document.getElementsByClassName('header__nav-iteam-link-bold');
let auth_form = document.getElementsByClassName('auth-form');
for(let i = 0;i <dk.length;i++){
    dk[i].onclick = function (){
        content_form[0].style.display = "flex";
        auth_form[i].style.display = "block";
    }

}
bong[0].onclick = function(){
    content_form[0].style.display = "none";
    for(let i=0;i<dk.length;i++){
        auth_form[i].style.display = "none";
    }
}

