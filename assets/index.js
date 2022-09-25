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
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    resultInput.value = result

    resultInput.classList.remove('error')
}

// Botão de igual, ele que vai mostrar o resultado das contas.
document.getElementById('equal').addEventListener('click', calculate)

// Botão que vai trocar o tema da página.
document.getElementById('themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'

    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

// Esse botão copia o resultado da conta e manda para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', (event) => {
    // O currentTarget é que está acionando o evente que nesse caso é o botão.
    const button = event.currentTarget

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        
        // Atravez do navigator vamos usar a propriedade clipboard (indica a área de transferencia) e usar o writeText para escrever a menssagem.
        navigator.clipboard.writeText(resultInput.value)

    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
