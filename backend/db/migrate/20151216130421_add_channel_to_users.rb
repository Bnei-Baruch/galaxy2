class AddChannelToUsers < ActiveRecord::Migration
  def change
    add_column :users, :channel, :integer
  end
end
