class Resolution < ApplicationRecord

	def is_completed
    completed_at.present?
  end

end
