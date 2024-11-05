function estMajuscule(chaine) {
	if (chaine.toUpperCase() == chaine) {
		return true;
	} else {
		return false;
	}
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false
