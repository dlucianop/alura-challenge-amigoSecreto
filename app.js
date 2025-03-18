// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (!amigo || amigo.trim() === ''){
        alert("ERROR. Ingrese un nombre valido");
    } else{
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){

}