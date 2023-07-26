function calcualte (num1 , numb2 , operator){
    switch (operator){
        case '+' :
            return num1 + numb2
        case '-':
            return num1 - numb2;
        case '*':
             return num1 * numb2;
        case '/':
            if (num2 != 0){
            return num1/num2;
            }else {
                return 'error : unknown operator,';
            }
    }
}

$(document).ready(function() {
    $("#myButton").click(function() {
    alert("Button clicked!");
    });
    });
