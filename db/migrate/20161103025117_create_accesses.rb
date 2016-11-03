class CreateAccesses < ActiveRecord::Migration[5.0]
  def change
    create_table :accesses do |t|
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
