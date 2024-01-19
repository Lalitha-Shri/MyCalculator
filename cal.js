/* Display function displays the number which is clicked by the user */

function display(val) {
    let vresult = document.getElementById('result');
    vresult.value += val;
 }

 /* Result function is for equal to(=) button which do all the mathematical 
 operation and display the result in the text input using eval() function */

 function Result() {
    let num1 = document.getElementById('result').value;
    let num2 = eval(num1);
    document.getElementById('result').value = num2;
 }

 /* This clear funtion will clear the input text box */

 function Clear() {
    let inp = document.getElementById('result');
    inp.value = '';
 }

/* Back() function is for DEL button which will delete only one value at a time */
 function Back() {
    let ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }

/* The keypress event will allow only to enter numbers while using the keyboard else will pop an alert message */

window.addEventListener('keypress',check);
 function check(e)
 {
   let k= e.key;
   switch(k){
      case '1':
         display;
         break;
      case '2':
         display;
         break;
      case '3':
         display;
         break;
      case '4':
         display;
         break;
      case '5':
         display;
         break;
      case '6':
         display;
         break;
      case '7':
         display;
         break;
      case '8':
         display;
         break;
      case '9':
         display;
         break;
      case '0':
         display;
         break;
         default:{
            alert("Only numbers are allowed");
         }
         
 }}