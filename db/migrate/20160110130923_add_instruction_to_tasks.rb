class AddInstructionToTasks < ActiveRecord::Migration
  def up
    add_attachment :tasks, :instruction
  end

  def down
    remove_attachment :tasks, :instruction
  end
end
