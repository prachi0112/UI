window.addEventListener("load", initEvent);

var password;
var confirm_password;
function initEvent() {
    password = document.querySelector('#password');
    confirm_password = document.querySelector('#confirm_password');
    // document.querySelector("#email_blur input").addEventListener('blur', validEmail);
    document.getElementsByTagName('input[type="email"]').addEventListener('blur', validEmail);

    // document.querySelector("#pwd_keyup input").addEventListener('keyup', fill_pwd);
    document.getElementsByTagName('input[type="password"]').addEventListener('keyup', fill_pwd);

}

// $(selector).blur(function (e) { 
//     e.preventDefault();
    
// });

// $(document).ready(function () {
//     $("td").find("input").blur(function() {
//         let fieldValue = $(this).val();
//         let errorBox = $(".emptySpan");

//         if(fieldValue == "") {
//             errorBox.html() = "Please fill this field";
//             errorBox.style.color = "red";
//             errorBox.style.border = "1px solid red";
//         }
//         else {
//             errorBox.html() = "";
//             errorBox.style.border = "1px solid green";
//         }
//     });
// });

// function validate(obj) {
    // var fieldValue = obj.value;
    // var errorBox = document.querySelectorAll('.emptySpan');
    // console.log(errorBox);
    // console.log(errorBox.length);
    // for(var i= 0; i < errorBox.length; i++)
    // {
    //     if(fieldValue == "")
    //     {
    //         errorBox[i].innerHTML = "Please fill this field";
    //         errorBox[i].style.color = 'red';
    //         obj.style.border = '1px solid red';
    //     }
    //     else
    //     {
    //         errorBox[i].innerHTML = "";
    //         obj.style.border = '1px solid green';
    //     }
    // }

// }

function validEmail(obj) {
    var fieldValue = obj.value;
    var errorBox = document.querySelector('#validateEmail');
    var pattern = /([A-Z|a-z])\w+[@]\w+[.]\w{2,3}/;
    var valid = pattern.test(fieldValue);
    // console.log(valid);
    if(valid == false) {
        // errorBox.innerHTML = "Please fill Valid Email ID";
        obj.style.border = '1px solid red';
    }
    else {
        errorBox.innerHTML = "";
        obj.style.border = '1px solid green';
    }
}


function fill_pwd(obj) {
    var password1 = obj.value;
    var pwd_box = document.querySelector('#pwd_span');
    var pwd_bar = document.querySelector('#pwd_bar');
    if(confirm_password.value.length > 0) {
        confirm_password.value = "";
        conf_pwd_box.innerHTML = "";
        $("#border_color").find('input').style.border = "1px solid black";
        // console.log(confirm_password.value);
    }
    else {
        if(password1.length == 0) {
            pwd_box.innerHTML = "";
            pwd_bar.style.width = 0 + 'px';
        }
        else if(password1.length <= 4 && password1.length >= 1 ) {
            pwd_box.innerHTML = "Weak";
            pwd_box.style.color = 'red';
            pwd_bar.style.width = password1.length * 10 + 'px';
            pwd_bar.style.background = 'red';
            // console.log(password1.length);
        }
        else if(password1.length < 8 && password1.length > 4) {
            pwd_box.innerHTML = "Medium";
            pwd_box.style.color = 'orange';
            pwd_bar.style.width = password1.length * 10 + 'px';
            pwd_bar.style.background = 'orange';
            // console.log(password1.length);
        }
        else if(password1.length >= 8 && password1.length <= 10){
            pwd_box.innerHTML = "Strong";
            pwd_box.style.color = 'green';
            pwd_bar.style.width = password1.length * 10 + 'px';
            pwd_bar.style.background = 'green';
            // console.log(password1.length);
        }
        else if(password1.length > 10) {
            pwd_bar.style.width = 100 + 'px';
        }
        password = password1;
    }
}

function conf_pwd(obj) {
    var password2 = obj.value;
    var conf_pwd_box = document.querySelector('#conf_pwd_span');
    if(password2.length == 0) {
        conf_pwd_box.innerHTML = "";
    }
    else {
        if(password2 == password) {
            conf_pwd_box.innerHTML = "Password Verified";
            conf_pwd_box.style.color = 'green';
            obj.style.border = '1px solid green';
            // console.log("password1 : " + password, "password2 : " + password2);
        }
        else {
            conf_pwd_box.innerHTML = "Password doesn't match";
            conf_pwd_box.style.color = 'red';
            obj.style.border = '1px solid red';
            // console.log("password1 : " + password, "password2 : " + password2);
        }
        confirm_password.value = password2;    
    }
}