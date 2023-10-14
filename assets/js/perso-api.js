const persoApi = {}

persoApi.getPersonagens = (page) => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error))
}

persoApi.getPersonagemById = (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

