function filtrerTexte(chaine, filtre) {
	let out = "";
	for (let lettre of chaine) {
		if (filtre(lettre) !== false) {
			out = out + lettre;
		}
	}
	return out;
}
function estVoyelle(c) {
	if (c == "a") {
		return "a";
	} else {
		if (c == "e") {
			return "e";
		} else {
			if (c == "i") {
				return "i";
			} else {
				if (c == "o") {
					return "o";
				} else {
					if (c == "u") {
						return "u";
					} else {
						if (c == "y") {
							return "y";
						} else {
							return false;
						}
					}
				}
			}
		}
	}
}
console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oou"
