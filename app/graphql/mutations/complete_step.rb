class Mutations::CompleteStep < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true
  argument :completed, Boolean, required: true

  # return type from the mutation
  #type Types::ResolutionType

  field :step, Types::ResolutionType, null: true
  field :errors, [String], null: false

  def resolve(id:, completed:)
    step = Step.find(id)
    if completed
      resolution.completed_at = DateTime.now.utc
    else
      resolution.completed_at = nil
    end
    if resolution.save
      # Successful save, return the object with no errors
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