class AddLoggedInAndFayeClientIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :logged_in, :boolean, :default => false
    add_column :users, :faye_client_id, :string
  end
end
