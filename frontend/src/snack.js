class Snack {

    constructor(snack, snackAttributes) {
        this.id = snack.id
        this.name = snackAttributes.name
        this.category = snackAttributes.category
        this.beginning_iventory = snackAttributes.beginning_iventory
        this.ending_inventory = snackAttributes.ending_inventory
        this.price = snackAttributes.price
        this.profit = snackAttributes.profit

        Snack.all.push(this)
    }
}


Snack.all = [];