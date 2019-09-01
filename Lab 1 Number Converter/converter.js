function convertNumber() {
    var inputTypeElem = document.querySelector('#inputType');
    var inputNumElem = document.querySelector('#inputNum');
    var outputTypeElem = document.querySelector('#outputType');
    var outputNumElem = document.querySelector('#result');
    var inputNum = inputNumElem.value;
    var result;

    //Change the number into base 1o
    switch (inputTypeElem.value) {
        case "B":
            result = parseInt(inputNum, 2);
            break;
        case "H":
            result = parseInt(inputNum, 16);
            break;
        case "D":
            result = inputNum;
            break;
    }

    //Change the number into desired type
    switch (outputTypeElem.value) {
        case "B":
            result = result.toString(2);
            break;
        case "H":
            result = result.toString(16);
            break;
        case "D":
            break;
    }
    outputNumElem.innerHTML = result;
}