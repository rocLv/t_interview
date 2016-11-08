# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team = Team.create(name: "Tower")

user = team.users.create( name: 'Jason',
                          email: 'roc@g.cn',
                          password: '123123',
                          password_confirmation: '123123' )

projects = team.projects.create([{ name: 'laomalaila' }, { name: 'tower' }])

todos = projects.map do |project|
          project.todos.create(title: 'todo 1', content: 'todo content 1')
        end

todos.each do |todo|
  5.times do |i|
    Event.create( from_id:    user.id,
                  project_id: todo.project.id,
                  actions: rand(5),
                  team_id: team.id,
                  todo_id: todo.id )
  end
end

