class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column  :users, :birthDay, :string, null: false
    add_column  :users, :birthMonth, :string, null: false
    add_column  :users, :birthYear, :string, null: false
  end
end
