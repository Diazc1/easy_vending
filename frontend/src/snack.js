class Snack {

    constructor(snack, snackAttributes) {
        
        this.id = snack.id
        this.name = snackAttributes.name
        this.category = snackAttributes.category
        this.beginning_inventory = snackAttributes.beginning_inventory
        this.ending_inventory = snackAttributes.ending_inventory
        this.price = snackAttributes.price
        this.profit = snackAttributes.profit
        this.location = snackAttributes.vending_machine.location

        Snack.all.push(this)
    }

    renderSnackCard() {

        return `
            <div class="container">
            <div data-id=${this.id}>
            <h3>${this.location}</h3>
            Snack Name: <p>${this.name}</p>
            Category: <p>${this.category}</p>
            Beginning Inventory: <p>${this.beginning_inventory}</p>
            Ending Inventory: <p>${this.ending_inventory}</p>
            Price: <p>${this.price}</p>
            Profit: <p>${this.profit}</p>
            <button data-id=${this.id}>edit</button>
            </div>
            </div>
            <br><br>`;
    } 

}


Snack.all = [];