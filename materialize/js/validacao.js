let nome = document.getElementById("nome");
let snome = document.getElementById("snome");
let idade = document.getElementById("idade");
let email = document.getElementById("email");
let sexo = document.getElementById("sexo");
let pais = document.getElementById("pais");
let lingp = document.getElementById("lingp");
let areaatuacao1 = document.getElementById("areaatuacao1");
let areaatuacao2 = document.getElementById("areaatuacao2");
let areaatuacao3 = document.getElementById("areaatuacao3");
let arquivoInput = document.getElementById("arquivo");

function validar(){



    if(nome.value == ''){
        alert("Campo Nome em branco");
        return false;
    }
    else if(snome.value == ''){
        alert("Campo Sobrenome em branco");
        return false;
    }
    else if(idade.value == ''){
        alert("Campo Idade em branco");
        return false;
    }
    else if(email.value == ''){
        alert("Campo E-mail em branco");
        return false;
    }

    else if(frmreset.sexo[0].checked == '' && frmreset.sexo[1].checked == ''){
        alert("Campo Sexo em branco");
        return false;
    }
    

    else if(arquivoInput.value == ''){
        alert("Campo imagem em branco");
        return false;
    }
   

    else if(pais.value == ''){
        alert("Campo Pais em branco");
        return false;
    }
    
    else if(lingp.value == ''){
        alert("Campo Linguagens Preferenciais em branco");
        return false;
    }
    

    else if(frmreset.areaatuacao1.checked == '' && frmreset.areaatuacao2.checked == '' && frmreset.areaatuacao3.checked == '' ){
        alert("Campo Área de atuação em branco");
        return false;
    }
    


    else{       
        alert("Enviado com sucesso!!");
        return true;
    }      
    
}

