class CreateCategoriesBusiness < ActiveRecord::Migration[5.2]
  def change
    create_table :categories_businesses do |t|
      t.integer :category_id, null: false
      t.integer :business_id, null: false
    end
    add_index :categories_businesses, :category_id
    add_index :categories_businesses, :business_id
  end
end
