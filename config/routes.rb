Rails.application.routes.draw do

  resources :resolutions

  root 'resolutions#index'

end
