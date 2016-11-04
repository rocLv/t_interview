Rails.application.routes.draw do

  # get 'hello_world', to: 'hello_world#index'
  root 'events#index'

  resources :events

  resources :projects do
    resources :todos
  end

  resources :teams do
    resources :projects
  end


  devise_for :users
end
