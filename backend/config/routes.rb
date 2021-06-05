Rails.application.routes.draw do
  # resources :snacks
  resources :vending_machines
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :snacks, only: [:index]
    end
  end

end
