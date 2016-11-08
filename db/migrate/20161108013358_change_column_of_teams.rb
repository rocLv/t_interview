class ChangeColumnOfTeams < ActiveRecord::Migration[5.0]
  def change
    remove_column :teams, :projects_id, :integer
    remove_column :teams, :users_id, :integer

    add_column :teams, :project_id, :integer
  end
end
