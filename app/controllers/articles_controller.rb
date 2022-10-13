class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_article_not_found

  def index 
    render json: Article.all 
  end 

  def show 
    article = find_article 
    render json: article, status: :ok
  end 
  
  def create 
    article = Article.create!(article_params)
    render json: article, status: :created 
  end

  def destroy 
    article = find_article 
    article.destroy 
    head :no_content 
  end

  def update 
    article = find_article 
    article.update!(article_params)
    render json: article, status: :accepted
  end

  private 
  def find_article 
    Article.find_by(id: params[:id])
  end

  def article_params 
    params.permit(:user_id, :title, :topic, :story, :time) 
  end

  def render_article_not_found 
    render json: {error: "Article not found"}, status: :not_found
  end

end
