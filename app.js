// app.js

// FUNÇÃO BUSCAR
// Esta função realiza uma busca por animes
function buscar() {
    // Obtém o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-busca")

    // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Verifica se o usuário digitou algum termo de pesquisa
    if (!campoPesquisa) {
        // Se não digitou, exibe uma mensagem informando que nada foi encontrado
        section.innerHTML = `
        <div class="item-resultado">
        <div class="informacoes-anime">
            <h2>
                Nada foi encontrado.
            </h2>
            <p class="descricao-meta">Para iniciar sua busca, digite o nome do anime no campo indicado.</p>
        </div>
    </div>
    `
        return; // Encerra a função
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da busca
    let resultados = "";

    // Itera sobre cada anime da lista
    for (let anime of animes) {
        if (anime.nome.toLowerCase().includes(campoPesquisa) || anime.nomeAlternativo.toLowerCase().includes(campoPesquisa)) {
            // Se encontrar uma correspondência, adiciona o anime aos resultados
            resultados += `
            <div class="item-resultado">
                <img src="${anime.imagem}" alt="${anime.nome}" class="imagem-anime">
                <div class="informacoes-anime">
                    <h2>
                        ${anime.nome}
                    </h2>
                    <p class="descricao-meta">${anime.sinopse}</p>
                    <a href=${anime.linkMyAnimeList} target="_blank">Veja mais</a>
                </div>
            </div>
        `;
        }
    }
    
    // Verifica se foram encontrados resultados
    if(!resultados) {
        // Se não houver resultados, exibe uma mensagem informando que o anime não foi encontrado
        resultados = section.innerHTML = `
            <div class="item-resultado">
                <div class="informacoes-anime">
                    <h2>
                        Não foi possível encontrar esse anime
                    </h2>
                    <p class="descricao-meta">Parece que esse anime ainda não faz parte da nossa coleção.</p>
                    <p class="descricao-meta">Ajude-nos a torná-la ainda mais completa! Envie-nos uma sugestão para adicionarmos esse título.</p>
                    <p class="descricao-meta">Juntos, podemos construir uma plataforma com tudo o que você gosta de assistir.</p>
                </div>
            </div>
        `
    }

    // Se houve resultados, exibirá os animes encontrados
    section.innerHTML = resultados
}


// FUNÇÃO LANÇAMENTO
// Essa função exibe todos os animes que estiverem na lista dos lançamentos
function lancamentoAnimes() {
    // Obtém a seção HTML onde os lançamentos serão exibidos
    let sessao = document.getElementById("box-lancamento")

    // Inicializa uma string vazia para armazenar o HTML dos lançamentos
    let varAnimeLancamento = ""

    // Itera sobre cada anime da lista de lançamentos
    for (let animeLancamento of animesLancamento) {
        // Cria um link para o anime, incluindo a imagem e um atributo data-title para o tooltip
        varAnimeLancamento += `
            <a href="${animeLancamento.link}" target="_blank">
            <img src="${animeLancamento.imagem}" alt="${animeLancamento.nome}" data-title="${animeLancamento.nome}">
            </a>
        `
    }

    // Atribui o HTML gerado à seção, substituindo o conteúdo anterior
    sessao.innerHTML = varAnimeLancamento
}


// FUNÇÃO TODOS OS ANIMES
// Função para exibir todos os animes
function todosAnimes() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("todos-animes")

    // Inicializa uma string vazia para armazenar o HTML dos animes
    let resultados = ""

    // Itera sobre cada anime da lista completa de animes
    for (let anime of animes) {
        // Cria um elemento HTML para cada anime, incluindo imagem, título, sinopse e link
        resultados += `
        <div class="item-resultado">
            <img src="${anime.imagem}" alt="${anime.nome}" class="imagem-anime">
            <div class="informacoes-anime">
                <h2>
                    ${anime.nome}
                </h2>
                <p class="descricao-meta">${anime.sinopse}</p>
                <a href=${anime.linkMyAnimeList} target="_blank">Veja mais</a>
            </div>
        </div>
    `
    }

    // Atribui o HTML gerado à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados
}


// ** TOOLTIP ABAIXO NÃO ESTÁ FUNCIONANDO **
// Já tentei várias soluções, mas não consegui fazer esse feature voltar a funcionar
// Não tenho certeza em que momento ele deixou de rodar, mas eu acho q foi quando inclui a parte da **ORGANIZAÇÃO DE PÁGINAS**
// Caso você consiga fazer essa tooltip funcionar, compartilhe comigo a solução, por favor.

// Adicionar o tooltip para as imagens dos animes em lançamento

// Seleciona todas as imagens dentro da classe "box-lancamento"
let images = document.querySelectorAll('.box-lancamento img');

// Percorre cada imagem selecionada
images.forEach(image => {
    // Adiciona um event listener para o evento "mouseover" (quando o mouse passa por cima)
    image.addEventListener('mouseover', () => {
        // Cria um elemento HTML para o tooltip
        let tooltip = document.createElement('div');

        // Adiciona a classe CSS "tooltip" ao elemento criado
        tooltip.classList.add('tooltip');

        // Define o texto do tooltip usando o atributo "data-title" da imagem
        tooltip.textContent = image.dataset.title;

        // Adiciona o tooltip ao corpo da página (document.body)
        document.body.appendChild(tooltip);

        // Posiciona o tooltip de acordo com a posição do mouse
        // Calcula a posição do tooltip baseado na posição da imagem
        tooltip.style.left = image.getBoundingClientRect().left + 'px'; // Define a posição horizontal do tooltip
        tooltip.style.top = image.getBoundingClientRect().top - 20 + 'px'; // Define a posição vertical do tooltip (20px acima da imagem)

        // Define a opacidade do tooltip para 1 (totalmente visível)
        tooltip.style.opacity = 1;
    });

    // Adiciona um event listener para o evento "mouseout" (quando o mouse sai de cima)
    image.addEventListener('mouseout', () => {
        // Seleciona todos os elementos com a classe "tooltip"
        document.querySelectorAll('.tooltip').forEach(tooltip => { // Percorre cada tooltip selecionado e remove-o da página
            tooltip.remove();
        });
    });
});


// **Organização das páginas**
// Seleciona os botões e seções correspondentes às diferentes partes da página
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
    // Esconde todas as seções
    lancamentosSection.style.display = 'none';
    animesSection.style.display = 'none';
    sugestoesSection.style.display = 'none';
    buscarSection.style.display = 'none';
    // Mostra a seção específica com base no ID passado como parâmetro
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar a seção de lançamentos por padrão ao carregar a página
showSection('lancamentos-section');

// **Event listeners para os botões**
// Quando um botão é clicado, a função correspondente é chamada e a seção correspondente é exibida
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
