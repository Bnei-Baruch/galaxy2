module Rest
  class ApplicationController < ActionController::Base
    include DeviseTokenAuth::Concerns::SetUserByToken

    respond_to :json

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

  end
end
