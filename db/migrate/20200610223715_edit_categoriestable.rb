class EditCategoriestable < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :restaurants
    remove_column :categories, :nightlife
    remove_column :categories, :grocery
    remove_column :categories, :desserts
    remove_column :categories, :takeout

    add_column :categories, :name, :string, null: false
  end
end
