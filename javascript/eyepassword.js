// eyepassword
const eyepassword = document.querySelectorAll(".auth-form_input-password");
const icon_password = document.querySelectorAll(".fa-eye");
let password_icon = document.querySelectorAll('.fa-solid.fa-eye');
console.log(password_icon);
for(let i = 0; i < icon_password.length ;i++){
    icon_password[i].onclick = function (){
        if(eyepassword[i].type == "text"){
            eyepassword[i].type = "password";
            password_icon[i].classList.replace('fa-eye-slash','fa-eye')
        }else{
            eyepassword[i].type = "text";
            password_icon[i].classList.replace('fa-eye','fa-eye-slash')
        }
    }
}
{/* <i class="fa-solid fa-eye-slash"></i> */}
//Form log
let content_form = document.getElementsByClassName('black-cover');
let tl = document.getElementsByClassName('btn auth-form_control-back');
let dkdn = document.getElementsByClassName('header__nav-iteam-link-bold');
let auth_form = document.getElementsByClassName('auth-form');
for(let i = 0;i <dkdn.length;i++){
    dkdn[i].onclick = function (){
        content_form[0].style.display = "flex";
        auth_form[i].style.display = "block";
    }
    tl[i].onclick = function (){
        content_form[0].style.display = "none";
        auth_form[i].style.display = "none";
    }
}


//Log-in 
let dk = document.querySelectorAll(".auth-form__switch-btn");
for(let i =0;i < dk.length;i++) {
    dk[i].onclick = function () {
        auth_form[i].style.display = "none";
        if(i==0){
            auth_form[1].style.display = "block";
        }
        if(i==1){
            auth_form[0].style.display = "block";
        }
    }
}

