Rails.application.routes.draw do
  root 'events#index'

  resources :events
  resources :todos

  devise_for :users
end
