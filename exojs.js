function calculerMontantTotal(montantInitial, typeRemise) {
	if (montantInitial < 0) {
		return "Le montant initial ne peut pas être négatif.";
	} else {
		if (typeRemise == "fidélité") {
			return montantInitial * 0.9;
		} else if (typeRemise == "etudiant") {
			return montantInitial * 0.85;
		} else if (typeRemise == "soldes") {
			return montantInitial * 0.8;
		} else if (typeRemise == "aucune") {
			return montantInitial;
		} else {
			return "Type de remise inconnu.";
		}
	}
}

console.log("*-* Checkup");
console.log(calculerMontantTotal(100, "etudiant")); // 85
console.log(calculerMontantTotal(200, "soldes")); // 160
console.log(calculerMontantTotal(150, "fidélité")); // 135
console.log(calculerMontantTotal(50, "aucune")); // 50
console.log(calculerMontantTotal(100, "inconnu")); // "Type de remise inconnu."
console.log(calculerMontantTotal(-100, "etudiant")); // "Le montant initial ne peut pas être négatif."
console.log("*-* Checkup");

let prix = Number(prompt("Prix : "));
let Remise = prompt("Type de remise : ");
let Final = calculerMontantTotal(prix, Remise);

if (
	Final === "Type de remise inconnu." ||
	Final === "Le montant initial ne peut pas être négatif."
) {
	window.alert(Final);
} else {
	window.alert(
		Final +
			"€ avec la Remise de '" +
			Remise +
			"' à la place de " +
			prix +
			"€ !"
	);
}
