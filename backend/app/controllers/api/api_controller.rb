class API::ApiController < ActionController::Metal
  include ActionController::Helpers
  include ActionController::Redirecting
  include ActionController::Rendering
  include ActionController::Renderers::All
  include ActionController::RackDelegation
  include ActionController::MimeResponds
  include ActionController::ImplicitRender
  include AbstractController::Callbacks
  ActiveSupport.run_load_hooks(:action_controller, self)

  respond_to :json

  before_filter :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = 'GET, OPTIONS, HEAD'
    headers['Access-Control-Allow-Headers'] = 'x-requested-with, Content-Type, Authorization'
  end

  def default_serializer_options
    {
        root: false
    }
  end

  def cache_key(params)
    Digest::SHA1.hexdigest(params.sort.flatten.join('_'))
  end

  def render_from_cache(params, expires_in = 30.minutes)
    if Rails.env.production?
      options = nil
      options = {expires_in: expires_in} if expires_in
      res = Rails.cache.fetch(cache_key(params), options, &Proc.new)
    else
      res = yield
    end
    respond_to do |format|
      format.json { render text: res, layout: false}
    end
  end
end