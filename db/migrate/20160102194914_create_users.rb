class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :gender
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
