class Role < ApplicationRecord
  has_many :user_role_relations
  has_many :users, through: :user_role_relations

  validates :tag_name, uniqueness: true
end
