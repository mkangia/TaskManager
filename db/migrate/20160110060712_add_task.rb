class AddTask < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task
      t.references :user
      t.date :start_date
      t.date :end_date
      t.boolean :completed, default: false
    end
  end
end
