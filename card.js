const placement = document.querySelector('#output')
let fullUrl

const element = document.querySelector('#click-button')
element.addEventListener('click', async () => {
    fullUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'

    await getApi()

    document.querySelector('#inputField').value = ''
})

async function getApi() {
    await fetch (fullUrl)
        .then(res => res.json())
        .then(data => {
            placement.innerHTML = ''
            const img = document.createElement('img');
            img.setAttribute('src', data.cards[0].images.png)
            placement.appendChild(img)
            console.log(img.innerHTML)
            // li.innerHTML = data.cards[0].images.svg;
        })
        .catch(err => console.log(err))
}