let nome = document.getElementById("nome");
let email = document.getElementById("email");
let celular = document.getElementById("celular");
let data = document.getElementById("data");
let sv = document.getElementById("sv");
let lk = document.getElementById("lk");
let git = document.getElementById("git");
let ps = document.getElementById("ps");

function validar(){
    if(nome.value == ''){
        alert("Campo Nome em branco");
    }
    else if(email.value == ''){
        alert("Campo E-mail em branco");
    }
    else if(celular.value == ''){
        alert("Campo Celular em branco");
    }
    else if(data.value == ''){
        alert("Campo Data em branco");
    }
    else if(sv.value == ''){
        alert("Campo Sobre você em branco");
    }
    else if(lk.value == ''){
        alert("Campo Linkedin em branco");
    }
    else if(git.value == ''){
        alert("Campo Github em branco");
    }
    else if(ps.value == ''){
        alert("Campo Pretenção Salarial em branco");
    }else{
        alert("Enviado com sucesso!!");
    }
}