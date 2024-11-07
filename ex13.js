function appliquerTroisFois(valeur, fonction) {
	let i2 = valeur;
	for (let i = 0; i < 3; i++) {
		i2 = fonction(i2);
	}
	return i2;
}
function incrementer(x) {
	return x + 1;
}

console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8
