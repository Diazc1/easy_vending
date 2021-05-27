class CreateSnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :snacks do |t|
      t.string :name
      t.string :category
      t.integer :beginning_inventory
      t.integer :ending_inventory
      t.decimal :price
      t.decimal :profit
      t.belongs_to :vending_machine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
