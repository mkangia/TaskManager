class SessionsController < ApplicationController
  def new
    session[:user_id] = nil
  end

  def create
    user = User.find_by(email: params[:email], password: params[:password])
    session[:user_id] = user.id if user
    if user
      flash[:notice] = 'Awesome!! Signed In Successfully'
      redirect_to dashboard_path
    else
      flash[:error] = 'Failed!! Recheck Email and Password'
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = 'Moved Out'
    redirect_to login_path
  end
end