Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do 
    resources :users, only: :update

    resources :cats do
      resources :notes 
    end

  end
end


