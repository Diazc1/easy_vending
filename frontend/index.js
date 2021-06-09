const endPoint = "http://localhost:3000/api/v1/snacks"

document.addEventListener('DOMContentLoaded', () => {
    getSnacks()

    const createSnackForm = document.querySelector("#create-snack-form")

    createSnackForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getSnacks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(snacks => {
        snacks.data.forEach(snack => {


            const snackMarkup = `
            <div data-id=${snack.id}>
            <h3>${snack.attributes.vending_machine.location} (${snack.attributes.vending_machine.id})</h3>
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


function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector("#input-name").value
    const categoryInput = document.querySelector("#input-category").value
    const beginning_inventoryInput = document.querySelector("#input-beginning_inventory").value
    const ending_inventoryInput = document.querySelector("#input-ending_inventory").value
    const priceInput = document.querySelector("#input-price").value
    const profitInput = document.querySelector("#input-profit").value
    const vending_machineID = parseInt(document.querySelector("#vending_machines").value)

    postFetch(nameInput, categoryInput, beginning_inventoryInput, ending_inventoryInput, priceInput, profitInput, vending_machineID)
}

function postFetch(name, category, beginning_inventory, ending_inventory, price, profit, vending_machine_id) {
    console.log(name, category, beginning_inventory, ending_inventory, price, profit, vending_machine_id)

}



