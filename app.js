// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = document.getElementById('listaAmigos');
const arrayAmigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value;
    if (!amigo || amigo.trim() === ''){
        alert("ERROR. Ingrese un nombre valido");
        inputAmigo.value = "";
    } else{
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
        arrayAmigos.push(amigo);
        inputAmigo.value = "";
    }
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    if (arrayAmigos.length === 0) {
        alert('ERROR. No tiene amigos en la lista');
    } else{
        const indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
        resultado.textContent = arrayAmigos[indiceAleatorio];
    }
}