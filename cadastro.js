document.addEventListener("DOMContentLoaded", function() {
    const botaoCadastrar = document.getElementById("botaoCadastrar");

    botaoCadastrar.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const sexo = document.querySelector("input[name='sexo']:checked").value;
        const numero = document.getElementById("numero").value;
        const cep = document.getElementById("cep").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const profissao = document.getElementById("profissao").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const interesses = [];
        document.querySelectorAll("input[name='interesse[]']:checked").forEach(function(interesse) {
            interesses.push(interesse.value);
        });

        const dadosUsuario = {
            nome: nome,
            idade: idade,
            sexo: sexo,
            numero: numero,
            cep: cep,
            cidade: cidade,
            estado: estado,
            profissao: profissao,
            email: email,
            telefone: telefone,
            interesses: interesses
        };

        console.log(dadosUsuario); // Exibir os dados capturados no console
    });
});
