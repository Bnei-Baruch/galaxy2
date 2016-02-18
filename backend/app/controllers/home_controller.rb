class HomeController < ApplicationController

  def index
    redirect_to rails_admin_path
  end
end
