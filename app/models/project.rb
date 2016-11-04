class Project < ApplicationRecord
  belongs_to :team
  has_many :todos
  has_and_belongs_to_many :users, join_table: :users_projects
end
