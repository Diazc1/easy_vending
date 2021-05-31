# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


hospital = VendingMachine.create(location: "Hospital")
mechanic_shop = VendingMachine.create(location: "Mechanic Shop")
office = VendingMachine.create(location: "Office")
high_school = VendingMachine.create(location: "High School")
university = VendingMachine.create(location: "University")



Snack.create([
    {name: "Snickers Bar", category: "Chocolates", beginning_inventory: 12 , ending_inventory: 5 , price: 1 , profit: 7, vending_machine_id: hospital.id},
    {name: "Flamin' Hot Cheetos", category: "Chips", beginning_inventory: 12 , ending_inventory: 8 , price: 0.50 , profit: 2, vending_machine_id: hospital.id},
    {name: "Reese's Peanut Butter Cups", category: "Chocolates", beginning_inventory: 12 , ending_inventory: 2 , price: 1 , profit: 10, vending_machine_id: office.id},
    {name: "Miss Vickie's Jalapeno", category: "Chips", beginning_inventory: 12 , ending_inventory: 6 , price: 1.25 , profit: 7.50, vending_machine_id: university.id},
    {name: "Planters Spicy Nuts & Cajun Sticks Trail Mix", category: "Nuts", beginning_inventory: 12 , ending_inventory: 1 , price: 0.75 , profit: 8.25, vending_machine_id: high_school.id},
    {name: "Bon Appetit Blueberry Muffin", category: "Bread", beginning_inventory: 12 , ending_inventory: 3 , price: 1.50 , profit: 13.50, vending_machine_id: mechanic_shop.id},
    {name: "Crunchy Cheetos", category: "Chips", beginning_inventory: 12 , ending_inventory: 5 , price: 0.50 , profit: 3.50, vending_machine_id: hospital.id}
])

