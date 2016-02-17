# API documentation for faye-rails: https://github.com/jamesotron/faye-rails

class PubSubController < FayeRails::Controller
  logged_in_users = []

  channel '/auth' do
    subscribe do
      puts "Received on channel #{channel}: #{message.inspect}"
    end
    monitor :unsubscribe do
      puts "Client #{client_id} unsubscribed from #{channel}."
    end
    monitor :publish do
      puts "Client #{client_id} published #{data.inspect} to #{channel}."
    end
  end
end
