function IMC() {
    let peso = prompt("Seu peso: ");
    if (!/^\d+([\.,]\d+)?$/.test(peso)) { // Verifica se a entrada é um número válido
        if (/^[a-zA-Z]+$/.test(peso)) { // Verifica se a entrada é uma sequência de letras
            alert("Você digitou uma palavra em vez de um número");
        } else {
            alert("Você digitou um número inválido");
        }
        return;
    }
    if(peso.includes(",")){
        peso = peso.replace(",",".");
        peso = parseFloat(peso);
    } 
    let altura = prompt('Digite sua altura: ');
    if (!/^\d+([\.,]\d+)?$/.test(altura)) { // Verifica se a entrada é um número válido
        if (/^[a-zA-Z]+$/.test(altura)) { // Verifica se a entrada é uma sequência de letras
            alert("Você digitou uma palavra em vez de um número");
        } else {
            alert("Você digitou um número inválido");
        }
        return;
    }
    if(altura.includes(",")){
        altura = altura.replace(",", "").replace(".", "");
        altura = parseInt(altura)
        altura = altura / 100;
    }
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}
