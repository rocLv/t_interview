class EventsController < ApplicationController
  def index
    if params[:projects].present?
      unless params[:projects].include? "0"
        events = current_user.team
                             .events
                             .where(project_id: params[:projects])
                             .page(params[:page])
      end
    else
      events = current_user.team.events.page(params[:page])
    end

    unless events.nil?
      events_days = events.select('Date(created_at)')
                          .distinct
                          .pluck('Date(created_at)')

      @events = events_days.sort.reverse.map do |date|
                   events.where('Date(created_at) == ?', date)
                         .order(created_at: 'DESC')
                         .as_json(methods: :action,
                           include: {from: {only: [:id, :name]},
                                     todo: {include: {project:
                                              {include: :team}}}})
               end

    end

    @projects = [{ id: 0, name: '所有项目和日历' }]
    @projects << current_user.team.projects.select(:id, :name).as_json
    @projects.flatten!

    @members = [{ id: 0, name: '所有成员' }]
    @members << current_user.team.users.select(:id, :name).as_json
    @members.flatten!

  end
end
