class Api::CacheController < API::ApiController

  def clear
    Rails.cache.clear
    respond_to do |format|
      format.all { render text: 'success', layout: false}
    end
  end

end