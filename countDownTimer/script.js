const anoNovo = '1  jan 2022'

function contagemRegressiva(){
    const dataDoAnoNovo = new Date(anoNovo)
    const dataAtual = new Date()

    const sec = (dataDoAnoNovo - dataAtual) / 1000
    
    const dias = Math.floor(sec / 3600 /24)
    const horas = Math.floor(sec / 3600) % 24
    const minutos = Math.floor(sec / 60) % 60
    const segundos = Math.floor(sec) % 60

    console.log(dias,horas,minutos,segundos)

    document.querySelector('#dias').innerHTML = `${Number(dias)}`
    document.querySelector('#horas').innerHTML = `${Number(horas)}`
    document.querySelector('#minutos').innerHTML = `${Number(minutos)}`
    document.querySelector('#segundos').innerHTML = `${Number(segundos)}`    
}
contagemRegressiva()

setInterval(contagemRegressiva, 1000)