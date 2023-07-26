function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 'Error: Unknown operator';
    }
  
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Result: " + result;
  }
  
  $(document).ready(function() {
    $("#myButton").click(function() {
      calculate();
    });
  });
  
