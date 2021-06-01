class VendingMachineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location
  has_many :snacks
end
