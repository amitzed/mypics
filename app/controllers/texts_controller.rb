class TextsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # get index (all)
    def index
      render json: Text.all
    end

    # get one (by id)
    def show
      render json: Text.find(params["id"])
    end

    # create just the text
    def create
      render json: Text.create(params["text"])
    end

    # create a text with staff
    def createWithStaff
      created_location = Text.create(params["text"])
      if params["id"]
        updated_image = Image.setText(params["id"], created_location)
      end
      render json: created_location
    end

    # delete one (by id)
    def delete
      render json: Text.delete(params["id"])
    end

    # update one (by id)
    def update
      render json: Text.update(params["id"], params["text"])
    end

end
