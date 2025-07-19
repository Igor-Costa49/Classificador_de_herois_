
let nomeDoHeroi = "Champ";
let qtdDeExperiencia = 5000;

let nvlFerro = "Ferro";
let nvlBronze = "Bronze";
let nvlPrata = "Prata";
let nvlOuro = "Ouro";
let nvlPlatina = "Platina";
let nvlAscendente = "Ascendente";
let nvlImortal = "Imortal";
let nvlRadiante = "Radiante";


if (qtdDeExperiencia <= 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlFerro);
} else if (qtdDeExperiencia >= 1001 && qtdDeExperiencia <= 2000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlBronze);
} else if (qtdDeExperiencia >= 2001 && qtdDeExperiencia <= 5000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlPrata);
} else if (qtdDeExperiencia >= 5001 && qtdDeExperiencia <= 7000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlOuro);
} else if (qtdDeExperiencia >= 7001 && qtdDeExperiencia <= 8000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlPlatina);
} else if (qtdDeExperiencia >= 8001 && qtdDeExperiencia <= 9000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlAscendente);
} else if (qtdDeExperiencia >= 9001 && qtdDeExperiencia <= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlImortal);
} else if (qtdDeExperiencia >= 10001) { 
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nvlRadiante);
}
