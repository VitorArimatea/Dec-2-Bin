function converter (number) {
    const decimal = parseInt(number);
    const binary = decimal.toString(2);

    document.getElementById('result-input').innerHTML = binary;
};

