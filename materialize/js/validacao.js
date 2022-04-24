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

    else if(frmreset.sexo[0].checked == '' && frmreset.sexo[1].checked == ''){
        alert("Campo Sexo em branco");
    }

    else if(arquivoInput.value == ''){
        alert("Campo imagem em branco");
    }

    else if(pais.value == ''){
        alert("Campo Pais em branco");
    }
    else if(lingp.value == ''){
        alert("Campo Linguagens Preferenciais em branco");
    }

    else if(frmreset.areaatuacao1.checked == '' && frmreset.areaatuacao2.checked == '' && frmreset.areaatuacao3.checked == '' ){
        alert("Campo Área de atuação em branco");
    }


    else{
        alert("Enviado com sucesso!!");
    }
}




/* -validar tamanho, tipo e prevew de arquivo-

function validarArquivo(){
    var arquivoInput = document.getElementById('arquivo');
    var caminhoArquivo = arquivoInput.value;
    var extensoesPermitidas = /(.jpg|.jpeg|.png)$/i;
    if(!extensoesPermitidas.exec(caminhoArquivo)){
        alert('Por favor envie um arquivo que tenha as extensões.jpeg/.jpg/.png');
        arquivoInput.value = '';
        return false;
    }else{
        if (arquivoInput.files && arquivoInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('visualizarImagem').innerHTML = '';
            };
            reader.readAsDataURL(arquivoInput.files[0]);
 console.log(arquivoInput.files[0].size / 1024 / 1024);
 console.log(arquivoInput.files[0].size);
 if (arquivoInput.files[0].size > 2097152) { 
                alert("Tamanho do arquivo deve ser 2 MB!");
                return false;
            }
        }
    }
}
*/
