class AddTodoIdToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :todo_id, :integer
  end
end
