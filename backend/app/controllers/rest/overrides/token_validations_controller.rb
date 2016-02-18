module Rest
  module Overrides
    class TokenValidationsController < DeviseTokenAuth::TokenValidationsController

      def validate_token
        if @resource and @resource[:logged_in]
          puts 'failed'
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
