class HomeController < ApplicationController

  def index
    if current_user and current_user.admin?
      redirect_to admin_root_path
    else
      redirect_to '/app'
    end
  end
end