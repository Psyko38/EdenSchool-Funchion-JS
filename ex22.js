function multipleDeCinq(nombre) {
	if (nombre % 5 === 0) {
		return "Oui";
	} else {
		return "Non";
	}
}
console.log(multipleDeCinq(10)); // Résultat attendu : "Oui"
console.log(multipleDeCinq(7)); // Résultat attendu : "Non"
