let valores = []
    let inum = document.getElementById('number')
    let lista = document.getElementById('flista')
    let resultado = document.querySelector('div#res')
function adicionar() {

    
    let n = Number(inum.value)

    if (validacao0100(n) && !listaV(n, valores)) {
        valores.push(n)
        
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        
        resultado.innerHTML = ''
    } else {
        window.alert('Erro, Valor inválido ou já encontrado na lista.')
    }

    inum.value = ''
    inum.focus()
}

function validacao0100(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function listaV(n, l) {
    if (l.indexOf(n) !== -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    let resultado = document.querySelector('div#res')
    let inum = document.getElementById('number')

    let total = valores.length
    let soma = 0
    let media = 0

    if (valores.length <= 0) {
        window.alert('Insira valores na lista antes de calcular!')
    } else {
        for (let pos in valores) {
            soma += valores[pos]
        }

        media = soma / total
        valores.sort((a, b) => a - b) 

        resultado.innerHTML = `<p>Ao todo, temos <strong>${total}</strong> números cadastrados!</p> 
                               <p>O menor valor da lista é <strong>${valores[0]}</strong></p>
                               <p>O maior valor da lista é <strong>${valores[valores.length - 1]}</strong></p>
                               <p>Soma dos valores do Vetor: <strong>${soma}</strong></p>
                               <p>A média dos valores da lista é: <strong>${media.toFixed(2)}</strong></p>`
        
        inum.focus()
    }
}
