
//class contato

class Contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.cpf = cpf
        this.telefone = telefone
        this.contato = contato
    }

}

function Post(form){
    const nome = form.nome.value;
    const sobrenome = form.nome.value;
    const email = form.email.value;
    const cpf = form.cpf.value;
    const telefone = form.telefone.value;
    const contato = form.contato.value;

    let data = new Contato(nome, sobrenome, email, cpf, telefone, contato);

    Enviar(nome)

    Event.preventDefault();
}

function Enviar(nome) {

    let nome = document.getElementById("nome").value;

    if (nome.value == "") {
       alert('Por favor, preencha todos os campos!');
       return;
    
    }else{
       alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }
  
}