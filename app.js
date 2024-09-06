function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

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




