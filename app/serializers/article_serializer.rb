class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :topic, :story, :time
end
