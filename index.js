let numberInput = document.getElementById('number-input');
let buttonRun = document.getElementById('button');
let output = document.getElementById('output');

function loopNumber() {
    let input = Number(numberInput.value);
    let outputResult = '';

    if(input === 0){
        output.innerHTML = "อยากบอกว่าเสียใจ";
        return;
    }

    for(let i=1; i<=12; i++){
        let result = input*i;

        outputResult += '<p>';
        outputResult += input + ' * ' + i + ' = ' + result;
        outputResult += '</p>';

        // output.innerHTML = outputResult;

    }
    output.innerHTML = outputResult;

}

buttonRun.addEventListener('click', loopNumber);


////////////////////////////////////////////////////////////////////////

let love = ['pong', 'pong', 'pong'];
console.log(love);