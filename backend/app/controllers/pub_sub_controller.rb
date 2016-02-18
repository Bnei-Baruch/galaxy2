# API documentation for faye-rails: https://github.com/jamesotron/faye-rails

class PubSubController < FayeRails::Controller
  # FayeRails monitoring doesn't handle disconnects, handling with Faye server instead
  FayeRails::server.on(:disconnect) do |client_id|
      puts "Client #{client_id} disconnected from server."
  end

  channel '/auth' do
    subscribe do
      puts "Received on channel #{channel}: #{message.inspect}"
    end
    monitor :publish do
      puts "Client #{client_id} published #{data.inspect} to #{channel}."
    end
  end
end
