const endPoint = "http://localhost:3000/api/v1/snacks"

document.addEventListener('DOMContentLoaded', () => {
    //fetch and load snacks
    getSnacks()

    //event listener and handler for create sylabus form
    const createSnackForm = document.querySelector("#create-snack-form")
    createSnackForm.addEventListener("submit", (e) => createFormHandler(e))

})


// make request to the endpoint and then render data to DOM 
function getSnacks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(snacks => {
        snacks.data.forEach(snack => {

            let newSnack = new Snack(snack, snack.attributes)

            document.querySelector('#snack-container').innerHTML += newSnack.renderSnackCard()

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
    const vending_machineId = parseInt(document.querySelector("#vending_machines").value)

    postFetch(nameInput, categoryInput, beginning_inventoryInput, ending_inventoryInput, priceInput, profitInput, vending_machineId)
}


function postFetch(name, category, beginning_inventory, ending_inventory, price, profit, vending_machine_id) {
    const bodyData = {name, category, beginning_inventory, ending_inventory, price, profit, vending_machine_id}
    
    fetch(endPoint, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(snack => {
    
        const snackData = snack.data


        let newSnack = new Snack(snackData, snackData.attributes)

        document.querySelector('#snack-container').innerHTML += newSnack.renderSnackCard()

    }) 
}



