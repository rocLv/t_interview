class Event < ApplicationRecord
  belongs_to :user, foreign_key: :from_id
  belongs_to :project

  paginates_per 50
end
