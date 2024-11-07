function categorieTemperature(temp) {
	if (temp > 30) {
		return "Chaud";
	} else if (temp > 15) {
		return "Tempéré";
	} else {
		return "Froid";
	}
}
console.log(categorieTemperature(35)); // Résultat attendu : "Chaud"
console.log(categorieTemperature(20)); // Résultat attendu : "Tempéré"
console.log(categorieTemperature(10)); // Résultat attendu : "Froid"
