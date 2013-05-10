class CreateSubscribers < ActiveRecord::Migration
  def change
    create_table :subscribers do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
    add_index :subscribers, :email
  end
end
