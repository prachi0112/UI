// function greet() {
//     console.log("Greet Called... ");
//     username = document.getElementById("box1");
//     // console.log(username.value);
//     username = username.value;
//     // alert("Hello " + username);
//     document.getElementById("output").innerHTML = username;
// }

// Event Binding

// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener('click', greet);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener('click', greet);
}

function greet() {
    console.log("Greet Called... ");
    username = document.getElementById("box1");
    // console.log(username.value);
    username = username.value;
    // alert("Hello " + username);
    document.getElementById("output").innerHTML = username;
}

