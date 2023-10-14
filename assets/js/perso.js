const personagensAttrib = document.getElementById('personagensAttrib')
let id = 1
const idPerson = getParameterByName('id');

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function convertPersonAttrib(personagem) {
    return `
    <li class="personagem ${personagem.status}">
        <span class="name">${personagem.name}</span>
        
        <div class="details">
            <img id="img-avatar" src="${personagem.image}" alt="${personagem.name}" srcset="">
        </div>

        <li class="personagem atributes">
            <span class="atrib">Attributes</span>
            <div class="details">
                <ol class="types">
                    <li class="status">ID: 0${personagem.id}</li>
                    <li class="status">Status: ${personagem.status}</li>
                    <li class="status">Gender: ${personagem.gender}</li>
                    <li class="status">Species: ${personagem.species}</li>
                    <li class="status">Origin: ${personagem.origin.name}</li>
                    <li class="status">Location: ${personagem.location.name}</li>
                </ol>
            </div>
        </li>
    </li>
    `
}

function storePersonIdAndNavigate(id) {
    window.location.href = `./assets/person/index.html?id=${id}`;
}

if(idPerson && personagensAttrib) {
    loadPersonAttrib(idPerson);
}

function loadPersonAttrib(id) {
    persoApi.getPersonagemById(id).then((personagem) => {
        const newHtml = convertPersonAttrib(personagem); 
        personagensAttrib.innerHTML = newHtml; 
    });
}

loadPersonAttrib(idPerson)



