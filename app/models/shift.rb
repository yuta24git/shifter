class Shift < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category

  has_many :user_shifts
  has_many :users, through: :user_shifts
end
