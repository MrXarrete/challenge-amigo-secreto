// Lista de nomes
let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome === '') {
        alert('Digite um nome válido.');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Atualiza a lista exibida na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
    // Limpa o resultado anterior
    document.getElementById('resultado').innerHTML = '';
}

// Sorteia um amigo da lista
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];
    let item = document.createElement('li');
    item.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultado.appendChild(item);
}
