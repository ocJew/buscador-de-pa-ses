const formulario = document.getElementById("paisForms");
const botaoBuscar = document.getElementById("buscarPais");
const divUsuario = document.getElementById("usuario");
const campoPais = document.getElementById("nomePais");
const resertar = document.getElementById("limpar");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
});

botaoBuscar.addEventListener("click", () => {
    const apiURL = `https://restcountries.com/v3.1/name/${campoPais.value}`

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados");
            }
            return response.json();
        })
        .then(data => {
            const usuario = data[0];
            divUsuario.innerHTML = `
                <h2> ${usuario.name.common} </h2>
                <p> Capital: ${usuario.capital} </p>
                <p> População: ${usuario.population} </p>
                <p> Região: ${usuario.region} </p>
                <img src = ${usuario.flags.png}>
            `;
        })
        .catch(error => {
            divUsuario.innerHTML = `<p style="color: red;"> Digite o nome corretamente </p>`;
        })
});

resertar.addEventListener("click", () => {
    divUsuario.innerHTML = ``;
    campoPais.value = "";
});