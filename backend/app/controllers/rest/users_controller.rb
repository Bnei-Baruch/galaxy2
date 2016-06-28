module Rest
  class UsersController < ApplicationController
    include DeviseTokenAuth::Concerns::SetUserByToken
    before_filter :authenticate_user!

    def index
      render json: User.all
    end

    def show
      render json: User.find(params[:id])
    end

    def edit
      user = User.find(params[:id])

      user.channel = params[:channel]
      user.save!

      render json: {}
    end

  end
end

