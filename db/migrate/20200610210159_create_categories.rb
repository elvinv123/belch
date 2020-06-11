class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :restaurants, null: false
      t.string :nightlife, null: false
      t.string :desserts, null: false
      t.string :takeout, null: false
      t.string :grocery, null: false
    end
  end
end
