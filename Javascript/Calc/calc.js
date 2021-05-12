window.addEventListener("load", initEvent);

var f_num;
var s_num;
var res;

function initEvent() {

    f_num = document.getElementById('box1');
    s_num = document.getElementById('box2');
    res = document.getElementById('box3');
    res.setAttribute('readonly', 'on')

    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    btn4 = document.getElementById('btn4');

    btn1.addEventListener("click", add);
    btn2.addEventListener("click", subtract);
    btn3.addEventListener("click", multiply);
    btn4.addEventListener("click", divide);

}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    res.value = result;
}
function subtract() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    res.value = result;
}
function multiply() {
    var result = parseInt(f_num.value) * parseInt(s_num.value);
    res.value = result;
}
function divide() {
    // var result = parseInt(f_num.value) / parseInt(s_num.value);
    var result = f_num.value / s_num.value;
    res.value = result;
}

// -- Always use parseInt to convert string to Number, even if input type is number, we get string, so it is necessary to use parseInt.
// -- In case of division, it is working because of the javascript's natural behaviour, strings can be subracted, multiplied, divided but 
//    while adding -> the value does not add and the result is concatenation
// -- So, always use parseInt.
