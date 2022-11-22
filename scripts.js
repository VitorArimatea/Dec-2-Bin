function converter(number) {
    var decimal = parseInt(number)
    var binary = decimal.toString(2)
    document.getElementById('result-input').innerHTML = binary
}