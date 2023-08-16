document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido: número B é maior que número A.";
    } else {
        mensagem.innerHTML = "Formulário inválido: número B deve ser maior que número A.";
    }
});  