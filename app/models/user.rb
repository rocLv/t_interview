class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :team

  has_many :events, foreign_key: :from_id
  has_and_belongs_to_many :projects, join_table: :users_projects

end
