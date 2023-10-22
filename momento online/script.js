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
        document.getElementById("identificador_locacao").style.display = "block";
        document.getElementById("conteudo").style.display = "none";

        let livro = document.getElementById ("livro_select").options[document.getElementById("livro_select").selectedIndex].text;
        document.getElementById('livro').innerHTML = "Livro: " + livro;
        document.getElementById('prazo').innerHTML = "Prazo de devolução: 10 dias";
        document.getElementById('num_inscricao').innerHTML = "Número de inscrição: " + document.getElementById('inscricao').value;
    }

    if(texto == "Não"){
        document.getElementById("identificador_locacao").style.display = "block";
        document.getElementById("conteudo").style.display = "none";

        let livro = document.getElementById ("livro_select").options[document.getElementById("livro_select").selectedIndex].text;
        document.getElementById('livro').innerHTML = "Livro: " + livro;
        document.getElementById('prazo').innerHTML = "Prazo de devolução: 7 dias";
        document.getElementById('num_inscricao').innerHTML = "Número de inscrição: " + document.getElementById('inscricao').value;
    }
}