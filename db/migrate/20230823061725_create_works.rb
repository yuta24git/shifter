class CreateWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :works do |t|
      t.integer :category_id
      t.integer :role_id
      t.integer :people_id
      t.timestamps
    end
  end
end
