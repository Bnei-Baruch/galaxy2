module Rest
  class ApplicationController < ActionController::Base
    include DeviseTokenAuth::Concerns::SetUserByToken

    respond_to :json

    before_action :configure_permitted_parameters, if: :devise_controller?

    before_filter :always_json
    before_filter :set_access_control_headers

    protected

    def always_json
      params[:format] = 'json'
    end

    def set_access_control_headers
      headers['Access-Control-Allow-Origin'] = '*.kbb1.com'
      headers['Access-Control-Request-Method'] = 'GET, OPTIONS, HEAD'
      headers['Access-Control-Allow-Headers'] = 'x-requested-with, Content-Type, Authorization'
    end

    def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
        devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:login, :username, :email, :password, :remember_me, :session, :format) }
        devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :current_password) }
    end

  end
end
