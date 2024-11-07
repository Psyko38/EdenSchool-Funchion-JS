function longueurChaine(chaine) {
	if (chaine.length > 10) {
		return "Longue";
	} else {
		return "Courte";
	}
}
console.log(longueurChaine("JavaScript")); // Résultat attendu : "Courte"
console.log(longueurChaine("Développement web")); // Résultat attendu : "Longue"
