namespace :custom do
  desc "Mention a task to run"
  task :run_task, [:task_to_run, :another_task_to_run] => :environment do |t, args|
    puts User
    #[:task_to_run]
    # on roles(:app) do
    #   within "#{current_path}" do
    #     with rails_env: fetch(:stage) do
    #       execute :rake, args[:task_to_run]
    #     end
    #   end
    # end
  end
end