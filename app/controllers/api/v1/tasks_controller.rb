class Api::V1::TasksController < ApplicationController
  def index
    render json: { tasks: Task.all.to_a }
  end

  def show
    render json: { task: Task.find(params[:id]) }
  end

  def create
    task = Task.new(permitted_task_params)
    if task.save
      render json: { task: task, success: true}, status: 200
    else
      render json: { task: task, success: false, error: "Could not create because #{task.errors.full_messages.to_sentence}"}, status: 400
    end
  end

  def update
    task = Task.find(params['id'])
    if task.update_attributes(permitted_task_params)
      render json: { task: task, success: true}, status: 200
    else
      render json: { task: task, success: false, error: "Could not update because #{task.errors.full_messages.to_sentence}"}, status: 400
    end
  end

  private
    def permitted_task_params
      params.permit(:user_id, :goal, :start_date, :end_date, :completed)
    end
end
