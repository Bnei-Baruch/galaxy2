module Rest
  class ShidurStateController < ApplicationController
    include DeviseTokenAuth::Concerns::SetUserByToken
    before_filter :authenticate_user!

    def index
      render json: ShidurState.first.state
    end

    def create
      state = ShidurState.first
      state.state = params
      state.save!

      render json: {}
    end

  end
end
