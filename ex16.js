function estPositif(nombre) {
	if (nombre < 0) {
		return "Négatif";
	} else if (nombre > 0) {
		return "Positif";
	} else if (nombre === 0) {
		return "Zéro";
	}
}
console.log(estPositif(5)); // Résultat attendu : "Positif"
console.log(estPositif(-3)); // Résultat attendu : "Négatif"
console.log(estPositif(0)); // Résultat attendu : "Zéro"
