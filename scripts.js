// Função para adicionar tarefa
function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value // Pega o valor do input

    // Verifica se o input não está vazio
    if (valorDoInput.trim() === "") return;

    let li = document.createElement("li") // Cria um elemento li
    li.innerHTML = valorDoInput // Adiciona o valor do input dentro do li

    // Criar o botão de remover
    let span = document.createElement("span")
    span.innerHTML = "Remover"
    span.style.cursor = "pointer"
    span.style.color = "red"
    span.style.marginLeft = "10px"
    span.style.fontWeight = "bold"

    // Adiciona evento de clique para apagar o item
    span.onclick = function () {
        apagarTarefa(this);
    }

    // Adiciona o span dentro do li
    li.appendChild(span)

    document.querySelector('ul').appendChild(li) // Adiciona o li dentro da ul

    document.querySelector("input").value = "" // Limpa o input
}

// Função para apagar tarefa
function apagarTarefa(elemento) {
    // Encontra o elemento pai (li) e o remove
    let item = elemento.parentElement;
    item.remove();
}


// Adicionar hora e data atual quando adicionar tarefa 

let data = new Date() // Pega a data atual
let hora = data.getHours() // Pega a hora atual

// criar um elemento h3
let h3 = document.createElement("h3")
document.getElementById('hd').appendChild(h3)

// Adicionar a hora e data no h3
h3.innerHTML = `Data: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} Hora: ${hora}:${data.getMinutes()}`

// Adcionar quanto o usuário clicar no botão enter do teclado
inputBox = document.querySelector("input") // Seleciona o input
inputBox.addEventListener("keyup", function (event) { // Adicona um evento no teclado
    if (event.keyCode === 13) { // Se o código da tecla for 13 (Enter)
        adicionarTarefa() // Chama a função adicionarTarefa
    }
})

