class AddLoginAndTitleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :login, :string
    add_column :users, :title, :string
    add_index :users, :login, unique: true
  end
end
