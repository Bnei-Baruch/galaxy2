class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def breakdown
    render json: User.all.group_by {|u| u.category}
  end
end