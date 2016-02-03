class PubSubController < FayeRails::Controller
  channel '/' do
    subscribe do
      puts "Received on channel #{channel}: #{message.inspect}"
    end
    monitor :subscribe do
      pry.binding
      puts "Client #{client_id} subscribed to #{channel}."
    end
    monitor :unsubscribe do
      puts "Client #{client_id} unsubscribed from #{channel}."
    end
    monitor :publish do
      puts "Client #{client_id} published #{data.inspect} to #{channel}."
    end
  end
end
