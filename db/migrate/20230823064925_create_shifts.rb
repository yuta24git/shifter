class CreateShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.string :title
      t.integer :price_id
      t.date :shift_date, null: false
      t.timestamps
    end
  end
end


