Rails.application.routes.draw do

  # standard devise routes available at /users
  # NOTE: make sure this comes first!!!
  devise_for :users, skip: :registrations

  # REST api routes
  namespace :rest, defaults: {format: :json} do
    mount_devise_token_auth_for 'User', at: 'auth', skip: [:registrations, :passwords, :confirmations]
    resources :users, only: [:show, :index]
    resources :shidur_state
  end

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root to: 'home#index'
end
