class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :content
      t.datetime :due_date
      t.integer :executor_id

      t.timestamps
    end
  end
end
