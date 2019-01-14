class Mutations::CreateResolution < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :title, String, required: true
  argument :description, String, required: false

  # return type from the mutation
  #type Types::ResolutionType

  field :resolution, Types::ResolutionType, null: true
  field :errors, [String], null: false

  def resolve(title:, description:)
    resolution = Resolution.new(title: title, description: description)
    if resolution.save
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
