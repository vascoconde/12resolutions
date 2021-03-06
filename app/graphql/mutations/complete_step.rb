class Mutations::CompleteStep < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true
  argument :completed, Boolean, required: true

  # return type from the mutation
  #type Types::ResolutionType

  field :step, Types::StepType, null: true
  field :errors, [String], null: false

  def resolve(id:, completed:)
    step = Step.find(id)
    if completed
      step.completed_at = DateTime.now.utc
    else
      step.completed_at = nil
    end
    if step.save
      # Successful save, return the object with no errors
      {
        resolution: step,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        resolution: step,
        errors: step.errors.full_messages
      }
    end
  end

end