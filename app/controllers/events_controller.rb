class EventsController < ApplicationController
  def index
    events_days = current_user.events
                  .select('Date(created_at)')
                  .distinct
                  .pluck('Date(created_at)')

    @events = events_days.reverse.map do |date|
                current_user.events
                  .where('Date(created_at) == ?', date)
                  .order(created_at: 'DESC')
                  .page(params[:page])
                  .as_json(methods: :action,
                           include: {from: {only: [:id, :name]},
                                     todo: {include: {project:
                                              {include: :team}}}})
               end
  end
end
