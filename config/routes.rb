Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # =================================================
    #             ROUTES FOR IMAGE MODEL
    # =================================================
    get '/images', to: 'images#index'
    get '/images/:id', to: 'images#show'
    # create just a image, no text
    post '/images', to: 'images#createOne'
    # create a image to a specific text
    post '/texts/:id/staff', to: 'images#createForText'
    delete '/images/:id', to: 'images#delete'
    put '/images/:id', to: 'images#update'



    # =================================================
    #             ROUTES FOR TEXTS MODEL
    # =================================================
    get '/texts', to: 'texts#index'
    get '/texts/:id', to: 'texts#show'
    # create just a text, no staff
    post '/texts', to: 'texts#create'
    post '/images/:id/text', to: 'texts#createWithStaff'
    delete '/texts/:id', to: 'texts#delete'
    put '/texts/:id', to: 'texts#update'


end
