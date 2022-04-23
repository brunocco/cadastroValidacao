let nome = document.getElementById("nome");
let snome = document.getElementById("snome");
let idade = document.getElementById("idade");
let email = document.getElementById("email");
let sexo = document.getElementById("sexo");
let pais = document.getElementById("pais");
let lingp = document.getElementById("lingp");
let areaatuacao = document.getElementById("areaatuacao");

function validar(){
    if(nome.value == ''){
        alert("Campo Nome em branco");
    }
    else if(snome.value == ''){
        alert("Campo Sobrenome em branco");
    }
    else if(idade.value == ''){
        alert("Campo Idade em branco");
    }
    else if(email.value == ''){
        alert("Campo E-mail em branco");
    }

    else if(sexo.value == ''){
        alert("Campo Sexo em branco");
    }
    else if(pais.value == ''){
        alert("Campo Pais em branco");
    }
    else if(lingp.value == ''){
        alert("Campo Linguagens Preferenciais em branco");
    }
    else if(areaatuacao.value == '' ){
        alert("Campo Áreas de Atuação em branco");
    }
    else{
        alert("Enviado com sucesso!!");
    }
}

