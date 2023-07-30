const  numInput = document.getElementById ("num-input"); /*se declara variable, y se llama desde el html*/
const  txtInput = document.getElementById ("txt-input"); /*se declara variable, y se llama desde el html*/
const  result = document.getElementById ("result"); /*se declara variable, y se llama desde el html*/

console.log ("prueba: ", numInput); 


let inputValue = "";

numInput.addEventListener("change", function () {
        console.log(numInput.value);
    });






























/*let input1 = "";
let input2 = "";

numImput.addEventListener("change",(e) => {
    input1 =numImput.value;
    console.log ("final12", input1);
    result.innerHTML += input1;
});

txtInput.addEventListener ("change", (e) => {
    input2 = txtInput.value;
    console.log("final1", input2);
    result.innerHTML += input2;
});*/