class EventsController < ApplicationController
  def index
    @evens = current_user.events.page(params[:page])
  end
end
