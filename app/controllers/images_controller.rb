class ImagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Image.all
  end

  # get one (by id)
  def show
    render json: Image.find(params["id"])
  end

  # create one
  def createOne
    render json: Image.create(params["image"])
  end

  # create a image for a text
  def createForText
    #takes the :id for the text and converts it to text_id for image
    if params["id"]
        params["image"]["text_id"] = params["id"].to_i
    end
    render json: Image.create(params["image"])
  end

  # delete one (by id)
  def delete
    render json: Image.delete(params["id"])
  end

  # update one (by id)
  def update
    render json: Image.update(params["id"], params["image"])
  end

end
