const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const clear = document.getElementById('clear')

// Esse array está guardando as teclas que vão ser permitidas ser digitadas.
const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ']

document.querySelectorAll('.charKey').forEach((charKeyButton) => {
    charKeyButton.addEventListener('click', () => {
        const value = charKeyButton.dataset.value
        input.value += value
    })
})

clear.addEventListener('click', () => {
    input.value = ''
    input.focus()
})

// O evento (keydown) é para quando uma tecla é precionada.
input.addEventListener('keydown', (event) => {
    event.preventDefault()

    // Esse if é para a calculadora aceitar apenas os valores (teclas) do array.
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }

    // Esse if é para a calculadora aceitar a tecla Backspace (tecla para apagar).
    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    // Esse if é para a calculadora aceitar a tecla Enter que quando for clicada vai chamar a função para calcular.
    if (event.key === 'Enter') {
        calculate()
    }
})

const calculate = () => {
    const result = eval(input.value)
    resultInput.value = result
}

document.getElementById('equal').addEventListener('click', calculate)
