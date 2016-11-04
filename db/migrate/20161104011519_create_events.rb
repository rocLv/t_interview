class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.references :from, foreign_key: true
      t.string :main
      t.string :head
      t.string :actor
      t.integer :actions
      t.string :text
      t.references :project, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
