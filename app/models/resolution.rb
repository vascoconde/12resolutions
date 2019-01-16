class Resolution < ApplicationRecord
  has_many :steps

	def is_completed
    completed_at.present?
  end
end
