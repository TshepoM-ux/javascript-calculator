function add() {
    let num1 = document.getElementById("numInput1").value;
    let num2 = document.getElementById("numInput2").value;
    let results = Number(num1) + Number(num2);

    document.getElementById("result").innerText =`Result:` + results;
}

function subtract() {
    let num1 = document.getElementById("numInput1").value;
    let num2 = document.getElementById("numInput2").value;
    let results = Number(num1) - Number(num2);

    document.getElementById("result").innerText = `Result:` + results;
}

function divide() {
    let num1 = document.getElementById("numInput1").value;
    let num2 = document.getElementById("numInput2").value;

    if(Number(num2) == 0) {
        document.getElementById("result").innerHTML = `Error: cannot divide by 0`;
    }else{
        let results = Number(num1) / Number(num2);
        document.getElementById("result").innerText =`Result:` + results;
    }
}

function multiply() {
    let num1 = document.getElementById("numInput1").value;
    let num2 = document.getElementById("numInput2").value;
    let results = Number(num1) * Number(num2);

    document.getElementById("result").innerHTML =`Result:` + results;
}

function clearResult() {
    document.getElementById("result").innerText = "";
    document.getElementById("numInput1").value = "";
    document.getElementById("numInput2").value = "";
}
