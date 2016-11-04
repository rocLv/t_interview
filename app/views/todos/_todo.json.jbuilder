json.extract! todo, :id, :title, :content, :due_date, :executor_id, :created_at, :updated_at
json.url todo_url(todo, format: :json)