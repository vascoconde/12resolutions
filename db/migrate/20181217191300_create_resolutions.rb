class CreateResolutions < ActiveRecord::Migration[5.2]
  def change
    create_table :resolutions do |t|
      t.string :title
      t.text :description
      t.string :banner

      t.timestamps
    end
  end
end
