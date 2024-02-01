
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, op) {
    if (op == '+') {
        return add(num1, num2)
    }
    else if (op == '-') {
        return subtract(num1, num2)
    }
    else if (op == '*') {
        return multiply(num1, num2)
    }
    else if (op == '/') {
        return divide(num1, num2)
    }
    else return ""
}

function clearDisplay(){
    results.textContent = ''
    firstNumber = ''
    operator = ''
    secondNumber = ''
    numBeforeOperator = true
    nextoperator = ''
}

function checkTextContent(text) {
    if (clearAfterEquals) {
        clearDisplay()
        clearAfterEquals = false}


    if (operators.includes(text)) {
        if (Boolean(operator) && Boolean(secondNumber)) {
            nextoperator = text
            checkTextContent('solvefirst')}
        else {
        operator = text
        results.textContent += text
        numBeforeOperator = false
        } 
    }

    if (!isNaN(text)) {
        results.textContent += text
        if (!Boolean(firstNumber) || numBeforeOperator) {
            firstNumber = Number(firstNumber + text)
        }
        else if (!Boolean(secondNumber) || !numBeforeOperator) {
            secondNumber = Number(secondNumber + text)
            // console.log(secondNumber)
        }
    }

    if (text == '='){
        let total = operate(firstNumber,secondNumber,operator)
        results.textContent = total
        firstNumber = ''
        secondNumber = ''
        clearAfterEquals = true
    }

    if (text == 'solvefirst'){
        let total = operate(firstNumber,secondNumber,operator)
        firstNumber = total
        secondNumber = ''
        operator = nextoperator
        results.textContent = total + operator
    }


    if (text == 'clear'){clearDisplay() }
}

const buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        checkTextContent(buttons[i].textContent)
    })
}

let results = document.querySelector('.display')

const operators = ['+', '-', '*', '/']
let firstNumber = ''
let operator = ''
let nextoperator = ''
let secondNumber = ''
let clearAfterEquals = false
let numBeforeOperator = true

