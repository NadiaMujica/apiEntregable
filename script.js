"use strict"
let url = "https://rickandmortyapi.com/api/character";

async function mostrarData() {
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.results);
        data.results.forEach(element => {
            document.getElementById("container").innerHTML += `
        <div class="card">
            <img src="${element.image}" alt="imagen">
            <h2>${element.name}</h2>
            <h3>${element.status}</h3>
            <h4>${element.species}</h4>
        </div>`
        });
    } catch (err) {
        alert("Error al cargar los personajes");
    }

};

mostrarData();