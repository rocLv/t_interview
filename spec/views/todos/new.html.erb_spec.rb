require 'rails_helper'

RSpec.describe "todos/new", type: :view do
  before(:each) do
    assign(:todo, Todo.new(
      :title => "MyString",
      :content => "MyString",
      :executor_id => 1
    ))
  end

  it "renders new todo form" do
    render

    assert_select "form[action=?][method=?]", todos_path, "post" do

      assert_select "input#todo_title[name=?]", "todo[title]"

      assert_select "input#todo_content[name=?]", "todo[content]"

      assert_select "input#todo_executor_id[name=?]", "todo[executor_id]"
    end
  end
end
