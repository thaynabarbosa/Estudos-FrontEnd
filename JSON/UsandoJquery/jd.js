$.get("http://localhost:3000/noticias", function(data, status){
    for (i = 0; i < data.length; i++) {
        $('#news').append("<ul><li>" + data[i].titulo + " - " + data[i].conteudo  + "</li></ul>");
    }
}); 

