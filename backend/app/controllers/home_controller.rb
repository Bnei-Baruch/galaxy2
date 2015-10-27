class HomeController < ApplicationController

  def index
     if admin_signed_in?
       redirect_to rails_admin.dashboard_path
     else
       redirect_to '/api/sign_in'
     end
  end
end