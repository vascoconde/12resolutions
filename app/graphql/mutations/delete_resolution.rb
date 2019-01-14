class Mutations::DeleteResolution < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true

  # return type from the mutation
  #type Types::ResolutionType

  field :resolution, Types::ResolutionType, null: true
  field :errors, [String], null: false

  def resolve(id:)
    resolution = Resolution.find(id)
    if resolution.destroy
      # Successful destruction, return the object with no errors
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
