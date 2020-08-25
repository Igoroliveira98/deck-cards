async function getCards() {
    try{
        const response = await fetch("http://localhost:4567/");

        const dataCards = await response.json();

        console.log(dataCards)

        showCards(dataCards)

    }catch(error) {
        console.error(error);
    }

}

getCards()

function showCards(datas) {
    output = "";
    let btn = document.querySelector(".btn");

    for(data of datas) {
        output += `
            <div class="card">
                <img src="${data.image}" alt="card">
                <h2>${data.suit}</h2>
                <p>Value: ${data.value}<p>
            </div>
        `
    }

    btn.addEventListener("click", e => {
            e.preventDefault()
            document.querySelector(".cards").innerHTML = output
    })


}