// jqdocready  {Shortcut}

$(document).ready(function () {
    $("button").on("click", function() {
        let opr = $(this).html();
        let f_num = $("#box1").val();
        let s_num = $("#box2").val();
        // let result = parseInt(f_num) + parseInt(s_num);
        let expression = f_num + opr + s_num;
        let result = eval(expression);
        $("#box3").val(result);
    });
});