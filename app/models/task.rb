class Task < ActiveRecord::Base
  belongs_to :user
  validates :goal, :start_date, :end_date, :user, presence: true

  has_attached_file :instruction, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/missing.jpg"
  do_not_validate_attachment_file_type :instruction

  def instruction_url
    instruction.url(:thumb)
  end
end