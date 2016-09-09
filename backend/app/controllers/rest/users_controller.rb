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

    def update
      user = User.find(params[:id])
      user.update!(channel: params[:channel])
      render json: user
    end

  end
end

