class ShidurState < ActiveRecord::Base
  store :state, accessors: [ :janus ], coder: JSON
end
