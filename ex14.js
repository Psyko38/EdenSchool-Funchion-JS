function transformerTexte(texte, transformation) {
	return transformation(texte);
}
function majuscule(c) {
	return c.toUpperCase();
}
function avecPoint(c) {
	return c.replace(/.{1}/g, "$&.");
}

console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."
