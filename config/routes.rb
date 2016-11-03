Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'events#index'

  resources :events
  resources :todos

  devise_for :users
end
