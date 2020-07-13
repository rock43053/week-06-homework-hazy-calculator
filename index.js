function calculate(numberOne, operation, numberTwo){
    if (numberOne === undefined){
        numberOne = 0
    
    }
    if (numberTwo === undefined){
        numberTwo = 0
    }
    switch (operation){
        case '+':
            return parseInt(numberOne) + parseInt(numberTwo)
            break;
        case '-':
            return parseInt(numberOne) - parseInt(numberTwo)
            break;
        case '*':
            return parseInt(numberOne) * parseInt(numberTwo)
            break;
        case '/':
            return parseInt(numberOne) / parseInt(numberTwo)
            break;
        default:
            return ' we are currently not supporting this ' + operation
    }





}

console.log(calculate(undefined, '^', '10'))