class Step < ApplicationRecord
  belongs_to :resolution

  def is_completed
    completed_at.present?
  end
end
