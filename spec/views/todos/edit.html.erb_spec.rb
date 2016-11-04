require 'rails_helper'

RSpec.describe "todos/edit", type: :view do
  before(:each) do
    @todo = assign(:todo, Todo.create!(
      :title => "MyString",
      :content => "MyString",
      :executor_id => 1
    ))
  end

  it "renders the edit todo form" do
    render

    assert_select "form[action=?][method=?]", todo_path(@todo), "post" do

      assert_select "input#todo_title[name=?]", "todo[title]"

      assert_select "input#todo_content[name=?]", "todo[content]"

      assert_select "input#todo_executor_id[name=?]", "todo[executor_id]"
    end
  end
end
