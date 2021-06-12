class VendingMachine < ApplicationRecord
    has_many :snacks
    validates :location, presence: true 
end
