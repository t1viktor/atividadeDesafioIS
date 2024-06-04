function main() {
    const opcoes = ["Windows Server", "Unix", "Linux", "Netware", "Mac OS", "Outro"];
    const votos = [0, 0, 0, 0, 0, 0];
   
    let opcoesPrompt = "Opções disponíveis:\n";
    for (let i = 0; i < opcoes.length; i++) {
        opcoesPrompt += `${i + 1}: ${opcoes[i]}\n`;
    }
    opcoesPrompt += "0: Encerrar";

    while (true) {
        let input = prompt(`${opcoesPrompt}\nInforme o número correspondente à opção (1-6) ou 0 para encerrar:`);
        let voto = parseInt(input, 10);

        if (voto === 0) {
            break;
        } else if (voto >= 1 && voto <= 6) {
            votos[voto - 1]++;
        } else {
            alert("Valor inválido! Informe um número entre 1 e 6.");
        }
    }

    let totalVotos = votos.reduce((total, num) => total + num, 0);

    if (totalVotos === 0) {
        console.log("Nenhum voto foi computado.");
        return;
    }

    
    console.log("Sistema Operacional Votos   %");
    console.log("------------------- ----- ---");
    for (let i = 0; i < opcoes.length; i++) {
        let percentual = (votos[i] / totalVotos) * 100;
        console.log(`${opcoes[i]} ${votos[i].toString().padEnd(5)} ${percentual.toFixed(0)}%`);
    }
    console.log("------------------- -----");
    console.log(`Total                    : ${totalVotos}`);

    let maxVotos = Math.max(...votos);
    let vencedores = opcoes.filter((_, i) => votos[i] === maxVotos);

    if (vencedores.length > 1) {
        console.log("Empate entre: " + vencedores.join(", "));
    } else {
        console.log("Vencedor: " + vencedores[0]);
    }
}

main();
