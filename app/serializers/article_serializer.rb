class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :topic, :story, :time, :created_at
  has_many :comments
  belongs_to :user
end
