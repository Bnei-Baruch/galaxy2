class CreateShidurStates < ActiveRecord::Migration
  def change
    create_table :shidur_states do |t|
      t.string :state

      t.timestamps null: false
    end
  end
end
