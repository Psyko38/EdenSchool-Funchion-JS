function calculer(a, b, operation) {
	return operation(a, b);
}

function addition(x, y) {
	return x + y;
}
function multiplication(x, y) {
	return x * y;
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15
