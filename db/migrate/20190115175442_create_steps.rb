class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.references :resolution
      t.text :title
      t.datetime :completed_at

      t.timestamps
    end
  end
end
