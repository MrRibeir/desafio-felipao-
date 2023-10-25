function getLevel (wins, lose){
	const winningBalance = wins - lose
	let level

if (wins <= 10) {
    level = "Ferro";
}
else if (wins > 10 && wins <= 20) {
    level = "Bronze";
}
else if (wins > 20 && wins <= 50) {
	level = "Prata";
}
else if (wins > 50 && wins <= 80) {
    level = "Ouro";
}
else if (wins > 80 && wins <= 90) {
    level = "Diamante";
}
else if (wins > 90 && wins <= 100){ 
	level = "Lendário";
}
else {
    level = "Imortal";
}
  
return [winningBalance, level];

}

const wins = 102
const lose = 4
const [winningBalance, level]= getLevel(wins, lose)
const message= "O Tadalafilos tem um saldo de "+winningBalance+" e esta no "+ level

console.log(message)
