class EventsController < ApplicationController
  def index
    events = current_user.events.page(params[:page])
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

    @projects = current_user.team.projects.select(:id, :name).as_json
    @members  = current_user.team.users.select(:id, :name).as_json

  end
end
