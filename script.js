function fullName(firstname, lastname) {
    return firstname + " " + lastname; 
}
console.log(fullName('Paul', 'Gross'))


function capitalieLetters(fruit) {
    return fruit.toUpperCase();
}

console.log(capitalieLetters('BanAne'))


function countCharacter(stringLength) {
    return stringLength.length;
    
}
console.log(countCharacter('Banane'))

function formatToCurrency(number) {
    // Verwenden von toFixed() um die Zahl auf zwei Dezimalstellen zu formatieren
    return number.toFixed(2) + ' $';
}

// Beispielaufruf
console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"
