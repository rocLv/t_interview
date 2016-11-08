class Team < ApplicationRecord
  has_many :projects
  has_many :users
  has_many :events
end
