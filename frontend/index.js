const endPoint = "http://localhost:3000/api/v1/snacks"

document.addEventListener('DOMContentLoaded', () => {
    getSnacks()
})

function getSnacks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(snacks => {
        snacks.data.forEach(snack => {


            const snackMarkup = `
            <div data-id=${snack.id}>
            <h3>${snack.attributes.vending_machine.location}</h3>
            Snack Name: <p>${snack.attributes.name}</p>
            Category: <p>${snack.attributes.category}</p>
            Beginning Inventory: <p>${snack.attributes.beginning_inventory}</p>
            Ending Inventory: <p>${snack.attributes.ending_inventory}</p>
            Price: <p>${snack.attributes.price}</p>
            Profit: <p>${snack.attributes.profit}</p>
            <button data-id=${snack.id}>edit</button>
            </div>
            <br><br>`;

            document.querySelector('#snack-container').innerHTML += snackMarkup
        })

    })
}