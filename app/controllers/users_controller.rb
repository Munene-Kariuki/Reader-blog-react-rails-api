class UsersController < ApplicationController

  skip_before_action :authorize, only: :create 
  #Create new user(signup)
  def create 
    user = User.create!(user_params) 
    session[:user_id] = user.id 
    render json: user, status: :created 
  end 

  def show 
    render json: @current_user
  end

  private 
  def user_params 
    params.permit(:username, :profile_image, :password, :password_confirmation) 
  end
end
