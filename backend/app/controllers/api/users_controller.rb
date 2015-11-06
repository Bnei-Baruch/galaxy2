class Api::UsersController < ApplicationController

  def index
    render json: User.all.map { |u| u.as_json(only: [:_id, :channel], methods: :login) }
  end

  def show
    render json: User.find(params[:id])
  end

  def breakdown
    render json: User.all
                     .group_by { |u| u.channel }
                     .map { |c, u| [c, u.map(&:login)] }
                     .to_h
  end
end