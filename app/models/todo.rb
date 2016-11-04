class Todo < ApplicationRecord
  belongs_to :project

  has_many :events
end
