const personagensList = document.getElementById('personagensList')
const loadMoreButton = document.getElementById('loadMore')
let page = 1
let id = 1


function convertPersonToList(personagem) {
    return `
    <li id="${personagem.id}" class="personagem ${personagem.status}">
        <span class="species">#0${personagem.id}</span>
        <span class="name">${personagem.name}</span>

        <div class="details">
            <ol class="types">
                <li class="status">Status: ${personagem.status}</li>
                <li class="status">Gender: ${personagem.gender}</li>
            </ol>
            <a id="imgid" href="javascript:void(0)">
                <img id="${personagem.id}" src="${personagem.image}" onclick="storePersonIdAndNavigate(${personagem.id})" alt="${personagem.name}"  srcset="">
            </a>
            
        </div>
    </li>
    `
}

function loadPersoItems(page) {
    persoApi.getPersonagens(page).then((personagemList = []) => {
        const newHtml = personagemList.map(convertPersonToList).join('')
        personagensList.innerHTML += newHtml
    })
}

function storePersonIdAndNavigate(id) {
    window.location.href = `./assets/person/index.html?id=${id}`;
}

loadPersoItems(page) 

loadMoreButton.addEventListener('click', () => {
    page += 1
    loadPersoItems(page)
})


