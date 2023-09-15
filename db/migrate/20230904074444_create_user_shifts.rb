class CreateUserShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_shifts do |t|
      t.references :user
      t.references :shift
      t.references :role
      t.timestamps
    end
  end
end
