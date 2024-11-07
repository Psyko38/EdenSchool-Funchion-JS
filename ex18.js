function calculerPrix(prix) {
	if (prix > 100) {
		return prix * 0.9;
	} else {
		return prix;
	}
}
console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80
