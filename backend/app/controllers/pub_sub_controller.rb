# API documentation for faye-rails: https://github.com/jamesotron/faye-rails

class PubSubController < FayeRails::Controller
  FayeRails::server.on(:disconnect) do |client_id|
      puts "Client #{client_id} disconnected from server."

      user = User.find_by_faye_client_id client_id
      user.update_attribute(:logged_in, false)
  end

  channel '/auth' do
    subscribe do
      puts "Received on channel #{channel}: #{message.inspect}"
    end
    monitor :publish do
      puts "Client #{client_id} published #{data.inspect} to #{channel}."

      user = User.find_by_login data['login']

      case data['message']
      when 'login'
        user.update_attributes(:logged_in => true, :faye_client_id => client_id)
      when 'logout'
        user.update_attribute(:logged_in, false)
      end
    end
  end
end
