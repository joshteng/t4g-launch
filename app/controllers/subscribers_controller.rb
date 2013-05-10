class SubscribersController < ApplicationController

  def new
    @subscriber = Subscriber.new
  end 

  def create
    @subscriber = Subscriber.new(params[:subscriber])
    respond_to do |format|
      if @subscriber.save
        format.html
        format.json { render json:  [ "Thanks! We will notify you as soon as we're ready!" ] }
      else
        format.html
        format.json { render json: @subscriber.errors.full_messages }
      end 
    end
  end


end