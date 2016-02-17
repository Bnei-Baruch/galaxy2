class HomeController < ApplicationController

  def index
    if current_user and current_user.admin?
      redirect_to rails_admin_path
    else
      redirect_to '/galaxy2'
    end
  end
end
