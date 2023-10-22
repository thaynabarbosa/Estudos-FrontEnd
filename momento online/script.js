function atualizarConteudo(){
    let input = document.getElementById('inscricao');
    let texto = input.value;

    if(texto.startsWith("1234") == true){
        document.getElementById('identificador').innerHTML = "Inscrição Estadual";
    }
    else if(texto.startsWith("4321") == true){
        document.getElementById('identificador').innerHTML = "Inscrição Municipal";
    }
    else{
        document.getElementById('identificador').innerHTML = "";
    }
}

function enviar(){
    let input = document.querySelector('input[name = "verifica_aluno"]:checked');
    let texto = input.value;

    if(texto == "Sim"){
        
    }
}