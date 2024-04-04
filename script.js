// Este script é apenas para fins de exemplo, não é necessário para o efeito de transição.

const botao = document.getElementById('contatoentre');
const botao2 = document.getElementById('project');

botao.addEventListener('mouseover', () => {
  botao.style.transform = 'scale(1.2)';
  botao2.style.transition = '.2s'
});

botao.addEventListener('mouseout', () => {
  botao.style.transform = 'scale(1)';
  botao2.style.transition = '.2s'
});

// Textos a serem exibidos
const textos = ["front-end", "back-end"];

// Função para simular a máquina de escrever
function maquinaEscrever(texto, elemento, velocidade, callback) {
    let index = 0;
    const interval = setInterval(function() {
        elemento.textContent += texto[index++];
        if (index === texto.length) {
            clearInterval(interval);
            if (callback) {
                setTimeout(callback, 1000); // Tempo de espera após a escrita completa antes de chamar o callback
            }
        }
    }, velocidade);
}

// Função para simular a máquina de apagar
function maquinaApagar(elemento, velocidade, callback) {
    const texto = elemento.textContent;
    let index = texto.length;
    const interval = setInterval(function() {
        elemento.textContent = texto.slice(0, index--);
        if (index < 0) {
            clearInterval(interval);
            if (callback) {
                setTimeout(callback, 1000); // Tempo de espera após a exclusão completa antes de chamar o callback
            }
        }
    }, velocidade); // Diminui a velocidade de apagar letras
}

// Seleciona o elemento span dentro do h6
const spanTexto = document.querySelector('#estudanteh6 span');

// Loop para alternar entre os textos
function loopDeEscrita() {
    let index = 0;
    function escreverTexto() {
        maquinaEscrever(textos[index], spanTexto, 100, function() {
            maquinaApagar(spanTexto, 80, function() { // Diminui a velocidade de apagar letras
                index = (index + 1) % textos.length;
                escreverTexto();
            });
        });
    }
    escreverTexto();
}

// Inicia o loop de escrita
loopDeEscrita();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Função para lidar com o evento de clique no ícone SVG com id="menumob"
function handleSobreClick() {
    // Selecionando a <nav> 
    var menumob = document.getElementById('MENUmobi');
    var elementos = document.getElementById('menumob');
    var iconesmexer = document.getElementById('movericon');
    // Definindo a largura como 100% para exibir o elemento
    menumob.style.height = '3.5%';
    elementos.style.display = 'none';
    iconesmexer.style.animation = 'descer ease-in-out 0.35s';
    iconesmexer.style.marginTop = '2rem';
}   

// Função para lidar com o evento de clique no ícone SVG com id="fecharmenu"
function handleSobreClickFechar() {
    // Selecionando a <nav>
    var menumob = document.getElementById('MENUmobi');
    var elementos = document.getElementById('menumob');
    var iconesmexer = document.getElementById('movericon');

    // Definindo a altura como 0% para esconder o elemento
    menumob.style.height = '0%';
    iconesmexer.style.animation = 'subir ease-in-out 0.35s';
    iconesmexer.style.marginTop = '';

    // Aguarde meio segundo antes de alterar a propriedade display para 'flex'
    setTimeout(() => {
        elementos.style.display = 'flex';
    }, 100);
}


// Função para lidar com o evento de clique no link <a> com id="btmob"

// Adicionando ouvinte de evento ao carregar o DOM para exibir o menu
document.addEventListener('DOMContentLoaded', function() {
    var sobreIcon = document.getElementById('menumob');
    sobreIcon.addEventListener('click', handleSobreClick);
});

// Adicionando ouvinte de evento ao carregar o DOM para fechar o menu
document.addEventListener('DOMContentLoaded', function() {
    var fecharIcon = document.getElementById('fecharmenu');
    fecharIcon.addEventListener('click', handleSobreClickFechar);
});

// Adicionando ouvinte de evento ao carregar o DOM para fechar o menu
document.addEventListener('DOMContentLoaded', function() {
    var fecharIcon = document.getElementById('fecharmenu2');
    fecharIcon.addEventListener('click', handleSobreClickFechar);
});
