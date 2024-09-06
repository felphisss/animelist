// FUNÇÃO BUSCAR
function buscar() {
    let section = document.getElementById("resultados-busca")

    let resultados = ""

    for (let anime of animes) {
        resultados += `
        <div class="item-resultado">
            <h2>
                ${anime.nome}
            </h2>
            <p class="descricao-meta">${anime.sinopse}</p>
            <a href=${anime.linkMyAnimeList} target="_blank">Veja mais</a>
        </div>
    `
    }
    section.innerHTML = resultados
}

// FUNÇÃO LANÇAMENTO
function lancamentoAnimes() {
    let sessao = document.getElementById("box-lancamento")

    let varAnimeLancamento = ""

    for (let animeLancamento of animesLancamento) {
        varAnimeLancamento += `
    <a href="${animeLancamento.link}" target="_blank">
    <img src="${animeLancamento.imagem}" alt="${animeLancamento.nome}" data-title="${animeLancamento.nome}">
    </a>
`
    }
    sessao.innerHTML = varAnimeLancamento
}

// FUNÇÃO DE TODOS OS ANIMES
function todosAnimes() {
    let section = document.getElementById("todos-animes")

    let resultados = ""

    for (let anime of animes) {
        resultados += `
        <div class="item-resultado">
            <h2>
                ${anime.nome}
            </h2>
            <p class="descricao-meta">${anime.sinopse}</p>
            <a href=${anime.linkMyAnimeList} target="_blank">Veja mais</a>
        </div>
    `
    }
    section.innerHTML = resultados
}

// Adicionar o tooltip para as imagens dos animes em lançamento
const images = document.querySelectorAll('.box-lancamento img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = image.dataset.title;
        document.body.appendChild(tooltip);

        // Posiciona o tooltip de acordo com a posição do mouse
        tooltip.style.left = image.getBoundingClientRect().left + 'px';
        tooltip.style.top = image.getBoundingClientRect().top - 20 + 'px';

        tooltip.style.opacity = 1;
    });

    image.addEventListener('mouseout', () => {
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.remove();
        });
    });
});

// Organização das páginas
let lancamentosBtn = document.getElementById('lancamentos');
let animesBtn = document.getElementById('animes');
let sugestoesBtn = document.getElementById('sugestoes');
let buscarBtn = document.getElementById('buscar');
let lancamentosSection = document.getElementById('lancamentos-section');
let animesSection = document.getElementById('animes-section');
let sugestoesSection = document.getElementById('sugestoes-section');
let buscarSection = document.getElementById('buscar-section');

// Função para mostrar uma seção e esconder as outras
function showSection(sectionId) {
    lancamentosSection.style.display = 'none';
    animesSection.style.display = 'none';
    sugestoesSection.style.display = 'none';
    buscarSection.style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar a seção de lançamentos por padrão ao carregar a página
showSection('lancamentos-section');

// Event listeners para os botões
lancamentosBtn.addEventListener('click', () => {
    lancamentoAnimes();
    showSection('lancamentos-section');
});

animesBtn.addEventListener('click', () => {
    todosAnimes();
    showSection('animes-section');
});

sugestoesBtn.addEventListener('click', () => {
    showSection('sugestoes-section');
});

buscarBtn.addEventListener('click', () => {
    buscar();
    showSection('buscar-section');
});
