class Event < ApplicationRecord
  belongs_to :user, foreign_key: :from_id

  has_many :todos
end
