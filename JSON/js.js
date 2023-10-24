/*Metódo GET usando a API Fetch*/
fetch("http://localhost:3000/noticias")
                .then((response) => response.json())
                .then((json) => console.log(json));

/* solicitação POST em JavaScript usando API Fetch */
fetch("http://localhost:3000/noticias", {
  method: "POST",
  body: JSON.stringify({
    titulo: "API Fetch",
    conteudo: "Conhecendo a API Fetch",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then((response) => response.json())
.then((json) => console.log(json));
              