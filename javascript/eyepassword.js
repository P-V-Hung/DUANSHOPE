// eyepassword
const eyepassword = document.querySelectorAll(".auth-form_input-password");
const icon_password = document.querySelectorAll(".fa-eye");
let password_icon = document.querySelectorAll('.fa-solid.fa-eye');
for (let i = 0; i < icon_password.length; i++) {
    icon_password[i].onclick = function () {
        if (eyepassword[i].type == "text") {
            eyepassword[i].type = "password";
            password_icon[i].classList.replace('fa-eye-slash', 'fa-eye')
        } else {
            eyepassword[i].type = "text";
            password_icon[i].classList.replace('fa-eye', 'fa-eye-slash')
        }
    }
}
{/* <i class="fa-solid fa-eye-slash"></i> */ }
//Form log
let content_form = document.getElementsByClassName('black-cover');
let tl = document.getElementsByClassName('btn auth-form_control-back');
let dkdn = document.getElementsByClassName('header__nav-iteam-link-bold');
let auth_form = document.getElementsByClassName('auth-form');
for (let i = 0; i < dkdn.length; i++) {
    dkdn[i].onclick = function () {
        content_form[0].style.display = "flex";
        auth_form[i].style.display = "block";
    }
    tl[i].onclick = function () {
        content_form[0].style.display = "none";
        auth_form[i].style.display = "none";
    }
}


//Log-in 
let dk = document.querySelectorAll(".auth-form__switch-btn");
for (let i = 0; i < dk.length; i++) {
    dk[i].onclick = function () {
        auth_form[i].style.display = "none";
        if (i == 0) {
            auth_form[1].style.display = "block";
        }
        if (i == 1) {
            auth_form[0].style.display = "block";
        }
    }
}

//Search
let search_header = document.getElementById('search');
let form_search = document.getElementById('header_form');
let table_ls = document.getElementById('header_table');
function validate_search() {
    let error = false;
    if (search_header.value == "") {
        error = true;
    }
    if (!error) {
        return search_header.value;
    }
    return false;
}

let data = [];
function renderSearch() {
    let content = '';
    for (var i = 0; i < data.length; i++) {
        content = content + `
        <tr class= "tr_form-ls">
           <td>${data[i]}</td>
           <td>
                <button class="btn_form-ls" data-id = "${i}">
                    <i class="fa-solid fa-x"></i>
                </button>
           </td>
        </tr>
        `;
    }
    table_ls.innerHTML = content;
    let btn_removels = document.getElementsByClassName('btn_form-ls');
    for (let i = 0; i < btn_removels.length; i++) {
        btn_removels[i].onclick = () => {
            var id = btn_removels[i].dataset.id
            // var id = btn_removels[i].getAttribute("data-id");
            data.splice(id, 1);
            renderSearch();
        }
    }
}

form_search.onsubmit = function (e) {
    e.preventDefault();
    let ls_search = validate_search();
    if (ls_search) {
        data.push(ls_search);
        renderSearch();
        form_search.reset();
    }
}
