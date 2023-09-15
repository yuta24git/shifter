class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '事業所検診' },
    { id: 3, name: '特定検診' },
    { id: 4, name: '特老' },
    { id: 5, name: 'がん検診' },
    { id: 6, name: '設営' }
  ]
  include ActiveHash::Associations
  has_many :shift
end
