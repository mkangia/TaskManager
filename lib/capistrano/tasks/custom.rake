namespace :custom do
  desc "Mention a task to run"
  task :run_task, :task_to_run do |t, args|
    unless args[:task_to_run].nil?
      puts 'task requested', args[:task_to_run]
      on roles(:all) do
        within "#{current_path}" do
          with rails_env: fetch(:stage) do
            execute :rake, args[:task_to_run]
          end
        end
      end
    else
      puts 'No Task Passed'
    end
  end

  desc "tail specified or rails under logs" 
  task :tail_rails, :tail_file do |t, args|
    args.with_defaults(tail_file: fetch(:rails_env))
    on roles(:app) do
      execute "tail -f #{shared_path}/log/#{args[:tail_file]}.log"
    end
  end
end