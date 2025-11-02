let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 16 && idade <18) {
    console.log("seu voto é opcional, espere até a maioridade");
}

else if (idade >= 18 && idade < 65) {
    console.log("você é obrigado a votar");
}

else {
    console.log("você pode votar, mas não é obrigado");
}
