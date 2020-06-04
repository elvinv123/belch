class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.float :rating, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :business_id, null: false

      t.timestamps
    end
    add_index :reviews, :author_id, unique: true
    add_index :reviews, :business_id
  end
end
