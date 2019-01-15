class AddCompletedAtToResolution < ActiveRecord::Migration[5.2]
  def change
    add_column :resolutions, :completed_at, :datetime
  end
end
