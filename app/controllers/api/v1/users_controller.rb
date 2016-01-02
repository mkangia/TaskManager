class Api::V1::UsersController < ApplicationController
  def index
    render json: { users: User.all.to_a }
  end

  def create
    user = User.new(permitted_user_params)
    if user.save
      render json: { user: user, success: true}, status: 200
    else
      render json: { user: user, success: false, error: "Could not update because #{user.errors.full_messages.to_sentence}"}, status: 400
    end
  end

  def update
    user = User.find(params['id'])
    if user.update_attributes(permitted_user_params)
      render json: { user: user, success: true}, status: 200
    else
      render json: { user: user, success: false, error: 'Could not update because'}, status: 400
    end
  end

  private
    def permitted_user_params
      params.permit(:firstname, :lastname, :phone, :gender, :email, :active)
    end
end
