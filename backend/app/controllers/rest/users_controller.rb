module Rest
  class UsersController < ApplicationController
    # TODO: enable auth once it's fixed
    # before_action :authenticate_user!
    # before_action :admin_only, :except => :show

    def index
      render json: User.all
    end

    def show
      render json: User.find(params[:id])
    end

  end
end

