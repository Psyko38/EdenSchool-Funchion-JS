function conditionnelle(a, b, condition) {
	if (condition(a, b) == "0") {
		return a + b;
	} else {
		return a * b;
	}
}
function estPairEtPositif(x, y) {
	if (x > 0 && y > 0 && x % 2 === 0 && y % 2 === 0) {
		return 0;
	} else {
		return 1;
	}
}

console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produit)
