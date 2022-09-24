const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// Esse array está guardando as teclas que vão ser permitidas ser digitadas.
const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ']

// O evento (keydown) é para quando uma tecla é precionada.
input.addEventListener('keydown', (event) => {
    event.preventDefault()

    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }

    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (event.key === 'Enter') {
        calculate()
    }
})

const calculate = () => {
    console.log('calculado!')
}