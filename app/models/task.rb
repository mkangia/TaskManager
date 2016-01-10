class Task < ActiveRecord::Base
  belongs_to :user
  validates :goal, :start_date, :end_date, :user, presence: true
end