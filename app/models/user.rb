class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_role_relations
  has_many :roles, through: :user_role_relations

  has_many :user_shifts
  has_many :shifts, through: :user_shifts
end
