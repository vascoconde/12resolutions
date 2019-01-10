class ResolutionsController < ApplicationController
  def index
  	@resolutions = Resolution.all
  end

  def create
  	@resolutions = Resolution.all
  end

  private
  def contribution_params
    params.require(:resolution).permit(:title, :description, :banner)
  end
end
