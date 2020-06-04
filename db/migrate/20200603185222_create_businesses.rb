class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :price_range, null: false
      t.string :address, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.string :phone_number, null: false
      t.string :hours, null: false
      t.string :website, null: false

      t.timestamps
    end
    add_index :businesses, :name, unique: true
  end
end
