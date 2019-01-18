class Mutations::UpdateResolution < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true
  argument :title, String, required: false
  argument :description, String, required: false

  # return type from the mutation
  #type Types::ResolutionType

  field :resolution, Types::ResolutionType, null: true
  field :errors, [String], null: false

  def resolve(params = {})
    resolution = Resolution.find(params[:id])
    if resolution.update(params)
      # Successful creation, return the created object with no errors
      {
        resolution: resolution,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        resolution: resolution,
        errors: resolution.errors.full_messages
      }
    end
  end

end
