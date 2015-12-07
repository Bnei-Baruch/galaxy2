Rails.application.routes.draw do

  # standard devise routes available at /users
  # NOTE: make sure this comes first!!!
  devise_for :users, skip: :registrations

  # REST api routes
  namespace :rest do
    mount_devise_token_auth_for 'User', at: 'auth', skip: [:registrations, :passwords, :confirmations]
    resources :users, only: [:show, :index]
  end

  # Admin interface routes
  namespace :admin do
    # We reveal the admin paths only for signed in users with admin role
    authenticate :user, lambda {|u| u.role == 'admin' } do
      DashboardManifest::DASHBOARDS.each do |dashboard_resource|
        resources dashboard_resource
      end
      root controller: DashboardManifest::ROOT_DASHBOARD, action: :index
    end
  end

  root to: 'home#index'
end
