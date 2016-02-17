class TokenValidationsController < DeviseTokenAuth::TokenValidationsController

  def validate_token
    # @resource will have been set by set_user_by_token concern
    if @resource
      if @resource[:logged_in]
        puts 'failed'
        render json: {
          success: false,
          errors: ["You have already logged in from another place, please logout from there and try again <3"]
        }, status: 401
      else
        puts 'succeeded'
        render_validate_token_success
      end
    else
      render_validate_token_error
    end
  end
end
