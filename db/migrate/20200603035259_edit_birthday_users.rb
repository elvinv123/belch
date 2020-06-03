class EditBirthdayUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :birthDay,   true
    change_column_null :users, :birthMonth, true
    change_column_null :users, :birthYear, true
  end
end
