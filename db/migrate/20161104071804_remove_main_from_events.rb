class RemoveMainFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :main, :string
    remove_column :events, :head, :string
    remove_column :events, :actor, :string
    remove_column :events, :text, :string
    remove_column :events, :project_id, :integer
  end
end
