module Rest
  module Overrides
    class SessionsController < DeviseTokenAuth::SessionsController
      @logged_in = Hash.new {}

      def valid_params?(key, val)
        if @resource and @resource[:logged_in]
          @logged_in[@resource[:login]] = true
          false
        else
          puts 'super'
          super(key, val)
        end
      end

      def render_create_error_bad_credentials
        pry.binding
        if @logged_in[@resource[:login]]
          render json: {
            success: false,
            errors: ["You have already logged in from another place, please logout from there and try again <3"]
          }, status: 401
        else
          super
        end
      end
    end
  end
end
