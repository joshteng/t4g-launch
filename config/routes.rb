LaunchPage::Application.routes.draw do
  root :to => 'subscribers#new'
  resources :subscribers, only: [:create]
end
