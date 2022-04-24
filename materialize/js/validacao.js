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

    else if(frmreset.sexo[0].checked == '' || frmreset.sexo[0].checked == null  ){
        alert("Campo Sexo em branco");
    }

    else if(frmreset.areaatuacao[0].checked == '' || frmreset.areaatuacao[0].checked == null  ){
        alert("Campo Área de atuação em branco");
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

/*
if(frm.sexo.value == "" || frm.txt_endereco.value == null ||
frm.txt_endereco.value.length < 3) {
 // Exibiremos um alerta, caso o campo esteja vazio.
 alert("Por favor, informe o seu endereço.");


 escolhaSexo = -1;
 for (x = frm.sexo.length -1; x > -1; x--) {

    if(frm.rdo_sexo[x].checked) {
        escolhaSexo = x;
    }
 }
   if(escolhaSexo == -1) {
    alert("Qual o seu sexo?");
    frm.sexo[0].focus();
    return false;
   }
}

*/
