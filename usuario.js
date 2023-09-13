class Usuario {
    constructor(nome, email, idade, endereco) {
      this.nome = nome;
      this.email = email;
      this.idade = idade;
      this.endereco = endereco;
    }
  
    // Método para converter o objeto em JSON
    toJson() {
      return JSON.stringify(this);
    }
  }
  
  // Crie um novo objeto usuário
  const usuario1 = new Usuario("Cleber", "cleber@live.it", 38, {
    rua: "Rua Rui Barbosa",
    numero: 123,
    bairro: "Centro",
    cidade: "Presidente Prudente",
    estado: "SP",
    cep: "01234-5678",
  });
  
  // Converta o objeto em JSON
  const usuarioJson = usuario1.toJson();
  
  console.log(usuarioJson);