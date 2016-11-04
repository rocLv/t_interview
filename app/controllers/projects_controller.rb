class ProjectsController < ApplicationController

  def index
    @projecs = Team.find(params[:team_id]).projects
  end

  def new
    @project = Team.find(params[:team_id]).projects.build
  end

  def create
    @project = Team.find(params[:team_id]).projects.build(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to team_project_url(params[:team_id], @project.id), notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
  end

  private

    def project_params
      params.require(:project).permit(:name)
    end
end
