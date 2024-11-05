function estMajeur(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false
