class RemoveProjectIdFromTeams < ActiveRecord::Migration[5.0]
  def change
    remove_column :teams, :project_id, :integer
  end
end
