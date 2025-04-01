// Classe Contato
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(event, form) {

    // Coletando os dados
    const nome = form.nome.value;
    const sobrenome = form.sobrenome.value;
    const email = form.email.value;
    const cpf = form.cpf.value;
    const telefone = form.telefone.value;
    const contato = form.contato.value;

    // Verifique se os dados estão sendo coletados corretamente
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("Telefone:", telefone);
    console.log("Contato:", contato);

    // Criando um objeto Contato com os dados
    let data = new Contato(nome, sobrenome, email, cpf, telefone, contato);

    event.preventDefault(); // Previne o recarregamento da pagina do formulário

    // Chama a função Enviar
    Enviar(nome);
}

function Enviar(nome) {
    if (nome == "") {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Obrigado ' + nome + ', os seus dados foram encaminhados com sucesso!');
    }
}
