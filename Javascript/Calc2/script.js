window.addEventListener("load", initEvent);
var num_btns;
var opt_btns;
var result_box;
function initEvent() {
    result_box = document.querySelector("#result");
    // num_btns = document.querySelector("#box_1");
    // num_btns = document.querySelector(".box_1");
    num_btns = document.querySelectorAll(".num");
    for(var i = 0; i < num_btns.length; i++) {
        num_btns[i].addEventListener("click", appendNum);
    }
    opr_btns = document.querySelectorAll(".opr");
    for(var i = 0; i < opr_btns.length; i++) {
        opr_btns[i].addEventListener("click", appendOpr);
    }
    document.getElementsByClassName('calc')[0].addEventListener('click', equals);
    document.getElementsByClassName('reset')[0].addEventListener('click', reset);
    document.getElementsByClassName('backspace')[0].addEventListener('click', backspace);
    document.getElementsByClassName('btn_1')[0].addEventListener('click', reciprocal);
}

function appendNum() {
    var num = event.srcElement.innerHTML;
    result_box.value += num;
    temp_value = result_box.value;
}

function appendOpr() {
    var opr = event.srcElement.innerHTML;
    result_box.value = temp_value + opr;
}

function equals() {
    var expression = result_box.value;
    var result = eval(expression);
    result_box.value = result;
    // temp_value = result_box.value;
}

function reset() {
    result_box.value = "";
    temp_value = result_box.value;
}

function backspace() {
    result_box.value = result_box.value.slice(0, -1);
    temp_value = result_box.value;
}

function reciprocal() {
    result_box.value = 1 / result_box.value;
}
