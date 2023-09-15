Rails.application.routes.draw do
  devise_for :users
  resources :shifts, only: %i[index new create edit]
  resources :roles
  get '/user_roles', to: 'roles#user_roles'
  get '/role_select', to: 'roles#role_select'
  get '/user_select', to: 'shifts#user_select'
  get '/shift_data', to: 'shifts#shift_data'
  root to: 'shifts#index'
end
