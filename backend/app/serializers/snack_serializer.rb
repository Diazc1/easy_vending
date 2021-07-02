class SnackSerializer
  
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :beginning_inventory, :ending_inventory, :price, :profit, :vending_machine_id, :vending_machine

end
