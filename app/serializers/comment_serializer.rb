class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :article_id, :comment
  belongs_to :user
end
