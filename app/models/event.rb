class Event < ApplicationRecord
  belongs_to :from, class_name: "User", foreign_key: "from_id"
  belongs_to :todo

  paginates_per 50

  def action
    %w(创建了任务 删除了任务 完成了任务 分派了任务 重新分派了任务 修改了任务到期 评论了任务).at(actions)
  end
end
