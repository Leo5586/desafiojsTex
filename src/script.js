const content = document.getElementById("boxMensagem")
const button = document.getElementById("btnMensagem")

const paises = [
    ["Brasil", "Feijoada e caiporinha", 0],
    ["Argentina", "Picanha e chimarrão", 0],
    ["Colombia", "Ajiiaco e Arepas", 0],
    ["Peru", "Ceviche e Inka Cola", 0],
    ["Chile", "Curanto e Cazuela", 0],
    ["Venezuela", "Hallaca e Cachapas", 0],
    ["Equador", "Cuy e Cabelazo", 0],
    ["Bolívia", "Majao e Cochabamba", 0],
    ["Uruguai", "Chivito e Churrasco", 0],
    ["Paraguai", "Chipá e Kaburé", 0],
]

const handleBtn = () => {
    const number = Math.floor(Math.random() * paises.length)
    paises[number][2] += 1
    content.innerHTML = `<p>O país sorteado foi: <span>${paises[number][0]}</span></p><p>Suas comidas: <span>${paises[number][1]}</span></p><p>Vezes sorteado: <span>${paises[number][2]}</span></p>`
}

button.addEventListener('click', handleBtn)