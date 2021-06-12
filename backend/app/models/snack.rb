class Snack < ApplicationRecord
  belongs_to :vending_machine

  validates :name, :category, :beginning_inventory, :ending_inventory, :price, :profit, presence: true
end