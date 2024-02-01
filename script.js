
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
    if (Boolean(num1) && Boolean(num2)) {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
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
    } else if (op == '-'){
        return -num1
    }
    else return 'Error'
}

function clearDisplay() {
    results.textContent = ''
    firstNumber = []
    operator = ''
    secondNumber = []
    numBeforeOperator = true
    nextoperator = ''
}

function checkTextContent(text) {
    if (clearAfterEquals) {
        clearDisplay()
        clearAfterEquals = false
    }

    if (operators.includes(text)) {
        if (Boolean(operator) && secondNumber.length != 0) {
            nextoperator = text
            checkTextContent('solvefirst')
        }
        else {
            operator = text
            results.textContent += text
            numBeforeOperator = false
        }
    }

    if (!isNaN(text)) {
        results.textContent += text
        if (firstNumber.length == 0 || numBeforeOperator) {
            firstNumber.push(text)
        }
        else if (secondNumber.length == 0 || !numBeforeOperator) {
            secondNumber.push(text)
        }
    }

    if (text == '=') {
        let total = operate(firstNumber.join(''), secondNumber.join(''), operator)
        results.textContent = total
        firstNumber = []
        secondNumber = []
        clearAfterEquals = true
    }

    if (text == 'solvefirst') {
        let total = operate(firstNumber.join(''), secondNumber.join(''), operator)
        firstNumber = String(total).split('')
        if (firstNumber[0] == '-') {
            firstNumber.shift();
            firstNumber[0] = '-' + firstNumber[0]
        }
        secondNumber = []
        operator = nextoperator
        results.textContent = total + operator
    }

    if (text == 'clear') { clearDisplay() }

}

const buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        checkTextContent(buttons[i].textContent)
    })
}

let results = document.querySelector('.display')

const operators = ['+', '-', '*', '/']
let firstNumber = []
let operator = ''
let nextoperator = ''
let secondNumber = []
let clearAfterEquals = false
let numBeforeOperator = true

