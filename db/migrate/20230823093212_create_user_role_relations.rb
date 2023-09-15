class CreateUserRoleRelations < ActiveRecord::Migration[7.0]
  def change
    create_table :user_role_relations do |t|
      t.references :user, foreign_key: true
      t.references :role, foreign_key: true
      t.timestamps
    end
  end
end
