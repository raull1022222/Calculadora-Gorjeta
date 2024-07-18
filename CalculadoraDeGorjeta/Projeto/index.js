function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value){
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}

function update(){
    let bill = Number(document.getElementById('yourBill').value) // puxar como valor
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    console.log({bill, tipPercent, split}) //chaves pra ser vizualizados com os que são validos
    // calculos :
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    //retornando pro html

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)

}


