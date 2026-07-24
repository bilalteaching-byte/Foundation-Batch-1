

let result = document.getElementById("result")

let renderCards = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            result.innerHTML = ""
            console.log(data)
            data.forEach((product) => {
                let card = `<div class="product_card">
            <img src=${product.image} height = "200" width = "200" />
            <h3>${product.title}</h3>
            <h3>${product.price}</h3>
            </div>`

                result.innerHTML += card
            })
        });
}

renderCards()